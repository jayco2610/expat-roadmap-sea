import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft natural backdrop — sage glow on warm canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 70% at 85% 10%, rgba(125,140,99,0.22), transparent 60%), radial-gradient(60% 60% at 10% 90%, rgba(85,99,63,0.12), transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <p className="label-upper text-[#7d8c63]">Southeast Asia</p>

        <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.05] font-semibold tracking-tight text-[#2b2e28] sm:text-6xl md:text-7xl dark:text-[#ecebe3]">
          Move abroad.
          <br />
          <span className="font-normal italic text-[#6b7a52] dark:text-[#9aac7a]">
            Without the chaos.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#6e7167] dark:text-[#9a9c8f]">
          Visas, cities, housing, jobs, and community for digital nomads and
          long-term movers across Thailand, Vietnam, Bali, and beyond.
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
