"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { guideTopics, type GuideCard } from "@/lib/guide-filters";
import { guideImage } from "@/lib/guide-image";

type Props = { guides: GuideCard[] };

export function GuidesExplorer({ guides }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const country = searchParams.get("country") ?? "all";
  const lang = searchParams.get("lang") ?? "all";
  const topic = searchParams.get("topic") ?? "all";
  const q = searchParams.get("q") ?? "";

  const countries = [...new Set(guides.map((g) => g.country))].sort();

  function setParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all" || value === "") params.delete(key);
    else params.set(key, value);
    router.replace(`/guides${params.size ? `?${params}` : ""}`, { scroll: false });
  }

  const filtered = guides.filter((g) => {
    if (country !== "all" && g.country !== country) return false;
    if (lang !== "all" && g.lang !== lang) return false;
    if (topic !== "all" && !g.topics.includes(topic)) return false;
    if (q && !`${g.title} ${g.description}`.toLowerCase().includes(q.toLowerCase()))
      return false;
    return true;
  });

  const chip = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
      active
        ? "bg-[#7d8c63] text-white"
        : "bg-[#f5f5f7] text-[#3d3d3f] hover:bg-[#e5e5ea] dark:bg-[#2c2c2e] dark:text-[#c7c7cc] dark:hover:bg-[#3a3a3c]"
    }`;

  return (
    <div>
      <div className="mb-8 space-y-4">
        <input
          type="search"
          value={q}
          onChange={(e) => setParam("q", e.target.value)}
          placeholder="Search guides — visa, rent, tax…"
          className="w-full max-w-md rounded-xl border border-[#e5e5ea] bg-white px-4 py-2.5 text-sm text-[#1d1d1f] placeholder-[#9a9a9e] focus:border-[#7d8c63] focus:outline-none dark:border-[#3a3a3c] dark:bg-[#1c1c1e] dark:text-[#f5f5f7]"
        />

        <div className="flex flex-wrap items-center gap-2">
          <button onClick={() => setParam("country", "all")} className={chip(country === "all")}>
            All countries
          </button>
          {countries.map((c) => (
            <button key={c} onClick={() => setParam("country", c)} className={chip(country === c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { value: "all", label: "All topics" },
            ...guideTopics.map((t) => ({ value: t.slug, label: t.label })),
          ].map((t) => (
            <button
              key={t.value}
              onClick={() => setParam("topic", t.value)}
              className={chip(topic === t.value)}
            >
              {t.label}
            </button>
          ))}
          <span aria-hidden className="mx-1 h-5 w-px bg-black/10 dark:bg-white/15" />
          {[
            { value: "all", label: "EN + RU" },
            { value: "en", label: "EN" },
            { value: "ru", label: "RU" },
          ].map((l) => (
            <button
              key={l.value}
              onClick={() => setParam("lang", l.value)}
              className={chip(lang === l.value)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-[#6e6e73] dark:text-[#9a9a9e]">
          Nothing matches these filters yet.{" "}
          <button onClick={() => router.replace("/guides")} className="text-[#2AABEE] hover:underline">
            Reset filters
          </button>
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guide) => (
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
      )}
    </div>
  );
}
