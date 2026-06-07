"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.9, ease: [0.52, 1, 0.36, 1] },
  },
};

const classCardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.12 },
  },
};

const imageRevealVariants: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0 round 0.375rem)" },
  visible: {
    clipPath: "inset(0 0 0% 0 round 0.375rem)",
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageZoomVariants: Variants = {
  hidden: { scale: 1.12 },
  visible: {
    scale: 1,
    transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FormExperience() {
  return (
    <div className="bg-[#F7F2EA] h-screen px-4 py-12 grid grid-rows-2">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}
        className="flex flex-col items-center justify-center text-center gap-8"
      >
        <h1 className="font-nord text-taupe-700 text-lg uppercase">
          The Forme Experience
        </h1>
        <p className="font-ivy-ora-display text-2xl px-1 md:max-w-3xl md:text-3xl tracking-wide">
          Forme is designed to help you move, rest and return. A considered
          space where different approaches to wellness combine to help you feel
          at home in your
          <span className="italic">&nbsp;body</span> and
          <span className="italic">&nbsp;mind</span>.
        </p>
        <Image
          src="/logo/brown_logomark.svg"
          alt="Forme Experience"
          width={80}
          height={80}
        />
      </motion.div>
      <div className="relative flex flex-col items-center justify-center gap-4 px-2">
        <motion.div
          className="absolute top-0 left-0 h-px w-full origin-left bg-neutral-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.9 }}
          transition={{ duration: 2.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          variants={classCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          className="flex w-full flex-col items-center justify-center gap-4"
        >
          <div className="relative w-full">
            <motion.div
              variants={imageRevealVariants}
              className="relative w-full overflow-hidden rounded-md"
            >
              <motion.div variants={imageZoomVariants} className="relative w-full">
                <Image
                  src="/assets/pilates_fundamentals.jpg"
                  alt="Forme Experience"
                  width={400}
                  height={600}
                  className="aspect-video object-cover brightness-70 object-[50%_80%]"
                />
              </motion.div>
            </motion.div>
            <motion.button
              variants={fadeUpVariants}
              type="button"
              className="group absolute inset-0 m-auto flex h-9 w-32 items-center justify-center overflow-hidden rounded-full bg-white font-nord text-xs uppercase text-taupe-700 shadow"
            >
              <span className="block transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:-translate-y-full group-hover:opacity-0">
                view class
              </span>
              <span className="absolute inset-0 flex h-full translate-y-full items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:translate-y-0">
                view class
              </span>
            </motion.button>
          </div>

          <motion.div
            variants={fadeUpVariants}
            className="flex w-full flex-col items-start gap-2"
          >
            <h1 className="font-ivy-ora-display text-left text-taupe-700 text-2xl">
              Pilates Fundamentals
            </h1>
            <p className="flex items-center gap-2 font-nord text-taupe-700 text-xs uppercase">
              50 MINS <span className="size-1 bg-taupe-700 rounded-full" />{" "}
              BEGINNER <span className="size-1 bg-taupe-700 rounded-full" /> MAX 6
              PER GROUP
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
