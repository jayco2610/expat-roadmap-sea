export type SeaLocation = {
  name: string;
  country: string;
  lat: number;
  lng: number;
  cost: number; // approx cost of living / month, USD
  badge: "Hot" | "Trending" | "Popular" | "New";
  slug?: string; // links to /destinations/[slug] when a detail page exists
};

export const seaLocations: SeaLocation[] = [
  { name: "Bali", country: "Indonesia", lat: -8.6478, lng: 115.1385, cost: 1100, badge: "Hot", slug: "bali" },
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lng: 100.5018, cost: 1000, badge: "Hot" },
  { name: "Da Nang", country: "Vietnam", lat: 16.0544, lng: 108.2022, cost: 850, badge: "Trending", slug: "da-nang" },
  { name: "Ho Chi Minh City", country: "Vietnam", lat: 10.8231, lng: 106.6297, cost: 900, badge: "Trending" },
  { name: "Chiang Mai", country: "Thailand", lat: 18.7883, lng: 98.9853, cost: 650, badge: "Popular", slug: "chiang-mai" },
  { name: "Kuala Lumpur", country: "Malaysia", lat: 3.139, lng: 101.6869, cost: 900, badge: "New", slug: "kuala-lumpur" },
  { name: "Phuket", country: "Thailand", lat: 7.8804, lng: 98.3923, cost: 1200, badge: "Popular" },
  { name: "Penang", country: "Malaysia", lat: 5.4141, lng: 100.3288, cost: 800, badge: "Popular" },
];
