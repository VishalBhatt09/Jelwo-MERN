import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
  FiChevronDown,
} from "react-icons/fi";

export default function Nav() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-1000">

      {/* 🔹 TOP BAR */}
      <div className="text-sm text-gray-600 py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-black">
            <img
              src="./src/img/jewelry-4-logo.webp"
              alt="jelwo"
              className="h-[5vh]"
            />
          </Link>

          <span className="text-gray-500">
            Free UK standard delivery on all orders.
          </span>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center gap-5">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search product..."
              className="border rounded-full pl-6 pr-12 py-3 text-sm focus:outline-none"
            />
          </div>

          <Link to="/login">
            <FiUser className="text-xl cursor-pointer" />
          </Link>

          <Link to="/wishlist">
            <FiHeart className="text-xl cursor-pointer" />
          </Link>

          <Link to="/cart">
            <FiShoppingBag className="text-xl cursor-pointer" />
          </Link>
        </div>
      </div>

      {/* 🔹 MAIN NAV */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between relative">

        {/* PHONE */}
        <div className="hidden lg:flex items-center gap-2 text-gray-700">
          <span className="text-lg">📞</span>
          <span>(220) 123 456 7890</span>
        </div>

        {/* MENU */}
        <ul className="flex items-center gap-8 font-medium text-gray-800 mx-auto">

          <li>
            <Link to="/" className="hover:text-[#b38b6d]">
              HOME
            </Link>
          </li>

          {/* SHOP MEGA MENU */}
          <li
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#b38b6d]">
              SHOP <FiChevronDown />
            </div>

            {shopOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[1100px] bg-white shadow-xl border p-8 grid grid-cols-5 gap-6 z-1100">

                {/* Earrings */}
                <div>
                  <h4 className="font-semibold mb-3">Earrings</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><Link to="/category/earrings">Blue heavy t-shirt</Link></li>
                    <li><Link to="/category/earrings">Brown sunglasses</Link></li>
                    <li><Link to="/category/earrings">Bucket shoes</Link></li>
                    <li><Link to="/category/earrings">Lamond rashmi ring</Link></li>
                    <li><Link to="/category/earrings">Floral gold bangle</Link></li>
                    <li><Link to="/category/earrings">Glitter diamond ring</Link></li>
                  </ul>
                </div>

                {/* Necklace */}
                <div>
                  <h4 className="font-semibold mb-3">Necklace</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><Link to="/category/necklace">Rose gold rings</Link></li>
                    <li><Link to="/category/necklace">Brown sunglasses</Link></li>
                    <li><Link to="/category/necklace">Bucket shoes</Link></li>
                    <li><Link to="/category/necklace">Color print sandal</Link></li>
                    <li><Link to="/category/necklace">Floral gold bangle</Link></li>
                    <li><Link to="/category/necklace">Simple Pearl earrings</Link></li>
                  </ul>
                </div>

                {/* Rings */}
                <div>
                  <h4 className="font-semibold mb-3">Rings</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><Link to="/category/rings">Blue heavy t-shirt</Link></li>
                    <li><Link to="/category/rings">Brown sunglasses</Link></li>
                    <li><Link to="/category/rings">Dark sunglasses</Link></li>
                    <li><Link to="/category/rings">Half sleeve tshirt</Link></li>
                    <li><Link to="/category/rings">Formal shirt</Link></li>
                    <li><Link to="/category/rings">Gold nose pin</Link></li>
                  </ul>
                </div>

                {/* Bracelets */}
                <div>
                  <h4 className="font-semibold mb-3">Bracelets</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><Link to="/category/bracelets">Blue heavy t-shirt</Link></li>
                    <li><Link to="/category/bracelets">Brown sunglasses</Link></li>
                    <li><Link to="/category/bracelets">Formal shoes</Link></li>
                    <li><Link to="/category/bracelets">Formal shirt</Link></li>
                    <li><Link to="/category/bracelets">Blue heavy t-shirt</Link></li>
                    <li><Link to="/category/bracelets">Brown sunglasses</Link></li>
                  </ul>
                </div>

                {/* BANNER */}
                <Link to="/shop" className="relative">
                  <img
                    src="./src/img/jewelry-4-menu-banner.jpg"
                    alt="Offer"
                    className="rounded-lg h-full w-full object-cover"
                  />
                </Link>

              </div>
            )}
          </li>

          <li>
            <Link to="/products" className="hover:text-[#b38b6d]">
              PRODUCTS
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-[#b38b6d]">
              BLOG
            </Link>
          </li>

          <li>
            <Link to="/pages" className="hover:text-[#b38b6d]">
              PAGES
            </Link>
          </li>

        </ul>

        {/* CTA */}
        <Link
          to="/try-at-home"
          className="hidden lg:flex items-center gap-2 font-semibold hover:text-[#b38b6d]"
        >
          🏠 FREE TRY AT HOME
        </Link>
      </nav>
    </header>
  );
}
