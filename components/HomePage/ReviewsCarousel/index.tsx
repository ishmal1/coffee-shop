"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cards = [
  {
    id: 1,
    title: "All I can say is wow",
    description:
      "The Coffee Cometeer experience is incredible. It’s having a high-end cup of coffee from a boutique coffee shop at my fingertips.",
    username: "Michel F.",
  },
  {
    id: 2,
    title: "All I can say is wow",
    description:
      "The Coffee Cometeer experience is incredible. It’s having a high-end cup of coffee from a boutique coffee shop at my fingertips.",
    username: "Michel F.",
  },
    {
    id: 3,
    title: "All I can say is wow",
    description:
      "The Coffee Cometeer experience is incredible. It’s having a high-end cup of coffee from a boutique coffee shop at my fingertips.",
    username: "Michel F.",
  },
    {
    id: 4,
    title: "All I can say is wow",
    description:
      "The Coffee Cometeer experience is incredible. It’s having a high-end cup of coffee from a boutique coffee shop at my fingertips.",
    username: "Michel F.",
  },
    {
    id: 5,
    title: "All I can say is wow",
    description:
      "The Coffee Cometeer experience is incredible. It’s having a high-end cup of coffee from a boutique coffee shop at my fingertips.",
    username: "Michel F.",
  },
];

export function ReviewsCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-16">
      <h1 className="text-5xl md:text-6xl text-center  my-10 mb-12">
        Thousands of 5 Star Reviews
      </h1>

      <div className="relative pt-10">
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
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
             
            }}
            className="pb-16"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <Card className="flex flex-col gap-5 justify-center h-70 px-4  bg-[#EAEBE4] rounded-xl overflow-hidden shadow-md">
                  <CardHeader className=" flex flex-col gap-5 items-start">
                    <div className="flex justify-center gap-1  mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-black"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <CardTitle className=" text-sm  ">
                      {card.title}
                    </CardTitle>
                  <CardDescription className="text-sm  text-gray-700 flex-1">
                    {card.description}
                  </CardDescription>
                  </CardHeader>


                  <CardFooter className="px-5 py-2 text-center text-sm font-medium text-gray-900">
                {card.username}
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}

            {/* Pagination */}
            <div className="custom-swiper-pagination z-10 !flex justify-center gap-1 mt-10 mb-8 [&>.swiper-bullet]:!w-3 [&>.swiper-bullet]:!h-3 [&>.swiper-bullet]:!mx-1 [&>.swiper-bullet-active]:!bg-black"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
