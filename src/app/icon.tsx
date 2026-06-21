import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(140deg, #5c6b4a, #7d8c63)",
          borderRadius: 14,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2.5c-4.0 0-7.2 3.2-7.2 7.2 0 5.4 7.2 12.3 7.2 12.3s7.2-6.9 7.2-12.3c0-4.0-3.2-7.2-7.2-7.2z"
            fill="#ffffff"
          />
          <circle cx="12" cy="9.6" r="3" fill="#5c6b4a" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
