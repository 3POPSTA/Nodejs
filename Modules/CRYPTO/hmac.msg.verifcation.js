const crypto = require("crypto");

function createSignature(message,key){
    const hmac = crypto.createHmac("sha256",key);
    hmac.update(message);

    return hmac.digest("hex");
}

function verifySignature(message, signature ,key){
    const expectedSignature = createSignature(message,key)

    return crypto.timingSafeEqual(
        Buffer.from(signature, "hex"),
        Buffer.from(expectedSignature, "hex"),
    );
}

const secretKey = "verySecretKey";
const message = "Important message to verify";

const signature = createSignature(message,secretKey);
console.log('Message:', message);
console.log('Signature:', signature);

try {
    const isValid = verifySignature(message, signature, secretKey);
    console.log('Signature valid:', isValid);

    const isInvalid = verifySignature('Tampered message', signature, secretKey);
    console.log('Tampered message valid:', isInvalid);
} 
catch(error) {
    console.error('Verification error:', error.message);
}