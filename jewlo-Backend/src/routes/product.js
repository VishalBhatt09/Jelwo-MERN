const express = require("express");
const router = express.Router();

const { createProduct } = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const { uploadProductImages } = require("../middleware/upload");

router.post(
  "/",
  protect,
  admin,
  uploadProductImages.array("images", 5),
  createProduct
);

module.exports = router;
