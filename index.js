const crypto = require("crypto");

function generatePassword(length = 16) {
  const specialChars = "!@#$%^&*()_+=-";
  const password = crypto
    .randomBytes(length)
    .toString("base64")
    .slice(0, length - 1);
  const specialChar =
    specialChars[Math.floor(Math.random() * specialChars.length)];
  return password + specialChar;
}

console.log(generatePassword());
