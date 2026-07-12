"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function MoreThanJust() {
  const moreThanJustRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: moreThanJustRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "48%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.4, 0]);

  return (
    <main ref={moreThanJustRef} className="relative h-screen">
      <motion.div
        className="absolute inset-0 bg-position-[40%_center] bg-size-[300%] md:bg-size-[150%] bg-no-repeat brightness-50 bg-[url('/assets/pool.jpg')]"
        aria-hidden="true"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="relative flex flex-col items-center justify-center gap-4 text-white h-full pb-12 px-4 z-10"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="text-[32px] font-ivy-ora-display break-keep text-center flex md:text-h1">
          <p>More than&nbsp;</p>
          <div className="flex">
            just a&nbsp;<p className="italic">studio.</p>
          </div>
        </h1>
      </motion.div>
    </main>
  );
}
