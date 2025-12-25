const express = require("express");
const router = express.Router();
const {
  register,
  login,
  getMe,
  registerAdmin,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { registerValidation } = require("../middleware/validateUser");

router.post("/register", registerValidation, register);
router.post("/login", login);
router.get("/me", protect, getMe);

// admin
router.post("/admin/register", registerAdmin);

module.exports = router;
