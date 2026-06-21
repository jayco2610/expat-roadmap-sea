import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/destinations";

export function DestinationsSection() {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              Explore Southeast Asia
            </h2>
            <p className="mt-1 text-[#6e7167] dark:text-[#9a9c8f]">
              Handpicked destinations for expats
            </p>
          </div>
          <Link
            href="/map"
            className="hidden shrink-0 rounded-full border border-[#2b2e28]/15 px-4 py-2 text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 sm:inline-flex dark:border-white/20 dark:text-[#ecebe3] dark:hover:bg-white/5"
          >
            View all
          </Link>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {destinations.map((d) => (
            <li key={d.name}>
              <Link
                href={d.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={d.image}
                  alt={`${d.name}, ${d.country}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,22,16,0.7) 0%, rgba(20,22,16,0.1) 45%, rgba(20,22,16,0) 70%)",
                  }}
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-[#2b2e28] backdrop-blur-sm">
                  {d.badge}
                </span>
                <div className="absolute right-3 bottom-3 left-3">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {d.name}
                  </h3>
                  <p className="text-sm text-white/80">{d.country}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
