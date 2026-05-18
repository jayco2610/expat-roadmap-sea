export const navLinks = [
  { href: "/map", label: "Map" },
  { href: "/community", label: "Community" },
  { href: "/housing", label: "Housing" },
  { href: "/events", label: "Events" },
  { href: "/jobs", label: "Jobs" },
] as const;

export type NavHref = (typeof navLinks)[number]["href"];

export const featureCards = [
  {
    title: "Interactive Map",
    description:
      "Visa routes, cost of living, and city guides across Thailand, Vietnam, Indonesia, and more.",
    href: "/map",
    emoji: "🗺️",
  },
  {
    title: "Community",
    description:
      "Connect with expats, local mentors, and language exchange partners in your city.",
    href: "/community",
    emoji: "🤝",
  },
  {
    title: "Housing",
    description:
      "Short-term stays, long-term rentals, and co-living spaces vetted for remote workers.",
    href: "/housing",
    emoji: "🏠",
  },
  {
    title: "Events",
    description:
      "Meetups, nomad summits, and cultural experiences curated for Southeast Asia.",
    href: "/events",
    emoji: "📅",
  },
  {
    title: "Jobs",
    description:
      "Remote-friendly roles, local gigs, and freelance opportunities in the region.",
    href: "/jobs",
    emoji: "💼",
  },
] as const;
