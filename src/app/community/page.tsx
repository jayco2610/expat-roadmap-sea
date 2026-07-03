import type { Metadata } from "next";
import Link from "next/link";
import { unstable_cache } from "next/cache";
import { ProfileCard } from "@/components/community/ProfileCard";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Community",
  description: "Expat profiles across Southeast Asia.",
};

export const revalidate = 60;

const getProfiles = unstable_cache(
  async () => {
    const all = await prisma.profile.findMany({ orderBy: { createdAt: "desc" } });
    // Profiles with avatars first, then the rest
    return [
      ...all.filter((p) => p.avatarUrl),
      ...all.filter((p) => !p.avatarUrl),
    ];
  },
  ["community-profiles"],
  { revalidate: 60 },
);

export default async function CommunityPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; lang?: string }>;
}) {
  const { city, lang } = await searchParams;
  const all = isDbConfigured() ? await getProfiles() : [];

  const cities = [...new Set(all.map((p) => p.city).filter((c): c is string => Boolean(c)))].sort();
  const langCounts = new Map<string, number>();
  for (const p of all) for (const l of p.languages) langCounts.set(l, (langCounts.get(l) ?? 0) + 1);
  // Only show languages at least two members share — keeps the chip row useful.
  const langs = [...langCounts.entries()]
    .filter(([l, n]) => n >= 2 || l === lang)
    .map(([l]) => l)
    .sort();

  const profiles = all.filter((p) => {
    if (city && p.city !== city) return false;
    if (lang && !p.languages.includes(lang)) return false;
    return true;
  });

  const chipHref = (nextCity?: string, nextLang?: string) => {
    const params = new URLSearchParams();
    if (nextCity) params.set("city", nextCity);
    if (nextLang) params.set("lang", nextLang);
    return `/community${params.size ? `?${params}` : ""}`;
  };

  const chip = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
      active
        ? "bg-[#7d8c63] text-white"
        : "bg-[#f5f5f7] text-[#3d3d3f] hover:bg-[#e5e5ea] dark:bg-[#2c2c2e] dark:text-[#c7c7cc] dark:hover:bg-[#3a3a3c]"
    }`;

  return (
    <PageShell>
      <PageHeader
        title="Expat community"
        description="Discover members living across SEA. Contact details respect each member's privacy settings."
        action={{ href: "/settings/profile", label: "Edit profile" }}
      />

      {all.length > 0 && (
        <div className="mb-6 space-y-3">
          <div className="flex flex-wrap gap-2">
            <Link href={chipHref(undefined, lang)} className={chip(!city)}>
              All cities
            </Link>
            {cities.map((c) => (
              <Link key={c} href={chipHref(c, lang)} className={chip(city === c)}>
                {c}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href={chipHref(city, undefined)} className={chip(!lang)}>
              All languages
            </Link>
            {langs.map((l) => (
              <Link key={l} href={chipHref(city, l)} className={chip(lang === l)}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      )}

      {profiles.length === 0 ? (
        all.length > 0 ? (
          <EmptyState
            title="No members match these filters"
            description="Try a different city or language."
            action={{ href: "/community", label: "Reset filters" }}
          />
        ) : (
          <EmptyState
            title="No profiles yet"
            description={
              isDbConfigured()
                ? "Be the first to create an expat profile."
                : "Connect Supabase and run npm run db:push && npm run db:seed."
            }
            action={{ href: "/settings/profile", label: "Create profile" }}
          />
        )
      ) : (
        <>
          <p className="mb-5 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            {profiles.length} member{profiles.length !== 1 ? "s" : ""}{city ? ` in ${city}` : " across Southeast Asia"}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <li key={profile.id}>
                <ProfileCard profile={profile} />
              </li>
            ))}
          </ul>
        </>
      )}
    </PageShell>
  );
}
