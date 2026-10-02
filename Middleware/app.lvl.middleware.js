import express from "express";
const app = express();
const port = 3000;

//Application Level Middleware
app.use((error,request,response,next)=>{
    console.log(`Time: ${Date.now()}`);
    next();
});

app.get("/",(request,response)=>{
    response.send("<h1>Homepage</h1>");
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});