const express = require ("express");
const router = express.Router();

const {protect}= require("../middleware/authMiddleware");
const {adminOnly} = require ("../middleware/adminMiddleware");
const User = require("../models/User");

router.get ("/dashboard", protect, adminOnly,(req, res)=>{
  res.json({
    message:"Welcome Admin",
    admin:req.user.name
  });
});

router.get("/users", protect, adminOnly, async (req,res) => {
  const users = await User.find().select("-password");
  res.json(users); 
});

module.exports= router;