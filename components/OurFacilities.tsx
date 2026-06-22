"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FACILITIES = [
  {
    name: "Reformer Studio",
    image: "/facilities/81.png",
  },
  {
    name: "Mat Studio",
    image: "/facilities/81-2.png",
  },
  {
    name: "Recovery Lounge",
    image: "/facilities/81-4.png",
  },
  {
    name: "Onsen",
    image: "/facilities/81-6.png",
  },
  {
    name: "Pool",
    image: "/facilities/81-8.png",
  },
  {
    name: "Sauna",
    image: "/facilities/81-10.png",
  },
] as const;

const FACILITIES_2 = [
  {
    name: "Reformer Studio",
    image: "/facilities/81-1.png",
  },
  {
    name: "Mat Studio",
    image: "/facilities/81-3.png",
  },
  {
    name: "Recovery Lounge",
    image: "/facilities/81-5.png",
  },
  {
    name: "Onsen",
    image: "/facilities/81-7.png",
  },
  {
    name: "Pool",
    image: "/facilities/81-9.png",
  },
  {
    name: "Sauna",
    image: "/facilities/81-11.png",
  },
] as const;

export default function OurFacilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 50,
  });

  useMotionValueEvent(progress, "change", (latest) => {
    const nextIndex = Math.round(latest * (FACILITIES.length - 1));

    setActiveIndex(nextIndex);
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[650dvh] bg-[#F7F2EA] py-24"
    >
      <h2 className="sticky top-0 font-nord text-taupe-700 text-center text-lg text-h4 md:text-3xl uppercase tracking-[0.2em] pt-10 md:pt-20">
        Our Facilities
      </h2>
      <div className=" sticky top-0 flex h-screen items-center justify-center overflow-hidden pt-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-2 md:gap-16 px-6 lg:grid-cols-2 xl:grid-cols-3 xl:max-w-[90vw] xl:h-[70dvh] xl:px-0">
          {/* LEFT SIDE */}
          <div className="hidden xl:flex justify-start items-start">
            <div className=" relative h-90 md:h-125 xl:h-90 w-full max-w-md overflow-hidden rounded-3xl">
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    fill
                    priority
                    src={FACILITIES[activeIndex].image}
                    alt={FACILITIES[activeIndex].name}
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Text Side */}
          <div className="relative flex items-center">
            <div className="mt-2 overflow-hidden text-center flex w-full">
              <motion.ul className="space-y-3 md:space-y-6 flex flex-col justify-center items-center w-full">
                {FACILITIES.map((facility, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.li
                      key={facility.name}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className={cn(
                        "font-ivy-ora-display text-2xl md:text-3xl md:text-h2 transform-gpu",
                        isActive ? "text-[#2C1F18] italic" : "text-[#A89F96]",
                      )}
                    >
                      {facility.name}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center xl:items-end">
            <div className=" relative h-80 md:h-125 xl:h-90 w-full max-w-md overflow-hidden rounded-3xl transform-gpu">
              <AnimatePresence mode="sync">
                <motion.div
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    fill
                    priority
                    src={FACILITIES_2[activeIndex].image}
                    alt={FACILITIES_2[activeIndex].name}
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        className="absolute bottom-0 h-px w-full origin-left bg-neutral-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{
          once: false,
          amount: 0.9,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </section>
  );
}
