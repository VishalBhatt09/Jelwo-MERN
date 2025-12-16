const mongoose = require("mongoose");
const User = require("./User");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: string, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    Image: { type: string, default: null },
    category: { type: string, default: "general" },
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
