"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const PACKAGES = [
  {
    name: "Essential Flow",
    image: "/assets/pilates_fundamentals.jpg",
    price: "IDR 2.200.000",
    description:
      "Four classes per month across pilates, yoga, or meditation. Move freely across the schedule, with everything prepared for you.",
    bgPosition: "33% 80%",
    bgSize: "100%",
  },
  {
    name: "Mindful Plus",
    image: "/assets/mindful.png",
    price: "IDR 3.900.000",
    description:
      "Eight classes per month across pilates, yoga, or meditation. Bonus credit rollover and one complimentary guest pass per month.",
    bgPosition: "50% 40%",
    bgSize: "100%",
  },
  {
    name: "Serenity Pass",
    image: "/instructor/lior.jpg",
    price: "IDR 5.900.000",
    description:
      "Unlimited access to every class across pilates, yoga, and meditation. Includes guest privileges, retail discount, and seasonal workshop access.",
    bgPosition: "60% 70%",
    bgSize: "250%",
  },
] as const;

const CLASSES = [
  {
    name: "Reformer Pilates",
    image: "/assets/bendyoga.jpg",
    level: "Intermediate",
    bgPosition: "90% 100%",
    bgSize: "130%",
  },
  {
    name: "Pilates Fundamentals",
    image: "/assets/pilates_fundamentals.jpg",
    level: "All Levels",
    bgPosition: "33% 80%",
    bgSize: "140%",
  },
  {
    name: "Slow Flow Yoga",
    image: "/instructor/lior.jpg",
    level: "All Levels",
    bgPosition: "60% 80%",
    bgSize: "300%",
  },
  {
    name: "Yin Yoga",
    image: "/assets/mindful.png",
    level: "Hard",
    bgPosition: "33% 80%",
    bgSize: "100%",
  },
  {
    name: "Guided Meditation",
    image: "/assets/guided_meditation.jpg",
    level: "All Levels",
    bgPosition: "33% 100%",
    bgSize: "100%",
  },
  {
    name: "Soundbath Meditation",
    image: "/assets/soundbath.jpg",
    level: "All Levels",
    bgPosition: "33% 60%",
    bgSize: "100%",
  },
] as const;

const FIRST_VISIT = [
  {
    image: "/assets/arrive.png",
    step: "01 Arrive",
    description:
      "Ten minutes before your class, We'll gently guide you through the space",
    bgPosition: "50% 50%",
    bgSize: "100%",
  },
  {
    image: "/assets/wear.png",
    step: "02 Wear",
    description:
      "Whatever allows you to move freely. Bare feet are encouraged.",
    bgPosition: "50% 50%",
    bgSize: "100%",
  },
  {
    image: "/assets/bring.png",
    step: "03 Bring",
    description:
      "Just yourself. Mats, reformers, and all props are prepared for you.",
    bgPosition: "50% 50%",
    bgSize: "100%",
  },
  {
    image: "/assets/after.png",
    step: "04 After",
    description:
      "Rest in our recovery lounge, and stay for as long as you need.",
    bgPosition: "50% 50%",
    bgSize: "100%",
  },
] as const;

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function Class() {
  const classRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: classRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "48%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.4, 0]);
  return (
    <main>
      <div className="relative h-[50vh] overflow-hidden" ref={classRef}>
        <motion.div
          className="absolute inset-0 bg-position-[70%_90%] will-change-transform h-[130%] bg-size-[170%] lg:bg-size-[100%] bg-no-repeat brightness-50 bg-[url('/assets/ourclass.jpg')] grayscale-100"
          aria-hidden="true"
          style={{ y: backgroundY }}
        />
        <motion.div
          className="relative flex items-center justify-center text-white h-full z-10"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex">
            Our
          </h1>
          <span className="text-4xl font-ivy-ora-display break-keep italic">
            &nbsp;Classes
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col px-5 py-10 gap-5 will-change-transform lg:px-24"
      >
        <h1 className="font-ivy-ora-display text-taupe-700 text-3xl">
          Packages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((instructor) => (
            <div
              key={instructor.name}
              className="flex flex-col justify-center gap-3"
            >
              <div
                className={cn(
                  "w-full bg-no-repeat brightness-90 aspect-video grayscale-25",
                )}
                style={
                  {
                    backgroundImage: `url(${instructor.image})`,
                    backgroundPosition: instructor.bgPosition,
                    backgroundSize: instructor.bgSize,
                  } as React.CSSProperties
                }
              />
              <h2 className="font-ivy-ora-display text-taupe-700 text-2xl">
                {instructor.name}
              </h2>
              <p className="text-taupe-700 text-sm">{instructor.description}</p>
              <p className="font-nord text-taupe-700 text-lg">
                {instructor.price}
                <span className="text-taupe-700 text-xs">/ month</span>
              </p>
              <button className="border rounded-full border-taupe-700 text-taupe-700 text-xs uppercase font-nord py-2 px-4">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      <span className="flex h-px w-full bg-neutral-300 mt-5" />

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col px-5 py-10 gap-5 will-change-transform lg:px-24"
      >
        <h1 className="font-ivy-ora-display text-taupe-700 text-3xl will-change-transform">
          Available Classes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-24">
          {CLASSES.map((instructor) => (
            <motion.div
              key={instructor.name}
              className="flex flex-col justify-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, type: "spring" },
                },
              }}
            >
              <div
                className={cn(
                  "w-full bg-no-repeat brightness-90 h-[300px] md:h-[230px] xl:h-[300px] grayscale-25 transition-all duration-300 cursor-pointer group will-change-transform",
                )}
                style={
                  {
                    backgroundImage: `url(${instructor.image})`,
                    backgroundPosition: instructor.bgPosition,
                    backgroundSize: instructor.bgSize,
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 hidden items-center justify-center text-white text-lg group-hover:flex underline underline-offset-2 font-nord uppercase bg-black/50">
                  View Class
                </div>
              </div>
              <h2 className="font-ivy-ora-display text-taupe-700 text-2xl">
                {instructor.name}
              </h2>
              <div className="flex items-center gap-2 text-xs">
                <span className="font-nord text-taupe-700 uppercase">
                  50 MINS
                </span>
                <span className="size-1 bg-taupe-700 rounded-full" />
                <span className="font-nord text-taupe-700">
                  {instructor.level}
                </span>
                <span className="size-1 bg-taupe-700 rounded-full" />
                <span className="font-nord text-taupe-700 uppercase">
                  MAX 6 PER GROUP
                </span>
              </div>
              <button className="border rounded-full border-taupe-700 text-taupe-700 text-xs uppercase font-nord py-2 px-4">
                BOOK NOW
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col px-5 py-10 gap-5 bg-[#E8DFC8] will-change-transform lg:px-24"
      >
        <h1 className="font-ivy-ora-display text-taupe-700 text-3xl">
          For your first visit
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {FIRST_VISIT.map((instructor) => (
            <motion.div
              key={instructor.step}
              className="flex flex-col justify-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, type: "spring" },
                },
              }}
            >
              <div
                className={cn("w-full bg-no-repeat brightness-90 h-[200px]")}
                style={
                  {
                    backgroundImage: `url(${instructor.image})`,
                    backgroundPosition: instructor.bgPosition,
                    backgroundSize: instructor.bgSize,
                  } as React.CSSProperties
                }
              />
              <h2 className="font-nord text-taupe-700 text-sm">
                {instructor.step}
              </h2>
              <span className="text-taupe-700 text-sm">
                {instructor.description}
              </span>
              <span className="w-full h-px bg-gray-300 my-2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
