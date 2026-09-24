const crypto = require("crypto");

const data = "Hello, World!";

// MD5 (not recommended for security-critical applications)
const md5 = crypto.createHash("md5").update(data).digest("hex");
console.log('MD5:', md5);

// SHA-1 (not recommended for security-critical applications)
const sha1 = crypto.createHash("sha1").update(data).digest("hex");
console.log('SHA-1:', sha1);

// SHA-256
const sha256 = crypto.createHash('sha256').update(data).digest('hex');
console.log('SHA-256:', sha256);

// SHA-512
const sha512 = crypto.createHash('sha512').update(data).digest('hex');
console.log('SHA-512:', sha512);
