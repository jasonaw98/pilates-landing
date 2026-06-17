"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const INSTAGRAM_URL = "https://www.instagram.com";

function CommunityPhotoMosaic() {
  const cell = "relative min-h-0 overflow-hidden";

  return (
    <div className="relative w-full bg-white">
      <div className="grid w-full min-h-[min(72vw,28rem)] h-[min(58dvh,40rem)] max-h-176 grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)_minmax(0,1fr)] grid-rows-12 gap-0.75 bg-white">
        <div className={`${cell} col-start-1 row-span-4 row-start-1`}>
          <Image
            src="/assets/bench.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 28vw, 200px"
            className="object-cover object-center brightness-90"
          />
        </div>
        <div className={`${cell} col-start-1 row-span-4 row-start-5`}>
          <Image
            src="/assets/bendyoga.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 28vw, 200px"
            className="object-cover object-center brightness-[0.75]"
          />
        </div>
        <div className={`${cell} col-start-1 row-span-4 row-start-9`}>
          <Image
            src="/assets/sitting.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 28vw, 200px"
            className="object-cover object-[50%_60%] brightness-[0.75]"
          />
        </div>

        <div className={`${cell} col-start-2 row-span-8 row-start-1`}>
          <Image
            src="/assets/pilates_fundamentals.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 44vw, 420px"
            className="object-cover object-[50%_75%] brightness-[0.75]"
          />
        </div>
        <div className={`${cell} col-start-2 row-span-4 row-start-9`}>
          <Image
            src="/assets/beach.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 44vw, 420px"
            className="object-cover object-center brightness-[0.75]"
          />
        </div>

        <div className={`${cell} col-start-3 row-span-6 row-start-1`}>
          <Image
            src="/assets/yoga.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 28vw, 200px"
            className="object-cover object-[50%_30%] grayscale contrast-[1.05]"
          />
        </div>
        <div className={`${cell} col-start-3 row-span-6 row-start-7`}>
          <Image
            src="/assets/chair.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 28vw, 200px"
            className="object-cover object-center brightness-[0.75]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[min(8%,3rem)] flex justify-center px-4 max-w-xl mx-auto">
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto font-nord w-[70%] text-center text-taupe-700 bg-[#F7F2EA] rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.12em] shadow-sm sm:px-7 sm:text-xs max-w-xs"
        >
          See more on Instagram
        </Link>
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <div className="">
      <div className="flex flex-col px-4 py-12 items-center justify-center text-center gap-16 h-[80dvh] max-w-4xl mx-auto">
        <Carousel className="">
          <CarouselContent>
            <CarouselItem className="flex flex-col items-center justify-center gap-16">
              <h1 className="font-nord text-taupe-700 text-h4 uppercase">
                From our community
              </h1>
              <p className="font-ivy-ora-display text-2xl md:text-h2 px-1">
                I didn't expect it to feel this different. More
                <span className="italic">&nbsp;balanced</span> even after I've
                left."
              </p>
              <div className="flex flex-col items-center justify-center gap-1 font-nord text-taupe-700 text-[16px]">
                <p className="font-nord">Ethan L.</p>
                <p className="text-sm">Member since 2025</p>
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col items-center justify-center gap-16">
              <h1 className="font-nord text-taupe-700 text-h4 uppercase">
                From our community
              </h1>
              <p className="font-ivy-ora-display text-2xl md:text-h2 px-1">
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
              <h1 className="font-nord text-taupe-700 text-h4 uppercase">
                From our community
              </h1>
              <p className="font-ivy-ora-display text-2xl md:text-h2 px-1">
                "It’s the one hour in my week that feels entirely mine. No
                pressure, no noise, just space to{" "}
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

      <CommunityPhotoMosaic />
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
