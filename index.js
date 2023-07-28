const crypto = require("crypto");

function generatePassword(length = 16) {
  return crypto.randomBytes(length).toString("base64").slice(0, length);
}

console.log(generatePassword());
