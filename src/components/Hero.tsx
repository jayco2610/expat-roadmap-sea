import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,113,227,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,113,227,0.25),transparent)]"
        aria-hidden
      />

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium tracking-wide text-[#0071e3] uppercase">
          Southeast Asia · Remote life
        </p>
        <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl dark:text-[#f5f5f7]">
          Your roadmap to{" "}
          <span className="bg-gradient-to-r from-[#0071e3] to-[#34c759] bg-clip-text text-transparent">
            expat life
          </span>{" "}
          in SEA
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6e6e73] sm:text-xl dark:text-[#a1a1a6]">
          Visas, cities, housing, jobs, and community — one thoughtful guide for digital nomads
          and long-term movers across Thailand, Vietnam, Bali, and beyond.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/map" className="btn-primary min-w-[180px]">
            Start exploring
          </Link>
          <Link href="/community" className="btn-secondary min-w-[180px]">
            Join community
          </Link>
        </div>
      </div>
    </section>
  );
}
