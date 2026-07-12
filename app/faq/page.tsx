"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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

const CLASSES = [
  {
    value: "item-1",
    question: "How do I book a class?",
    answer:
      "All classes are bookable online through our schedule page. Choose your class, confirm your booking, and you will receive a confirmation by email. Walk-ins are welcome if space is available, but we strongly recommend booking ahead — most classes fill several days in advance.",
  },
  {
    value: "item-2",
    question: "How small are your classes really?",
    answer:
      "Capped at eight, every class. Reformer classes are capped at six because we have six reformers in the studio. This is not a marketing decision but a teaching one — small groups allow for individual attention and real corrections.",
  },
  {
    value: "item-3",
    question: "What is your cancellation policy?",
    answer:
      "Cancel up to 12 hours before class for a full credit back to your account. Cancellations within 12 hours are charged in full out of fairness to those on the waitlist. We understand life happens — if you need to cancel last minute due to illness or genuine emergency, please call us and we will do what we can.",
  },
];

const PRICING = [
  {
    value: "item-1",
    question: "Which option is right for me?",
    answer:
      "Most new members start with a single class to get a feel for the space. From there, the five-class pack works well for those practicing once or twice a week. Monthly membership makes sense if you plan to practice three or more times a week, or if you want full access across all three disciplines.",
  },
  {
    value: "item-2",
    question: "Do packages expire?",
    answer: "Memberships do not expire.",
  },
  {
    value: "item-3",
    question: "Do you offer gift cards?",
    answer:
      "Yes. Gift cards are available in any amount and can be used toward classes, packs, memberships, or retail. Reach out by email and we will arrange one.",
  },
] as const;

function FaqHero({ mobile }: { mobile: boolean }) {
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
          src={mobile ? "/assets/faq_mobile.png" : "/assets/faq.png"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover md:object-contain"
        />
      </motion.div>
      <motion.div
        className="relative z-10 flex h-full items-center justify-center text-white"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h1 className="flex text-center font-ivy-ora-display text-4xl md:text-h1 break-keep">
          Frequently Asked
        </h1>
        <span className="font-ivy-ora-display text-4xl md:text-h1 break-keep italic">
          &nbsp;Questions
        </span>
      </motion.div>
    </section>
  );
}

export default function FAQ() {
  const isMobile = useIsMobile();
  return (
    <div>
      <LoadingScreen
        title={
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="flex text-center font-ivy-ora-display text-4xl break-keep">
              Your questions,
            </h1>
            <span className="font-ivy-ora-display text-4xl break-keep italic">
              &nbsp;answered.
            </span>
          </div>
        }
      />
      <FaqHero mobile={isMobile} />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-4 py-12 flex flex-col gap-12 lg:px-24"
      >
        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl md:text-h2">
            New to Forme
          </h1>
          <Accordion className={cn("border-none")}>
            {NEW.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className={cn("text-taupe-700 text-xl px-0")}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={cn("text-taupe-700 text-base")}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            Classes & bookings
          </h1>
          <Accordion className={cn("border-none")}>
            {CLASSES.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className={cn("text-taupe-700 text-xl px-0")}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className={cn("text-taupe-700 text-base")}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            Pricing & membership
          </h1>
          <Accordion className={cn("border-none")}>
            {PRICING.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className={cn("text-taupe-700 text-xl px-0")}>
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
    </div>
  );
}
