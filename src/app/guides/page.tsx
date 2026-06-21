import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { guides } from "@/lib/guides";
import { guideImage } from "@/lib/guide-image";

export const metadata: Metadata = {
  title: "Expat Guides for Southeast Asia",
  description:
    "Visa guides, cost of living breakdowns, and practical advice for expats in Thailand, Bali, Vietnam, and across Southeast Asia. Updated for 2026.",
  openGraph: {
    title: "Expat Guides for Southeast Asia 2026",
    description:
      "Visa guides, cost of living, and practical advice for digital nomads in Thailand, Bali, Vietnam, and SEA.",
  },
};

export default function GuidesPage() {
  return (
    <PageShell>
      <PageHeader
        title="Expat guides"
        description="Visa rules, tax basics, and practical tips for living and working across Southeast Asia. Written for digital nomads and long-stay expats."
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="group card-apple flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={guideImage(guide.country)}
                  alt={guide.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-[#2b2e28] backdrop-blur-sm">
                  {guide.lang === "ru" ? "RU" : "EN"}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="label-upper text-[#7d8c63]">{guide.country}</span>
                <h2 className="font-display mt-2 text-xl font-semibold leading-snug tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
                  {guide.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6e7167] dark:text-[#9a9c8f]">
                  {guide.description}
                </p>
                <p className="mt-4 text-xs text-[#6e7167]/80 dark:text-[#9a9c8f]/80">
                  {guide.readingTime} min read · Updated {guide.updatedAt}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
