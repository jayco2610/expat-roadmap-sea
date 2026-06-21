export type Destination = {
  slug: string;
  name: string;
  country: string;
  image: string;
  badge: "Hot" | "Trending" | "Popular" | "New";
  href: string;
  cost: number; // cost of living / month, USD
  internet: string; // avg speed
  weather: string; // typical
  visa: string; // best visa option
  blurb: string;
  guideSlug?: string; // related guide
};

export const destinations: Destination[] = [
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    image: "/images/bali.jpg",
    badge: "Hot",
    href: "/destinations/bali",
    cost: 1100,
    internet: "25–50 Mbps",
    weather: "28°C",
    visa: "E33G KITAS",
    blurb:
      "The original nomad island. Canggu for beach, cafes and nightlife; Ubud for jungle, yoga and quiet. Big community, easy to land, but prices have climbed.",
    guideSlug: "indonesia-bali-e33g-remote-worker-visa-2026",
  },
  {
    slug: "da-nang",
    name: "Da Nang",
    country: "Vietnam",
    image: "/images/danang.jpg",
    badge: "Trending",
    href: "/destinations/da-nang",
    cost: 850,
    internet: "60–90 Mbps",
    weather: "29°C",
    visa: "90-day e-visa",
    blurb:
      "Vietnam's cleanest, calmest nomad base. Long beach, fast internet, low prices and a growing community. The value pick of the region right now.",
    guideSlug: "vietnam-remote-work-visa-2026",
  },
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    image: "/images/chiangmai.jpg",
    badge: "Popular",
    href: "/destinations/chiang-mai",
    cost: 650,
    internet: "100+ Mbps",
    weather: "30°C",
    visa: "DTV",
    blurb:
      "The cheapest serious nomad hub in Asia. Temples, mountains, world-class cafes and the lowest cost of living of any major base. Burning season (Mar–Apr) is the catch.",
    guideSlug: "thailand-digital-nomad-visa-2026",
  },
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    image: "/images/kualalumpur.jpg",
    badge: "New",
    href: "/destinations/kuala-lumpur",
    cost: 900,
    internet: "100+ Mbps",
    weather: "31°C",
    visa: "DE Rantau",
    blurb:
      "Big-city infrastructure at a fraction of Singapore's cost. English everywhere, the easiest paperwork in the region, and flights to the whole of Asia.",
    guideSlug: "malaysia-de-rantau-nomad-pass-2026",
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
