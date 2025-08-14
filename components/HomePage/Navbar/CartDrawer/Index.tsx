import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/Context/CartContext";


interface CartDrawerProps {
  isHovered: boolean;
  setNavbarHovered: (value: boolean) => void; // add setter
}
function CartDrawer({ isHovered, setNavbarHovered }: CartDrawerProps) {
  const { cart, removeFromCart } = useCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ShoppingCart className={`cursor-pointer hover:text-gray-800 ${isHovered? 'text-black':'text-white'}`} />
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[400px]" onOpenAutoFocus={() => setNavbarHovered(false)}>
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cart.length})</SheetTitle>
        </SheetHeader>
        <Separator className="border-black border-2 my-2" />
        <div className="mt-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-base font-semibold">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-300 pb-2">
                <span>{item.title}</span>
                <span>£{item.price.toFixed(2)}</span>
                <Button variant="link" className="underline text-red-600" onClick={() => removeFromCart(index)}>
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>
        <SheetClose asChild>
          <Button variant="default" className="rounded-full text-base w-full mt-5"   onClick={() => setNavbarHovered(false)} >
           Continue Browsing
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
