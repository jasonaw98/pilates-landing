"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

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

export default function FAQ() {
  return (
    <div>
      <div className="relative h-[50vh] md:h-[60vh]">
        <div
          className="absolute inset-0 bg-position-[80%_1%] bg-size-[170%] md:bg-size-[100%] md:bg-position-[50%_40%] bg-no-repeat brightness-50 bg-[url('/assets/faq.jpg')] grayscale-100"
          aria-hidden="true"
        />
        <div className="relative flex flex-col md:flex-row items-center justify-center text-white h-full z-10">
          <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex">
            Frequently Asked
          </h1>
          <span className="text-4xl font-ivy-ora-display break-keep italic">
            &nbsp;Questions
          </span>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="px-4 py-12 flex flex-col gap-12 lg:px-24">
        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            New to Forme
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

        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            Classes & bookings
          </h1>
          <Accordion className={cn("border-none")}>
            {CLASSES.map((item) => (
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

        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            Pricing & membership
          </h1>
          <Accordion className={cn("border-none")}>
            {PRICING.map((item) => (
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
    </div>
  );
}
