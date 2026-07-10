"use client";

import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const IMAGES = [
  "/facilities/grid/1.png",
  "/facilities/grid/2.png",
  "/facilities/grid/3.png",
  "/facilities/grid/4.png",
  "/facilities/grid/5.png",
  "/facilities/grid/6.png",
] as const;

const MobileIMAGES = [
  "/facilities/grid/mobile/1.png",
  "/facilities/grid/mobile/2.png",
  "/facilities/grid/mobile/3.png",
  "/facilities/grid/mobile/4.png",
  "/facilities/grid/mobile/5.png",
  "/facilities/grid/mobile/6.png",
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
  const isMobile = useIsMobile();
  const GRID_IMAGES = isMobile ? MobileIMAGES : IMAGES;
  const smoothProgress = useSpring(progress, {
    stiffness: 100,
    damping: 10,
  });
  const y = useTransform(smoothProgress, [0, 1], yRange);

  return (
    <motion.div
      style={{ y }}
      className={cn(
        "grid h-[110%] w-full grid-rows-3 will-change-transform transform-gpu",
        className,
      )}
    >
      {GRID_IMAGES.map((image, index) => {
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
              className="h-full w-full object-cover object-center transform-gpu"
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
      {/* Keep desktop column proportions on mobile — crop overflow instead of squeezing */}
      <div className="absolute inset-y-0 left-1/2 flex h-full w-full min-w-4xl -translate-x-1/2">
        <GridColumn
          progress={progress}
          yRange={["0%", "-3%"]}
          filter={(index) => index < 2}
        />
        <GridColumn
          progress={progress}
          yRange={["0%", "3%"]}
          filter={(index) => index > 1 && index < 4}
          className="-mt-20 h-[130%]"
        />
        <GridColumn
          progress={progress}
          yRange={["0%", "-3%"]}
          filter={(index) => index > 3}
        />
      </div>
    </div>
  );
}
