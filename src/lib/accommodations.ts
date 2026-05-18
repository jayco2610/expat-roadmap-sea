export type CityId = "ho-chi-minh" | "ubud";

export type AccommodationType = "hotel" | "hostel";

export type Accommodation = {
  id: string;
  name: string;
  type: AccommodationType;
  city: CityId;
  cityLabel: string;
  address: string;
  pricePerNight: number;
  currency: "USD";
  lat: number;
  lng: number;
  rating: number;
};

export const cities: { id: CityId | "all"; label: string }[] = [
  { id: "all", label: "All cities" },
  { id: "ho-chi-minh", label: "Ho Chi Minh" },
  { id: "ubud", label: "Ubud" },
];

export const priceRanges = [
  { id: "all", label: "Any price", min: 0, max: Infinity },
  { id: "budget", label: "Under $25", min: 0, max: 25 },
  { id: "mid", label: "$25–50", min: 25, max: 50 },
  { id: "comfort", label: "$50–100", min: 50, max: 100 },
  { id: "premium", label: "$100+", min: 100, max: Infinity },
] as const;

export type PriceRangeId = (typeof priceRanges)[number]["id"];

export const cityCenters: Record<
  CityId,
  { lat: number; lng: number; zoom: number; label: string }
> = {
  "ho-chi-minh": { lat: 10.7769, lng: 106.7009, zoom: 14, label: "Ho Chi Minh City" },
  ubud: { lat: -8.5069, lng: 115.2625, zoom: 14, label: "Ubud, Bali" },
};

export const accommodations: Accommodation[] = [
  {
    id: "hcm-lantern",
    name: "Lantern Saigon Hostel",
    type: "hostel",
    city: "ho-chi-minh",
    cityLabel: "Ho Chi Minh",
    address: "45 Bui Vien St, Pham Ngu Lao, District 1",
    pricePerNight: 14,
    currency: "USD",
    lat: 10.7663,
    lng: 106.6938,
    rating: 4.5,
  },
  {
    id: "hcm-mia",
    name: "Mia Saigon Boutique Hotel",
    type: "hotel",
    city: "ho-chi-minh",
    cityLabel: "Ho Chi Minh",
    address: "2-4 Le Thanh Ton St, District 1",
    pricePerNight: 89,
    currency: "USD",
    lat: 10.7798,
    lng: 106.7012,
    rating: 4.7,
  },
  {
    id: "hcm-cozy",
    name: "Cozy Corner Hostel",
    type: "hostel",
    city: "ho-chi-minh",
    cityLabel: "Ho Chi Minh",
    address: "12 Nguyen Thi Nghia St, Ben Thanh, District 1",
    pricePerNight: 18,
    currency: "USD",
    lat: 10.772,
    lng: 106.6982,
    rating: 4.3,
  },
  {
    id: "hcm-riverside",
    name: "Riverside Urban Hotel",
    type: "hotel",
    city: "ho-chi-minh",
    cityLabel: "Ho Chi Minh",
    address: "18-20 Ton Duc Thang St, District 1",
    pricePerNight: 62,
    currency: "USD",
    lat: 10.7745,
    lng: 106.7068,
    rating: 4.4,
  },
  {
    id: "hcm-sky",
    name: "Skyline District Hotel",
    type: "hotel",
    city: "ho-chi-minh",
    cityLabel: "Ho Chi Minh",
    address: "88 Dong Khoi St, District 1",
    pricePerNight: 118,
    currency: "USD",
    lat: 10.7772,
    lng: 106.7041,
    rating: 4.6,
  },
  {
    id: "hcm-backpack",
    name: "Backpack Hub Saigon",
    type: "hostel",
    city: "ho-chi-minh",
    cityLabel: "Ho Chi Minh",
    address: "241 Pham Ngu Lao St, District 1",
    pricePerNight: 11,
    currency: "USD",
    lat: 10.7651,
    lng: 106.6915,
    rating: 4.1,
  },
  {
    id: "ubud-jungle",
    name: "Jungle Path Hostel",
    type: "hostel",
    city: "ubud",
    cityLabel: "Ubud",
    address: "Jl. Raya Ubud No. 35, Ubud",
    pricePerNight: 16,
    currency: "USD",
    lat: -8.5092,
    lng: 115.2628,
    rating: 4.4,
  },
  {
    id: "ubud-rice",
    name: "Rice Terrace Guesthouse",
    type: "hostel",
    city: "ubud",
    cityLabel: "Ubud",
    address: "Jl. Kajeng No. 12, Ubud",
    pricePerNight: 22,
    currency: "USD",
    lat: -8.5041,
    lng: 115.2591,
    rating: 4.6,
  },
  {
    id: "ubud-sacred",
    name: "Sacred Valley Hotel",
    type: "hotel",
    city: "ubud",
    cityLabel: "Ubud",
    address: "Jl. Monkey Forest No. 88, Ubud",
    pricePerNight: 78,
    currency: "USD",
    lat: -8.5187,
    lng: 115.2584,
    rating: 4.5,
  },
  {
    id: "ubud-pondok",
    name: "Pondok Bamboo Retreat",
    type: "hotel",
    city: "ubud",
    cityLabel: "Ubud",
    address: "Jl. Sri Wedari No. 18, Ubud",
    pricePerNight: 95,
    currency: "USD",
    lat: -8.5012,
    lng: 115.2689,
    rating: 4.8,
  },
  {
    id: "ubud-nomad",
    name: "Nomad Nest Ubud",
    type: "hostel",
    city: "ubud",
    cityLabel: "Ubud",
    address: "Jl. Hanoman No. 44, Ubud",
    pricePerNight: 19,
    currency: "USD",
    lat: -8.5123,
    lng: 115.2647,
    rating: 4.2,
  },
  {
    id: "ubud-ayu",
    name: "Ayu Riverside Hotel",
    type: "hotel",
    city: "ubud",
    cityLabel: "Ubud",
    address: "Jl. Raya Campuhan, Ubud",
    pricePerNight: 54,
    currency: "USD",
    lat: -8.4988,
    lng: 115.2556,
    rating: 4.3,
  },
];

export function filterAccommodations(
  items: Accommodation[],
  city: CityId | "all",
  priceRangeId: PriceRangeId,
  type: AccommodationType | "all",
): Accommodation[] {
  return items.filter((item) => {
    if (city !== "all" && item.city !== city) return false;
    if (type !== "all" && item.type !== type) return false;
    if (!matchesPrice(item.pricePerNight, priceRangeId)) return false;
    return true;
  });
}

function matchesPrice(price: number, rangeId: PriceRangeId): boolean {
  switch (rangeId) {
    case "all":
      return true;
    case "budget":
      return price < 25;
    case "mid":
      return price >= 25 && price < 50;
    case "comfort":
      return price >= 50 && price < 100;
    case "premium":
      return price >= 100;
    default:
      return true;
  }
}
