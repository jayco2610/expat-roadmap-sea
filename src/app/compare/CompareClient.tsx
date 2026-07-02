"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { cities, fmtRange, getCity, type CityProfile } from "@/lib/city-data";

const MAX_CITIES = 3;
const DEFAULT_SLUGS = ["chiang-mai", "bali", "da-nang"];

const rows: { label: string; value: (c: CityProfile) => string }[] = [
  { label: "Comfortable budget / mo", value: (c) => fmtRange(c.budget.mid) },
  { label: "Budget minimum / mo", value: (c) => fmtRange(c.budget.low) },
  { label: "Studio rent / mo", value: (c) => fmtRange(c.rent.studio) },
  { label: "1BR rent / mo", value: (c) => fmtRange(c.rent.oneBr) },
  { label: "Food (local-first) / mo", value: (c) => fmtRange(c.food.local) },
  { label: "Coworking / mo", value: (c) => fmtRange(c.coworking) },
  { label: "Scooter rental / mo", value: (c) => fmtRange(c.scooter) },
  { label: "Internet", value: (c) => c.internet },
  { label: "Best visa", value: (c) => c.visa },
];

export function CompareClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const param = searchParams.get("cities");
  const selected = (param ? param.split(",") : DEFAULT_SLUGS)
    .map(getCity)
    .filter((c): c is CityProfile => Boolean(c))
    .slice(0, MAX_CITIES);

  function toggle(slug: string) {
    const current = selected.map((c) => c.slug);
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug].slice(-MAX_CITIES);
    if (next.length === 0) return;
    router.replace(`/compare?cities=${next.join(",")}`, { scroll: false });
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {cities.map((c) => {
          const active = selected.some((s) => s.slug === c.slug);
          return (
            <button
              key={c.slug}
              onClick={() => toggle(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? "bg-[#7d8c63] text-white"
                  : "bg-[#f5f5f7] text-[#3d3d3f] hover:bg-[#e5e5ea] dark:bg-[#2c2c2e] dark:text-[#c7c7cc] dark:hover:bg-[#3a3a3c]"
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#e5e5ea] dark:border-[#3a3a3c]">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-[#e5e5ea] bg-[#f5f5f7] dark:border-[#3a3a3c] dark:bg-[#1c1c1e]">
              <th className="p-4 text-left font-medium text-[#6e6e73] dark:text-[#9a9a9e]" />
              {selected.map((c) => (
                <th key={c.slug} className="p-4 text-left">
                  <span className="block font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{c.name}</span>
                  <span className="text-xs font-normal text-[#6e6e73] dark:text-[#9a9a9e]">{c.country}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-[#e5e5ea] last:border-0 dark:border-[#3a3a3c]">
                <td className="p-4 font-medium text-[#6e6e73] dark:text-[#9a9a9e]">{row.label}</td>
                {selected.map((c) => (
                  <td key={c.slug} className="p-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
                    {row.value(c)}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="p-4 font-medium text-[#6e6e73] dark:text-[#9a9a9e]">In one line</td>
              {selected.map((c) => (
                <td key={c.slug} className="p-4 text-[#3d3d3f] dark:text-[#c7c7cc]">
                  {c.vibe}
                </td>
              ))}
            </tr>
            <tr className="bg-[#f5f5f7] dark:bg-[#1c1c1e]">
              <td className="p-4" />
              {selected.map((c) => (
                <td key={c.slug} className="p-4">
                  <Link
                    href={`/guides/${c.sourceGuide}`}
                    className="text-sm font-medium text-[#2AABEE] hover:underline"
                  >
                    Full guide →
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-[#9a9a9e]">
        Numbers come from our 2026 city guides: single person, mid-range lifestyle. Your spend
        will vary with housing choice and season.
      </p>
    </div>
  );
}
