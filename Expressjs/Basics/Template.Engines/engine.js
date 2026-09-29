const express = require("express");
const app = express();
const port = 8080;

app.set("view engine","ejs");

app.set("views", "./views");

app.get("/", (request,response)=>{
    const data = {
        title: 'Express Template Example',
        message: 'Hello from EJS!',
        items: ['Item 1', 'Item 2', 'Item 3']
    }

    response.render("index",data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});