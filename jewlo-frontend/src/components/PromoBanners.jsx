import React from "react";
import { Link } from "react-router-dom";

export default function PromoBanners() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TOP PILL */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#f4ede6] rounded-full px-8 py-3 text-sm font-medium tracking-wide text-[#3b2f2a] flex items-center gap-3">
            DIAMONDS FOR EVERY EXCUSE 1500+ DESIGNS UNDER
            <span className="bg-[#dfd2c7] px-4 py-1 rounded-full font-semibold animate-softBlink">
              $200
            </span>
          </div>
        </div>

        {/* BANNERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 cursor-pointer">

          {/* LEFT BANNER */}
          <div className="bg-[#f7efe8] rounded-sm overflow-hidden flex flex-col md:flex-row items-center">

            {/* IMAGE */}
            <div className="md:w-3/4 w-full h-full">
              <img
                src="./src/img/jewelry-4-banner-1.jpg"
                alt="Exquisite collection"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="md:w-1/2 p-12 text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-[#7a6f68] mb-4">
                Get a 30% discount
              </p>

              <h2 className="text-4xl font-serif text-[#3b2f2a] leading-tight mb-8">
                Exquisite <br /> collection
              </h2>

              <Link
                to="#"
                className="inline-block bg-[#a87c5a] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#8f6648] transition"
              >
                SHOP NOW
              </Link>
            </div>
          </div>

          {/* RIGHT BANNER */}
          <div className="bg-[#f9f6ec] rounded-sm overflow-hidden flex flex-col md:flex-row items-center">

            {/* CONTENT */}
            <div className="md:w-1/2 p-12 text-center md:text-left order-2 md:order-1">
              <p className="text-sm uppercase tracking-widest text-[#7a6f68] mb-4">
                20% off on wastage
              </p>

              <h2 className="text-4xl font-serif text-[#3b2f2a] leading-tight mb-8">
                Diamond <br /> necklace
              </h2>

              <Link
                to="#"
                className="inline-block bg-[#a87c5a] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#8f6648] transition"
              >
                SHOP NOW
              </Link>
            </div>

            {/* IMAGE */}
            <div className="md:w-3/4 h-full w-full order-1 md:order-2">
              <img
                src="./src/img/jewelry-4-banner-2.jpg"
                alt="Diamond necklace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}
