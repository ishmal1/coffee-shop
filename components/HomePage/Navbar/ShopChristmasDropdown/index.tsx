"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
interface ShopChristmasDropdownProps {
  isHovered: boolean;
}


export function ShopChristmasDropdown({ isHovered }: ShopChristmasDropdownProps) {
  return (
<div className=" group">
  {/* Trigger */}
  <ul className="flex items-center gap-1 cursor-pointer text-white font-medium">
    <li className={`flex items-center gap-1 hover:text-gray-800  font-semibold transition-colors duration-200  ${
      isHovered ? 'text-black' : 'text-white'
    }`}>
      Shop Christmas
      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
    </li>
  </ul>

  {/* Dropdown content */}
  <div className="absolute  top-22 left-0 w-full mx-auto   bg-[#F6F8F2] border-t-2 border-black shadow-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className=" px-6 py-8  flex gap-20 justify-center ">
      {/* Left links */}
      <div className="flex mr-5  gap-10 ">

        <ul className="flex flex-col gap-3 ">
           <li className="text-black text-base font-semibold pb-2">

          Shop Christmas Coffees
          </li>
          <li>

          <a href="#" className="text-muted-foreground hover:text-black  hover:underline">Shop Christmas</a>
          </li>
           <li>

          <a href="#" className="text-muted-foreground hover:text-black  hover:underline">Single Origin Subscription</a>
          </li>
           <li>

          <a href="#" className="text-muted-foreground hover:text-black  hover:underline">Capsules</a>
          </li>
           <li>

          <a href="#" className="text-muted-foreground hover:text-black  hover:underline">Gift Card</a>
          </li>
          
        </ul>
       
      </div>

      {/* Right images */}
   <div className="flex gap-8">
    {/* Image 1 */}
    <div className="flex flex-col items-center">
      <img
        src="/HomePage/Navbar/ShopChristmasDropdown/clifton-marchendise-shopchristmas.png"
        alt="Clifton Merchandise"
        className="min-w-sm min-h-sm object-cover rounded-md"
      />
      <span className="mt-2 font-bold text-base">Clifton Merchandise</span>
      <span className="text-gray-500 text-xs">Clifton Coffee X Zara Mcdermott</span>
    </div>
         <div className="flex flex-col items-center">
      <img
        src="/HomePage/Navbar/ShopChristmasDropdown/brewing-equipment-shopchristmas.png"
        alt="Clifton Merchandise"
        className="min-w-sm min-h-sm object-cover rounded-md"
      />
      <span className="mt-2 font-bold text-base">Brewing Equipment</span>
      <span className="text-gray-500 text-xs">MiiR X Clifton Coffee</span>
    </div>
        </div>
       
      </div>
    </div>
  </div>





  );
}