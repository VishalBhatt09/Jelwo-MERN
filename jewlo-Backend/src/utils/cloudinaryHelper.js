const cloudinary = require("../config/cloudinary");

const deleteFromCloudinary = async (imageUrl) => {
  if (!imageUrl) return;

  // extract public_id from URL
  const parts = imageUrl.split("/");
  const filename = parts[parts.length - 1];
  const publicId = `jelwo/uploads/categories/${filename.split(".")[0]}`;

  await cloudinary.uploader.destroy(publicId);
};

module.exports = deleteFromCloudinary;
