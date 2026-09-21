const http = require("http");

const server =  http.createServer((request,response)=>{
    console.log("Request Headers: ", request.headers);

    const host = request.headers["host"];
    const connection = request.headers["connection"];

    response.writeHead(200,{"content-type": "text/plain"})
    response.end(`Host: ${host}`)
})

server.listen(3000,()=>{
    console.log(`Server Running at http://localhost:3000/ `)
});