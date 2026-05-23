import Image from "next/image";

export default function FormExperience() {
  return (
    <div className="bg-[#F7F2EA] h-screen px-4 py-12 grid grid-rows-2">
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <h1 className="font-nord text-taupe-700 text-lg uppercase">
          The Forme Experience
        </h1>
        <p className="font-ivy-ora-display text-2xl px-1">
          Forme is designed to help you move, rest and return. A considered
          space where different approaches to wellness combine to help you feel
          at home in your body and mind.
        </p>
        <Image
          src="/logo/brown_logomark.svg"
          alt="Forme Experience"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 border-t border-neutral-300 px-2">
        <div className="relative w-full flex justify-center items-center">
          <Image
            src="/assets/pilates_fundamentals.jpg"
            alt="Forme Experience"
            width={400}
            height={600}
            className="aspect-video object-cover brightness-70 object-[50%_80%] rounded-md"
          />
          <button className="absolute inset-0 m-auto flex items-center justify-center w-32 h-9 bg-white text-taupe-700 font-nord rounded-full text-xs uppercase shadow">
            view class
          </button>
        </div>

        <div className="flex flex-col items-start w-full">
          <h1 className="font-ivy-ora-display text-left text-taupe-700 text-2xl ">
            Pilates Fundamentals
          </h1>
          <p className="flex items-center gap-2 font-nord text-taupe-700">
            50 MINS <span className="size-1 bg-taupe-700 rounded-full" /> BEGINNER{" "}
            <span className="size-1 bg-taupe-700 rounded-full" /> MAX 6 PER GROUP
          </p>
        </div>
      </div>
    </div>
  );
}
