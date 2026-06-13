"use client";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import LoadingScreen from "@/components/LoadingScreen";

const INSTRUCTORS = [
  {
    name: "Maya Lindqvist",
    image: "/instructor/maya.jpg",
    category: "Pilates",
    description:
      "Trained in New York and London, Maya teaches with a focus on control, precision, and pace. Her approach is slow, attentive, and deeply considered.",
    mobile: { objectPosition: "33% 10%", imageScale: 2.1 },
    desktop: { objectPosition: "20% 10%", imageScale: 1.3 },
  },
  {
    name: "Lior Adler",
    image: "/instructor/lior.jpg",
    category: "Yoga",
    description:
      "With over twenty years of practice, Lior’s classes feel less like instruction and more like permission. Rooted in Iyengar, yin, and somatic traditions.",
    mobile: { objectPosition: "70% 60%", imageScale: 3.5 },
    desktop: { objectPosition: "70% 50%", imageScale: 2.4 },
  },
  {
    name: "Lucia Romano",
    image: "/instructor/lucia.jpg",
    category: "Meditation",
    description:
      "A former monastery practitioner, Lucia teaches meditation as a daily practice. Direct, grounded, and powerful.",
    mobile: { objectPosition: "50% 40%", imageScale: 1.5 },
    desktop: { objectPosition: "50% 40%", imageScale: 1 },
  },
  {
    name: "Wayan Sari",
    image: "/instructor/wayan.jpg",
    category: "Pilates",
    description:
      "With a clinical pilates background, Wayan’s practice draws from rehabilitation and physiotherapy. Precise, supportive, and restorative.",
    mobile: { objectPosition: "50% 25%", imageScale: 2 },
    desktop: { objectPosition: "45% 20%", imageScale: 1.4 },
  },
  {
    name: "Nyoman Putri",
    image: "/instructor/nyoman.jpg",
    category: "Meditation",
    description:
      "Trained in Bali, Nyoman leads sound-based meditations using traditional instruments. A sensory, immersive approach to stillness.",
    mobile: { objectPosition: "70% 50%", imageScale: 1.3 },
    desktop: { objectPosition: "60% 40%", imageScale: 1 },
  },
  {
    name: "Isla Hart",
    image: "/instructor/isla.jpg",
    category: "Yoga",
    description:
      "Isla leads dynamic vinyasa flows grounded in structure and control. Accessible for beginners, with depth for experienced practitioners.",
    mobile: { objectPosition: "70% 45%", imageScale: 1.7 },
    desktop: { objectPosition: "55% 40%", imageScale: 1 },
  },
] as const;

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function AboutHero() {
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
          src="/assets/about.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="origin-[45%_90%] object-cover object-[45%_90%] brightness-50 grayscale scale-[3.5] md:origin-[45%_80%] md:object-[45%_90%] md:scale-[2.5]"
        />
      </motion.div>
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-white"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="flex text-center font-ivy-ora-display text-4xl break-keep">
          About
        </h1>
        <span className="font-ivy-ora-display text-4xl break-keep italic">
          &nbsp;Us
        </span>
      </motion.div>
    </section>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.9, ease: [0.52, 1, 0.36, 1] },
  },
};

export default function About() {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Pilates", "Yoga", "Meditation"] as const;

  const categoryCounts = useMemo(
    () => ({
      All: INSTRUCTORS.length,
      Pilates: INSTRUCTORS.filter(
        (instructor) => instructor.category === "Pilates",
      ).length,
      Yoga: INSTRUCTORS.filter((instructor) => instructor.category === "Yoga")
        .length,
      Meditation: INSTRUCTORS.filter(
        (instructor) => instructor.category === "Meditation",
      ).length,
    }),
    [],
  );

  const filteredInstructors = useMemo(() => {
    if (activeFilter === "All") return INSTRUCTORS;
    return INSTRUCTORS.filter(
      (instructor) => instructor.category === activeFilter,
    );
  }, [activeFilter]);

  const hasResults = filteredInstructors.length > 0;

  return (
    <main>
      <LoadingScreen
        title={
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="flex text-center font-ivy-ora-display text-4xl break-keep">
              Inside the
            </h1>
            <span className="font-ivy-ora-display text-4xl break-keep italic">
              &nbsp;sanctuary.
            </span>
          </div>
        }
      />
      <AboutHero />

      <section className="flex flex-col gap-12 px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className="flex flex-col items-center justify-center gap-8 text-center md:py-10"
        >
          <h1 className="font-nord text-taupe-700 uppercase">Our Philosophy</h1>
          <p className="px-1 font-ivy-ora-display text-2xl tracking-wide md:max-w-3xl md:text-3xl">
            Wellness is not something to be achieved, but something to return
            to. At Forme, we see it as a quiet process of coming back to the
            body.
          </p>
        </motion.div>

        <span className="h-px w-full bg-neutral-300" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className="flex flex-col items-center justify-center gap-8 text-center md:py-10"
        >
          <h1 className="font-nord text-taupe-700 uppercase">The Space</h1>
          <p className="px-1 font-ivy-ora-display text-2xl tracking-wide md:max-w-3xl md:text-3xl">
            Forme is set along the cliffs of Uluwatu, where land meets the sea.
            An intimate sanctuary, shaped by light and nature. A place to move,
            to rest, and to return.
          </p>
        </motion.div>
      </section>

      <section className="flex flex-col gap-5 px-5 py-10 lg:px-20">
        <h2 className="font-ivy-ora-display text-2xl text-taupe-700">
          Recovery Lounge
        </h2>
        <div className="relative aspect-video w-full overflow-hidden brightness-70">
          <Image
            src="/assets/sitting.jpg"
            alt="Recovery Lounge"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-[50%_60%]"
          />
        </div>
      </section>

      <section className="flex flex-col gap-5 px-5 py-10 lg:px-20">
        <h2 className="font-ivy-ora-display text-3xl text-taupe-700">
          Meet Your Instructors
        </h2>
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
        <span className="h-px w-full bg-neutral-300" />
        {hasResults ? (
          <motion.div
            key={activeFilter}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8"
          >
            {filteredInstructors.map((instructor) => {
              const crop = isMobile ? instructor.mobile : instructor.desktop;

              return (
                <motion.div
                  key={instructor.name}
                  className="flex flex-col gap-2"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, type: "spring" },
                    },
                  }}
                >
                  <div className="relative aspect-4/3 w-full overflow-hidden brightness-90 grayscale-25">
                    <Image
                      src={instructor.image}
                      alt={instructor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      style={{
                        objectPosition: crop.objectPosition,
                        transform: `scale(${crop.imageScale})`,
                        transformOrigin: crop.objectPosition,
                      }}
                    />
                  </div>
                  <h3 className="font-ivy-ora-display text-2xl text-taupe-700">
                    {instructor.name}
                  </h3>
                  <p className="font-nord text-sm text-taupe-700">
                    {instructor.category}
                  </p>
                  <p className="text-sm text-taupe-700">
                    {instructor.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-dashed border-neutral-300 bg-[#F7F2EA] px-6 py-10 text-center text-taupe-700"
          >
            <p className="font-ivy-ora-display text-xl">
              No instructors match this category yet.
            </p>
            <p className="mt-2 font-nord text-sm uppercase tracking-[0.2em]">
              Try another filter.
            </p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
