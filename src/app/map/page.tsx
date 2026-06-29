import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { MapExplorer } from "@/components/map/MapExplorer";
import { getCityCoords } from "@/lib/city-coords";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import type { HousingMapItem } from "@/components/map/MapExplorer";

export const metadata: Metadata = {
  title: "Map",
  description:
    "Explore hotels, hostels and community housing in Southeast Asia with interactive map and price filters.",
};

export const revalidate = 60;

const getHousingForMap = unstable_cache(
  () =>
    prisma.housingListing.findMany({
      where: { status: "PUBLISHED" },
      select: {
        id: true,
        title: true,
        city: true,
        address: true,
        priceMonth: true,
        propertyType: true,
      },
      orderBy: { createdAt: "desc" },
      take: 100,
    }),
  ["map-housing"],
  { revalidate: 60 },
);

export default async function MapPage() {
  const raw = isDbConfigured() ? await getHousingForMap() : [];

  const housingItems: HousingMapItem[] = raw.map((l) => {
    const { lat, lng } = getCityCoords(l.city);
    return {
      id: l.id,
      title: l.title,
      city: l.city,
      address: l.address,
      priceMonth: l.priceMonth,
      propertyType: l.propertyType,
      lat,
      lng,
    };
  });

  return <MapExplorer housingItems={housingItems} />;
}
