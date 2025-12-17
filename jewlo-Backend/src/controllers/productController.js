const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

/* ======================
   CREATE PRODUCT (ADMIN)
====================== */
const createProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    ...req.body,
    createdBy: req.user._id
  });

  res.status(201).json(product);
});

/* ======================
   BULK INSERT PRODUCTS
====================== */
const bulkCreateProducts = asyncHandler(async (req, res) => {
  const products = await Product.insertMany(req.body);
  res.status(201).json({
    count: products.length,
    message: "Products inserted successfully"
  });
});

/* ======================
   GET ALL PRODUCTS
====================== */
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

/* ======================
   GET PRODUCT BY SLUG
====================== */
const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.json(product);
});

/* ======================
   DELETE PRODUCT (ADMIN)
====================== */
const deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

module.exports = {
  createProduct,
  bulkCreateProducts,
  getAllProducts,
  getProductBySlug,
  deleteProduct
};
