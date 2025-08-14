import React from "react";

function ShopCoffeeSection() {
  return (
    <div
      className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-cover bg-center mt-10 mb-5"
      style={{
        backgroundImage: "url('/HomePage/ShopCoffee/bg-image-shopcoffee.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col gap-4 items-start mx-6 justify-center text-white px-4">
        <p className="text-lg max-w-xl">Clifton Coffee — Speciality Coffee</p>
        <h2 className="text-6xl  mb-2">Shop Coffee</h2>
        <p className="text-lg max-w-xl">
          Discover your perfect cup of coffee—crafted to match your taste and
          style. Wake up to perfection every day!
        </p>
      </div>
    </div>
  );
}

export default ShopCoffeeSection;
