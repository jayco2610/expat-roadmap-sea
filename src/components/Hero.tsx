import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/routes";
import { navIcons } from "@/components/icons/NavIcons";

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

        {/* Readability overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(20,22,16,0.78) 0%, rgba(20,22,16,0.5) 38%, rgba(20,22,16,0.12) 65%, rgba(20,22,16,0) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative flex min-h-[72vh] flex-col justify-center px-6 pt-16 pb-16 sm:min-h-[72vh] sm:px-12 sm:pb-36 lg:min-h-[620px] lg:px-16">
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

        {/* Glass quick-nav docked inside the hero — desktop/tablet only */}
        <nav className="glass absolute right-6 bottom-6 left-6 hidden grid-cols-6 gap-1 rounded-2xl p-2.5 sm:grid">
          {navLinks.map(({ href, label }) => {
            const Icon = navIcons[href];
            return (
              <Link
                key={href}
                href={href}
                className="group flex flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-white transition hover:bg-white/20"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {Icon ? <Icon className="h-6 w-6 drop-shadow" /> : null}
                <span className="text-sm font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
