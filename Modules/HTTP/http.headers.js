//* Working with HTTP Headers

const http = require("http");

const server = http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type': 'text/html',
        'X-Powered-By': 'Node.js',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Set-Cookie': 'sessionid=abc123; HttpOnly'
    });
    response.end("<h1>Hello</h1>");
})

const PORT = 3000;

server.listen(3000,()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})