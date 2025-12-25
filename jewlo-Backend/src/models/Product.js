const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");

exports.createProduct = asyncHandler(async (req, res) => {
  const { title, price, category, stock } = req.body;

  if (!req.files || req.files.length === 0) {
    res.status(400);
    throw new Error("Product images required");
  }

  const images = req.files.map((file) => file.path);

  const product = await Product.create({
    title,
    price,
    category,
    stock,
    images, // Cloudinary URLs
  });

  res.status(201).json(product);
});
