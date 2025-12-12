require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// db connect

connectDB();

// middlware

app.use(express.json());
app.use(cors());

// routes

app.use("/app/auth", authRoutes);
app.get("/", (req, res) => res.send("🏬 JELWO SHOP CONNECTED"));

app.listen(PORT, () => console.log("server started on port ${PORT}"));
