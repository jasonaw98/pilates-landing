"use client";

import { motion, useScroll, useTransform, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const CLASSES = [
  {
    name: "Pilates Fundamentals",
    image: "/assets/pilates_fundamentals.jpg",
    level: "All Levels",
    objectPosition: "33% 80%",
    imageScale: 1,
    href: "/class/fundamentals",
  },
  {
    name: "Reformer Pilates",
    image: "/assets/bendyoga.jpg",
    level: "All Levels",
    objectPosition: "90% 100%",
    href: "/class/reformer",
    imageScale: 1,
  },
  {
    name: "Slow Flow Yoga",
    image: "/instructor/lior.jpg",
    level: "All Levels",
    objectPosition: "60% 80%",
    href: "/class/slow-flow",
    imageScale: 2,
  },
  {
    name: "Yin Yoga",
    image: "/assets/mindful.png",
    level: "Hard",
    objectPosition: "33% 80%",
    href: "/class/yin",
    imageScale: 1,
  },
  {
    name: "Guided Meditation",
    image: "/assets/guided_meditation.jpg",
    level: "All Levels",
    href: "/class/guided-meditation",
    objectPosition: "33% 100%",
    imageScale: 1,
  },
  {
    name: "Soundbath Meditation",
    image: "/assets/soundbath.jpg",
    level: "All Levels",
    href: "/class/soundbath",
    objectPosition: "33% 60%",
    imageScale: 1,
  },
] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.9, ease: [0.52, 1, 0.36, 1] },
  },
};

const imageZoomVariants: Variants = {
  hidden: { scale: 1.12 },
  visible: {
    scale: 1,
    transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
  },
};

function HorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0, 0], {
    clamp: true,
  });

  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -80], {
    clamp: true,
  });

  const cardsY = useTransform(scrollYProgress, [0.1, 0.3], [200, 0], {
    clamp: true,
  });

  const cardsOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.99],
    [0, 1, 1],
    {
      clamp: true,
    },
  );

  const x = useTransform(scrollYProgress, [0.3, 1], ["0%", "-70%"], {
    clamp: true,
  });

  return (
    <section ref={ref} className="relative h-[300dvh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#F7F2EA]">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="absolute top-40 left-1/2 -translate-x-1/2 text-center z-20"
        >
          <h2 className="mt-4 text-5xl md:text-7xl text-taupe-700 font-ivy-ora-display">
            Our <span className="text-taupe-700 italic">Classes</span>
          </h2>
        </motion.div>
        <motion.div
          style={{
            x,
            y: cardsY,
            opacity: cardsOpacity,
          }}
          className="absolute top-1/2 flex gap-8 px-[15vw] -translate-y-1/2"
        >
          <motion.div className="flex w-full gap-x-6 overflow-x-auto scrollbar-none snap-x snap-mandatory">
            {CLASSES.map((classItem) => (
              <motion.div
                key={classItem.name}
                className="group flex h-full flex-col gap-3 min-w-[320px] sm:min-w-96 lg:min-w-112.5 shrink-0 snap-start"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, type: "spring" },
                  },
                }}
              >
                <motion.div className="relative aspect-4/3 w-full overflow-hidden brightness-90 grayscale-25 cursor-pointer group">
                  <motion.div
                    variants={imageZoomVariants}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={classItem.image}
                      alt={classItem.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        objectPosition: classItem.objectPosition,
                        transform: `scale(${classItem.imageScale})`,
                        transformOrigin: classItem.objectPosition,
                      }}
                    />
                  </motion.div>
                  <Link
                    href={classItem.href}
                    className="absolute inset-0 hidden items-center justify-center bg-black/50 font-nord text-lg text-white uppercase underline underline-offset-2 group-hover:flex whitespace-nowrap"
                  >
                    View Class
                  </Link>
                </motion.div>
                <h2 className="font-ivy-ora-display text-taupe-700 text-2xl">
                  {classItem.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-h4">
                  <span className="font-nord text-taupe-700 uppercase">
                    50 MINS
                  </span>
                  <span className="size-1 bg-taupe-700 rounded-full" />
                  <span className="font-nord text-taupe-700">
                    {classItem.level}
                  </span>
                  <span className="size-1 bg-taupe-700 rounded-full" />
                  <span className="font-nord text-taupe-700 uppercase">
                    MAX 6 PER GROUP
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function FormExperience() {
  return (
    <div className="bg-[#F7F2EA] px-4">
      <section className="relative flex flex-col items-center justify-center h-[90dvh] gap-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className="flex flex-col items-center justify-center text-center gap-16"
        >
          <h1 className="font-nord text-taupe-700 text-xl uppercase text-h4">
            The Forme Experience
          </h1>
          <p className="font-ivy-ora-display text-2xl px-1 md:max-w-3xl md:text-h2 tracking-wide">
            Forme is designed to help you move, rest and return. A considered
            space where different approaches to wellness combine to help you
            feel at home in your
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
      </section>
      <motion.div
        className="h-px w-full origin-left bg-neutral-400 mt-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 2.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <HorizontalScroll />
    </div>
  );
}
