import { guideImageBySlug } from "@/lib/guide-image-map";

// Per-guide cover photo when one exists, otherwise the per-country image.
export function guideCover(guide: { slug: string; country: string }): string {
  return guideImageBySlug[guide.slug] ?? guideImage(guide.country);
}

export function guideImage(country: string): string {
  const c = country.toLowerCase();
  if (c.includes("thai") || c.includes("таил")) return "/images/guide-thailand-dtv.jpg";
  if (c.includes("viet") || c.includes("вьет")) return "/images/danang.jpg";
  if (c.includes("indo") || c.includes("bali") || c.includes("бали")) return "/images/bali.jpg";
  if (c.includes("malay") || c.includes("малай")) return "/images/kualalumpur.jpg";
  if (c.includes("camb") || c.includes("камбод")) return "/images/hero.jpg";
  if (c.includes("sri") || c.includes("ланк") || c.includes("lanka")) return "/images/danang.jpg";
  return "/images/hero.jpg";
}
