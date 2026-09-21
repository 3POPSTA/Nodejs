//* Creating an HTTP Server

//  Import the HTTP Module
const http = require("http");

//  Create a server object
const server = http.createServer((request,response)=>{
    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200,{"Content-Type" : "text/plain"});
    // Send the response body as 'Hello, World!'
    response.end("Hello, world\n");
});
// Define port to listen on
const PORT = 4000;

// Start the server and listen on the specified port
server.listen(PORT,"localhost",()=>{
    console.log(`Server runnning at  http://localhost:${PORT}`);
});




