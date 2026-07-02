"use client";

import { useState } from "react";
import Link from "next/link";
import { countryVisas, type StayLength } from "@/lib/visa-rules";

const stayOptions: { value: StayLength; label: string }[] = [
  { value: "1m", label: "Up to 1 month" },
  { value: "3m", label: "1–3 months" },
  { value: "6m", label: "3–6 months" },
  { value: "12m", label: "6–12 months" },
];

export function VisaCheckerClient() {
  const [country, setCountry] = useState(countryVisas[0].slug);
  const [stay, setStay] = useState<StayLength>("6m");

  const selected = countryVisas.find((c) => c.slug === country)!;
  const option = selected.options[stay];

  return (
    <div className="max-w-2xl">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3f] dark:text-[#c7c7cc]">
            Where do you want to go?
          </label>
          <div className="flex flex-wrap gap-2">
            {countryVisas.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCountry(c.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  country === c.slug
                    ? "bg-[#7d8c63] text-white"
                    : "bg-[#f5f5f7] text-[#3d3d3f] hover:bg-[#e5e5ea] dark:bg-[#2c2c2e] dark:text-[#c7c7cc] dark:hover:bg-[#3a3a3c]"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3f] dark:text-[#c7c7cc]">
            How long do you plan to stay?
          </label>
          <div className="flex flex-wrap gap-2">
            {stayOptions.map((s) => (
              <button
                key={s.value}
                onClick={() => setStay(s.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  stay === s.value
                    ? "bg-[#7d8c63] text-white"
                    : "bg-[#f5f5f7] text-[#3d3d3f] hover:bg-[#e5e5ea] dark:bg-[#2c2c2e] dark:text-[#c7c7cc] dark:hover:bg-[#3a3a3c]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-[#e5e5ea] p-6 dark:border-[#3a3a3c]">
        <p className="text-sm text-[#6e6e73] dark:text-[#9a9a9e]">Recommended option</p>
        <h2 className="mt-1 text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
          {option.name}
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 text-[#6e6e73] dark:text-[#9a9a9e]">Cost</dt>
            <dd className="text-[#1d1d1f] dark:text-[#f5f5f7]">{option.cost}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 text-[#6e6e73] dark:text-[#9a9a9e]">Max stay</dt>
            <dd className="text-[#1d1d1f] dark:text-[#f5f5f7]">{option.maxStay}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 text-[#6e6e73] dark:text-[#9a9a9e]">Requirements</dt>
            <dd className="text-[#1d1d1f] dark:text-[#f5f5f7]">{option.requirements}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-32 shrink-0 text-[#6e6e73] dark:text-[#9a9a9e]">Remote work</dt>
            <dd className="text-[#1d1d1f] dark:text-[#f5f5f7]">
              {option.fitsRemoteWork
                ? "Suitable for a long remote-work stay"
                : "Short-stay option — not designed for long-term remote work"}
            </dd>
          </div>
        </dl>
        {option.guideSlug && (
          <Link
            href={`/guides/${option.guideSlug}`}
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-[#7d8c63] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e55f00]"
          >
            Read the full guide
          </Link>
        )}
      </div>

      <p className="mt-4 text-xs text-[#9a9a9e]">
        Visa rules differ by nationality and change often. Always confirm on the official
        government site — links are listed in each guide.
      </p>
    </div>
  );
}
