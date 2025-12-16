const express = require("express");
const router = express.Router();

const {
  createProduct,
  bulkCreateProducts,
  getAllProducts,
  getProductBySlug,
  deleteProduct
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/adminMiddleware");

// PUBLIC
router.get("/", getAllProducts);
router.get("/:slug", getProductBySlug);

// ADMIN
router.post("/", protect, adminOnly, createProduct);
router.post("/bulk", protect, adminOnly, bulkCreateProducts);
router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;
