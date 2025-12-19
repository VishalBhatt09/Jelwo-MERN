import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

export default function HeroSlider() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-center  cursor-pointer"
            style={{
              backgroundImage:
                "url(./src/img/jewelry-4-slider-1.jpg)",
            }}
          >
            <div className="max-w-[1400px] mx-auto min-h-[500px] px-6 flex items-center justify-between relative">


              {/* Center Content */}
              <div className="text-center max-w-xl mx-auto flex flex-col items-center">

                {/* Label / Logo */}
                <img
                  src="./src/img/jewelry-4-slider-label.png"
                  alt="Jewelry label"
                  className="w-[90px] md:w-[110px] mb-6"
                />

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                  Jewelry is our <br /> passion
                </h1>

                {/* Button */}
                <Link to="#">
                  <button className="mt-8 px-8 py-3 bg-[#a37b5a] text-white rounded-full hover:bg-[#8f684b] transition">
                    SHOP NOW
                  </button>
                </Link>
              </div>



            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage:
                "url(./src/img/jewelry-4-slider-2.jpg)",
            }}
          >
            <div className="max-w-[1400px] mx-auto min-h-[500px] px-6 flex items-center justify-between relative">

              <div className="text-center max-w-xl mx-auto flex flex-col items-center">

                {/* Label / Logo */}
                <img
                  src="./src/img/jewelry-4-slider-label.png"
                  alt="Jewelry label"
                  className="w-[90px] md:w-[110px] mb-6"
                />

                <h1 className="text-4xl md:text-6xl font-serif text-gray-900">
                  Jewelry made <br /> with love
                </h1>

                <Link to="#">
                  <button className="mt-8 px-8 py-3 bg-[#a37b5a] text-white rounded-full">
                    SHOP NOW
                  </button>
                </Link>
              </div>


            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div
            className="w-full bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage:
                "url(./src/img/jewelry-4-slider-3.jpg)",
            }}
          >
            <div className="max-w-[1400px] mx-auto min-h-[500px] px-6 flex items-center justify-between relative">

              <div className="text-center max-w-xl mx-auto flex flex-col items-center">

                {/* Label / Logo */}
                <img
                  src="./src/img/jewelry-4-slider-label.png"
                  alt="Jewelry label"
                  className="w-[90px] md:w-[110px] mb-6"
                />

                <h1 className="text-4xl md:text-6xl font-serif text-gray-900">

                  Elegance is <br />our obsession

                </h1>

                <Link to="#">
                  <button className="mt-8 px-8 py-3 bg-[#a37b5a] text-white rounded-full">
                    SHOP NOW
                  </button>
                </Link>
              </div>


            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section >
  );
}
