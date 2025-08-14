"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Instagram } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "@/components/ui/card";

const cards = [
  { id: 1, image: "/HomePage/FollowSectionCarousel/image1-follows-section-carousel.png" },
  { id: 2, image: "/HomePage/FollowSectionCarousel/image2-follows-section-carousel.png" },
  { id: 3, image: "/HomePage/FollowSectionCarousel/image3-follows-section-carousel.png" },
  { id: 4, image: "/HomePage/FollowSectionCarousel/image4-follows-section-carousel.png" },
  { id: 5, image: "/HomePage/FollowSectionCarousel/image5-follows-section-carousel.png" },
   { id: 6, image: "/HomePage/FollowSectionCarousel/image1-follows-section-carousel.png" },
  { id: 7, image: "/HomePage/FollowSectionCarousel/image2-follows-section-carousel.png" },
  { id: 8, image: "/HomePage/FollowSectionCarousel/image3-follows-section-carousel.png" },
  { id: 9, image: "/HomePage/FollowSectionCarousel/image4-follows-section-carousel.png" },
  { id: 10, image: "/HomePage/FollowSectionCarousel/image5-follows-section-carousel.png" },
];

export function FollowSectionCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-16">
        <div className="flex flex-col gap-2 justify-center items-center py-8">

      <h1 className="text-4xl  text-center ">
        @cliftoncoffee
      </h1>
<p className="text-base  text-center ">Follow us on Instagram for the latest updates!</p>
        </div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={5}
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
       
        className="pb-16"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card className="relative overflow-hidden py-0 rounded-xl shadow-md cursor-pointer group">
              {/* Image */}
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay with Instagram icon */}
              <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-60">
                <Instagram className="w-10 h-10 text-white" />
              </div>
            </Card>
          </SwiperSlide>
        ))}

        {/* Pagination */}
         <div className="custom-swiper-pagination z-10 !flex justify-center gap-1 mt-10 mb-8 [&>.swiper-bullet]:!w-3 [&>.swiper-bullet]:!h-3 [&>.swiper-bullet]:!mx-1 [&>.swiper-bullet-active]:!bg-black"></div>
    
      </Swiper>
    </div>
  );
}
