"use client";

import type { Accommodation } from "@/lib/accommodations";

type AccommodationCardProps = {
  item: Accommodation;
  selected: boolean;
  onSelect: (id: string) => void;
  compact?: boolean;
};

export function AccommodationCard({
  item,
  selected,
  onSelect,
  compact = false,
}: AccommodationCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-[#0071e3] bg-[#0071e3]/5 ring-2 ring-[#0071e3]/30 dark:bg-[#0071e3]/15"
          : "border-black/8 bg-white hover:border-black/15 dark:border-white/10 dark:bg-[#1c1c1e] dark:hover:border-white/20"
      } ${compact ? "min-w-[280px] shrink-0 snap-center lg:min-w-0 lg:w-full" : "w-full"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase ${
                item.type === "hostel"
                  ? "bg-[#34c759]/15 text-[#248a3d] dark:text-[#34c759]"
                  : "bg-[#0071e3]/15 text-[#0071e3]"
              }`}
            >
              {item.type}
            </span>
            <span className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]">{item.cityLabel}</span>
          </div>
          <h3 className="font-display mt-1.5 truncate text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            {item.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm leading-snug text-[#6e6e73] dark:text-[#a1a1a6]">
            {item.address}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            ${item.pricePerNight}
          </p>
          <p className="text-[11px] text-[#6e6e73] dark:text-[#a1a1a6]">/ night</p>
          <p className="mt-1 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">★ {item.rating}</p>
        </div>
      </div>
    </button>
  );
}
