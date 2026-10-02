const express = require("express");
const app = express();

//First Middleware
app.use((request,response,next)=>{
    console.log("Middleware 1: This always runs");
    next()
});

//Second Middleware
app.use((request,response,next)=>{
    console.log('Middleware 2: This also always runs');
    next();
});

//Third Middleware
app.use((request,response,next)=>{
    console.log('Middleware 3: This also always runs');
    next();
});

//Router Handler
app.get("/",(request,response)=>{
    response.send("<h1>Hello World</h1>");
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});