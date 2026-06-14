import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { ProfileCard } from "@/components/community/ProfileCard";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { getSessionUser } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Community",
  description: "Expat profiles across Southeast Asia.",
};

export const dynamic = "force-dynamic";

const getProfiles = unstable_cache(
  () => prisma.profile.findMany({ orderBy: { createdAt: "desc" } }),
  ["community-profiles"],
  { revalidate: 60 },
);

export default async function CommunityPage() {
  const user = await getSessionUser();
  const profiles = isDbConfigured() ? await getProfiles() : [];

  return (
    <PageShell>
      <PageHeader
        title="Expat community"
        description="Discover members living across SEA. Contact details respect each member's privacy settings."
        action={
          user
            ? { href: "/settings/profile", label: "Edit profile" }
            : { href: "/login?mode=signup", label: "Join community" }
        }
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
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.map((profile) => (
            <li key={profile.id}>
              <ProfileCard profile={profile} />
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
