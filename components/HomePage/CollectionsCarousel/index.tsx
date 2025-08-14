"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    image: "/HomePage/CollectionsCarousel/allcoffee-collectioncarousel.png",
    hoverImage:
      "/HomePage/CollectionsCarousel/hover-allcoffee-collectioncarousel.png", // Add hover image
    title: "All Coffee",
  },
  {
    id: 2,
    image: "/HomePage/CollectionsCarousel/cliftontea-collectioncarousel.png",
    hoverImage:
      "/HomePage/CollectionsCarousel/hover-cliftontea-collectioncarousel.png",
    title: "Clifton Tea",
  },
  {
    id: 3,
    image: "/HomePage/CollectionsCarousel/cliftonmerch-collectionscarousel.png",
    hoverImage:
      "/HomePage/CollectionsCarousel/hover-cliftonmerch-collectionscarousel.png",
    title: "Clifton Merchandise",
  },
  {
    id: 4,
    image: "/HomePage/CollectionsCarousel/allcoffee-collectioncarousel.png",
    hoverImage:
      "/HomePage/CollectionsCarousel/hover-allcoffee-collectioncarousel.png",
    title: "All Coffee",
  },
  {
    id: 5,
    image: "/HomePage/CollectionsCarousel/cliftontea-collectioncarousel.png",
    hoverImage:
      "/HomePage/CollectionsCarousel/hover-cliftontea-collectioncarousel.png",
    title: "Clifton Tea",
  },
];

export default function CollectionsCarousel() {
  return (
    <div className="w-full max-w-6xl my-10 h-full mx-auto mt-10 relative px-4">
      <h1 className="text-6xl text-center mb-10">Our Collections</h1>

      <div className="relative ">
        {/* Navigation arrows */}
        <Button
          variant="default"
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12  border-2 rounded-full transition-colors md:-left-14 p-0"
        >
          <ChevronLeft width={20} height={20} />
        </Button>
        <Button
          variant="default"
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-2  transition-colors md:-right-14 p-0"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
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
              <Card className="relative group overflow-hidden rounded-lg cursor-pointer h-[80vh] border-0">
                {/* Background Image with Hover Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    filter: "brightness(0.9)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    backgroundImage: `url(${card.hoverImage})`,
                    filter: "brightness(0.9)",
                  }}
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Card Content */}
                <CardContent className="absolute inset-0 flex flex-col justify-end items-center p-6 text-white">
                  <div className="w-full mb-4">
                    <h3 className="text-3xl text-center font-medium mb-2">
                      {card.title}
                    </h3>

                    <Link
                      href="#"
                      className="block w-max mx-auto text-white text-center text-base hover:underline"
                    >
                      Shop Now
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
      <div className="custom-swiper-pagination z-10 !flex justify-center gap-1 mt-8 [&>.swiper-bullet]:!w-3 [&>.swiper-bullet]:!h-3 [&>.swiper-bullet]:!mx-1 [&>.swiper-bullet-active]:!bg-black"></div>
        </Swiper>
      </div>

      {/* Dot Pagination container */}
    </div>
  );
}
