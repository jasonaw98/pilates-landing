"use client";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <main>
      <div className="h-[60vh] relative">
        <div
          className="h-full absolute inset-0 bg-position-[50%_80%] bg-size-[350%] md:bg-size-[200%] bg-no-repeat brightness-45 bg-[url('/assets/nav_sheet.jpg')] saturate-90 grayscale-20"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center justify-between text-white h-full py-10 px-6 z-10 md:pt-24">
          <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex flex-col gap-2 md:flex-row">
            <p>Begin your</p>
            <div className="flex">
              <p className="italic">wellness</p>
              <p>&nbsp;journey.</p>
            </div>
          </h1>
          <div className="font-nord text-taupe-700 bg-[#F7F2EA] rounded-full w-full text-center py-2 uppercase text-xs md:max-w-xs cursor-pointer group relative overflow-hidden">
            <span className="block h-full transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
              Book your first class
            </span>
            <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
              Book your first class
            </span>
          </div>
        </div>
      </div>

      {isMobile ? (
        <div className="bg-[#3A1A12] px-6 pt-12 flex flex-col gap-8 border border-[#3A1A12]">
          <h1 className="font-ivy-ora-display text-white text-3xl">
            Be part of our <span className="italic">community</span>
          </h1>

          <div className="flex items-center justify-between border-b pb-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent p-1 w-full rounded-lg outline-none text-white text-sm placeholder:text-white placeholder:text-lg"
            />
            <button className="font-nord text-white uppercase font-bold tracking-wider cursor-pointer">
              Submit
            </button>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-1 text-white">
              <h1 className="font-nord text-white uppercase pb-2">Menu</h1>
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
              <h1 className="font-nord text-white uppercase pb-2">Connect</h1>
              <span className="text-sm">Instagram</span>
              <span className="text-sm">TikTok</span>
              <span className="text-sm">Facebook</span>
            </div>
          </div>

          <div className="text-white text-sm">
            <p>© 2026 Forme Pilates. all rights reserved.</p>
            <p>Powered by BUTTERSOFT</p>
          </div>

          <div className="h-20">
            <Image
              src="/logo/brown_wordmark.svg"
              alt="logo"
              width={1000}
              height={80}
              className="brightness-100 object-cover h-20 object-top"
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
                  <button className="font-nord text-white uppercase font-bold tracking-wider cursor-pointer text-sm">
                    Submit
                  </button>
                </div>

                <motion.div
                  className="h-px w-full origin-left bg-neutral-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.9 }}
                  transition={{ duration: 2.9, ease: [0.22, 1, 0.36, 1] }}
                />
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

          <div className="h-full flex justify-center pt-16">
            <Image
              src="/logo/forme_footer.png"
              alt="logo"
              width={1000}
              height={100}
              className="brightness-100 object-cover h-full object-top"
            />
          </div>
        </div>
      )}
    </main>
  );
}
