import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories/slider")
      .then((res) => setCategories(res.data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-serif text-center mb-14">
        Popular category
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-6"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat._id}>
            <div className="relative group overflow-hidden">

              {/* CATEGORY IMAGE */}
              <img
                src={`http://localhost:5000${cat.image}`}
                alt={cat.name}
                className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* WHITE CARD OVERLAY */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] bg-white text-center py-6 shadow-lg">
                <p className="text-gray-400 text-sm mb-1">
                  10 + ITEMS
                </p>
                <h3 className="text-3xl font-serif mb-2">
                  {cat.name}
                </h3>
                <span className="text-sm tracking-widest text-gray-600">
                  SHOP NOW
                </span>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
