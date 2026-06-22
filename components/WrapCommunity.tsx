"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Community from "@/components/Community";

export default function UnmaskLayers() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const layer1Y = useTransform(scrollYProgress, [0, 0.6], [0, -1200]);
  const layer3Y = useTransform(scrollYProgress, [0.6, 1], [1000, 0]);

  return (
    <div ref={containerRef} className="relative min-h-[300dvh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-red-600">
          <div className="relative h-full w-full text-center text-white">
            <Image src="/facilities/grid.png" alt="Community" fill />
            <div className="pointer-events-none absolute inset-x-0 bottom-[min(10%,8rem)] flex justify-center w-full px-4">
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto md:max-w-xs font-nord w-full text-center text-taupe-700 bg-[#F7F2EA] rounded-full px-6 py-2.5 text-xs uppercase tracking-[0.12em] shadow-sm sm:text-xs"
              >
                See more on Instagram
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center bg-[#F7F2EA]"
          style={{ y: layer1Y }}
        >
          <Community />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-30 overflow-yuto will-change-transform transform-gpu"
          style={{ y: layer3Y }}
        >
          <div className="h-full w-full bg-[#3A1A12] text-[#3A1A12]">...</div>
        </motion.div>
      </div>
    </div>
  );
}
