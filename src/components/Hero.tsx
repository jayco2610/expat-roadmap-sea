import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        {/* Background photo */}
        <Image
          src="/images/hero.jpg"
          alt="Southeast Asia coastline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Readability overlay — warm wash on the left where text sits */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(20,22,16,0.78) 0%, rgba(20,22,16,0.55) 38%, rgba(20,22,16,0.15) 65%, rgba(20,22,16,0) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative flex min-h-[78vh] flex-col justify-center px-6 py-16 sm:min-h-[70vh] sm:px-12 lg:min-h-[600px] lg:px-16">
          <p className="label-upper text-white/75">Southeast Asia</p>

          <h1 className="font-display mt-4 max-w-2xl text-5xl leading-[1.04] font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Live anywhere.
            <br />
            <span className="font-normal italic text-[#cdd6b8]">
              Start with Southeast Asia.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            Visas, cities, housing, jobs, and community for digital nomads and
            long-term movers.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/map" className="btn-primary min-w-[190px]">
              Start exploring
            </Link>
            <Link
              href="/community"
              className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-[0.9375rem] font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Join community
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
