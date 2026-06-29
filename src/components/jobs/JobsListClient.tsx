"use client";

import { useState, useMemo } from "react";
import { JobCard } from "@/components/jobs/JobCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SearchBar } from "@/components/ui/SearchBar";
import type { ListingKind } from "@prisma/client";

type Listing = {
  id: string;
  title: string;
  city: string;
  kind: ListingKind;
  compensation: string | null;
  remote: boolean;
  description: string;
  author: { displayName: string };
};

type Props = { listings: Listing[] };

const PAGE_SIZE = 12;

export function JobsListClient({ listings }: Props) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [kind, setKind] = useState<"All" | "JOB" | "SERVICE">("All");
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [page, setPage] = useState(1);

  const cities = useMemo(() => {
    const unique = Array.from(new Set(listings.map((l) => l.city))).sort();
    return ["All", ...unique];
  }, [listings]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return listings.filter((l) => {
      if (q && !l.title.toLowerCase().includes(q) && !l.description.toLowerCase().includes(q)) return false;
      if (city !== "All" && l.city !== city) return false;
      if (kind !== "All" && l.kind !== kind) return false;
      if (remoteOnly && !l.remote) return false;
      return true;
    });
  }, [listings, search, city, kind, remoteOnly]);

  const hasFilters = search || city !== "All" || kind !== "All" || remoteOnly;
  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
        <div className="w-full sm:max-w-xs">
          <SearchBar value={search} onChange={setSearch} placeholder="Search jobs & services…" />
        </div>

        <div className="flex gap-1.5 shrink-0">
          {(["All", "JOB", "SERVICE"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setKind(k)}
              className={`shrink-0 rounded-full px-3.5 py-2.5 text-sm font-medium transition ${
                kind === k
                  ? "bg-[#2b2e28] text-white dark:bg-[#ecebe3] dark:text-[#2b2e28]"
                  : "bg-white ring-1 ring-black/8 text-[#6e7167] hover:text-[#2b2e28] dark:bg-[#1c1c1e] dark:ring-white/12 dark:text-[#9a9c8f]"
              }`}
            >
              {k === "All" ? "All" : k === "JOB" ? "Jobs" : "Services"}
            </button>
          ))}
        </div>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl border border-black/8 bg-white px-3 py-2.5 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#55633f]/30 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-[#f5f5f7]"
        >
          {cities.map((c) => (
            <option key={c} value={c}>{c === "All" ? "All cities" : c}</option>
          ))}
        </select>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">
          <div
            onClick={() => setRemoteOnly((v) => !v)}
            className={`relative h-5 w-9 rounded-full transition-colors ${remoteOnly ? "bg-[#55633f]" : "bg-black/15 dark:bg-white/20"}`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${remoteOnly ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          Remote only
        </label>

        {hasFilters && (
          <button
            onClick={() => { setSearch(""); setCity("All"); setKind("All"); setRemoteOnly(false); setPage(1); }}
            className="text-sm text-[#6e7167] underline underline-offset-2 hover:text-[#2b2e28] dark:hover:text-[#ecebe3]"
          >
            Clear
          </button>
        )}
      </div>

      {hasFilters && (
        <p className="mb-4 text-sm text-[#6e7167]">
          {filtered.length} listing{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {filtered.length === 0 ? (
        <EmptyState
          title="No listings match"
          description="Try adjusting filters or search query."
          action={{ href: "/jobs/new", label: "Post listing" }}
        />
      ) : (
        <>
          <ul className="grid gap-4 sm:grid-cols-2">
            {visible.map((listing) => (
              <li key={listing.id}>
                <JobCard listing={listing} />
              </li>
            ))}
          </ul>
          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="rounded-full border border-black/10 px-8 py-3 text-sm font-medium text-[#2b2e28] transition hover:bg-black/5 dark:border-white/15 dark:text-[#ecebe3] dark:hover:bg-white/8"
              >
                Show more ({filtered.length - visible.length} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
