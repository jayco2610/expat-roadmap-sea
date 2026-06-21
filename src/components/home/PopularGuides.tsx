import Image from "next/image";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { guideImage } from "@/lib/guide-image";

export function PopularGuides() {
  const enGuides = guides.filter((g) => g.lang === "en");
  const featured = enGuides[0];
  const rest = enGuides.slice(1, 3);
  if (!featured) return null;

  return (
    <section className="px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              Popular guides
            </h2>
            <p className="mt-1 text-[#6e7167] dark:text-[#9a9c8f]">
              Practical tips and in-depth guides
            </p>
          </div>
          <Link
            href="/guides"
            className="hidden shrink-0 rounded-full border border-[#2b2e28]/15 px-4 py-2 text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 sm:inline-flex dark:border-white/20 dark:text-[#ecebe3] dark:hover:bg-white/5"
          >
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {/* Featured guide */}
          <Link
            href={`/guides/${featured.slug}`}
            className="group card-apple flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={guideImage(featured.country)}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="label-upper text-[#7d8c63]">{featured.country}</span>
              <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
                {featured.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6e7167] dark:text-[#9a9c8f]">
                {featured.description}
              </p>
              <p className="mt-4 text-xs text-[#6e7167]/80 dark:text-[#9a9c8f]/80">
                {featured.readingTime} min read · Updated {featured.updatedAt}
              </p>
            </div>
          </Link>

          {/* Secondary guides */}
          <div className="flex flex-col gap-4">
            {rest.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group card-apple flex gap-4 overflow-hidden p-3"
              >
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={guideImage(g.country)}
                    alt={g.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-col justify-center py-1">
                  <span className="label-upper text-[#7d8c63]">{g.country}</span>
                  <h3 className="font-display mt-1 line-clamp-2 text-lg font-semibold leading-snug text-[#2b2e28] dark:text-[#ecebe3]">
                    {g.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#6e7167]/80 dark:text-[#9a9c8f]/80">
                    {g.readingTime} min read · Updated {g.updatedAt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
