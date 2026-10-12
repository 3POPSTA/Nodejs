// test.js
const test = require('node:test');
const assert = require('node:assert');
const app = require("./api.key.middleware"); // Replace with your actual main file name (e.g., ./server.js)

let server;
const PORT = 3001; // Use a different port for testing so it doesn't conflict
const BASE_URL = `http://localhost:${PORT}`;

// Run before all tests: start the server
test.before(async () => {
    await new Promise((resolve) => {
        server = app.listen(PORT, resolve);
    });
});

// Run after all tests: shut down the server
test.after(async () => {
    await new Promise((resolve) => {
        server.close(resolve);
    });
});

test('1. Get data without API key returns 401 Unauthorized', async () => {
    const response = await fetch(`${BASE_URL}/api/data`);
    assert.strictEqual(response.status, 401);
    
    const data = await response.json();
    assert.strictEqual(data.error, 'API key is required');
});

test('2. Get data with invalid API key returns 403 Forbidden', async () => {
    const response = await fetch(`${BASE_URL}/api/data`, {
        headers: { 'x-api-key': 'fake-key-999' }
    });
    assert.strictEqual(response.status, 403);
    
    const data = await response.json();
    assert.strictEqual(data.error, 'Invalid API key');
});

test('3. Get data with valid API key via header returns 200 OK', async () => {
    const response = await fetch(`${BASE_URL}/api/data`, {
        headers: { 'x-api-key': 'abc123' }
    });
    assert.strictEqual(response.status, 200);
    
    const data = await response.json();
    assert.strictEqual(data.message, 'Access granted');
    assert.strictEqual(data.client, 'Mobile App');
});

test('4. Get data with valid API key via query parameter returns 200 OK', async () => {
    const response = await fetch(`${BASE_URL}/api/data?apiKey=def456`);
    assert.strictEqual(response.status, 200);
    
    const data = await response.json();
    assert.strictEqual(data.client, 'Web Client');
});

test('5. Generate a new API key returns 201 Created', async () => {
    const response = await fetch(`${BASE_URL}/api/keys`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: 'Integration Test Client', 
            permissions: ['read:data', 'write:data'] 
        })
    });
    assert.strictEqual(response.status, 201);
    
    const data = await response.json();
    assert.ok(data.apiKey, 'An API key should be returned');
    assert.strictEqual(data.apiKey.length, 32, 'Generated key should be 32 characters long');
});