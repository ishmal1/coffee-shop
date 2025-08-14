"use client";



import { Navbar } from "../components/HomePage/Navbar";
import CollectionsCarousel from "@/components/HomePage/CollectionsCarousel";
import { ProductsTab } from "@/components/HomePage/ProductsTab";
import { Subscriptions } from "@/components/HomePage/Subscriptions";
import VirtualToursSection from "@/components/HomePage/VirtualToursSection";
import NewsletterSection from "@/components/HomePage/NewsletterSection";
import ShopCoffeeSection from "@/components/HomePage/ShopCoffeeSection";
import { Footer } from "@/components/HomePage/Footer";
import { FavoritesCarousel } from "@/components/HomePage/FavoritesCarousel";
import { ReviewsCarousel } from "@/components/HomePage/ReviewsCarousel";
import { FollowSectionCarousel } from "@/components/HomePage/FollowSectionCarousel";
import { HeroSection } from "@/components/HomePage/HeroSection";

export default function HomePage() {
  return (
    <>
      <header className=" top-0 left-0 w-full z-50 bg-black text-white text-sm py-2 px-6 sm:px-10 lg:px-16 text-center">
        Order before 10am for same day dispatch!
      </header>

      <Navbar />

      <main className="h-full overflow-hidden">
        <HeroSection />

        <CollectionsCarousel />

        <ProductsTab />
        {/* ShopCoffee section */}
        <ShopCoffeeSection />
       
        <FavoritesCarousel />
        {/* Subscriptions and trip section */}
        <Subscriptions />
        {/* Virtual tours section*/}
        <VirtualToursSection />
        <ReviewsCarousel />
        <FollowSectionCarousel />

        <NewsletterSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
