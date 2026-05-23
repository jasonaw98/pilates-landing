import { PlusIcon } from "lucide-react";

export default function FAQ() {
  return (
    <div>
      <div className="relative h-[50vh]">
        <div
          className="absolute inset-0 bg-position-[80%_1%] bg-size-[170%] bg-no-repeat brightness-50 bg-[url('/assets/faq.jpg')] grayscale-100"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center justify-center text-white h-full z-10">
          <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex">
            Frequently Asked
          </h1>
          <span className="text-4xl font-ivy-ora-display break-keep italic">
            &nbsp;Questions
          </span>
        </div>
      </div>

      <div className="px-4 py-12 flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            New to Forme
          </h1>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">
              I have never done pilates or yoga. Is Forme for beginners?
            </span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">
              What should I bring to my first class?
            </span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">What should I wear?</span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            Classes & booking
          </h1>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">How do I book a class?</span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">
              How small are your classes really?
            </span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">
              What is your cancellation policy?
            </span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-ivy-ora-display text-taupe-700 text-2xl">
            Pricing & membership
          </h1>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">
              Which option is right for me?
            </span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">Do packages expire?</span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
          <div className="flex items-center justify-between border-b border-neutral-300 pb-4">
            <span className="text-taupe-700">Do you offer gift cards?</span>
            <PlusIcon className="size-7 text-taupe-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
