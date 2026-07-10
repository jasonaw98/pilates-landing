"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.9, ease: [0.52, 1, 0.36, 1] },
  },
};

const navigation = [
  {
    name: "Classes",
    href: "/class",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
];

function MenuIcon({ open, scrolled }: { open: boolean; scrolled: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-4.5 w-8 items-center justify-center"
    >
      <motion.span
        className={cn(
          "absolute block h-0.5 w-8 rounded-full bg-neutral-50",
          scrolled && "bg-taupe-700",
        )}
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 0 : -5,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className={cn(
          "absolute block h-0.5 w-8 rounded-full bg-neutral-50",
          scrolled && "bg-taupe-700",
        )}
        animate={{
          rotate: open ? -45 : 0,
          y: open ? 0 : 5,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export default function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 300);
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {isMobile ? (
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          {/* Mobile */}
          <nav
            className={cn(
              "flex justify-between items-center px-5 py-7 md:hidden transition-all duration-300",
              scrolled &&
                "bg-[#F7F2EA] backdrop-blur-md text-taupe-700 border-b border-taupe-700 pt-4 pb-3",
            )}
          >
            <Link href="/">
              <Image
                src={
                  scrolled
                    ? "/logo/brown_wordmark.svg"
                    : "/logo/beige_wordmark.svg"
                }
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className={cn(
                  "border border-neutral-100 py-2.5 px-6 rounded-full font-nord text-xs text-white",
                  scrolled && "border-taupe-700 text-taupe-700",
                )}
              >
                BOOK NOW
              </Link>
              <SheetTrigger
                className="cursor-pointer"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <MenuIcon open={menuOpen} scrolled={scrolled} />
              </SheetTrigger>
            </div>
          </nav>

          <SheetContent
            side="top"
            className={cn("bg-neutral-50 w-full! font-nord h-full!")}
            showCloseButton={false}
          >
            <SheetHeader>
              <SheetTitle className="flex justify-between items-center">
                <SheetClose className={cn("cursor-pointer")}>
                  <Link href="/">
                    <Image
                      src="/logo/brown_wordmark.svg"
                      alt="logo"
                      width={100}
                      height={100}
                    />
                  </Link>
                </SheetClose>
                <div className="flex justify-between items-center gap-3">
                  <SheetClose className={cn("cursor-pointer")}>
                    <Link
                      href=""
                      className="border border-taupe-700 text-taupe-700 font-nord py-2.5 px-6 rounded-full text-xs"
                    >
                      BOOK NOW
                    </Link>
                  </SheetClose>
                  <SheetClose className={cn("cursor-pointer")}>
                    <Image
                      src="/icons/x_navbar.svg"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </SheetClose>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col text-taupe-700 text-3xl uppercase tracking-wide border-b border-neutral-300">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="border-t py-6 border-neutral-300"
                >
                  <SheetClose>
                    <Link
                      key={item.name}
                      href={item.href}
                      className="hover:text-taupe-500 transition-colors duration-300 pl-6"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center pt-16 px-6">
              <Image
                src="/assets/nav_sheet.jpg"
                alt="logo"
                width={400}
                height={400}
                className="rounded-sm brightness-50"
              />
            </div>
            <SheetFooter>
              <Image
                src="/logo/brown_logomark.svg"
                alt="logo"
                width={80}
                height={80}
              />
              <div className="text-taupe-700">
                <p>© 2026 Forme Pilates. all rights reserved.</p>
                <p>Powered by BUTTERSOFT</p>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ) : (
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.9 }}
          className={cn(
            "hidden md:grid grid-cols-3 items-center p-10 md:pb-3 text-white lg:px-20 transition-all duration-500",
            scrolled &&
              "bg-[#F7F2EA] backdrop-blur-md text-taupe-700 pt-4 border-b border-taupe-700",
          )}
        >
          <div className="flex items-center gap-10 text-h4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="font-nord">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="justify-self-center">
            <Link
              href="/"
              scroll={true}
              onClick={() => {
                // Always scroll to top, even on the home page
                window.scrollTo?.({ top: 0, behavior: "smooth" });
              }}
            >
              <Image
                src={
                  scrolled
                    ? "/logo/brown_wordmark.svg"
                    : "/logo/beige_wordmark.svg"
                }
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href=""
              className={cn(
                "border border-white font-nord py-2.5 px-6 text-white rounded-full text-xs group relative overflow-hidden text-h4 transition-all duration-300",
                scrolled && "border-taupe-700 text-taupe-700",
              )}
            >
              <span
                className={cn(
                  "block h-full text-white transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]",
                  scrolled && "border-taupe-700 text-taupe-700",
                )}
              >
                BOOK NOW
              </span>
              <span className="absolute inset-0 flex items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-0 translate-y-full ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
                BOOK NOW
              </span>
            </Link>
          </div>
        </motion.nav>
      )}
    </div>
  );
}
