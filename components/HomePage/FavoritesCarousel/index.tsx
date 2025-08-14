"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card } from "@/components/ui/card";

const cards = [
  {
    id: 1,
    image: "/HomePage/FavoritesCarousel/image1-favoritescarousel.jpg",
    title: "Preu",
    price: 13.5,
  },
  {
    id: 2,
       image: "/HomePage/FavoritesCarousel/image2-favoritescarousel.jpg",

    title: "Indonesia",
    price: 12.0,
  },
  {
    id: 3,
       image: "/HomePage/FavoritesCarousel/image3-favoritescarousel.jpg",

    title: "Kenya",
    price: 15.0,
  },
  {
    id: 4,
        image: "/HomePage/FavoritesCarousel/image4-favoritescarousel.jpg",

    title: "Panama",
    price: 13.5,
  },
  {
    id: 5,
    image: "/HomePage/FavoritesCarousel/image1-favoritescarousel.jpg",
    title: "Preu",
    price: 13.5,
  },
  {
    id: 6,
       image: "/HomePage/FavoritesCarousel/image2-favoritescarousel.jpg",

    title: "Indonesia",
    price: 12.0,
  },
  {
    id: 7,
       image: "/HomePage/FavoritesCarousel/image3-favoritescarousel.jpg",

    title: "Kenya",
    price: 15.0,
  },
];

export function FavoritesCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-15 pt-10 pb-10">
      <h1 className="text-6xl text-center mb-10">Our Favorites</h1>

      <div className="relative">
        {/* Navigation arrows */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white border-2 rounded-full p-0 flex items-center justify-center">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 border-2   bg-black text-white rounded-full p-0 flex items-center justify-center">
          <ChevronRight className="w-6 h-6" />
        </button>
<div className="max-w-6xl ml-auto mr-auto">


        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
           pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            bulletClass:
              "swiper-bullet w-8 h-8 rounded-full border-2 border-black bg-transparent mx-1.5 transition-colors duration-300",
            bulletActiveClass: "swiper-bullet-active !bg-black !border-black",
            renderBullet: (index, className) => {
              return `<span class="${className}"></span>`;
            },
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className="">
              <div className=" rounded-xl   overflow-hidden flex flex-col  gap-3 items-center">
                {/* Image */}
                <Card className="py-0  w-full h-full">
 <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full  object-cover"
                />
                </Card>
               

                {/* Text/Title */}
                <div className="px-4 py-2 flex flex-col gap-3 text-center">
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-base font-medium mb-2">£{card.price.toFixed(2)}</p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-black" fill="currentColor"  />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
           <div className="custom-swiper-pagination z-10 !flex justify-center gap-1 mt-10 mb-8 [&>.swiper-bullet]:!w-3 [&>.swiper-bullet]:!h-3 [&>.swiper-bullet]:!mx-1 [&>.swiper-bullet-active]:!bg-black"></div>
    
        </Swiper>
      </div>
</div>
      
    </div>
  );
}
