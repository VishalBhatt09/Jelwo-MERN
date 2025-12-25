const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// admin register

const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, adminSecret } = req.body;

  if (!name || !email || !password || !adminSecret) {
    res.status(400);
    throw new Error("All fields are required");
  }

  // varifiy admin secret
  if (adminSecret !== process.env.ADMIN_SECRET) {
    res.status(403);
    throw new Error("Invalid admin secret");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "admin",
  });

  res.status(201).json({
    _id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
    token: generateToken(admin._id),
  });
});

// adminlogin
exports.adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await User.findOne({ email, role: "admin" });
  if (!admin) {
    res.status(401);
    throw new Error("Admin not found");
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  res.json({
    id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role, // 🔥 IMPORTANT
    token: generateToken(admin._id, admin.role),
  });
});

// REGISTER
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
});

// LOGIN
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// GET ME
const getMe = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { register, login, getMe, registerAdmin };
