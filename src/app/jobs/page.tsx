import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { JobsListClient } from "@/components/jobs/JobsListClient";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Remote Jobs & Freelance Services for Expats in SEA",
  description:
    "Find remote work, local gigs and freelance services in Thailand, Bali, Vietnam. Jobs posted by and for the expat community in Southeast Asia.",
  openGraph: {
    title: "Remote Jobs & Services for Expats in Southeast Asia",
    description:
      "Remote work and freelance services in Thailand, Bali, Vietnam — posted by the expat community.",
  },
};

const getJobListings = unstable_cache(
  () =>
    prisma.jobListing.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { createdAt: "desc" },
      include: { author: { select: { displayName: true } } },
    }),
  ["jobs-list"],
  { revalidate: 60 },
);

export default async function JobsPage() {
  const listings = isDbConfigured() ? await getJobListings() : [];

  return (
    <PageShell>
      <PageHeader
        title="Jobs & services"
        description="Remote roles, local gigs, and freelance services from the community."
        action={{ href: "/jobs/new", label: "Post listing" }}
      />
      <JobsListClient listings={listings} />
    </PageShell>
  );
}
