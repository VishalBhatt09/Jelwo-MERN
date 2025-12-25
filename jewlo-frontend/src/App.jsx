import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Product"; // product listing page
// import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route path="/" element={<MainLayout />}>
        {/* HOME */}
        <Route index element={<Home />} />

        {/* PRODUCTS LIST PAGE */}
        <Route path="products" element={<Products />} />

        {/* SINGLE PRODUCT (optional later) */}
        {/* <Route path="products/:id" element={<ProductDetails />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
