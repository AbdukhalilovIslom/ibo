"use client";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../assets/icons/left.svg";
import rightArrow from "../../assets/icons/right.svg";
import Card from "../Games/Card";
import products from "../../data/products.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function GamesSwiper() {
  return (
    <div className="relative mt-8 overflow-hidden">
      <div className="flex gap-3 px-15 mb-6 max-sm:justify-between max-sm:px-4 max-sm:mb-3">
        <button className="swiper-button-prev-custom3">
          <img src={leftArrow} alt="left arrow" />
        </button>
        <p className="text-primary text-3xl font-bold max-sm:text-base">
          Новинки
        </p>
        <button className="swiper-button-next-custom3 sm:ml-auto">
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
      <Swiper
        spaceBetween={15}
        modules={[Navigation, Pagination, Autoplay, Scrollbar]}
        scrollbar={{
          el: ".swiper-scrollbar-custom",
          draggable: true,
          dragSize: "auto",
        }}
        slidesPerView="auto"
        breakpoints={{
          1024: {
            centeredSlides: false, // disable centeredSlides on desktop
          },
        }}
        // centeredSlides
        navigation={{
          nextEl: ".swiper-button-next-custom3",
          prevEl: ".swiper-button-prev-custom3",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="solutions-swiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
