const crypto = require("crypto");

const secretKey = "mySecretKey";

const hmac = crypto.createHmac("sha256",secretKey);

hmac.update("Hello, Nodejs!");

const hmacDigest = hmac.digest("hex");
console.log("HMAC:", hmacDigest);