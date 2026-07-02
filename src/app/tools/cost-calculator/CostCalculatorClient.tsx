"use client";

import { useState } from "react";
import Link from "next/link";
import { cities, type CityProfile } from "@/lib/city-data";

type HousingType = "shared" | "studio" | "oneBr";
type FoodStyle = "local" | "mixed";

const housingOptions: { value: HousingType; label: string }[] = [
  { value: "shared", label: "Shared room / co-living" },
  { value: "studio", label: "Studio" },
  { value: "oneBr", label: "1-bedroom" },
];

const foodOptions: { value: FoodStyle; label: string }[] = [
  { value: "local", label: "Mostly local food" },
  { value: "mixed", label: "Local + Western mix" },
];

// Everything outside rent and food: transport, utilities, SIM, entertainment.
// Derived from guide budget totals minus rent and food midpoints.
function extrasRange(city: CityProfile): [number, number] {
  const scooter = city.scooter;
  return [120 + scooter[0], 280 + scooter[1]];
}

export function CostCalculatorClient() {
  const [citySlug, setCitySlug] = useState(cities[0].slug);
  const [housing, setHousing] = useState<HousingType>("studio");
  const [food, setFood] = useState<FoodStyle>("local");
  const [coworking, setCoworking] = useState(false);

  const city = cities.find((c) => c.slug === citySlug)!;
  const extras = extrasRange(city);

  const low =
    city.rent[housing][0] + city.food[food][0] + extras[0] + (coworking ? city.coworking[0] : 0);
  const high =
    city.rent[housing][1] + city.food[food][1] + extras[1] + (coworking ? city.coworking[1] : 0);

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm font-medium transition ${
      active
        ? "bg-[#7d8c63] text-white"
        : "bg-[#f5f5f7] text-[#3d3d3f] hover:bg-[#e5e5ea] dark:bg-[#2c2c2e] dark:text-[#c7c7cc] dark:hover:bg-[#3a3a3c]"
    }`;

  return (
    <div className="max-w-2xl">
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3f] dark:text-[#c7c7cc]">
            City
          </label>
          <div className="flex flex-wrap gap-2">
            {cities.map((c) => (
              <button key={c.slug} onClick={() => setCitySlug(c.slug)} className={chip(citySlug === c.slug)}>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3f] dark:text-[#c7c7cc]">
            Housing
          </label>
          <div className="flex flex-wrap gap-2">
            {housingOptions.map((h) => (
              <button key={h.value} onClick={() => setHousing(h.value)} className={chip(housing === h.value)}>
                {h.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3f] dark:text-[#c7c7cc]">
            Food
          </label>
          <div className="flex flex-wrap gap-2">
            {foodOptions.map((f) => (
              <button key={f.value} onClick={() => setFood(f.value)} className={chip(food === f.value)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#3d3d3f] dark:text-[#c7c7cc]">
            Coworking membership
          </label>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCoworking(false)} className={chip(!coworking)}>
              No, cafes and home
            </button>
            <button onClick={() => setCoworking(true)} className={chip(coworking)}>
              Yes
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-[#7d8c63]/[0.08] p-6 dark:bg-[#7d8c63]/[0.12]">
        <p className="text-sm text-[#6e6e73] dark:text-[#9a9a9e]">
          Estimated monthly budget in {city.name}
        </p>
        <p className="mt-1 font-display text-4xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          ${low.toLocaleString()}–{high.toLocaleString()}
        </p>
        <p className="mt-2 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
          Includes rent, food, transport, utilities, SIM, and everyday extras for one person.
        </p>
        <Link
          href={`/guides/${city.sourceGuide}`}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#7d8c63] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e55f00]"
        >
          See the full {city.name} breakdown
        </Link>
      </div>

      <p className="mt-4 text-xs text-[#9a9a9e]">
        Based on 2026 prices from our city guides. Real spend varies with season, neighborhood,
        and lifestyle.
      </p>
    </div>
  );
}
