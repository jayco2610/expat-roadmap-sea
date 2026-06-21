import type { MetadataRoute } from "next";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/map", "/community", "/events", "/housing", "/jobs"],
      disallow: ["/settings/", "/login", "/auth/", "/api/", "/admin"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
