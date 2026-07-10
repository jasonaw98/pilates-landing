"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import Community from "@/components/Community";
import { FacilitiesParallaxGrid } from "@/components/FacilitiesParallaxGrid";
import Footer from "@/components/Footer";

export default function UnmaskLayers() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Community exits in the first ~2/3; last viewport is reserved for the footer cover
  const layer1Y = useTransform(scrollYProgress, [0, 0.65], [0, -1200]);
  const gridProgress = useTransform(scrollYProgress, [0, 0.65], [0, 1]);

  return (
    <>
      <div ref={containerRef} className="relative min-h-[300dvh]">
        <div className="sticky top-0 z-10 h-screen overflow-hidden">
          <div className="absolute inset-0 z-10">
            <div className="relative h-full w-full">
              <FacilitiesParallaxGrid progress={gridProgress} />
              <div className="pointer-events-none absolute inset-x-0 bottom-[min(10%,8rem)] z-10 mx-auto flex max-w-xl justify-center px-4">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto w-[70%] max-w-xs rounded-full bg-[#F7F2EA] px-5 py-2.5 text-center font-nord text-xs uppercase tracking-[0.12em] text-taupe-700 shadow-sm sm:px-7 group relative overflow-hidden transition-all duration-300"
                >
                  <span className="block h-full transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                    See more on Instagram
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                    See more on Instagram
                  </span>
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
        </div>
      </div>

      {/*
        Pull the real footer up one viewport so the last stretch of the sticky
        track reveals it over the grid — no blank placeholder layer.
      */}
      <div className="relative z-30 mt-[-100dvh]">
        <Footer />
      </div>
    </>
  );
}
