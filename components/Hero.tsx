import { Button } from "@base-ui/react";

export default function Hero() {
  return (
    <main className="relative h-screen">
      <div
        className="absolute inset-0 bg-position-[45%_80%] bg-size-[700%] bg-no-repeat brightness-50 bg-[url('/assets/hero.png')] grayscale-25"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center justify-end gap-4 text-white h-full pb-12 px-4 z-10">
        <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex">
          A sanctuary for &nbsp;<p className="italic">stillness.</p>
        </h1>
        <p className="text-sm">
          More than a studio, Forme brings together movement, rest, and recovery
          in one considered space.
        </p>
        <Button className="bg-white text-taupe-700 font-nord py-3 px-8 w-full rounded-full text-xs uppercase">
          Book Now
        </Button>
      </div>
    </main>
  );
}
