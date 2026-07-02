import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Page not found — Expat Roadmap SEA",
  robots: { index: false },
};

const suggestions = [
  { href: "/guides", label: "Browse guides", description: "Visas, cost of living, and city guides for Southeast Asia" },
  { href: "/community", label: "Meet the community", description: "Expats and remote workers across the region" },
  { href: "/map", label: "Explore the map", description: "Cities, coworking, and accommodation on one map" },
];

export default function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl py-16 text-center">
        <p className="text-sm font-medium text-[#7d8c63]">404</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-3 text-lg text-[#6e6e73] dark:text-[#a1a1a6]">
          The link may be outdated, or the page has moved. Here is where to go next.
        </p>

        <div className="mt-10 space-y-3 text-left">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block rounded-2xl border border-[#e5e5ea] p-5 transition hover:border-[#7d8c63] dark:border-[#3a3a3c] dark:hover:border-[#7d8c63]"
            >
              <span className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{s.label}</span>
              <span className="mt-1 block text-sm text-[#6e6e73] dark:text-[#9a9a9e]">{s.description}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-[#7d8c63] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e55f00]"
        >
          Back to home
        </Link>
      </div>
    </PageShell>
  );
}
