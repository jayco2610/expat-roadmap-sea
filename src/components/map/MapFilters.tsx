"use client";

import {
  cities,
  priceRanges,
  type AccommodationType,
  type CityId,
  type PriceRangeId,
} from "@/lib/accommodations";

type MapFiltersProps = {
  city: CityId | "all";
  priceRange: PriceRangeId;
  type: AccommodationType | "all";
  resultCount: number;
  onCityChange: (city: CityId | "all") => void;
  onPriceChange: (range: PriceRangeId) => void;
  onTypeChange: (type: AccommodationType | "all") => void;
};

const types: { id: AccommodationType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hostel", label: "Hostels" },
  { id: "hotel", label: "Hotels" },
];

export function MapFilters({
  city,
  priceRange,
  type,
  resultCount,
  onCityChange,
  onPriceChange,
  onTypeChange,
}: MapFiltersProps) {
  return (
    <div className="space-y-3 border-b border-black/8 bg-[#f5f5f7]/80 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-black/80 sm:px-6">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-semibold tracking-tight text-[#1d1d1f] sm:text-2xl dark:text-[#f5f5f7]">
            Housing map
          </h1>
          <p className="mt-0.5 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            {resultCount} place{resultCount === 1 ? "" : "s"} · Ho Chi Minh & Ubud
          </p>
        </div>
      </div>

      <FilterRow label="City">
        {cities.map((c) => (
          <FilterChip
            key={c.id}
            active={city === c.id}
            onClick={() => onCityChange(c.id)}
            label={c.label}
          />
        ))}
      </FilterRow>

      <FilterRow label="Price">
        {priceRanges.map((r) => (
          <FilterChip
            key={r.id}
            active={priceRange === r.id}
            onClick={() => onPriceChange(r.id)}
            label={r.label}
          />
        ))}
      </FilterRow>

      <FilterRow label="Type">
        {types.map((t) => (
          <FilterChip
            key={t.id}
            active={type === t.id}
            onClick={() => onTypeChange(t.id)}
            label={t.label}
          />
        ))}
      </FilterRow>
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-medium tracking-wide text-[#6e6e73] uppercase dark:text-[#a1a1a6]">
        {label}
      </p>
      <div className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap transition ${
        active
          ? "bg-[#1d1d1f] text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f]"
          : "bg-white text-[#1d1d1f] ring-1 ring-black/8 hover:bg-black/4 dark:bg-[#1c1c1e] dark:text-[#f5f5f7] dark:ring-white/12 dark:hover:bg-white/8"
      }`}
    >
      {label}
    </button>
  );
}