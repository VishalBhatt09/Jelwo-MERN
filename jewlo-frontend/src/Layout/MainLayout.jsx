import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import NewsletterPopup from "../components/NewsSattel";

export default function MainLayout() {
  return (
    <>
      <NewsletterPopup />
      <Nav />

      {/* PAGE CONTENT */}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
