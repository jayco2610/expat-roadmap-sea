"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  accommodations,
  filterAccommodations,
  type AccommodationType,
  type CityId,
  type PriceRangeId,
} from "@/lib/accommodations";
import { AccommodationCard } from "./AccommodationCard";
import { MapFilters } from "./MapFilters";

export type HousingMapItem = {
  id: string;
  title: string;
  city: string;
  address: string;
  priceMonth: number;
  propertyType: string;
  lat: number;
  lng: number;
};

const MapCanvas = dynamic(() => import("./MapCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-[#e8e8ed] dark:bg-[#1c1c1e]">
      <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">Loading map…</p>
    </div>
  ),
});

export function MapExplorer({ housingItems = [] }: { housingItems?: HousingMapItem[] }) {
  const [city, setCity] = useState<CityId | "all">("all");
  const [priceRange, setPriceRange] = useState<PriceRangeId>("all");
  const [type, setType] = useState<AccommodationType | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => filterAccommodations(accommodations, city, priceRange, type),
    [city, priceRange, type],
  );

  useEffect(() => {
    if (selectedId && !filtered.some((i) => i.id === selectedId)) {
      setSelectedId(null);
    }
  }, [filtered, selectedId]);

  useEffect(() => {
    if (!selectedId || !listRef.current) return;
    const el = listRef.current.querySelector(`[data-id="${selectedId}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [selectedId]);

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="flex flex-col lg:h-[calc(100dvh-3.5rem)] lg:overflow-hidden">
      <MapFilters
        city={city}
        priceRange={priceRange}
        type={type}
        resultCount={filtered.length}
        onCityChange={setCity}
        onPriceChange={setPriceRange}
        onTypeChange={setType}
      />

      <div className="flex flex-1 flex-col lg:min-h-0 lg:flex-row">
        <div className="relative order-1 h-[58dvh] sm:h-[62dvh] lg:order-2 lg:h-auto lg:min-h-0 lg:flex-1">
          <MapCanvas
            items={filtered}
            housingItems={housingItems}
            selectedId={selectedId}
            city={city}
            onSelect={handleSelect}
          />
          {filtered.length > 0 ? (
            <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#1d1d1f] shadow-sm ring-1 ring-black/8 backdrop-blur-sm lg:hidden dark:bg-[#1c1c1e]/90 dark:text-[#f5f5f7] dark:ring-white/10">
              Tap a pin or card
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 p-6 backdrop-blur-[2px] dark:bg-black/40">
              <p className="max-w-xs rounded-2xl bg-white px-4 py-3 text-center text-sm text-[#1d1d1f] shadow-lg dark:bg-[#1c1c1e] dark:text-[#f5f5f7]">
                No listings on the map. Adjust filters above.
              </p>
            </div>
          )}
        </div>

        <aside className="order-2 flex flex-col border-t border-black/8 lg:order-1 lg:w-[min(100%,400px)] lg:shrink-0 lg:border-t-0 lg:border-r dark:border-white/10">
          <div className="hidden border-b border-black/8 px-4 py-2.5 text-sm font-medium text-[#6e6e73] lg:block dark:border-white/10 dark:text-[#a1a1a6]">
            {filtered.length} results
          </div>

          <div
            ref={listRef}
            className="flex gap-3 overflow-x-auto p-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-1 lg:flex-col lg:overflow-y-auto lg:pb-6 [&::-webkit-scrollbar]:hidden snap-x snap-mandatory lg:snap-none"
          >
            {filtered.length === 0 ? (
              <p className="w-full py-8 text-center text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
                No places match your filters. Try widening the price range or city.
              </p>
            ) : (
              filtered.map((item) => (
                <div key={item.id} data-id={item.id} className="snap-center lg:snap-start">
                  <AccommodationCard
                    item={item}
                    selected={selectedId === item.id}
                    onSelect={handleSelect}
                    compact
                  />
                </div>
              ))
            )}
          </div>

          <p className="border-t border-black/8 px-4 py-2 text-center text-[11px] text-[#6e6e73] lg:hidden dark:border-white/10 dark:text-[#a1a1a6]">
            Swipe cards · scroll filters above
          </p>
        </aside>
      </div>
    </section>
  );
}
