"use client";

import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const IMAGES = [
  "/facilities/81-8.png",
  "/facilities/81-4.png",
  "/facilities/81.png",
  "/facilities/81-6.png",
  "/facilities/81-9.png",
  "/facilities/81-5.png",
] as const;

type FacilitiesParallaxGridProps = {
  progress: MotionValue<number>;
  className?: string;
};

function GridColumn({
  progress,
  yRange,
  filter,
  className,
}: {
  progress: MotionValue<number>;
  yRange: [string, string];
  filter: (index: number) => boolean;
  className?: string;
}) {
  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 10,
  });
  const y = useTransform(smoothProgress, [0, 1], yRange);

  return (
    <motion.div
      style={{ y }}
      className={cn(
        "grid h-[120%] w-full grid-rows-3 will-change-transform transform-gpu",
        className,
      )}
    >
      {IMAGES.map((image, index) => {
        if (!filter(index)) return null;
        return (
          <div
            key={image}
            className={cn(
              "min-h-0 border-3 border-[#3A1A12]",
              index % 2 === 0 ? "row-span-1" : "row-span-2",
            )}
          >
            <Image
              src={image}
              alt=""
              width={1000}
              height={1000}
              sizes="33vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        );
      })}
    </motion.div>
  );
}

/** Parallax facilities grid — pass `progress` 0→1 from parent scroll. */
export function FacilitiesParallaxGrid({
  progress,
  className,
}: FacilitiesParallaxGridProps) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-white",
        className,
      )}
    >
      <div className="flex h-full w-full">
        <GridColumn
          progress={progress}
          yRange={["0%", "-5%"]}
          filter={(index) => index < 2}
        />
        <GridColumn
          progress={progress}
          yRange={["0%", "5%"]}
          filter={(index) => index > 1 && index < 4}
          className="-mt-20 h-[130%]"
        />
        <GridColumn
          progress={progress}
          yRange={["0%", "-5%"]}
          filter={(index) => index > 3}
        />
      </div>
    </div>
  );
}
