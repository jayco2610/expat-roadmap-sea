// City cost & visa profiles for /compare and /tools.
// Every number is taken from the published guides (see sourceGuide) — do not
// edit here without updating the guide, and vice versa.

export type CityProfile = {
  slug: string;
  name: string;
  country: string;
  sourceGuide: string; // guide slug the numbers come from
  // Monthly totals for a single person, USD
  budget: { low: [number, number]; mid: [number, number]; comfort: [number, number] };
  // Monthly rent by housing type, USD
  rent: { shared: [number, number]; studio: [number, number]; oneBr: [number, number] };
  // Monthly food spend, USD: local-first vs mixed local/Western
  food: { local: [number, number]; mixed: [number, number] };
  coworking: [number, number]; // USD / month
  scooter: [number, number]; // USD / month
  internet: string;
  visa: string;
  vibe: string;
};

export const cities: CityProfile[] = [
  {
    slug: "chiang-mai",
    name: "Chiang Mai",
    country: "Thailand",
    sourceGuide: "chiang-mai-cost-of-living-2026",
    budget: { low: [700, 1000], mid: [1200, 1700], comfort: [1800, 2500] },
    rent: { shared: [180, 300], studio: [250, 400], oneBr: [400, 600] },
    food: { local: [90, 180], mixed: [200, 350] },
    coworking: [80, 120],
    scooter: [50, 70],
    internet: "100+ Mbps",
    visa: "DTV — 180 days/entry, 5-year validity",
    vibe: "Cheapest serious nomad hub in Asia. Mature infrastructure, slower pace.",
  },
  {
    slug: "bali",
    name: "Bali (Canggu)",
    country: "Indonesia",
    sourceGuide: "bali-cost-of-living-2026",
    budget: { low: [900, 1500], mid: [1300, 2400], comfort: [2400, 3000] },
    rent: { shared: [300, 450], studio: [600, 900], oneBr: [900, 1400] },
    food: { local: [150, 250], mixed: [400, 600] },
    coworking: [130, 180],
    scooter: [60, 90],
    internet: "25–50 Mbps (fiber in Canggu)",
    visa: "E33G Remote Worker (6 mo) or VOA 60+60 days",
    vibe: "Biggest community and best social scene, at the highest price of the region.",
  },
  {
    slug: "da-nang",
    name: "Da Nang",
    country: "Vietnam",
    sourceGuide: "vietnam-da-nang-neighborhood-guide-2026",
    budget: { low: [700, 900], mid: [900, 1300], comfort: [1300, 1800] },
    rent: { shared: [200, 300], studio: [300, 450], oneBr: [400, 600] },
    food: { local: [100, 180], mixed: [200, 350] },
    coworking: [60, 120],
    scooter: [80, 120],
    internet: "50–150 Mbps",
    visa: "90-day e-visa ($25), then border run",
    vibe: "Beach in the city, lowest prices, strong Russian-speaking community.",
  },
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    country: "Malaysia",
    sourceGuide: "kuala-lumpur-expat-neighborhoods-2026",
    budget: { low: [1000, 1300], mid: [1200, 2000], comfort: [2000, 2800] },
    rent: { shared: [300, 450], studio: [450, 650], oneBr: [600, 1200] },
    food: { local: [150, 250], mixed: [250, 400] },
    coworking: [80, 150],
    scooter: [0, 0], // KL runs on Grab + MRT, not scooters
    internet: "100–500 Mbps fiber",
    visa: "DE Rantau — 12+12 months, $24k/yr income",
    vibe: "Big-city infrastructure, English everywhere, easiest paperwork in the region.",
  },
  {
    slug: "phuket",
    name: "Phuket",
    country: "Thailand",
    sourceGuide: "phuket-digital-nomad-guide-2026",
    budget: { low: [1000, 1400], mid: [1400, 2100], comfort: [2100, 2800] },
    rent: { shared: [250, 400], studio: [600, 900], oneBr: [400, 650] },
    food: { local: [120, 220], mixed: [300, 500] },
    coworking: [90, 160],
    scooter: [70, 100],
    internet: "50–200 Mbps",
    visa: "DTV — 180 days/entry, 5-year validity",
    vibe: "Beach life with real infrastructure. Pricier than Chiang Mai, comparable to Bali.",
  },
  {
    slug: "ho-chi-minh-city",
    name: "Ho Chi Minh City",
    country: "Vietnam",
    sourceGuide: "ho-chi-minh-city-expat-guide-2026",
    budget: { low: [800, 1100], mid: [1100, 1600], comfort: [1600, 2200] },
    rent: { shared: [250, 350], studio: [400, 650], oneBr: [700, 1100] },
    food: { local: [100, 150], mixed: [250, 400] },
    coworking: [80, 150],
    scooter: [60, 90],
    internet: "50–150 Mbps",
    visa: "90-day e-visa ($25), TRC via sponsor for longer",
    vibe: "The economic engine of Vietnam. Fast, loud, cheap, endlessly social.",
  },
  {
    slug: "phnom-penh",
    name: "Phnom Penh",
    country: "Cambodia",
    sourceGuide: "cambodia-phnom-penh-expat-guide-2026",
    budget: { low: [780, 1000], mid: [1000, 1250], comfort: [1250, 1800] },
    rent: { shared: [200, 350], studio: [350, 500], oneBr: [500, 900] },
    food: { local: [150, 250], mixed: [250, 400] },
    coworking: [70, 130],
    scooter: [60, 100],
    internet: "30–60 Mbps",
    visa: "EB business visa — renewable up to 12 months",
    vibe: "Dollar economy, easiest long-term visa in the region, smallest nomad scene.",
  },
];

export function getCity(slug: string): CityProfile | undefined {
  return cities.find((c) => c.slug === slug);
}

export function fmtRange([lo, hi]: [number, number]): string {
  if (lo === 0 && hi === 0) return "—";
  return `$${lo.toLocaleString()}–${hi.toLocaleString()}`;
}
