"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Subscriptions() {
  return (
    <div className="flex justify-center gap-5 mx-7">
      {/* Subscriptions card */}
      <Card className="relative group overflow-hidden rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0"
          style={{
            backgroundImage:
              "url('/HomePage/Subscriptions/bg-image-subscriptions.png')",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{
            backgroundImage:
              "url('/HomePage/Subscriptions/hover-bg-image-subscriptions.png')",
          }}
        />

        <div className="pt-[56.25%]" />

        <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/50" />

        <CardContent className="absolute inset-0 flex flex-col items-center justify-center w-full z-10 text-white text-center pt-5">
          <CardHeader className="flex flex-col items-center space-y-2 p-0">
            <CardTitle className="text-5xl md:text-3xl md:w-xl font-normal">
              Subscriptions
            </CardTitle>
            <CardDescription className="w-max text-white text-base font-light text-center">
              Ethically sourced and direct to your door
            </CardDescription>
            <Button
              variant="outline"
              className="w-fit group-hover:bg-white group-hover:text-black rounded-full bg-transparent"
            >
              Read More
            </Button>
          </CardHeader>
        </CardContent>

        {/* Brazil Trip Card */}
      </Card>
      <Card className="relative group overflow-hidden rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:opacity-0"
          style={{
            backgroundImage:
              "url('/HomePage/Subscriptions/bg-image-trip.png')",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:opacity-100"
          style={{
            backgroundImage:
              "url('/HomePage/Subscriptions/hover-bg-image-trip.png')",
          }}
        />

        <div className="pt-[56.25%]" />
        <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/50" />

        <CardContent className="absolute inset-0 flex flex-col items-center justify-center w-full z-10 text-white text-center pt-5">
          <CardHeader className="flex flex-col items-center space-y-2 p-0">
            <CardTitle className="text-5xl lg:w-max  md:text-3xl md:w-xl font-normal">
              Brazil Trip 2024
            </CardTitle>
            <CardDescription className="w-max text-white text-base font-light text-center">
              Blog
            </CardDescription>
            <Button
              variant="outline"
              className="w-fit group-hover:bg-white group-hover:text-black rounded-full bg-transparent"
            >
              Read More
            </Button>
          </CardHeader>
        </CardContent>
      </Card>
    </div>
  );
}
