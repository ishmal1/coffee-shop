"use client";

import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

export function ShopChristmasDropdown() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-transparent hover:bg-white/10">
        Shop Christmas
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-4 w-[400px]">
          <div className="space-y-2">
            <h3 className="font-bold">Categories</h3>
            <Link href="#" className="hover:underline">Men</Link>
            <Link href="#" className="hover:underline">Women</Link>
            <Link href="#" className="hover:underline">Kids</Link>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Featured</h3>
            <Link href="#" className="hover:underline">New Arrivals</Link>
            <Link href="#" className="hover:underline">Best Sellers</Link>
          </div>
        </div>
        <div className="mt-4">
          <img
            src="/images/promo.jpg"
            alt="Promo"
            className="rounded-lg object-cover"
          />
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
