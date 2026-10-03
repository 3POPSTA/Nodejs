import express from "express";
const app = express();
const port = 3000;

//create a simple logger middleware
function requestLogger(request,response,next){
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${request.method} ${request.url}`);
    next();
}

// Use the middleware
app.use(requestLogger);

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});