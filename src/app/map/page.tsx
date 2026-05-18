import type { Metadata } from "next";
import { MapExplorer } from "@/components/map/MapExplorer";

export const metadata: Metadata = {
  title: "Map",
  description:
    "Explore hotels and hostels in Ho Chi Minh City and Ubud with interactive map and price filters.",
};

export default function MapPage() {
  return <MapExplorer />;
}
