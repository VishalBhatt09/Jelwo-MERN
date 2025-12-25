const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");
const deleteFromCloudinary = require("../utils/cloudinaryHelper");

/**
 * CREATE CATEGORY
 */
exports.createCategory = asyncHandler(async (req, res) => {
  const { name, slug } = req.body;

  if (!req.file) {
    res.status(400);
    throw new Error("Category image is required");
  }

  const exists = await Category.findOne({ slug });
  if (exists) {
    res.status(400);
    throw new Error("Category already exists");
  }

  const category = await Category.create({
    name,
    slug,
    image: req.file.path, // Cloudinary URL
  });

  res.status(201).json(category);
});

/**
 * GET SLIDER CATEGORIES (PUBLIC)
 */
exports.getSliderCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ isActive: true }).limit(5);
  res.json(categories);
});

/**
 * UPDATE CATEGORY (ADMIN)
 */
exports.updateCategory = asyncHandler(async (req, res) => {
  const { name, slug, isActive } = req.body;

  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  // slug uniqueness check
  if (slug && slug !== category.slug) {
    const slugExists = await Category.findOne({ slug });
    if (slugExists) {
      res.status(400);
      throw new Error("Slug already in use");
    }
    category.slug = slug;
  }

  if (name) category.name = name;
  if (isActive !== undefined) category.isActive = isActive;

  // replace image if new image uploaded
  if (req.file) {
    await deleteFromCloudinary(category.image); // delete old
    category.image = req.file.path; // new Cloudinary URL
  }

  const updated = await category.save();
  res.json(updated);
});

/**
 * DELETE CATEGORY (SOFT DELETE)
 */
exports.deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  category.isActive = false;
  await category.save();

  res.json({ message: "Category deleted successfully" });
});
