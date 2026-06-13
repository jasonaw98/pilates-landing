"use client";
import ClassZoomReveal from "@/components/ClassZoom";
import LineAnimation from "@/components/LineAnimation";
import { ArrowLeft } from "lucide-react";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CustomCarouselControls } from "@/components/Community";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.9, ease: [0.52, 1, 0.36, 1] },
  },
};

const CLASSES = [
  {
    name: "Pilates Fundamentals",
    category: "Pilates",
    image: "/assets/pilates_fundamentals.jpg",
    level: "All Levels",
    objectPosition: "33% 80%",
    imageScale: 1,
    link: "/class/fundamentals",
  },
  {
    name: "Reformer Pilates",
    category: "Pilates",
    image: "/assets/bendyoga.jpg",
    level: "All Levels",
    objectPosition: "90% 100%",
    imageScale: 1,
    link: "/class/reformer",
  },
  {
    name: "Slow Flow Yoga",
    category: "Yoga",
    image: "/instructor/lior.jpg",
    level: "All Levels",
    objectPosition: "60% 80%",
    imageScale: 2,
    link: "/class/slow-flow",
  },
  {
    name: "Yin Yoga",
    category: "Yoga",
    image: "/assets/mindful.png",
    level: "Hard",
    objectPosition: "33% 80%",
    imageScale: 1,
    link: "/class/yin",
  },
  {
    name: "Soundbath Meditation",
    category: "Meditation",
    image: "/assets/soundbath.jpg",
    level: "All Levels",
    objectPosition: "33% 60%",
    imageScale: 1,
    link: "/class/soundbath",
  },
] as const;

const INSTRUCTORS = [
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
    name: "Nyoman Putri",
    image: "/instructor/nyoman.jpg",
    category: "Meditation",
    description:
      "Trained in Bali, Nyoman leads sound-based meditations using traditional instruments. A sensory, immersive approach to stillness.",
    mobile: { objectPosition: "70% 50%", imageScale: 1.3 },
    desktop: { objectPosition: "60% 40%", imageScale: 1 },
  },
] as const;

const gridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const NEW = [
  {
    value: "item-1",
    question: "I have never done pilates or yoga. Is Forme for beginners?",
    answer:
      "Yes. Forme welcomes complete beginners. Our small class sizes mean teachers can give real attention from your first session — no being lost in the back of a crowded room. We recommend starting with a slow flow yoga, mat pilates, or a guided meditation class. Reformer pilates is also approachable for first-timers, with full setup walkthrough before the class begins.",
  },
  {
    value: "item-2",
    question: "What should I bring to my first class?",
    answer:
      "Just yourself. Mats, reformers, towels, blankets, and props are all provided. Water is available throughout the studio. If you prefer to use your own mat or yoga blocks, you are welcome to bring them.",
  },
  {
    value: "item-3",
    question: "What should I wear?",
    answer:
      "Anything that allows you to move freely. Most members wear fitted activewear or soft layered pieces. We work barefoot or in grip socks — bare feet are encouraged. Avoid heavy fragrances out of respect for the small studio environment.",
  },
];

export default function ClassPage() {
  const isMobile = useIsMobile();
  const groupedClasses = [];
  for (let i = 0; i < CLASSES.length; i += 2) {
    groupedClasses.push(CLASSES.slice(i, i + 2));
  }

  return (
    <main className="min-h-screen">
      <section className="mt-32">
        <div className="flex flex-col items-center gap-12">
          <Link href="/class" className="text-sm font-nord py-1 px-3 underline">
            <ArrowLeft className="inline-block mr-1" size={12} />
            Back to available classes
          </Link>
          <h1 className="text-4xl font-ivy-ora-display">Guided Meditation</h1>
        </div>
      </section>
      <ClassZoomReveal
        image="/assets/guided_meditation.jpg"
        bgPosition="object-[50%_100%]"
        content={
          <div className="max-w-5xl px-8 text-center text-white flex-col flex justify-between items-center h-full py-20 pt-32">
            <div className="text-4xl h-full justify-center font-ivy-ora-display break-keep text-center items-center flex flex-col gap-2">
              <p>A guided practice for </p>
              <div className="flex">
                <p>calm, focus, and&nbsp;</p>
                <p className="italic">clarity.</p>
              </div>
            </div>
          </div>
        }
      />
      <section>
        <div className="flex justify-center items-center py-10">
          <div className="flex text-taupe-700 flex-col">
            <span className="font-nord">Duration</span>
            <span>50 mins</span>
          </div>
          <span className="mx-12 h-10 w-px bg-neutral-300" />
          <div className="flex text-taupe-700 flex-col">
            <span className="font-nord">Difficulty</span>
            <div className="flex items-center gap-2">
              Intermediate
              <div className="flex items-center gap-2">
                <span className="size-2 flex rounded-full bg-taupe-700" />
                <span className="size-2 flex rounded-full bg-taupe-700" />
                <span className="size-2 flex rounded-full bg-taupe-300" />
              </div>
            </div>
          </div>
          <span className="mx-12 h-10 w-px bg-neutral-300" />
          <div className="flex text-taupe-700 flex-col">
            <span className="font-nord">Group size</span>
            <span>Up to 6</span>
          </div>
        </div>
        <LineAnimation className="bg-neutral-300" />
      </section>

      <section className="py-50">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className="flex flex-col items-center justify-center text-center gap-16"
        >
          <p className="font-ivy-ora-display text-2xl px-1 md:max-w-4xl md:text-4xl tracking-wide leading-12">
            A structured practice that uses verbal guidance to support focus,
            breath, and awareness. It helps quiet the mind, reduce tension, and
            cultivate a sense of
            <span className="italic">&nbsp;calm</span> and
            <span className="italic">&nbsp;clarity</span>.
          </p>
          <div className="justify-center flex items-center">
            <Link
              href=""
              className="bg-[#3A1A12] text-white font-nord py-3.5 px-8 rounded-full text-xs group relative overflow-hidden"
            >
              <span className="block h-full transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                BOOK NOW
              </span>
              <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                BOOK NOW
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
      <LineAnimation className="bg-neutral-300" />

      <section className="flex flex-col gap-5 px-5 py-10 lg:px-72">
        <h2 className="font-ivy-ora-display text-3xl text-taupe-700">
          Meet Your Instructors
        </h2>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6"
        >
          {INSTRUCTORS.map((instructor) => {
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
      </section>

      <LineAnimation className="bg-neutral-300" />

      <section className="lg:px-48 py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-12 flex flex-col gap-12 lg:px-24"
        >
          <div className="flex flex-col gap-5">
            <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
              Frequently Asked Questions
            </h1>
            <Accordion className={cn("border-none")}>
              {NEW.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger
                    className={cn("text-taupe-700 text-base px-0")}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className={cn("text-taupe-700 text-base")}>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#E8DFC8] py-20 lg:px-48">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col px-5 py-10 gap-5 will-change-transform lg:px-24"
        >
          <h1 className="font-ivy-ora-display text-taupe-700 text-3xl will-change-transform">
            Explore other Classes
          </h1>
          <Carousel>
            <CarouselContent>
              {groupedClasses.map((classPair, sideIndex) => (
                <CarouselItem key={sideIndex}>
                  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6">
                    {classPair.map((classItem) => (
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
                            href={classItem.link}
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
                      </motion.div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CustomCarouselControls />
          </Carousel>
        </motion.div>
      </section>
    </main>
  );
}
