import { unstable_cache } from "next/cache";
import Link from "next/link";
import { JobCard } from "@/components/jobs/JobCard";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

const getJobs = unstable_cache(
  () =>
    prisma.jobListing.findMany({
      orderBy: { createdAt: "desc" },
      take: 4,
      include: { author: { select: { displayName: true } } },
    }),
  ["home-opportunities"],
  { revalidate: 60 },
);

export async function OpportunitiesSection() {
  if (!isDbConfigured()) return null;
  const jobs = await getJobs();
  if (jobs.length === 0) return null;

  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              Find your next opportunity
            </h2>
            <p className="mt-1 text-[#6e7167] dark:text-[#9a9c8f]">
              Remote jobs and freelance services for expats
            </p>
          </div>
          <Link
            href="/jobs"
            className="hidden shrink-0 rounded-full border border-[#2b2e28]/15 px-4 py-2 text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 sm:inline-flex dark:border-white/20 dark:text-[#ecebe3]"
          >
            View all
          </Link>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {jobs.map((job) => (
            <li key={job.id}>
              <JobCard listing={job} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
