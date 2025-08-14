import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Video Background */}
    <video
  className="absolute top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  {/* Primary WebM source */}
  <source src="/HomePage/HeroSection/video-herosection.webm" type="video/webm" />

      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 mt-5 text-center text-white px-6">
        <h1 className="text-7xl font-semibold mb-4">Bold Coffee Moments</h1>
        <Button variant='outline' className="bg-transparent text-white rounded-full px-10 mt-5 py-3 hover:bg-black/60 hover:border-black/40 hover:text-white"> Shop Now</Button>
      </div>
    </section>
  );
}
