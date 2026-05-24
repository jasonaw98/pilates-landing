export default function MoreThanJust() {
  return (
    <main className="relative h-screen">
      <div
        className="absolute inset-0 bg-position-[40%_center] bg-size-[300%] md:bg-size-[150%] bg-no-repeat brightness-50 bg-[url('/assets/pool.jpg')]"
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center justify-center gap-4 text-white h-full pb-12 px-4 z-10">
        <h1 className="text-4xl font-ivy-ora-display break-keep text-center flex flex-col md:flex-row">
          <p>More than &nbsp;</p>
          <div className="flex">
            just a&nbsp;<p className="italic">studio.</p>
          </div>
        </h1>
      </div>
    </main>
  );
}
