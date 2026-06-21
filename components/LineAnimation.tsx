"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function LineAnimation({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("h-px w-full origin-left bg-neutral-400", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.9 }}
      transition={{ duration: 2.9, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
