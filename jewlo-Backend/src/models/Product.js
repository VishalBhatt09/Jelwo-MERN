const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true
    },

    images: [
      {
        type: String,
        required: true
      }
    ],

    price: {
      type: Number,
      required: true
    },

    comparePrice: {
      type: Number
    },

    discountPercent: {
      type: Number,
      default: 0
    },

    sizes: [
      {
        type: String
      }
    ],

    colors: [
      {
        type: String
      }
    ],

    stock: {
      type: Number,
      default: 0
    },

    category: {
      type: String,
      default: "jewelry"
    },

    productUrl: {
      type: String
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
