const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

// add new product
const createProduct = asyncHandler(async (req, res) => {
  const { title, description, price, stock, image, category } = req.body;

  if (!title || !description || !price) {
    throw new Error("Plecse provide title , description , price");
  }

  const product = await Product.create({
    title,
    description,
    price,
    stock,
    image,
    category,
    user: req.user._id,
  });
  res.status(201).json({ success: true, data: product });
});

// allproduct
const getProducts = asyncHandler(async (req, res) => {
  const Product = await Product.find().sort({ createdAt: -1 });
  res.json({ success: true, data: products });
});

// get product by id

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("product not found");
  }
  res.json({ success: true, data: product });
}); // Update product
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  // Only product owner can update
  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to update this product");
  }

  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json({ success: true, data: updated });
});

// Delete product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("Not authorized to delete this product");
  }

  await product.deleteOne();
  res.json({ success: true, message: "Product removed" });
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
