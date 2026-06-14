"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
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

const ITEM_HEIGHT = 50;

export default function OurFacilities() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 50,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.round(latest * (FACILITIES.length - 1));

    setActiveIndex(nextIndex);
  });

  const listY = useTransform(
    progress,
    [0, 1],
    [0, -(FACILITIES.length - 1) * ITEM_HEIGHT],
  );

  const progressHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[600vh] bg-[#F7F2EA] py-24"
    >
      <h2 className="sticky top-0 font-nord text-taupe-700 text-center text-xl md:text-3xl uppercase tracking-[0.2em] pt-10 md:pt-20">
        Our Facilities
      </h2>
      <div className=" sticky top-0 flex h-screen items-center justify-center overflow-hidden pt-20">
        <div className=" mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="relative flex items-center">
            {/* Progress line */}
            <div className="absolute left-0 top-0 h-full w-px bg-neutral-300">
              <motion.div
                style={{
                  height: progressHeight,
                }}
                className="w-full bg-[#bc8b71]"
              />
            </div>

            <div className="ml-10 mt-2 overflow-hidden">
              <motion.ul
                style={{
                  y: listY,
                }}
                className="space-y-3 md:space-y-6"
              >
                {FACILITIES.map((facility, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.li
                      key={facility.name}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        scale: isActive ? 1.05 : 1,
                        x: isActive ? 16 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className={cn(
                        "font-ivy-ora-display text-3xl md:text-6xl",
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
          <div className="flex items-center justify-center">
            <div className=" relative h-90 md:h-125 w-full max-w-md overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
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
                    duration: 0.7,
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
