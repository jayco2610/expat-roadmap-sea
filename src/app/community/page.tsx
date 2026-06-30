import type { Metadata } from "next";
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

export default async function CommunityPage() {
  const profiles = isDbConfigured() ? await getProfiles() : [];

  return (
    <PageShell>
      <PageHeader
        title="Expat community"
        description="Discover members living across SEA. Contact details respect each member's privacy settings."
        action={{ href: "/settings/profile", label: "Edit profile" }}
      />

      {profiles.length === 0 ? (
        <EmptyState
          title="No profiles yet"
          description={
            isDbConfigured()
              ? "Be the first to create an expat profile."
              : "Connect Supabase and run npm run db:push && npm run db:seed."
          }
          action={{ href: "/settings/profile", label: "Create profile" }}
        />
      ) : (
        <>
          <p className="mb-5 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            {profiles.length} member{profiles.length !== 1 ? "s" : ""} across Southeast Asia
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
