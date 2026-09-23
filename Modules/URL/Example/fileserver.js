const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer(function(request,response){
    let q = url.parse(request.url,true);
    let filename = `.${q.pathname}`;

    fs.readFile(filename,function(error,data){
        if(error){
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("404 Page Not Found");
        }

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });
});

const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});