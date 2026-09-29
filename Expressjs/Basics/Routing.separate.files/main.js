const express = require("express");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

const app = express();
const port = 3000;

//use routers
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.get('/', (request, response) => {
  response.send('Main application home page');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 