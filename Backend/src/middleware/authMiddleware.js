const jwt = require("../models/User");
const asyncHandler = require("express-axync-handler");
const User = require("../models/User");
const { decod } = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split("")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRWT);
      req.user = await User.findById(decoded.id).select("-password");
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("not authorized , token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("not authorized , token failed");
  }
});

module.exports = { protect };
