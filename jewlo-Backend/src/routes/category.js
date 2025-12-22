const express = require("express");
const router = express.Router();

const {
  createCategory,
  bulkCreateCategories,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

// PUBLIC
router.get("/", getCategories);

// ADMIN
router.post("/", protect, adminOnly, createCategory);
router.post("/bulk", protect, adminOnly, bulkCreateCategories);
router.put("/:id", protect, adminOnly, updateCategory);
router.delete("/:id", protect, adminOnly, deleteCategory);

module.exports = router;
