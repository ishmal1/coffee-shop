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
    <header className="fixed  top-0 left-0 w-full z-50 transition-colors duration-300 bg-transparent hover:bg-white">
      <div className="bg-black text-white text-sm py-2 px-6 sm:px-10 lg:px-16 text-center">
        Order before 10am for same day dispatch!
      </div>
      <div className="px-6 group hover:text-black text-white sm:px-10 lg:px-16">
        <div className="flex justify-between items-center py-4 text-white hover:text-black border-b-2 border-white">
          {/* LEFT - Dropdown Components */}
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <ShopChristmasDropdown />
              {/* Other dropdowns */}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-between py-4">
            <nav className="flex space-x-8">
              <MegaMenu title="Convert">
                {/* Add categories or even inputs inside */}
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-semibold">Video Formats</p>
                    <ul className="space-y-1">
                      <li className="hover:underline">MP4 to WebM</li>
                      <li className="hover:underline">MOV to WebM</li>
                      {/* etc. */}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold">More Options</p>
                    <ul className="space-y-1">
                      <li className="hover:underline">Settings</li>
                      <li className="hover:underline">API</li>
                    </ul>
                  </div>
                </div>
              </MegaMenu>
              {/* Add other menu items as needed */}
            </nav>
          </div>
          {/* MIDDLE - Logo */}
          <Link href="/" className="text-2xl font-bold tracking-widest">
            <img
              src="/homepage/navbar/logo-navbar.svg"
              alt="logo"
              className="transition-colors duration-300 hover:fill-black"
            />
          </Link>

          {/* RIGHT - Links + Icons */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/wholesale"
                className="hover:text-gray-300 transition-colors"
              >
                WholeSale
              </Link>
              <Link
                href="/education"
                className="hover:text-gray-300 transition-colors"
              >
                Education
              </Link>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Our Ethos
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <svg
                width="35"
                height="100"
                viewBox="0 0 35 100"
                className="fill-current"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect width="35" height="100" fill="url(#pattern0_1_2273)" />
                <defs>
                  <pattern
                    id="pattern0_1_2273"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_2273"
                      transform="matrix(0.01 0 0 0.0035 0 0.325)"
                    />
                  </pattern>
                  <image
                    id="image0_1_2273"
                    width="100"
                    height="100"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>

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
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="bg-black text-white border-none shadow-none flex flex-col items-center justify-center max-h-full max-w-lg">
          <Input
            placeholder="Search products..."
            className="w-1/2 bg-white text-black"
          />
        </DialogContent>
      </Dialog>
    </header>
  );
}

function MegaMenu({ title, children }) {
  return (
    <div className="relative group">
      <span className="cursor-pointer">{title}</span>
      <div className="absolute left-0 right-0 h-fit w-screen bg-white border-t-2 border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="max-w-full mx-auto px-6 py-8">{children}</div>
      </div>
    </div>
  );
}
