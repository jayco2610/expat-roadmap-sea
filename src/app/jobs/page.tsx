import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { JobCard } from "@/components/jobs/JobCard";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { getSessionUser } from "@/lib/auth";
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

export const dynamic = "force-dynamic";

function getJobListings(kindFilter?: "JOB" | "SERVICE") {
  return unstable_cache(
    () =>
      prisma.jobListing.findMany({
        where: kindFilter ? { kind: kindFilter } : undefined,
        orderBy: { createdAt: "desc" },
        include: { author: { select: { displayName: true } } },
      }),
    ["jobs-list", kindFilter ?? "all"],
    { revalidate: 60 },
  )();
}

export default async function JobsPage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>;
}) {
  const params = await searchParams;
  const kindFilter =
    params.kind === "SERVICE" ? "SERVICE" : params.kind === "JOB" ? "JOB" : undefined;
  const user = await getSessionUser();

  const listings = isDbConfigured() ? await getJobListings(kindFilter) : [];

  return (
    <PageShell>
      <PageHeader
        title="Jobs & services"
        description="Remote roles, local gigs, and freelance services from the community."
        action={
          user
            ? { href: "/jobs/new", label: "Post listing" }
            : { href: "/login", label: "Sign in to post" }
        }
      />

      <div className="mb-6 flex gap-2 overflow-x-auto">
        {[
          { href: "/jobs", label: "All" },
          { href: "/jobs?kind=JOB", label: "Jobs" },
          { href: "/jobs?kind=SERVICE", label: "Services" },
        ].map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-medium ${
              (tab.href === "/jobs" && !kindFilter) ||
              (tab.href.includes("JOB") && kindFilter === "JOB") ||
              (tab.href.includes("SERVICE") && kindFilter === "SERVICE")
                ? "bg-[#1d1d1f] text-white dark:bg-[#f5f5f7] dark:text-[#1d1d1f]"
                : "bg-white ring-1 ring-black/8 dark:bg-[#1c1c1e] dark:ring-white/12"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {listings.length === 0 ? (
        <EmptyState
          title="No listings yet"
          description="Post a remote job or offer a local service."
          action={{ href: "/jobs/new", label: "Post listing" }}
        />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {listings.map((listing) => (
            <li key={listing.id}>
              <JobCard listing={listing} />
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
