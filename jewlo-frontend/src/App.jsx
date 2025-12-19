import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

// Pages
import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
