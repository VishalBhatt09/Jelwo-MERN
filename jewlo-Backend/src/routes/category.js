const express = require("express");
const router = express.Router();

const {
  createCategory,
  updateCategory,
  deleteCategory,
  getSliderCategories,
} = require("../controllers/categoryController");

const { protect, admin } = require("../middleware/authMiddleware");
const { uploadCategoryImage } = require("../middleware/upload");

// CREATE CATEGORY
router.post(
  "/",
  protect,
  admin,
  uploadCategoryImage.single("image"),
  createCategory
);

// UPDATE CATEGORY
router.put(
  "/:id",
  protect,
  admin,
  uploadCategoryImage.single("image"),
  updateCategory
);

// DELETE CATEGORY (soft)
router.delete("/:id", protect, admin, deleteCategory);

// SLIDER CATEGORIES
router.get("/slider", getSliderCategories);

module.exports = router;
