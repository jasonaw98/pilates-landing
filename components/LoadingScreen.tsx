"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  title?: string | React.ReactNode;
  duration?: number;
}

export default function LoadingScreen({
  title,
  duration = 1500,
}: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.4,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className=" fixed inset-0 z-9999 flex items-center justify-center bg-[#3A1A12]"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: "100%",
                opacity: 0,
              }}
              animate={{
                y: "0%",
                opacity: 1,
              }}
              transition={{
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-8xl text-white will-change-transform"
            >
              {title}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
