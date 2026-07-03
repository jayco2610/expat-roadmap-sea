import { ImageResponse } from "next/og";
import { getGuide, guides } from "@/lib/guides";
import { normalizeCountry } from "@/lib/guide-filters";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const title = guide?.title ?? "Expat Roadmap SEA";
  const country = guide ? normalizeCountry(guide.country) : "Southeast Asia";
  const readingTime = guide ? `${guide.readingTime} min read` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #2b2e28 0%, #3a4032 55%, #55633f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              fontSize: 26,
              letterSpacing: 2,
            }}
          >
            {country.toUpperCase()}
          </div>
          {readingTime && (
            <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
              {readingTime}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 56 : 66,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
            Expat Roadmap <span style={{ color: "#cdd6b8", marginLeft: 10 }}>SEA</span>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
            expat-roadmap-sea.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
