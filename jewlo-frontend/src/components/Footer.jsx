import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#fbf6f1] text-[#7a6f68]">
      {/* MAIN FOOTER */}
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div>
            <div className="h-20 w-40">
              <img src="./src/img/jewelry-4-logo.webp" />
            </div>

            <ul className="space-y-4 font-semibold">
              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <span>
                  55 East 10th street, new york,<br />
                  ny 10003, united states
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+ (220) 123 456 7890</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>demo123546@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="font-bold text-[#a77f66] mb-6">
              Information
            </h3>
            <ul className="space-y-3 font-semibold">
              {["About us", "Contact us", "Faq’s", "News"].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-[#a77f66] transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRIVACY */}
          <div>
            <h3 className="font-bold text-[#a77f66] mb-6">
              Privacy & terms
            </h3>
            <ul className="space-y-3 font-semibold">
              {[
                "Privacy policy",
                "Refund policy",
                "Shipping & return",
                "Terms & condition",
              ].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-[#3b2f2a] transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORY */}
          <div>
            <h3 className="font-bold text-[#a77f66] mb-6">
              Category
            </h3>
            <ul className="space-y-3 font-semibold">
              {["Rings", "Earring", "Pendant", "Necklaces", "Bracelets"].map(
                (item) => (
                  <li key={item}>
                    <Link to="#" className="hover:text-[#3b2f2a] transition">
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* VISIT STORE */}
          <div>
            <h3 className="font-bold text-[#a77f66] mb-6">
              Visit store
            </h3>
            <p className="font-semibold leading-relaxed">
              Mon - sat : 10am - 11pm <br />
              Sun : 10am - 4pm <br />
              7 Days a week
            </p>
          </div>
        </div>

        {/* SOCIAL + NEWSLETTER */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaPinterestP, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full border border-[#e2d8cf] flex items-center justify-center hover:bg-[#3b2f2a] hover:text-white transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          {/* SUBSCRIBE */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl">
            <span className="font-bold w-full  text-[#a77f66]">
              Subscribe and get 15% discount.
            </span>

            <div className="flex  gap-5 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-[#e2d8cf] bg-transparent outline-none"
              />
              <button className="px-8 py-3  rounded-full bg-[#a87c5a] text-white font-bold hover:bg-[#8f6648] transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-white border-t border-[#eee]">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[#7a6f68]">
            Copyright © 2025 by spacingtech
          </p>

          <div className="flex gap-3">
            <img src="./src/img/visa.svg" alt="Visa" className="h-6" />
            <img src="./src/img/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="./src/img/American Express.png" alt="Amex" className="h-6" />
            <img src="./src/img/paypal.png" alt="Paypal" className="h-6" />
            <img src="./src/img/discover.png" alt="Discover" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
