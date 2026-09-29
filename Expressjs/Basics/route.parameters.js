const express = require("express");
const app = express();
const port = 8080;

app.get("/users/:userId/books/:booksId",(request,response)=>{
    response.send(`User ID: ${request.params.userId}, Book ID: ${request.params.booksId}`);
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});