"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FACILITIES = [
  {
    name: "Reformer Studio",
    image: "/assets/pilates_fundamentals.jpg",
    objectPosition: "50% 75%",
  },
  {
    name: "Mat Studio",
    image: "/assets/bendyoga.jpg",
    objectPosition: "50% 50%",
  },
  {
    name: "Recovery Lounge",
    image: "/assets/sitting.jpg",
    objectPosition: "50% 60%",
  },
  {
    name: "Onsen",
    image: "/assets/nav_sheet.jpg",
    objectPosition: "50% 80%",
  },
  {
    name: "Pool",
    image: "/assets/pool.jpg",
    objectPosition: "40% center",
  },
  {
    name: "Sauna",
    image: "/assets/chair.jpg",
    objectPosition: "50% 50%",
  },
] as const;

export default function OurFacilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const triggers = triggerRefs.current.filter(Boolean) as HTMLDivElement[];
    if (triggers.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!best) return;
        const index = Number(best.target.getAttribute("data-index"));
        if (!Number.isNaN(index)) setActiveIndex(index);
      },
      {
        root: null,
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const trigger of triggers) observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#F7F2EA]">
      <div className="sticky top-0 z-10 flex h-dvh min-h-140 flex-col px-6 pt-14 pb-8">
        <h2 className="font-nord text-taupe-700 text-center text-sm uppercase tracking-[0.2em]">
          Our Facilities
        </h2>

        <ul
          className="mt-10 flex flex-1 flex-col items-center justify-center gap-8"
          aria-live="polite"
        >
          {FACILITIES.map((facility, index) => {
            const isActive = index === activeIndex;
            return (
              <li
                key={facility.name}
                className={cn(
                  "font-ivy-ora-display text-center text-[1.75rem] leading-tight transition-[color,opacity,font-style] duration-500 sm:text-4xl",
                  isActive
                    ? "text-[#2C1F18] italic opacity-100"
                    : "text-[#B8B0A8] not-italic opacity-70",
                )}
              >
                {facility.name}
              </li>
            );
          })}
        </ul>

        <div className="relative mx-auto mt-6 aspect-4/5 w-full max-w-xs shrink-0 overflow-hidden rounded-lg sm:max-w-sm">
          {FACILITIES.map((facility, index) => (
            <Image
              key={facility.name}
              src={facility.image}
              alt={facility.name}
              fill
              sizes="(max-width: 768px) 90vw, 384px"
              className={cn(
                "object-cover transition-opacity duration-700 ease-out brightness-75",
                index === activeIndex ? "opacity-100" : "opacity-0",
              )}
              style={{ objectPosition: facility.objectPosition }}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <div className="relative z-0">
        {FACILITIES.map((facility, index) => (
          <div
            key={facility.name}
            ref={(el) => {
              triggerRefs.current[index] = el;
            }}
            data-index={index}
            className="h-dvh"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
