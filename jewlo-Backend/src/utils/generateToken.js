const jwt = require("jsonwebtoken");

const generateToken = (Id) => {
  return jwt.sign({ id: Id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "10d",
  });
};

module.exports = generateToken;
