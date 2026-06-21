export type Destination = {
  name: string;
  country: string;
  image: string;
  badge: string;
  href: string;
};

export const destinations: Destination[] = [
  { name: "Bali", country: "Indonesia", image: "/images/bali.jpg", badge: "Hot", href: "/map" },
  { name: "Da Nang", country: "Vietnam", image: "/images/danang.jpg", badge: "Trending", href: "/map" },
  { name: "Chiang Mai", country: "Thailand", image: "/images/chiangmai.jpg", badge: "Popular", href: "/map" },
  { name: "Kuala Lumpur", country: "Malaysia", image: "/images/kualalumpur.jpg", badge: "New", href: "/map" },
];
