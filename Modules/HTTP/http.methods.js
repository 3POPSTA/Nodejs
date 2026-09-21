const http = require("http");
const { URL } = require("url");

let todos = [
    {
        id: 1,
        task: "Learn Node",
        completed: false
    },
    {
        id: 2,
        task: "Build an API",
        completed: false
    },
];

const server = http.createServer((request, response) => {
    const { method, url } = request;
    
    // Fixed: Added the missing '$' and used 'request.headers.host'
    const parsedUrl = new URL(url, `http://${request.headers.host}`);
    const pathname = parsedUrl.pathname;

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (method === "OPTIONS") {
        response.writeHead(204);
        response.end();
        return;
    }

    if (method === "GET" && pathname === "/todos") {
        // Fixed: Changed response.write to response.writeHead
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(todos));
    }
    else if (method === "POST" && pathname === "/todos") {
        let body = "";

        request.on("data", chunk => {
            body += chunk.toString();
        });
        request.on("end", () => {
            try {
                const newTodo = JSON.parse(body);

                newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
                todos.push(newTodo);

                response.writeHead(201, { "Content-Type": "application/json" });
                response.end(JSON.stringify(newTodo));
            }
            catch (error) {
                response.writeHead(400, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    }
    else if (method === "PUT" && pathname.startsWith("/todos/")) {
        const id = parseInt(pathname.split("/")[2]);
        let body = "";

        request.on("data", chunk => {
            body += chunk.toString();
        });
        request.on("end", () => {
            try {
                const updatedTodo = JSON.parse(body);
                const index = todos.findIndex(t => t.id === id);

                if (index === -1) {
                    response.writeHead(404, { "Content-Type": "application/json" });
                    response.end(JSON.stringify({ error: "Todo not found" }));
                }
                else {
                    todos[index] = { ...todos[index], ...updatedTodo };
                    response.writeHead(200, { "Content-Type": "application/json" });
                    response.end(JSON.stringify(todos[index]));
                }
            }
            catch (error) {
                response.writeHead(400, { "Content-Type": "application/json" });
                response.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    }
    else if (method === "DELETE" && pathname.startsWith("/todos/")) {
        const id = parseInt(pathname.split("/")[2]);
        const index = todos.findIndex(t => t.id === id);

        if (index === -1) {
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(JSON.stringify({ error: "Todo not found" }));
        } 
        else {
            todos = todos.filter(t => t.id !== id);
            response.writeHead(204);
            response.end();
        }
    }
    else {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ error: "Not Found" }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});