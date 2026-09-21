//* Accessing the Request URL

// const http = require("http");

// const server = http.createServer((request,response)=>{
//     const {url,method} = request;

//     response.writeHead(200,{"content-type": "text/plain"});
//     response.end(`You made a ${method} request to ${url}`);
// });

// server.listen(3000,()=>{
//     console.log('Server running at http://localhost:3000/');
// });


//* Parsing URLs with the URL Module

const http = require("http");
const url = require("url");

const server = http.createServer((request,response)=>{
    const parsedUrl = url.parse(request.url,true);
    console.log(parsedUrl);

    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    response.writeHead(200,{"content-type": "application/json"});
    response.end(JSON.stringify({
        pathname,
        query,
        fullUrl: request.url
    },null,2))
})

server.listen(3000)