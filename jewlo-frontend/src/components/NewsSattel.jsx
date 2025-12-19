import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const hidePopup = localStorage.getItem("hideNewsletter");
    if (!hidePopup) {
      setTimeout(() => setOpen(true), 1500); // delay popup
    }
  }, []);

  const closePopup = () => {
    if (dontShow) {
      localStorage.setItem("hideNewsletter", "true");
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* POPUP BOX */}
      <div className="relative bg-white max-w-lg w-full mx-4 rounded-lg overflow-hidden animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* CONTENT */}
        <div className="p-10 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Don&apos;t miss a thing
          </p>

          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Join our newsletter and get <br />
            <span className="font-bold">10% off</span> your first order
          </h2>

          {/* INPUT */}
          <div className="flex items-center gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 border border-gray-300 rounded-full outline-none"
            />
            <button className="px-8 py-3 rounded-full bg-[#a87c5a] text-white font-semibold hover:bg-[#8f6648] transition">
              SUBSCRIBE
            </button>
          </div>

          {/* CHECKBOX */}
          <label className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <input
              type="checkbox"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
            />
            Don&apos;t show this popup again
          </label>
        </div>

        {/* IMAGE */}
        <div className="h-60">
          <img
            src="./src/img/jewelry-4-popup.jpg"
            alt="Diamond Ring"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
