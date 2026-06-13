"use client";
import LoadingScreen from "@/components/LoadingScreen";
import Link from "next/link";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";

const PACKAGES = [
  {
    name: "Essential Flow",
    image: "/assets/pilates_fundamentals.jpg",
    price: "IDR 2.200.000",
    description:
      "Four classes per month across pilates, yoga, or meditation. Move freely across the schedule, with everything prepared for you.",
    objectPosition: "33% 80%",
    imageScale: 1,
  },
  {
    name: "Mindful Plus",
    image: "/assets/mindful.png",
    price: "IDR 3.900.000",
    description:
      "Eight classes per month across pilates, yoga, or meditation. Bonus credit rollover and one complimentary guest pass per month.",
    objectPosition: "50% 40%",
    imageScale: 1,
  },
  {
    name: "Serenity Pass",
    image: "/instructor/lior.jpg",
    price: "IDR 5.900.000",
    description:
      "Unlimited access to every class across pilates, yoga, and meditation. Includes guest privileges, retail discount, and seasonal workshop access.",
    objectPosition: "60% 70%",
    imageScale: 2.5,
  },
] as const;

const CLASSES = [
  {
    name: "Pilates Fundamentals",
    category: "Pilates",
    image: "/assets/pilates_fundamentals.jpg",
    href: "/class/fundamentals",
    level: "All Levels",
    objectPosition: "33% 80%",
    imageScale: 1,
  },
  {
    name: "Reformer Pilates",
    category: "Pilates",
    image: "/assets/bendyoga.jpg",
    href: "/class/reformer",
    level: "All Levels",
    objectPosition: "90% 100%",
    imageScale: 1,
  },
  {
    name: "Slow Flow Yoga",
    category: "Yoga",
    image: "/instructor/lior.jpg",
    href: "/class/slow-flow",
    level: "All Levels",
    objectPosition: "60% 80%",
    imageScale: 2,
  },
  {
    name: "Yin Yoga",
    category: "Yoga",
    image: "/assets/mindful.png",
    href: "/class/yin",
    level: "Hard",
    objectPosition: "33% 80%",
    imageScale: 1,
  },
  {
    name: "Guided Meditation",
    category: "Meditation",
    image: "/assets/guided_meditation.jpg",
    href: "/class/guided-meditation",
    level: "All Levels",
    objectPosition: "33% 100%",
    imageScale: 1,
  },
  {
    name: "Soundbath Meditation",
    category: "Meditation",
    image: "/assets/soundbath.jpg",
    href: "/class/soundbath",
    level: "All Levels",
    objectPosition: "33% 60%",
    imageScale: 1,
  },
] as const;

const FIRST_VISIT = [
  {
    image: "/assets/arrive.png",
    step: "01 Arrive",
    description:
      "Ten minutes before your class, We'll gently guide you through the space",
    objectPosition: "50% 50%",
    imageScale: 1,
  },
  {
    image: "/assets/wear.png",
    step: "02 Wear",
    description:
      "Whatever allows you to move freely. Bare feet are encouraged.",
    objectPosition: "50% 50%",
    imageScale: 1,
  },
  {
    image: "/assets/bring.png",
    step: "03 Bring",
    description:
      "Just yourself. Mats, reformers, and all props are prepared for you.",
    objectPosition: "50% 50%",
    imageScale: 1,
  },
  {
    image: "/assets/after.png",
    step: "04 After",
    description:
      "Rest in our recovery lounge, and stay for as long as you need.",
    objectPosition: "50% 50%",
    imageScale: 1,
  },
] as const;

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function ClassHero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "48%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.4, 0]);

  return (
    <section ref={heroRef} className="relative h-[65dvh] overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 top-[-15%] h-[130%] will-change-transform"
        style={{ y: backgroundY }}
      >
        <Image
          src="/assets/ourclass.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="origin-[70%_90%] object-cover object-[70%_90%] brightness-50 grayscale scale-[1.7] md:scale-[1.25] lg:scale-100"
        />
      </motion.div>
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-white"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="flex text-center font-ivy-ora-display text-4xl break-keep">
          Our
        </h1>
        <span className="font-ivy-ora-display text-4xl break-keep italic">
          &nbsp;Classes
        </span>
      </motion.div>
    </section>
  );
}

export default function Class() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Pilates", "Yoga", "Meditation"] as const;

  const categoryCounts = useMemo(
    () => ({
      All: CLASSES.length,
      Pilates: CLASSES.filter((instructor) => instructor.category === "Pilates")
        .length,
      Yoga: CLASSES.filter((instructor) => instructor.category === "Yoga")
        .length,
      Meditation: CLASSES.filter(
        (instructor) => instructor.category === "Meditation",
      ).length,
    }),
    [],
  );

  const filteredCLASSES = useMemo(() => {
    if (activeFilter === "All") return CLASSES;
    return CLASSES.filter((instructor) => instructor.category === activeFilter);
  }, [activeFilter]);

  const hasResults = filteredCLASSES.length > 0;

  return (
    <main>
      <LoadingScreen
        title={
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="flex text-center font-ivy-ora-display text-4xl break-keep">
              Discover your next
            </h1>
            <span className="font-ivy-ora-display text-4xl break-keep italic">
              &nbsp;class.
            </span>
          </div>
        }
      />

      <ClassHero />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col px-5 py-10 gap-5 will-change-transform lg:px-24"
      >
        <h1 className="font-ivy-ora-display text-taupe-700 text-3xl">
          Packages
        </h1>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} className="flex h-full flex-col gap-3">
              <div className="relative aspect-video w-full overflow-hidden brightness-90 grayscale-25 group cursor-pointer">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    objectPosition: pkg.objectPosition,
                    transform: `scale(${pkg.imageScale})`,
                    transformOrigin: pkg.objectPosition,
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/50 font-nord text-lg text-white uppercase underline underline-offset-2 group-hover:flex whitespace-nowrap">
                  Learn More
                </div>
              </div>
              <h2 className="font-ivy-ora-display text-taupe-700 text-2xl">
                {pkg.name}
              </h2>
              <p className="text-taupe-700 text-sm">{pkg.description}</p>
              <p className="font-nord text-taupe-700 text-lg">
                {pkg.price}
                <span className="text-taupe-700 text-xs">/ month</span>
              </p>

              <div className="mt-auto border border-taupe-700 font-nord py-3 rounded-full text-xs group relative overflow-hidden cursor-pointer">
                <span className="block h-full text-center transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                  BUY NOW
                </span>
                <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                  BUY NOW
                </span>
              </div>
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
        <div className="flex flex-wrap items-center gap-8">
          {categories.map((category) => {
            const isActive = activeFilter === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`py-2 font-nord text-sm font-semibold uppercase tracking-[0.2em] transition cursor-pointer ${
                  isActive ? "text-taupe-700" : "text-taupe-00 opacity-40"
                }`}
              >
                <span>{category}</span>
                <span className="ml-1 py-0.5 tracking-[0.1rem] opacity-80">
                  ({categoryCounts[category]})
                </span>
              </motion.button>
            );
          })}
        </div>

        {hasResults ? (
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8"
          >
            {filteredCLASSES.map((classItem) => (
              <motion.div
                key={classItem.name}
                className="group flex h-full flex-col gap-3"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, type: "spring" },
                  },
                }}
              >
                <div className="relative aspect-4/3 w-full overflow-hidden brightness-90 grayscale-25 cursor-pointer group">
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
                  <Link
                    href={classItem.href}
                    className="absolute inset-0 hidden items-center justify-center bg-black/50 font-nord text-lg text-white uppercase underline underline-offset-2 group-hover:flex whitespace-nowrap"
                  >
                    View Class
                  </Link>
                </div>
                <h2 className="font-ivy-ora-display text-taupe-700 text-2xl">
                  {classItem.name}
                </h2>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
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
                <div className="mt-auto border border-taupe-700 font-nord py-3 rounded-full text-xs group/btn relative overflow-hidden cursor-pointer">
                  <span className="block h-full text-center transition-all duration-300 group-hover/btn:-translate-y-full group-hover/btn:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                    BOOK NOW
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover/btn:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                    BOOK NOW
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-dashed border-neutral-300 bg-[#F7F2EA] px-6 py-10 text-center text-taupe-700"
          >
            <p className="font-ivy-ora-display text-xl">
              No classes match this category yet.
            </p>
            <p className="mt-2 font-nord text-sm uppercase tracking-[0.2em]">
              Try another filter.
            </p>
          </motion.div>
        )}
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
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {FIRST_VISIT.map((step) => (
            <motion.div
              key={step.step}
              className="flex h-full flex-col gap-3"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, type: "spring" },
                },
              }}
            >
              <div className="relative aspect-5/3 w-full overflow-hidden brightness-90">
                <Image
                  src={step.image}
                  alt={step.step}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                  style={{
                    objectPosition: step.objectPosition,
                    transform: `scale(${step.imageScale})`,
                    transformOrigin: step.objectPosition,
                  }}
                />
              </div>
              <h2 className="font-nord text-taupe-700 text-sm">{step.step}</h2>
              <p className="text-taupe-700 text-sm">{step.description}</p>
              <span className="mt-auto w-full h-px bg-neutral-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
