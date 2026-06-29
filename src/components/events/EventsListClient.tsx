"use client";

import { useState, useMemo } from "react";
import { EventCard } from "@/components/events/EventCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { SearchBar } from "@/components/ui/SearchBar";

type Event = {
  id: string;
  title: string;
  city: string;
  location: string;
  startsAt: Date;
  _count?: { rsvps: number };
};

type Props = { events: Event[] };

const PAGE_SIZE = 12;

export function EventsListClient({ events }: Props) {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [upcomingOnly, setUpcomingOnly] = useState(true);
  const [page, setPage] = useState(1);

  const cities = useMemo(() => {
    const unique = Array.from(new Set(events.map((e) => e.city))).sort();
    return ["All", ...unique];
  }, [events]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    const now = new Date();
    return events.filter((e) => {
      if (q && !e.title.toLowerCase().includes(q) && !e.city.toLowerCase().includes(q)) return false;
      if (city !== "All" && e.city !== city) return false;
      if (upcomingOnly && new Date(e.startsAt) < now) return false;
      return true;
    });
  }, [events, search, city, upcomingOnly]);

  const hasFilters = search || city !== "All" || !upcomingOnly;
  const visible = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = visible.length < filtered.length;

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap">
        <div className="w-full sm:max-w-xs">
          <SearchBar value={search} onChange={setSearch} placeholder="Search events…" />
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
            onClick={() => setUpcomingOnly((v) => !v)}
            className={`relative h-5 w-9 rounded-full transition-colors ${upcomingOnly ? "bg-[#55633f]" : "bg-black/15 dark:bg-white/20"}`}
          >
            <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${upcomingOnly ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
          Upcoming only
        </label>
        {hasFilters && (
          <button
            onClick={() => { setSearch(""); setCity("All"); setUpcomingOnly(true); setPage(1); }}
            className="text-sm text-[#6e7167] underline underline-offset-2 hover:text-[#2b2e28] dark:hover:text-[#ecebe3]"
          >
            Clear
          </button>
        )}
      </div>

      {hasFilters && (
        <p className="mb-4 text-sm text-[#6e7167]">
          {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
        </p>
      )}

      {filtered.length === 0 ? (
        <EmptyState
          title="No events match"
          description="Try adjusting filters or toggle upcoming only."
          action={{ href: "/events/new", label: "Create event" }}
        />
      ) : (
        <>
          <ul className="grid gap-4 sm:grid-cols-2">
            {visible.map((event) => (
              <li key={event.id}>
                <EventCard event={event} />
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
