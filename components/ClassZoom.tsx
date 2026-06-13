"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollZoomRevealProps {
  image: string;
  title?: string;
  content?: React.ReactNode;
  bgPosition?: string;
}

export default function ClassZoomReveal({
  image,
  title,
  content,
  bgPosition,
}: ScrollZoomRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end end"],
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
  const width = useTransform(progress, [0, 0.05], ["70vw", "100vw"]);

  const height = useTransform(progress, [0, 0.05], ["65dvh", "100dvh"]);

  /**
   * Rounded card -> fullscreen
   */
  const borderRadius = useTransform(progress, [0, 0.2, 0.45], [30, 10, 0]);

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
  const textOpacity = useTransform(progress, [0.25, 0.75], [0, 1]);

  const textY = useTransform(progress, [0.25, 0.75], [60, 0]);


  return (
    <section ref={containerRef} className="relative h-[300dvh]">
      <div className="sticky top-0 h-screen overflow-hidden">
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
            className="relative h-[110%] w-full brightness-90"
          >
            <Image
              src={image}
              alt={image}
              fill
              priority
              sizes="100vw"
              className={cn("h-[110%] w-full object-cover brightness-40 grayscale-5 scale-[1.2]", bgPosition)}
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
          {content}
        </motion.div>
      </div>
    </section>
  );
}
