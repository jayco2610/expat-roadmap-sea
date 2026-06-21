import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Expat Roadmap SEA",
    short_name: "Expat Roadmap",
    description:
      "Visas, housing, jobs and community for expats and digital nomads across Southeast Asia.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ee",
    theme_color: "#55633f",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
