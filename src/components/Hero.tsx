import Link from "next/link";

export function Hero() {
  return (
    <section className="px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="label-upper text-[#ff6a00]">Southeast Asia</p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl font-bold tracking-tight text-[#111114] sm:text-6xl md:text-7xl dark:text-[#f5f5f5]">
          Expat life.
          <br />
          <span className="text-[#6e6e73] dark:text-[#9a9a9e]">One platform.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6e6e73] dark:text-[#9a9a9e]">
          Visas, cities, housing, jobs, and community for digital nomads and long-term
          movers across Thailand, Vietnam, Bali, and beyond.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/map" className="btn-primary min-w-[200px]">
            Start exploring
          </Link>
          <Link href="/community" className="btn-secondary min-w-[200px]">
            Join community
          </Link>
        </div>
      </div>
    </section>
  );
}
