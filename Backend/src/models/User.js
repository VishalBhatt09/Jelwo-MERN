const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, uniqure: true },
    password: { type: String, required: true },
    roll: { type: String,enum:["user","admin"], default: "user" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
