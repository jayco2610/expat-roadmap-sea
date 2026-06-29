type LatLng = { lat: number; lng: number };

const CITY_COORDS: Record<string, LatLng> = {
  // Vietnam
  "ho chi minh city": { lat: 10.7769, lng: 106.7009 },
  "ho chi minh": { lat: 10.7769, lng: 106.7009 },
  saigon: { lat: 10.7769, lng: 106.7009 },
  hanoi: { lat: 21.0285, lng: 105.8542 },
  "ha noi": { lat: 21.0285, lng: 105.8542 },
  "da nang": { lat: 16.0544, lng: 108.2022 },
  danang: { lat: 16.0544, lng: 108.2022 },
  "hoi an": { lat: 15.8800, lng: 108.3380 },
  "nha trang": { lat: 12.2388, lng: 109.1967 },
  "phu quoc": { lat: 10.2898, lng: 103.9840 },

  // Indonesia
  ubud: { lat: -8.5069, lng: 115.2625 },
  canggu: { lat: -8.6478, lng: 115.1386 },
  seminyak: { lat: -8.6916, lng: 115.1599 },
  kuta: { lat: -8.7184, lng: 115.1686 },
  bali: { lat: -8.3405, lng: 115.0920 },
  jakarta: { lat: -6.2088, lng: 106.8456 },
  yogyakarta: { lat: -7.7956, lng: 110.3695 },

  // Thailand
  bangkok: { lat: 13.7563, lng: 100.5018 },
  "chiang mai": { lat: 18.7883, lng: 98.9853 },
  chiangmai: { lat: 18.7883, lng: 98.9853 },
  phuket: { lat: 7.9519, lng: 98.3381 },
  "koh samui": { lat: 9.5120, lng: 100.0136 },
  "koh phangan": { lat: 9.7174, lng: 100.0142 },
  pattaya: { lat: 12.9236, lng: 100.8825 },

  // Malaysia
  "kuala lumpur": { lat: 3.1390, lng: 101.6869 },
  penang: { lat: 5.4141, lng: 100.3288 },
  "george town": { lat: 5.4141, lng: 100.3296 },
  "kota kinabalu": { lat: 5.9804, lng: 116.0735 },
  johor: { lat: 1.4927, lng: 103.7414 },

  // Philippines
  manila: { lat: 14.5995, lng: 120.9842 },
  cebu: { lat: 10.3157, lng: 123.8854 },
  boracay: { lat: 11.9674, lng: 121.9248 },

  // Cambodia
  "phnom penh": { lat: 11.5564, lng: 104.9282 },
  "siem reap": { lat: 13.3671, lng: 103.8448 },

  // Myanmar
  yangon: { lat: 16.8661, lng: 96.1951 },

  // Singapore
  singapore: { lat: 1.3521, lng: 103.8198 },

  // Laos
  vientiane: { lat: 17.9757, lng: 102.6331 },
};

const SEA_CENTER: LatLng = { lat: 10.0, lng: 106.5 };

function jitter(val: number, amount = 0.008): number {
  return val + (Math.random() - 0.5) * amount;
}

export function getCityCoords(city: string): LatLng {
  const key = city.toLowerCase().trim();
  const exact = CITY_COORDS[key];
  if (exact) return { lat: jitter(exact.lat), lng: jitter(exact.lng) };

  for (const [k, v] of Object.entries(CITY_COORDS)) {
    if (key.includes(k) || k.includes(key)) {
      return { lat: jitter(v.lat), lng: jitter(v.lng) };
    }
  }

  return SEA_CENTER;
}
