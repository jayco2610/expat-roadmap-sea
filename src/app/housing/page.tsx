import type { Metadata } from "next";
import { HousingCard } from "@/components/housing/HousingCard";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { getSessionUser } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Housing",
};

export const dynamic = "force-dynamic";

export default async function HousingPage() {
  const user = await getSessionUser();
  const listings = isDbConfigured()
    ? await prisma.housingListing.findMany({
        orderBy: { createdAt: "desc" },
        include: { author: { select: { displayName: true } } },
      })
    : [];

  return (
    <PageShell>
      <PageHeader
        title="Housing board"
        description="Rooms, apartments, and co-living posted by expats in the community."
        action={
          user
            ? { href: "/housing/new", label: "Post listing" }
            : { href: "/login", label: "Sign in to post" }
        }
      />

      {listings.length === 0 ? (
        <EmptyState
          title="No listings yet"
          description="Share your apartment or find a sublet for fellow nomads."
          action={{ href: "/housing/new", label: "Post listing" }}
        />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {listings.map((listing) => (
            <li key={listing.id}>
              <HousingCard listing={listing} />
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
