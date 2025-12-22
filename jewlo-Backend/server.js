require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// DB
const connectDB = require("./src/config/db");

// Routes
const authRoutes = require("./src/routes/auth");
const adminRoutes = require("./src/routes/admin");
const productRoutes = require("./src/routes/product");
const categoryRoutes = require("./src/routes/category");

// Error handler
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   CONNECT DATABASE
========================= */
connectDB();

/* =========================
   GLOBAL MIDDLEWARES
========================= */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // important
app.use(morgan("dev")); // optional but recommended

/* =========================
   ROUTES
========================= */
app.get("/", (req, res) => {
  res.send("🚀 Jelwo Backend Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

/* =========================
   ERROR HANDLING (LAST)
========================= */
app.use(errorHandler);

/* =========================
   START SERVER
========================= */
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
