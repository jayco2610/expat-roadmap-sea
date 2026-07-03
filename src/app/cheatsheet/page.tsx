import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { countryVisas } from "@/lib/visa-rules";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";

export const metadata: Metadata = {
  title: "SEA Visa Cheatsheet — 6 Countries in One Table (2026)",
  description:
    "Thailand DTV, Malaysia DE Rantau, Indonesia E33G, Vietnam e-visa, Cambodia EB, Sri Lanka ETA: cost, max stay, and requirements in one table.",
  alternates: { canonical: `${BASE_URL}/cheatsheet` },
  openGraph: {
    title: "SEA Visa Cheatsheet 2026",
    description: "Visa rules for 6 Southeast Asian countries in one table.",
    url: `${BASE_URL}/cheatsheet`,
    siteName: "Expat Roadmap SEA",
  },
};

export default function CheatsheetPage() {
  // Long-stay option per country — the one most readers are actually deciding on.
  const rows = countryVisas.map((c) => ({ country: c.name, ...c.options["6m"] }));

  return (
    <PageShell>
      <PageHeader
        title="SEA Visa Cheatsheet"
        description="The realistic long-stay option for each country, one table. Updated for 2026."
      />

      <div className="overflow-x-auto rounded-2xl border border-[#e5e5ea] dark:border-[#3a3a3c]">
        <table className="w-full min-w-[720px] text-sm">
          <thead>
            <tr className="border-b border-[#e5e5ea] bg-[#f5f5f7] text-left dark:border-[#3a3a3c] dark:bg-[#1c1c1e]">
              {["Country", "Visa", "Cost", "Max stay", "Requirements", ""].map((h) => (
                <th key={h} className="p-4 font-medium text-[#6e6e73] dark:text-[#9a9a9e]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.country}
                className="border-b border-[#e5e5ea] last:border-0 dark:border-[#3a3a3c]"
              >
                <td className="p-4 font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {r.country}
                </td>
                <td className="p-4 text-[#1d1d1f] dark:text-[#f5f5f7]">{r.name}</td>
                <td className="p-4 text-[#3d3d3f] dark:text-[#c7c7cc]">{r.cost}</td>
                <td className="p-4 text-[#3d3d3f] dark:text-[#c7c7cc]">{r.maxStay}</td>
                <td className="p-4 text-[#3d3d3f] dark:text-[#c7c7cc]">{r.requirements}</td>
                <td className="p-4">
                  {r.guideSlug && (
                    <Link
                      href={`/guides/${r.guideSlug}`}
                      className="whitespace-nowrap text-sm font-medium text-[#2AABEE] hover:underline"
                    >
                      Guide →
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 max-w-2xl text-xs text-[#9a9a9e]">
        Rules vary by nationality and change often — always confirm on the official government
        site before booking. Each guide lists the official links. Want a specific case checked?{" "}
        <a
          href="https://t.me/expat_roadmap_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2AABEE] hover:underline"
        >
          Ask the bot
        </a>
        .
      </p>
    </PageShell>
  );
}
