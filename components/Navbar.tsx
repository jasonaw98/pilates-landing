import Link from "next/link";
import Image from "next/image";
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

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-1">
      <Sheet>
        <nav className="flex justify-between items-center p-4">
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
              className="border border-neutral-100 py-2 px-5 rounded-full font-nord text-xs text-white"
            >
              BOOK NOW
            </Link>
            <SheetTrigger className="cursor-pointer">
              <div className="flex flex-col gap-2">
                <p className="w-8 bg-neutral-50 h-0.5 rounded-full"></p>
                <p className="w-8 bg-neutral-50 h-0.5 rounded-full"></p>
              </div>
            </SheetTrigger>
          </div>
        </nav>
        <SheetContent
          side="left"
          className={cn("bg-neutral-50 w-full! font-nord")}
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
              <div key={item.name} className="border-t py-6 border-neutral-300">
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

          <div className="flex justify-center items-center pt-24">
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
    </div>
  );
}
