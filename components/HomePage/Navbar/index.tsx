"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShopChristmasDropdown } from "./ShopChristmasDropdown";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";

// Import dropdown components

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const cartItems = 0;

  return (
    <header className=" w-full bg-transparent border-b-white border-b hover:bg-white hover:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 text-white hover:text-black">
          {/* LEFT - Dropdown Components */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <ShopChristmasDropdown />
              {/* You can import and use CollectionsDropdown, BrandsDropdown, OffersDropdown here */}
            </NavigationMenuList>
          </NavigationMenu>

          {/* MIDDLE - Logo */}
          <Link href="/" className="text-2xl font-bold tracking-widest">
            LOGO
          </Link>

          {/* RIGHT - Links + Icons */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <User className="cursor-pointer hover:text-gray-300" />
              <Search
                className="cursor-pointer hover:text-gray-300"
                onClick={() => setSearchOpen(true)}
              />
              {/* Cart Drawer */}
              <Sheet>
                <SheetTrigger asChild>
                  <ShoppingCart className="cursor-pointer hover:text-gray-300" />
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Shopping Cart ({cartItems})</SheetTitle>
                  </SheetHeader>
                  <Separator />
                  <div className="mt-6 space-y-4">
                    {/* Cart items go here */}
                    <p className="text-base">Your cart is empty.</p>
                  </div>
                  <SheetClose asChild>
                    <Button
                      variant="default"
                      className="rounded-full text-base w-full mt-2"
                    >
                      Continue Browsing
                    </Button>
                  </SheetClose>
                </SheetContent>
              </Sheet>
            </div>

            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="bg-black text-white border-none shadow-none flex flex-col items-center justify-center h-screen">
          <Input
            placeholder="Search products..."
            className="w-1/2 bg-white text-black"
          />
        </DialogContent>
      </Dialog>
    </header>
  );
}
