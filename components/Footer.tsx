"use client";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import LineAnimation from "./LineAnimation";
import ScrollZoomReveal from "./ScrollZoom";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <main>
      <ScrollZoomReveal
        image="/assets/footer_image.png"
        title="Explore Beyond"
      />

      {isMobile ? (
        <div className="bg-[#3A1A12] px-6 pt-12 flex flex-col gap-8 border border-[#3A1A12]">
          <h1 className="font-ivy-ora-display text-white text-h2">
            Be part of our <span className="italic">community</span>
          </h1>

          <div className="flex items-center justify-between border-b pb-2 text-h4">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent p-1 w-full rounded-lg outline-none text-white text-sm placeholder:text-white placeholder:text-lg"
            />
            <button
              type="button"
              className="font-nord text-white uppercase font-bold tracking-wider cursor-pointer"
            >
              Submit
            </button>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="font-nord text-white uppercase pb-2 text-h4">
                Menu
              </h1>
              <Link
                href="/"
                className="hover:text-taupe-500 transition-colors duration-300 text-sm"
              >
                Home
              </Link>
              <Link
                href="/class"
                className="hover:text-taupe-500 transition-colors duration-300 text-sm"
              >
                Classes
              </Link>
              <Link
                href="/about"
                className="hover:text-taupe-500 transition-colors duration-300 text-sm"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="hover:text-taupe-500 transition-colors duration-300 text-sm"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-1 text-white">
              <h1 className="font-nord text-white uppercase pb-2 text-h4">
                Connect
              </h1>
              <span className="text-sm">Instagram</span>
              <span className="text-sm">TikTok</span>
              <span className="text-sm">Facebook</span>
            </div>
          </div>

          <div className="text-white text-[12px]">
            <p>© 2026 Forme Pilates. all rights reserved.</p>
            <p>Powered by BUTTERSOFT</p>
          </div>

          <div className="h-full flex justify-center pt-4 w-full">
            <Image
              src="/logo/forme_footer.png"
              alt="logo"
              width={1000}
              height={100}
              className="brightness-100 object-cover h-full object-top w-full"
            />
          </div>
        </div>
      ) : (
        <div className="bg-[#3A1A12] px-16 pt-24 flex flex-col gap-8 border border-[#3A1A12]">
          <div className="flex justify-between">
            <div className="flex flex-col gap-10 w-full max-w-1/2">
              <h1 className="font-ivy-ora-display text-white text-3xl">
                Be part of our <span className="italic">community</span>
              </h1>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent p-1 w-full rounded-lg outline-none text-white text-sm placeholder:text-white placeholder:text-sm"
                  />
                  <button
                    type="button"
                    className="font-nord text-white uppercase font-bold tracking-wider cursor-pointer text-sm"
                  >
                    Submit
                  </button>
                </div>

                <LineAnimation />
              </div>

              <div className="text-white text-sm pt-8">
                <p>© 2026 Forme Pilates. all rights reserved.</p>
              </div>
            </div>

            <div>
              <div className="flex gap-20">
                <div className="flex flex-col gap-1 text-white">
                  <h1 className="font-nord text-white uppercase pb-2 font-bold">
                    Menu
                  </h1>
                  <Link
                    href="/"
                    className="hover:text-taupe-500 transition-colors duration-300 hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    href="/class"
                    className="hover:text-taupe-500 transition-colors duration-300 hover:underline"
                  >
                    Classes
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-taupe-500 transition-colors duration-300 hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    href="/faq"
                    className="hover:text-taupe-500 transition-colors duration-300 hover:underline"
                  >
                    FAQ
                  </Link>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <h1 className="font-nord text-white uppercase pb-2 font-bold">
                    Connect
                  </h1>
                  <span>Instagram</span>
                  <span>TikTok</span>
                  <span>Facebook</span>
                </div>
              </div>

              <p className="pt-8 text-white text-sm justify-self-end">
                Powered by BUTTERSOFT
              </p>
            </div>
          </div>

          <div className="h-full flex justify-center pt-4 w-full">
            <Image
              src="/logo/forme_footer.png"
              alt="logo"
              width={1000}
              height={100}
              className="brightness-100 object-cover h-full object-top w-full"
            />
          </div>
        </div>
      )}
    </main>
  );
}
