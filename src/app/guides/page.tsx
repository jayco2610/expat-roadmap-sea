import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { guides } from "@/lib/guides";

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

const countryEmoji: Record<string, string> = {
  Thailand: "🇹🇭",
  Таиланд: "🇹🇭",
  Bali: "🇮🇩",
  Indonesia: "🇮🇩",
  Vietnam: "🇻🇳",
  Malaysia: "🇲🇾",
  Philippines: "🇵🇭",
};

export default function GuidesPage() {
  const guidesByCountry = guides.reduce<Record<string, typeof guides>>(
    (acc, guide) => {
      const key = guide.country;
      if (!acc[key]) acc[key] = [];
      acc[key].push(guide);
      return acc;
    },
    {},
  );

  return (
    <PageShell>
      <PageHeader
        title="Expat guides"
        description="Visa rules, tax basics, and practical tips for living and working across Southeast Asia. Written for digital nomads and long-stay expats."
      />

      <div className="space-y-10">
        {Object.entries(guidesByCountry).map(([country, countryGuides]) => (
          <section key={country}>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              <span>{countryEmoji[country] ?? "🌏"}</span>
              {country}
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {countryGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="group block rounded-2xl border border-black/[0.08] bg-white p-5 transition hover:border-[#ff6a00]/40 hover:shadow-md dark:border-white/[0.08] dark:bg-[#1c1c1e] dark:hover:border-[#ff6a00]/40"
                  >
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="font-medium leading-snug text-[#1d1d1f] group-hover:text-[#ff6a00] dark:text-[#f5f5f7] dark:group-hover:text-[#ff6a00]">
                        {guide.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-[#f5f5f7] px-2 py-0.5 text-xs text-[#6e6e73] dark:bg-[#2c2c2e] dark:text-[#9a9a9e]">
                        {guide.lang === "ru" ? "RU" : "EN"}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
                      {guide.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-[#9a9a9e]">
                      <span>{guide.readingTime} min read</span>
                      <span>·</span>
                      <span>Updated {guide.updatedAt}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
