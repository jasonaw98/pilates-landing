import Image from "next/image";

export default function Footer() {
  return (
    <main>
      <div className="h-[55vh] relative">
        <div
          className="h-full absolute inset-0 bg-position-[50%_80%] bg-size-[350%] bg-no-repeat brightness-45 bg-[url('/assets/nav_sheet.jpg')] saturate-90"
          aria-hidden="true"
        />
        <div className="relative flex flex-col items-center justify-between text-white h-full py-10 px-6 z-10">
          <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex flex-col gap-2">
            <p>Begin your</p>
            <div className="flex">
              <p className="italic">wellness</p>
              <p>&nbsp;journey.</p>
            </div>
          </h1>
          <div className="font-nord text-taupe-700 bg-[#F7F2EA] rounded-full w-full text-center py-2 uppercase text-xs">
            Book your first class
          </div>
        </div>
      </div>
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
            <span>Home</span>
            <span>Classes</span>
            <span>About</span>
            <span>FAQ</span>
          </div>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="font-nord text-white uppercase pb-2">Connect</h1>
            <span>Instagram</span>
            <span>TikTok</span>
            <span>Facebook</span>
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
    </main>
  );
}
