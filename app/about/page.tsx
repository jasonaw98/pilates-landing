"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const INSTRUCTORS = [
  {
    name: "Maya Lindqvist",
    image: "/instructor/maya.jpg",
    category: "Pilates",
    description:
      "Trained in New York and London, Maya teaches with a focus on control, precision, and pace. Her approach is slow, attentive, and deeply considered.",
    bgPosition: "33% 10%",
    bgSize: "210%",
    desktopBgPosition: "20% 10%",
    desktopBgSize: "130%",
  },
  {
    name: "Lior Adler",
    image: "/instructor/lior.jpg",
    category: "Yoga",
    description:
      "With over twenty years of practice, Lior’s classes feel less like instruction and more like permission. Rooted in Iyengar, yin, and somatic traditions.",
    bgPosition: "70% 60%",
    bgSize: "350%",
    desktopBgPosition: "70% 50%",
    desktopBgSize: "240%",
  },
  {
    name: "Lucia Romano",
    image: "/instructor/lucia.jpg",
    category: "Meditation",
    description:
      "A former monastery practitioner, Lucia teaches meditation as a daily practice. Direct, grounded, and powerful.",
    bgPosition: "50% 40%",
    bgSize: "150%",
    desktopBgPosition: "50% 40%",
    desktopBgSize: "100%",
  },
  {
    name: "Wayan Sari",
    image: "/instructor/wayan.jpg",
    category: "Pilates",
    description:
      "With a clinical pilates background, Wayan’s practice draws from rehabilitation and physiotherapy. Precise, supportive, and restorative.",
    bgPosition: "50% 25%",
    bgSize: "200%",
    desktopBgPosition: "45% 20%",
    desktopBgSize: "140%",
  },
  {
    name: "Nyoman Putri",
    image: "/instructor/nyoman.jpg",
    category: "Meditation",
    description:
      "Trained in Bali, Nyoman leads sound-based meditations using traditional instruments. A sensory, immersive approach to stillness.",
    bgPosition: "70% 50%",
    bgSize: "130%",
    desktopBgPosition: "60% 40%",
    desktopBgSize: "100%",
  },
  {
    name: "Isla Hart",
    image: "/instructor/isla.jpg",
    category: "Yoga",
    description:
      "Isla leads dynamic vinyasa flows grounded in structure and control. Accessible for beginners, with depth for experienced practitioners.",
    bgPosition: "70% 45%",
    bgSize: "170%",
    desktopBgPosition: "55% 40%",
    desktopBgSize: "100%",
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
    <section
      ref={heroRef}
      className="relative h-[50vh] overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 top-[-15%] h-[130%] bg-position-[45%_90%] bg-size-[350%] md:bg-size-[200%] md:bg-position-[45%_80%] bg-no-repeat brightness-50 bg-[url('/assets/about.jpg')] grayscale-80 will-change-transform"
        style={{ y: backgroundY }}
      />
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

export default function About() {
  const isMobile = useIsMobile();

  return (
    <main>
      <AboutHero />

      <section className="px-4 py-12 flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-8 md:py-10">
          <h1 className="font-nord text-taupe-700 uppercase">Our Philosophy</h1>
          <p className="font-ivy-ora-display text-2xl px-1 md:max-w-3xl md:text-3xl tracking-wide">
            Wellness is not something to be achieved, but something to return
            to. At Forme, we see it as a quiet process of coming back to the
            body.
          </p>
        </div>

        <span className="w-full h-px bg-neutral-300" />

        <div className="flex flex-col items-center justify-center text-center gap-8 md:py-10">
          <h1 className="font-nord text-taupe-700 uppercase">The Space</h1>
          <p className="font-ivy-ora-display text-2xl px-1 md:max-w-3xl md:text-3xl tracking-wide">
            Forme is set along the cliffs of Uluwatu, where land meets the sea.
            An intimate sanctuary, shaped by light and nature. A place to move,
            to rest, and to return.
          </p>
        </div>
      </section>

      <div className="flex flex-col px-5 py-10 gap-5 lg:px-20">
        <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
          Recovery Lounge
        </h1>
        <div>
          <Image
            src="/assets/sitting.jpg"
            alt="About Space"
            width={1000}
            height={1000}
            className="w-full h-full object-cover brightness-70"
          />
        </div>
      </div>

      <div className="flex flex-col px-5 py-10 gap-5 lg:px-20">
        <h1 className="font-ivy-ora-display text-taupe-700 text-3xl">
          Meet Your Instructors
        </h1>
        <span className="w-full h-px bg-neutral-300" />
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
        >
          {INSTRUCTORS.map((instructor, index) => (
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
              <div
                className={cn(
                  "w-full bg-no-repeat brightness-90 h-[400px] xl:h-[500px] grayscale-25",
                )}
                style={
                  {
                    backgroundImage: `url(${instructor.image})`,
                    backgroundPosition: isMobile ? instructor.bgPosition : instructor.desktopBgPosition,
                    backgroundSize: isMobile ? instructor.bgSize : instructor.desktopBgSize,
                  } as React.CSSProperties
                }
              />
              <h2 className="font-ivy-ora-display text-taupe-700 text-2xl">
                {instructor.name}
              </h2>
              <p className="font-nord text-taupe-700 text-sm">
                {instructor.category}
              </p>
              <p className="text-taupe-700 text-sm">{instructor.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
