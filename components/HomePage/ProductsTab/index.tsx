"use client";

import React from "react";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCart } from "@/app/Context/CartContext";

const tabsData = {
  coffee: {
    images: [
      "/HomePage/ProductsTab/CoffeeTab/image1-products-tab.png",
      "/HomePage/ProductsTab/CoffeeTab/image2-products-tab.png",
      "/HomePage/ProductsTab/CoffeeTab/image3-products-tab.png",
      "/HomePage/ProductsTab/CoffeeTab/image4-products-tab.png",
    ],
    products: [
      {
        id: 1,
        image: "/HomePage/ProductsTab/CoffeeTab/packet1-product-tab-card.png",
        title: "Panama Coffee",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur unde beatae, qui dicta dolores?",
        price: 13.5,
      },
      {
        id: 2,
        image: "/HomePage/ProductsTab/CoffeeTab/packet2-product-tab-card.png",
        title: "Colombia Coffee",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur unde beatae, qui dicta dolores?",
        price: 14.0,
      },
      {
        id: 3,
        image: "/HomePage/ProductsTab/CoffeeTab/packet1-product-tab-card.png",
        title: "Panama Coffee",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur unde beatae, qui dicta dolores?",
        price: 13.5,
      },
    ],
  },
  capsule: {
    images: [
      "/HomePage/ProductsTab/CapsuleTab/image-product-tab.png",
      "/HomePage/ProductsTab/CapsuleTab/image-product-tab.png",
    ],
    products: [
      {
        id: 1,
        image: "/HomePage/ProductsTab/CapsuleTab/capsule-image-product-tab.png",
        title: "Espresso Capsule",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur unde beatae, qui dicta dolores?",
        price: 10.5,
      },
      {
        id: 2,
        image:
          "/HomePage/ProductsTab/CapsuleTab/capsule-image-product-tab.png",
        title: "Lungo Capsule",
         description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur unde beatae, qui dicta dolores?",
        price: 11.0,
      },
      {
        id: 3,
        image:
          "/HomePage/ProductsTab/CapsuleTab/capsule-image-product-tab.png",
        title: "Espresso Capsule",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur unde beatae, qui dicta dolores?",
        price: 10.5,
      },
    ],
  },
};

export function ProductsTab() {
  const { addToCart } = useCart();

  return (
    <>
      <h1 className="text-6xl text-center w-full py-5">New Products</h1>
      <p className="text-base text-center w-full mb-6">
        Discover our premium coffee collections crafted for every taste!
      </p>

      <Tabs defaultValue="coffee" className="flex flex-col md:flex-row gap-6 w-full mx-auto pt-5 pb-10 max-w-7xl px-4">
        {/* Left Images Section */}
        <div className="w-full md:w-1/2">
          <TabsContent value="coffee">
            <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden border">
              {tabsData.coffee.images.map((img, index) => (
                <div key={index} className="relative aspect-square group">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <Button
                      variant="link"
                      className="text-white text-base underline"
                    >
                      Show More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="capsule">
            <div className="rounded-lg overflow-hidden border">
              <div className="relative aspect-square group">
                <img
                  src={tabsData.capsule.images[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                  <Button
                    variant="link"
                    className="text-white text-base underline"
                  >
                    Show More
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-2 gap-0 rounded-lg overflow-hidden border">
              {/* Show both coffee and capsule images */}
              {tabsData.coffee.images.slice(0, 2).map((img, index) => (
                <div key={`coffee-${index}`} className="relative aspect-square group">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <Button
                      variant="link"
                      className="text-white text-base underline"
                    >
                      Show More
                    </Button>
                  </div>
                </div>
              ))}
              {tabsData.capsule.images.slice(0, 2).map((img, index) => (
                <div key={`capsule-${index}`} className="relative aspect-square group">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                    <Button
                      variant="link"
                      className="text-white text-base underline"
                    >
                      Show More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </div>

        {/* Right Products Section */}
        <div className="w-full md:w-1/2">
          {/* Tab Controls */}
          <TabsList className="flex gap-2 mb-4 mt-5 ml-auto w-full justify-start bg-transparent">
            {["coffee", "capsule", "all"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-full border-2 px-6 border-black bg-transparent text-black data-[state=active]:bg-black data-[state=active]:text-white"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Coffee Products */}
          <TabsContent value="coffee">
            <Carousel
              opts={{
                align: "start",
              }}
              className="relative"
            >
              <CarouselContent className="-ml-1">
                {tabsData.coffee.products.map((product, index) => (
                  <CarouselItem key={product.id} className="pl-4 basis-1/2">
                    <Card
                      className={`relative group py-0 overflow-hidden flex flex-col h-full ${
                        index % 2 === 0 ? "bg-[#D6DBDA]" : "bg-[#D3D3CB]"
                      }`}
                    >
                      <div className="h-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-70 max-w-full object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-col gap-4 px-4 pb-4">
                        <CardHeader className="text-center px-0">
                          <CardTitle className="text-base mb-2">
                            {product.title}
                          </CardTitle>
                          <CardDescription className="mb-2">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col gap-4 px-0">
                          <div className="text-base font-medium">
                            £{product.price.toFixed(2)}
                          </div>
                          <Button
                            onClick={() => {
                              addToCart(product);
                              toast.success("Item added to cart");
                            }}
                            className="w-full mb-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            Buy Now
                          </Button>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 border-none bg-black text-white" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 border-none bg-black text-white" />
            </Carousel>
          </TabsContent>

          {/* Capsule Products */}
          <TabsContent value="capsule">
            <Carousel
              opts={{
                align: "start",
              }}
              className="relative"
            >
              <CarouselContent className="-ml-1">
                {tabsData.capsule.products.map((product, index) => (
                  <CarouselItem key={product.id} className="pl-4 basis-1/2">
                    <Card
                      className={`relative group py-0 overflow-hidden flex flex-col gap-0 h-full ${
                        index % 2 === 0 ? "bg-[#D6DBDA]" : "bg-[#D3D3CB]"
                      }`}
                    >
                      <div className="h-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-75 max-w-full object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-col gap-4 px-4 pb-4">
                        <CardHeader className="text-center px-0">
                          <CardTitle className="text-base mb-2">
                            {product.title}
                          </CardTitle>
                          <CardDescription className="mb-2">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col gap-4 px-0">
                          <div className="text-base font-medium">
                            £{product.price.toFixed(2)}
                          </div>
                          <Button
                            onClick={() => {
                              addToCart(product);
                              toast.success("Item added to cart");
                            }}
                            className="w-full mb-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            Buy Now
                          </Button>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 border-none bg-black text-white" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 border-none bg-black text-white" />
            </Carousel>
          </TabsContent>

          {/* All Products */}
          <TabsContent value="all">
            <Carousel
              opts={{
                align: "start",
              }}
              className="relative"
            >
              <CarouselContent className="-ml-1">
                {[...tabsData.coffee.products, ...tabsData.capsule.products].map((product, index) => (
                  <CarouselItem key={`${product.id}-${index}`} className="pl-4 basis-1/2">
                    <Card
                      className={`relative group py-0 overflow-hidden flex flex-col gap-0 h-full ${
                        index % 2 === 0 ? "bg-[#D6DBDA]" : "bg-[#D3D3CB]"
                      }`}
                    >
                      <div className="h-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-70 max-w-full object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-col gap-4 px-4 pb-4">
                        <CardHeader className="text-center px-0">
                          <CardTitle className="text-base mb-2">
                            {product.title}
                          </CardTitle>
                          <CardDescription className="mb-2">
                            {product.description}
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col gap-4 px-0">
                          <div className="text-base font-medium">
                            £{product.price.toFixed(2)}
                          </div>
                          <Button
                            onClick={() => {
                              addToCart(product);
                              toast.success("Item added to cart");
                            }}
                            className="w-full mb-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            Buy Now
                          </Button>
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 border-none bg-black text-white" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 border-none bg-black text-white" />
            </Carousel>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}