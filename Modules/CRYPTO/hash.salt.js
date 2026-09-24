const crypto = require("crypto");

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.scryptSync(password,salt,64).toString("hex");

    return {salt,hash};
}

function verifyPassword(password,salt,hash){
    const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex");
    return hashedPassword === hash;
}

const password = "mySecurePassword";

const {salt,hash} = hashPassword(password);
console.log('Salt:', salt);
console.log('Hash:', hash);


const isValid = verifyPassword(password, salt, hash);
console.log('Password valid:', isValid); // true

const isInvalid = verifyPassword('wrongPassword', salt, hash);
console.log('Wrong password valid:', isInvalid);