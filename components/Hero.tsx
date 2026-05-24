"use client";

import { Button } from "@base-ui/react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const DES_IMAGES = [
  {
    image: "/assets/hero.png",
    position: "23% 100%",
    size: "210%",
    filter: "",
    mobile_position: "45% 80%",
    mobile_size: "700%",
    mobile_filter: "",
  },
  {
    image: "/assets/bendyoga.jpg",
    position: "70% 90%",
    size: "110%",
    filter: "brightness(0.6) grayscale(1)",
    mobile_position: "50% 100%",
    mobile_size: "300%",
    mobile_filter: "brightness(0.4) grayscale(1)",
  },
  {
    image: "/assets/sitting.jpg",
    position: "0% 60%",
    size: "100%",
    filter: "",
    mobile_position: "45% 50%",
    mobile_size: "350%",
    mobile_filter: "brightness(0.5) grayscale(0)",
  },
  {
    image: "/assets/beach.jpg",
    position: "0% 40%",
    size: "100%",
    filter: "brightness(0.9) grayscale(0)",
    mobile_position: "100% 50%",
    mobile_size: "450%",
    mobile_filter: "brightness(0.8) grayscale(0.4)",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DES_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-screen">
      <div
        className={`absolute inset-0 bg-no-repeat brightness-50 grayscale-25 transition-all duration-1000 ease-in-out`}
        style={{
          backgroundImage: `url(${DES_IMAGES[currentIndex].image})`,
          backgroundPosition: isMobile
            ? DES_IMAGES[currentIndex].mobile_position
            : DES_IMAGES[currentIndex].position,
          backgroundSize: isMobile
            ? DES_IMAGES[currentIndex].mobile_size
            : DES_IMAGES[currentIndex].size,
          filter: isMobile
            ? DES_IMAGES[currentIndex].mobile_filter
            : DES_IMAGES[currentIndex].filter,
        }}
        aria-hidden="true"
      />
      
      <div className="relative flex flex-col items-center justify-end md:items-start gap-4 text-white h-full pb-12 px-4 md:px-20 z-10">
        <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex">
          A sanctuary for &nbsp;<p className="italic">stillness.</p>
        </h1>
        <p className="text-sm">
          More than a studio, Forme brings together movement, rest, and recovery
          in one considered space.
        </p>
        <Button className="bg-white text-taupe-700 font-nord py-3 px-8 w-full md:w-auto rounded-full text-xs uppercase group relative overflow-hidden cursor-pointer">
          <span className="block h-full transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
            BOOK NOW
          </span>
          <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
            BOOK NOW
          </span>
        </Button>
      </div>
    </main>
  );
}
