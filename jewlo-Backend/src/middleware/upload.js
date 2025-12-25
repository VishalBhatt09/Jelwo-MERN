const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// CATEGORY STORAGE
const categoryStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "jelwo/uploads/categories",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

// PRODUCT STORAGE
const productStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "jelwo/uploads/products",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

// ❗ THESE TWO LINES ARE CRITICAL
const uploadCategoryImage = multer({ storage: categoryStorage });
const uploadProductImages = multer({ storage: productStorage });

// ✅ EXPORT BOTH
module.exports = {
  uploadCategoryImage,
  uploadProductImages,
};
