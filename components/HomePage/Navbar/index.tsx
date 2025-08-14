"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ShopChristmasDropdown } from "./ShopChristmasDropdown";
import CartDrawer from "./CartDrawer/Index";
import CoffeeDropdown from "./CoffeeDropdown";
import AccessoriesDropdown from "./AccessoriesDropdown";
import SubscriptionsDropdown from "./SubscriptionsDropdown";
import { SearchDialog } from "./SearchDialog";

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [navbarHovered, setNavbarHovered] = useState(false);

  return (
    <nav 
      className="absolute top-[32px] left-0 w-full z-40 bg-transparent hover:bg-[#F6F8F2] transition-colors duration-300"
      onMouseEnter={() => setNavbarHovered(true)}
      onMouseLeave={() => setNavbarHovered(false)}
    >
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="flex justify-start gap-12  items-center py-4 border-b-2 ">
          <div className="flex items-center gap-6">
        
            <ShopChristmasDropdown isHovered={navbarHovered} />
            <CoffeeDropdown isHovered={navbarHovered} />
            <SubscriptionsDropdown isHovered={navbarHovered} />
            <AccessoriesDropdown isHovered={navbarHovered} />
          </div>

          <a href="/" className="  ">
            <img
              src="/HomePage/Navbar/logo-navbar.svg"
              alt="logo"
              className="transition-all duration-300"
              style={{
                filter: navbarHovered ? 'invert(1)' : 'invert(0)'
              }}
            />
          </a>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex gap-6">
              <Link
                href="/wholesale"
                className={`hover:text-gray-800 text-base font-medium transition-colors ${
                  navbarHovered ? 'text-black' : 'text-white'
                }`}
              >
                WholeSale
              </Link>
              <Link
                href="/education"
                className={`hover:text-gray-800  text-base font-medium transition-colors ${
                  navbarHovered ? 'text-black' : 'text-white'
                }`}
              >
                Education
              </Link>
              <Link 
                href="/" 
                className={`hover:text-gray-800 text-base font-medium  transition-colors ${
                  navbarHovered ? 'text-black' : 'text-white'
                }`}
              >
                Our Ethos
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <UserRound className={`cursor-pointer hover:text-gray-800  ${
                navbarHovered ? 'text-black' : 'text-white'
              }`} />
              <SearchDialog  isHovered={navbarHovered} setNavbarHovered={setNavbarHovered}/>
              <CartDrawer isHovered={navbarHovered} setNavbarHovered={setNavbarHovered}/>
            </div>

            <div className="md:hidden">
              <button className={`hover:text-gray-800  ${
                navbarHovered ? 'text-black' : 'text-gray-300'
              }`}>
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </nav>
  );
}