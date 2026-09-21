const http = require("http");
const {URL} = require("url");
const querystring = require("querystring");


const server = http.createServer((request,response)=>{
    const baseUrl = `http://${request.headers.host}/`;
    const parsedUrl = new URL(request.url,baseUrl);

    const queryParameters = Object.fromEntries(parsedUrl.searchParams);
    const queryObject = {
        name: 'John Doe',
        age: 30,
        interests: ['programming', 'music']
    };

    const queryString = querystring.stringify(queryObject);
    response.writeHead(200,{"content-type":"application/json"});
    response.end(JSON.stringify({
        path: parsedUrl.pathname,
        queryParameters,
        exampleQueryString: queryString
    },null,2))
})

server.listen(3000,()=>{
    console.log("Running server");
})