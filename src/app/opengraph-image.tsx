import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Expat Roadmap SEA — community platform for expats in Southeast Asia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(120% 120% at 100% 0%, #7d8c63 0%, transparent 55%), linear-gradient(135deg, #2b2e28, #3a4032)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            Expat Roadmap
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#cdd6b8",
              background: "rgba(255,255,255,0.12)",
              padding: "6px 16px",
              borderRadius: 999,
              letterSpacing: 2,
            }}
          >
            SEA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: "#ffffff", lineHeight: 1.05 }}>
            Live anywhere.
          </div>
          <div style={{ fontSize: 88, fontStyle: "italic", color: "#cdd6b8", lineHeight: 1.05 }}>
            Start with Southeast Asia.
          </div>
        </div>

        <div style={{ fontSize: 30, color: "rgba(255,255,255,0.82)" }}>
          Visas · Housing · Jobs · Community across Thailand, Bali & Vietnam
        </div>
      </div>
    ),
    { ...size },
  );
}
