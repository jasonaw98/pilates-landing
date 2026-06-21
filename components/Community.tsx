"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

export default function Community() {
  return (
    <div className="">
      <div className="flex flex-col px-4 py-12 items-center justify-center text-center gap-16 h-[80dvh] max-w-4xl mx-auto">
        <h1 className="font-nord text-taupe-700 text-h4 uppercase">
          From our community
        </h1>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem className="flex flex-col items-center justify-center gap-16">
              <p className="font-ivy-ora-display text-2xl md:text-h2 px-1 leading-[140%]">
                I didn't expect it to feel this different. <br />
                More
                <span className="italic">&nbsp;balanced</span> even after I've
                left."
              </p>
              <div className="flex flex-col items-center justify-center gap-1 font-nord text-taupe-700 text-[16px]">
                <p className="font-nord">Ethan L.</p>
                <p className="text-sm">Member since 2025</p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center gap-16">
              <p className="font-ivy-ora-display text-2xl md:text-h2 px-1 leading-[140%]">
                "It’s become something I look forward to each week. Not from
                discipline, but
                <span className="italic">&nbsp;desire</span>."
              </p>
              <div className="flex flex-col items-center justify-center gap-1 font-nord text-taupe-700 text-[16px]">
                <p className="font-nord">Clama m.</p>
                <p className="text-sm">Member since 2025</p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center gap-16">
              <p className="font-ivy-ora-display text-2xl md:text-h2 px-1 leading-[140%]">
                "It’s the one hour in my week that feels mine. <br />
                No pressure, no noise, just space to{" "}
                <span className="italic">move</span> and{" "}
                <span className="italic">reset</span>."
              </p>
              <div className="flex flex-col items-center justify-center gap-1 font-nord text-taupe-700 text-[16px]">
                <p className="font-nord">Sarah L.</p>
                <p className="text-sm">Member since 2025</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CustomCarouselControls />
        </Carousel>
      </div>
    </div>
  );
}

export function CustomCarouselControls() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className="flex mt-16 items-center w-fit mx-auto gap-2 border border-taupe-500 rounded-full px-2 py-1">
      <ChevronLeft
        className={`size-5 text-taupe-500 ${!canScrollPrev ? "opacity-50" : "cursor-pointer"}`}
        onClick={scrollPrev}
      />
      <ChevronRight
        className={`size-5 text-taupe-500 ${!canScrollNext ? "opacity-50" : "cursor-pointer"}`}
        onClick={scrollNext}
      />
    </div>
  );
}
