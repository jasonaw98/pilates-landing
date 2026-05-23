import { cn } from "@/lib/utils";
import Image from "next/image";

const INSTRUCTORS = [
  {
    name: "Maya Lindqvist",
    image: "/instructor/maya.jpg",
    category: "Pilates",
    description:
      "Trained in New York and London, Maya teaches with a focus on control, precision, and pace. Her approach is slow, attentive, and deeply considered.",
    bgPosition: "33% 10%",
    bgSize: "210%",
  },
  {
    name: "Lior Adler",
    image: "/instructor/lior.jpg",
    category: "Yoga",
    description:
      "With over twenty years of practice, Lior’s classes feel less like instruction and more like permission. Rooted in Iyengar, yin, and somatic traditions.",
    bgPosition: "70% 60%",
    bgSize: "350%",
  },
  {
    name: "Lucia Romano",
    image: "/instructor/lucia.jpg",
    category: "Meditation",
    description:
      "A former monastery practitioner, Lucia teaches meditation as a daily practice. Direct, grounded, and powerful.",
    bgPosition: "50% 40%",
    bgSize: "150%",
  },
  {
    name: "Wayan Sari",
    image: "/instructor/wayan.jpg",
    category: "Pilates",
    description:
      "With a clinical pilates background, Wayan’s practice draws from rehabilitation and physiotherapy. Precise, supportive, and restorative.",
    bgPosition: "50% 25%",
    bgSize: "200%",
  },
  {
    name: "Nyoman Putri",
    image: "/instructor/nyoman.jpg",
    category: "Meditation",
    description:
      "Trained in Bali, Nyoman leads sound-based meditations using traditional instruments. A sensory, immersive approach to stillness.",
    bgPosition: "70% 50%",
    bgSize: "130%",
  },
  {
    name: "Isla Hart",
    image: "/instructor/isla.jpg",
    category: "Yoga",
    description:
      "Isla leads dynamic vinyasa flows grounded in structure and control. Accessible for beginners, with depth for experienced practitioners.",
    bgPosition: "70% 45%",
    bgSize: "170%",
  },
] as const;

export default function About() {
  return (
    <main>
      <div className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-position-[45%_90%] bg-size-[350%] bg-no-repeat brightness-50 bg-[url('/assets/about.jpg')] grayscale-100"
          aria-hidden="true"
        />
        <div className="relative flex items-center justify-center text-white h-full z-10">
          <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex">
            About
          </h1>
          <span className="text-4xl font-ivy-ora-display break-keep italic">
            &nbsp;Us
          </span>
        </div>
      </div>

      <section className="px-4 py-12 flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="font-nord text-taupe-700 uppercase">Our Philosophy</h1>
          <p className="font-ivy-ora-display text-2xl px-1">
            Wellness is not something to be achieved, but something to return
            to. At Forme, we see it as a quiet process of coming back to the
            body.
          </p>
        </div>

        <span className="w-full h-px bg-neutral-300" />

        <div className="flex flex-col items-center justify-center text-center gap-8">
          <h1 className="font-nord text-taupe-700 uppercase">The Space</h1>
          <p className="font-ivy-ora-display text-2xl px-1">
            Forme is set along the cliffs of Uluwatu, where land meets the sea.
            An intimate sanctuary, shaped by light and nature. A place to move,
            to rest, and to return.
          </p>
        </div>
      </section>

      <div className="flex flex-col px-5 py-10 gap-5">
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

      <div className="flex flex-col px-5 py-10 gap-5">
        <h1 className="font-ivy-ora-display text-taupe-700 text-3xl">
          Meet Your Instructors
        </h1>
        {INSTRUCTORS.map((instructor) => (
          <div
            key={instructor.name}
            className="flex flex-col justify-center gap-2"
          >
            <div
              className={cn(
                "w-full bg-no-repeat brightness-90 h-[400px] grayscale-25",
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
            <p className="font-nord text-taupe-700 text-sm">
              {instructor.category}
            </p>
            <p className="text-taupe-700 text-sm">{instructor.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
