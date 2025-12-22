const mongoose = require("mongoose");

const categorySchemqa = new mongoose.Schema(
  {
    name: {
      type: String,
      requrired: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      requrired: true,
      unique: true,
    },
    Image: {
      type: String,
      requrired: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchemqa);
