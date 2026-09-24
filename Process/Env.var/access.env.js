const dotenv = require("dotenv");
dotenv.config();

const apiKey = process.env.API_KEY;
const PORT = process.env.PORT;

console.log(apiKey);
console.log(PORT);

