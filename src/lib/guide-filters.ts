import type { Guide } from "@/lib/guides";

// RU guides store the country name in Russian — normalize for filtering.
const countryAliases: Record<string, string> = {
  "Таиланд": "Thailand",
  "Вьетнам": "Vietnam",
  "Шри-Ланка": "Sri Lanka",
};

export function normalizeCountry(country: string): string {
  return countryAliases[country] ?? country;
}

// Anchor id for a section heading — used by the guide page and the TOC.
export function headingId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-zа-яё0-9\s-]/gi, "")
    .trim()
    .replace(/\s+/g, "-");
}

export type GuideTopic = {
  slug: string;
  label: string;
  match: (g: Pick<Guide, "tags" | "title">) => boolean;
};

const hasTag = (g: Pick<Guide, "tags" | "title">, keywords: string[]) =>
  g.tags.some((t) => keywords.some((k) => t.toLowerCase().includes(k))) ||
  keywords.some((k) => g.title.toLowerCase().includes(k));

export const guideTopics: GuideTopic[] = [
  {
    slug: "visas",
    label: "Visas",
    match: (g) => hasTag(g, ["visa", "виза", "dtv", "e33g", "eta", "de rantau", "kitas", "eb "]),
  },
  {
    slug: "cost",
    label: "Cost of living",
    match: (g) => hasTag(g, ["cost of living", "budget", "стоимость жизни"]),
  },
  {
    slug: "neighborhoods",
    label: "Neighborhoods",
    match: (g) => hasTag(g, ["neighborhood", "районы"]),
  },
  {
    slug: "money",
    label: "Money & tax",
    match: (g) => hasTag(g, ["tax", "banking", "bank"]),
  },
  {
    slug: "insurance",
    label: "Insurance",
    match: (g) => hasTag(g, ["insurance"]),
  },
];

// Light shape passed to the client — keeps guide bodies out of the JS bundle.
export type GuideCard = {
  slug: string;
  lang: "en" | "ru";
  country: string; // normalized
  title: string;
  description: string;
  updatedAt: string;
  readingTime: number;
  topics: string[]; // topic slugs
};

export function toGuideCard(g: Guide): GuideCard {
  return {
    slug: g.slug,
    lang: g.lang,
    country: normalizeCountry(g.country),
    title: g.title,
    description: g.description,
    updatedAt: g.updatedAt,
    readingTime: g.readingTime,
    topics: guideTopics.filter((t) => t.match(g)).map((t) => t.slug),
  };
}
