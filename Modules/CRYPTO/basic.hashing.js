const crypto = require("crypto");

const hash = crypto.createHash("sha256");

const hashResults = hash.update("Hello, Node.js").digest("hex");

console.log('SHA-256 Hash:', hashResults);