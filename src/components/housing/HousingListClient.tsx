"use client";

import { useState, useMemo } from "react";
import { HousingCard } from "@/components/housing/HousingCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SearchBar } from "@/components/ui/SearchBar";

type Listing = {
  id: string;
  title: string;
  city: string;
  address: string;
  priceMonth: number;
  currency: string;
  propertyType: string;
  author: { displayName: string };
};

type Props = { listings: Listing[] };

const PAGE_SIZE = 12;
const TYPES = ["All", "ROOM", "APARTMENT", "HOUSE", "COLIVING"];
const TYPE_LABELS: Record<string, string> = {
  All: "All types",
  ROOM: "Room",
  APARTMENT: "Apartment",
  HOUSE: "House",
  COLIVING: "Co-living",
};

export function HousingListClient({ listings }: Props) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [page, setPage] = useState(1);

  const cities = useMemo(() => {
    const unique = Array.from(new Set(listings.map((l) => l.city))).sort();
    return ["All", ...unique];
  }, [listings]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return listings.filter((l) => {
      if (q && !l.title.toLowerCase().includes(q) && !l.city.toLowerCase().includes(q)) return false;
      if (city !== "All" && l.city !== city) return false;
      if (type !== "All" && l.propertyType !== type) return false;
      if (maxPrice && l.priceMonth > Number(maxPrice)) return false;
      return true;
    });
  }, [listings, search, city, type, maxPrice]);

  const hasFilters = search || city !== "All" || type !== "All" || maxPrice;
  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
        <div className="w-full sm:max-w-xs">
          <SearchBar value={search} onChange={setSearch} placeholder="Search listings…" />
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
        <div className="-mx-5 flex gap-1.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`shrink-0 rounded-full px-3.5 py-2.5 text-sm font-medium transition ${
                type === t
                  ? "bg-[#2b2e28] text-white dark:bg-[#ecebe3] dark:text-[#2b2e28]"
                  : "bg-white ring-1 ring-black/8 text-[#6e7167] hover:text-[#2b2e28] dark:bg-[#1c1c1e] dark:ring-white/12 dark:text-[#9a9c8f]"
              }`}
            >
              {TYPE_LABELS[t]}
            </button>
          ))}
        </div>
        <div className="relative">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#6e7167]">max $</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="price / mo"
            className="w-32 rounded-xl border border-black/8 bg-white py-2.5 pl-10 pr-3 text-sm text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#55633f]/30 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-[#f5f5f7]"
          />
        </div>
        {hasFilters && (
          <button
            onClick={() => { setSearch(""); setCity("All"); setType("All"); setMaxPrice(""); setPage(1); }}
            className="text-sm text-[#6e7167] underline underline-offset-2 hover:text-[#2b2e28] dark:hover:text-[#ecebe3]"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results count */}
      {hasFilters && (
        <p className="mb-4 text-sm text-[#6e7167]">
          {filtered.length} listing{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {filtered.length === 0 ? (
        <EmptyState
          title="No listings match"
          description="Try adjusting your filters or search query."
          action={{ href: "/housing/new", label: "Post listing" }}
        />
      ) : (
        <>
          <ul className="grid gap-4 sm:grid-cols-2">
            {visible.map((listing) => (
              <li key={listing.id}>
                <HousingCard listing={listing} />
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
