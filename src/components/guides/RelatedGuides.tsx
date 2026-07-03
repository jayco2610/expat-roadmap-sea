import Image from "next/image";
import Link from "next/link";
import { guides, type Guide } from "@/lib/guides";
import { normalizeCountry } from "@/lib/guide-filters";
import { guideCover } from "@/lib/guide-image";

function score(current: Guide, other: Guide): number {
  let s = 0;
  if (normalizeCountry(other.country) === normalizeCountry(current.country)) s += 3;
  s += other.tags.filter((t) => current.tags.includes(t)).length;
  if (other.lang === current.lang) s += 1;
  return s;
}

export function RelatedGuides({ current }: { current: Guide }) {
  const related = guides
    .filter((g) => g.slug !== current.slug)
    .map((g) => ({ guide: g, s: score(current, g) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map((r) => r.guide);

  if (related.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
        Related guides
      </h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {related.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/guides/${g.slug}`}
              className="group card-apple flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={guideCover(g)}
                  alt={g.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="label-upper text-xs text-[#7d8c63]">
                  {normalizeCountry(g.country)}
                </span>
                <h3 className="font-display mt-1.5 line-clamp-2 text-base font-semibold leading-snug text-[#2b2e28] dark:text-[#ecebe3]">
                  {g.title}
                </h3>
                <p className="mt-auto pt-3 text-xs text-[#6e7167]/80 dark:text-[#9a9c8f]/80">
                  {g.readingTime} min read
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
