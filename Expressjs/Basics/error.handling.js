const express = require("express");
const app = express();
const port = 8080;

app.get("/error",(request,response)=>{
    throw new Error("Something went wrong");
});

app.get("/async-error",(request,response,next)=>{
    setTimeout(()=>{
        try{
            const result = nonExistentFunction();
            response.send(result);
        }
        catch(error){
            next(error);
        }
    },100);
});

app.use((error,request,response,next)=>{
    console.error(error.stack);
    response.status(500).send("Something broke!");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})