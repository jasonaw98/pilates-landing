"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import Community from "@/components/Community";
import { FacilitiesParallaxGrid } from "@/components/FacilitiesParallaxGrid";

export default function UnmaskLayers() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const layer1Y = useTransform(scrollYProgress, [0, 0.6], [0, -1200]);
  const layer3Y = useTransform(scrollYProgress, [0.6, 1], [1000, 0]);
  const gridProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 z-10">
          <div className="relative h-full w-full">
            <FacilitiesParallaxGrid progress={gridProgress} />
            <div className="pointer-events-none absolute inset-x-0 bottom-[min(10%,8rem)] z-10 mx-auto flex max-w-xl justify-center px-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto w-[70%] max-w-xs rounded-full bg-[#F7F2EA] px-5 py-2.5 text-center font-nord text-xs uppercase tracking-[0.12em] text-taupe-700 shadow-sm sm:px-7"
              >
                See more on Instagram
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-20 bg-[#F7F2EA] will-change-transform transform-gpu"
          style={{ y: layer1Y }}
        >
          <Community />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-30 overflow-y-auto will-change-transform transform-gpu"
          style={{ y: layer3Y }}
        >
          <div className="h-full w-full bg-[#3A1A12]" />
        </motion.div>
      </div>
    </div>
  );
}
