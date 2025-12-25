require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./src/config/db");

const authRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin");
const productRoutes = require("./src/routes/product");
const categoryRoutes = require("./src/routes/category");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

// DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// 🔥 STATIC FILES
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Jelwo Backend Running");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
