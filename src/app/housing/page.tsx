import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { HousingCard } from "@/components/housing/HousingCard";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Housing for Expats in Southeast Asia",
  description:
    "Find rooms, apartments and co-living spaces in Thailand, Bali, Vietnam and across SEA. Listings posted by expats — fair prices, no agencies.",
  openGraph: {
    title: "Expat Housing in Southeast Asia",
    description:
      "Rooms, apartments and co-living spaces posted by expats in Thailand, Bali and Vietnam.",
  },
};

export const revalidate = 60;

const getHousingListings = unstable_cache(
  () =>
    prisma.housingListing.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
      include: { author: { select: { displayName: true } } },
    }),
  ["housing-list"],
  { revalidate: 60 },
);

export default async function HousingPage() {
  const listings = isDbConfigured() ? await getHousingListings() : [];

  return (
    <PageShell>
      <PageHeader
        title="Housing board"
        description="Rooms, apartments, and co-living posted by expats in the community."
        action={{ href: "/housing/new", label: "Post listing" }}
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
