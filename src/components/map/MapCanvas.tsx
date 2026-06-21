"use client";

import type { Accommodation, CityId } from "@/lib/accommodations";
import { cityCenters } from "@/lib/accommodations";
import { seaLocations, type SeaLocation } from "@/lib/sea-locations";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

type MapCanvasProps = {
  items: Accommodation[];
  selectedId: string | null;
  city: CityId | "all";
  onSelect: (id: string) => void;
};

function MapController({
  items,
  selectedId,
  city,
}: {
  items: Accommodation[];
  selectedId: string | null;
  city: CityId | "all";
}) {
  const map = useMap();

  useEffect(() => {
    const refresh = () => map.invalidateSize();
    const t1 = setTimeout(refresh, 100);
    const t2 = setTimeout(refresh, 600);
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
    };
  }, [map]);

  useEffect(() => {
    if (selectedId) {
      const item = items.find((i) => i.id === selectedId);
      if (item) {
        map.flyTo([item.lat, item.lng], 16, { duration: 0.6 });
        return;
      }
    }

    if (city !== "all") {
      const center = cityCenters[city];
      map.flyTo([center.lat, center.lng], center.zoom, { duration: 0.6 });
      return;
    }

    if (items.length > 0) {
      const bounds = L.latLngBounds(items.map((i) => [i.lat, i.lng] as [number, number]));
      map.flyToBounds(bounds, { padding: [48, 48], duration: 0.6, maxZoom: 13 });
    }
  }, [map, items, selectedId, city]);

  return null;
}

function createMarkerIcon(type: Accommodation["type"], selected: boolean) {
  const color = type === "hostel" ? "#34c759" : "#7d8c63";
  const size = selected ? 36 : 28;
  const ring = selected ? "box-shadow:0 0 0 4px rgba(85,99,63,0.35);" : "";

  return L.divIcon({
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:50%;background:${color};border:3px solid #fff;${ring}"></span>`,
  });
}

const badgeEmoji: Record<SeaLocation["badge"], string> = {
  Hot: "🔥",
  Trending: "📈",
  Popular: "⭐",
  New: "✨",
};

function createCityIcon(loc: SeaLocation) {
  const isHot = loc.badge === "Hot";
  const border = isHot ? "border:1.5px solid #f97316;" : "border:1px solid rgba(0,0,0,0.08);";
  const flameGlow = isHot ? "filter:drop-shadow(0 0 5px rgba(249,115,22,0.9));" : "";
  const pulse = isHot ? "sea-flame" : "";

  return L.divIcon({
    className: "sea-city-marker",
    iconSize: [10, 10],
    iconAnchor: [5, 5],
    html: `
      <div style="transform:translate(-50%,-130%);position:absolute;left:0;top:0;">
        <div style="display:flex;align-items:center;gap:6px;background:#fff;border-radius:999px;padding:5px 11px;box-shadow:0 6px 18px rgba(20,22,16,0.18);white-space:nowrap;${border}">
          <span class="${pulse}" style="font-size:13px;line-height:1;${flameGlow}">${badgeEmoji[loc.badge]}</span>
          <span style="font-weight:600;font-size:12px;color:#2b2e28;letter-spacing:-0.01em;">${loc.name}</span>
          <span style="font-size:11px;color:#6e7167;">$${loc.cost}/mo</span>
        </div>
        <div style="width:8px;height:8px;background:#fff;${border}border-top:none;border-left:none;transform:rotate(45deg);margin:-4px auto 0;"></div>
      </div>`,
  });
}

function CityMarkers() {
  const map = useMap();
  return (
    <>
      {seaLocations.map((loc) => (
        <Marker
          key={loc.name}
          position={[loc.lat, loc.lng]}
          icon={createCityIcon(loc)}
          eventHandlers={{
            click: () => map.flyTo([loc.lat, loc.lng], 11, { duration: 0.8 }),
          }}
        />
      ))}
    </>
  );
}

export default function MapCanvas({ items, selectedId, city, onSelect }: MapCanvasProps) {
  // Bright, colorful Voyager basemap — green parks, blue water, like the design reference
  const tileUrl =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png";

  const initialCenter = useMemo((): [number, number] => {
    if (city !== "all") {
      const c = cityCenters[city];
      return [c.lat, c.lng];
    }
    return [3.5, 108];
  }, [city]);

  const initialZoom = city !== "all" ? cityCenters[city].zoom : 6;

  return (
    <MapContainer
      center={initialCenter}
      zoom={initialZoom}
      className="map-leaflet h-full w-full"
      scrollWheelZoom
      zoomControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; CARTO'
        url={tileUrl}
      />
      <MapController items={items} selectedId={selectedId} city={city} />
      <CityMarkers />
      {items.map((item) => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          icon={createMarkerIcon(item.type, item.id === selectedId)}
          eventHandlers={{
            click: () => onSelect(item.id),
          }}
        >
          <Popup>
            <div className="min-w-[180px] p-1">
              <p className="font-semibold text-[#1d1d1f]">{item.name}</p>
              <p className="mt-1 text-xs text-[#6e6e73]">{item.address}</p>
              <p className="mt-2 text-sm font-semibold text-[#7d8c63]">
                ${item.pricePerNight} / night
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
