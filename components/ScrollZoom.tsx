"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface ScrollZoomRevealProps {
  image: string;
  title: string;
}

export default function ScrollZoomReveal({
  image,
  title,
}: ScrollZoomRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * Smooth out scrolling
   */
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  /**
   * CARD EXPANSION
   */
  const width = useTransform(progress, [0, 0.45], ["22vw", "100vw"]);

  const height = useTransform(progress, [0, 0.45], ["65dvh", "100dvh"]);

  /**
   * Rounded card -> fullscreen
   */
  const borderRadius = useTransform(progress, [0, 0.2, 0.45], [60, 40, 0]);

  /**
   * Slight rotation
   */
  const rotate = useTransform(progress, [0, 0.5], [0, 0]);

  /**
   * Image movement
   */
  const imageScale = useTransform(progress, [0, 1], [1.25, 1]);

  const imageY = useTransform(progress, [0, 1], [100, -100]);

  /**
   * Dark overlay disappears
   */
  const overlayOpacity = useTransform(progress, [0, 0.45], [0.5, 0]);

  /**
   * Text reveal
   */
  const textOpacity = useTransform(progress, [0.55, 0.75], [0, 1]);

  const textY = useTransform(progress, [0.55, 0.75], [60, 0]);

  /**
   * Background blur
   */

  return (
    <section ref={containerRef} className="relative h-[400dvh] bg-[#3A1A12]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background glow */}
        {/* <motion.div
          style={{
            opacity: shadowOpacity,
            filter,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[70vh]
            w-[25vw]
            -translate-x-1/2
            -translate-y-1/2
            rounded-[60px]
            bg-white/20
          "
        /> */}

        {/* Main Card */}
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            rotate,
          }}
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden will-change-transform transform-gpu"
        >
          {/* Image */}
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
            }}
            className="relative h-[110%] w-full"
          >
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="w-full object-cover "
            />
          </motion.div>

          {/* Dark overlay */}
          <motion.div
            style={{
              opacity: overlayOpacity,
            }}
            className="absolute inset-0 bg-black"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          className=" absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="max-w-5xl px-8 text-center text-white flex-col flex justify-between items-center h-full py-20 pt-36">
            <h1 className="text-h2 font-ivy-ora-display break-keep text-center flex flex-col gap-2 md:flex-row">
              <p>Begin your</p>
              <div className="flex">
                <p className="italic">wellness</p>
                <p>&nbsp;journey.</p>
              </div>
            </h1>

            <a
              href="https://tally.so/r/LZyNYv"
              target="_blank"
              rel="noopener noreferrer"
              className="font-nord text-taupe-700 bg-[#F7F2EA] rounded-full w-full text-center py-2.5 px-6 uppercase text-xs md:max-w-xs cursor-pointer group relative overflow-hidden"
            >
              <span className="block h-full transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                Book your first class
              </span>
              <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                Book your first class
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
