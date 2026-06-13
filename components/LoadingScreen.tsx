"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  title?: string | React.ReactNode;
  duration?: number;
}

export default function LoadingScreen({
  title,
  duration = 2500,
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
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className="text-5xl md:text-8xl text-white"
          >
            {title}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
