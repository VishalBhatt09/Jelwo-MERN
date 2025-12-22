const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");

// CREATE CATEGORY (ADMIN)
exports.createCategory = asyncHandler(async (req, res) => {
  const { name, slug, image } = req.body;

  const exists = await Category.findOne({ slug });
  if (exists) {
    res.status(400);
    throw new Error("Category already exists");
  }

  const category = await Category.create({
    name,
    slug,
    image,
  });

  res.status(201).json(category);
});

// GET ALL CATEGORIES (PUBLIC)
exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ isActive: true });
  res.json(categories);
});

// UPDATE CATEGORY (ADMIN)
exports.updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  category.name = req.body.name || category.name;
  category.slug = req.body.slug || category.slug;
  category.image = req.body.image || category.image;
  category.isActive =
    req.body.isActive !== undefined ? req.body.isActive : category.isActive;

  const updated = await category.save();
  res.json(updated);
});

// DELETE CATEGORY (ADMIN – SOFT DELETE)
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

// BULK CREATE CATEGORIES (ADMIN)
exports.bulkCreateCategories = async (req, res) => {
  const categories = req.body;

  if (!Array.isArray(categories) || categories.length === 0) {
    return res.status(400).json({ message: "Category array is required" });
  }

  // remove duplicates by slug
  const slugs = categories.map((c) => c.slug);
  const existing = await Category.find({ slug: { $in: slugs } });

  const existingSlugs = existing.map((e) => e.slug);

  const filtered = categories.filter((c) => !existingSlugs.includes(c.slug));

  if (filtered.length === 0) {
    return res.status(400).json({ message: "All categories already exist" });
  }

  const created = await Category.insertMany(filtered);

  res.status(201).json({
    success: true,
    count: created.length,
    categories: created,
  });
};
