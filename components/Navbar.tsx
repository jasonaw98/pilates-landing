"use client";
import Link from "next/link";
import Image from "next/image";
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
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, Variants } from "motion/react";

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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-[18px] w-8 items-center justify-center"
    >
      <motion.span
        className="absolute block h-0.5 w-8 rounded-full bg-neutral-50"
        animate={{
          rotate: open ? 45 : 0,
          y: open ? 0 : -5,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="absolute block h-0.5 w-8 rounded-full bg-neutral-50"
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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-1">
      {isMobile ? (
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          {/* Mobile */}
          <nav className="flex justify-between items-center px-4 py-7 md:hidden">
            <Link href="/">
              <Image
                src="/logo/beige_wordmark.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="border border-neutral-100 py-3 px-5 rounded-full font-nord text-xs text-white"
              >
                BOOK NOW
              </Link>
              <SheetTrigger
                className="cursor-pointer"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <MenuIcon open={menuOpen} />
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
                      className="border border-taupe-700 text-taupe-700 font-nord py-3 px-5 rounded-full text-xs"
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
          className="hidden md:grid grid-cols-3 items-center p-10 text-white lg:px-20"
        >
          <div className="flex items-center gap-10">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="font-nord">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="justify-self-center">
            <Link href="/">
              <Image
                src="/logo/beige_wordmark.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href=""
              className="border border-white font-nord py-3 px-5 rounded-full text-xs group relative overflow-hidden"
            >
              <span className="block h-full transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 translate-y-0 opacity-100 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]">
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
