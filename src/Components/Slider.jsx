import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center ">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold dark:text-white">
                  Welcome to Taste Treasury
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  Discover a world of flavors! Explore our curated selection of
                  delectable dishes and satisfy your cravings.
                </p>
                <Link to={"/all-foods"}>
                  <button className="bg-white text-green-500 px-6 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition">
                    Explore All Foods
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold dark:text-white">
                  Savor Every Bite
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  From hearty meals to tempting treats, Taste Treasury has it
                  all. Let the feast begin!
                </p>
                <Link
                  to="/all-foods"
                  className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60 dark:bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-4xl md:text-5xl font-bold dark:text-white">
                  Flavors Beyond Borders
                </h1>
                <p className="mb-5 dark:text-gray-300">
                  Uncover unique recipes and irresistible cuisines from across
                  the globe. Taste the world today!
                </p>
                <Link
                  to="/all-foods"
                  className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700"
                >
                  View All Foods
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
