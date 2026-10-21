const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const path = require("node:path");
const { after, before, test } = require("node:test");
const { io: createClient } = require("socket.io-client");
const { createChatServer } = require("../app");

let io;
let server;
let baseUrl;
const clients = [];

function waitForEvent(socket, eventName) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            socket.off(eventName, onEvent);
            reject(new Error(`Timed out waiting for "${eventName}"`));
        }, 2000);

        function onEvent(data) {
            clearTimeout(timeout);
            resolve(data);
        }

        socket.once(eventName, onEvent);
    });
}

async function connectClient() {
    const client = createClient(baseUrl, {
        reconnection: false,
        timeout: 2000,
        transports: ["websocket"],
    });
    clients.push(client);

    await new Promise((resolve, reject) => {
        client.once("connect", resolve);
        client.once("connect_error", reject);
    });

    return client;
}

function waitForServer(child) {
    return new Promise((resolve, reject) => {
        let output = "";
        const timer = setTimeout(() => {
            cleanup();
            reject(new Error("Timed out waiting for the server to start."));
        }, 3000);

        function cleanup() {
            clearTimeout(timer);
            child.stdout.off("data", onOutput);
            child.off("exit", onExit);
            child.off("error", onError);
        }

        function onOutput(chunk) {
            output += chunk;
            const match = output.match(/Server running at (http:\/\/localhost:\d+)/);
            if (match) {
                cleanup();
                resolve(match[1]);
            }
        }

        function onExit(code) {
            cleanup();
            reject(new Error(`Server exited before startup with code ${code}: ${output}`));
        }

        function onError(error) {
            cleanup();
            reject(error);
        }

        child.stdout.setEncoding("utf8");
        child.stdout.on("data", onOutput);
        child.once("exit", onExit);
        child.once("error", onError);
    });
}

before(async () => {
    ({ io, server } = createChatServer());
    await new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, resolve);
    });
    baseUrl = `http://localhost:${server.address().port}`;
});

after(async () => {
    for (const client of clients) {
        client.disconnect();
    }
    await new Promise((resolve) => io.close(resolve));
});

test("serves the chat and validates and broadcasts chat events", async () => {
    const response = await fetch(baseUrl);
    assert.equal(response.status, 200);
    assert.match(await response.text(), /Simple Chat/);

    const [alice, bob] = await Promise.all([connectClient(), connectClient()]);

    const joinedEvent = waitForEvent(bob, "user joined");
    alice.emit("set username", " Alice ");
    assert.deepEqual(await joinedEvent, {
        oldUsername: "Anonymous",
        newUsername: "Alice",
    });

    const invalidUsername = waitForEvent(alice, "chat error");
    alice.emit("set username", "a".repeat(33));
    assert.match((await invalidUsername).message, /between 1 and 32/);

    const aliceMessage = waitForEvent(alice, "chat message");
    const bobMessage = waitForEvent(bob, "chat message");
    alice.emit("chat message", "  Hello, everyone!  ");

    const [messageForAlice, messageForBob] = await Promise.all([aliceMessage, bobMessage]);
    assert.deepEqual(messageForAlice, messageForBob);
    assert.equal(messageForAlice.username, "Alice");
    assert.equal(messageForAlice.message, "Hello, everyone!");
    assert.ok(Number.isFinite(Date.parse(messageForAlice.timestamp)));

    const invalidMessage = waitForEvent(alice, "chat error");
    alice.emit("chat message", { message: "not a string" });
    assert.match((await invalidMessage).message, /must be text/);

    const leftEvent = waitForEvent(bob, "user left");
    alice.disconnect();
    assert.deepEqual(await leftEvent, { username: "Alice" });
});

test("starts on the numeric TCP port supplied by PORT", async () => {
    const child = spawn(process.execPath, ["app.js"], {
        cwd: path.join(__dirname, ".."),
        env: { ...process.env, PORT: "0" },
        stdio: ["ignore", "pipe", "pipe"],
    });

    try {
        const url = await waitForServer(child);
        const response = await fetch(url);
        assert.equal(response.status, 200);
    } finally {
        if (child.exitCode === null) {
            child.kill();
            await new Promise((resolve) => child.once("exit", resolve));
        }
    }
});
