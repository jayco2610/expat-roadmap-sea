import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteJobListing } from "@/actions/jobs";
import { DeleteButton } from "@/components/ui/DeleteButton";
import { PageShell } from "@/components/layout/PageShell";
import { getCurrentProfile, getSessionUser } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { ReportButton } from "@/components/ReportButton";

async function getListing(id: string) {
  if (!isDbConfigured()) return null;
  return prisma.jobListing.findFirst({
    where: { id, status: "PUBLISHED" },
    include: {
      author: {
        select: {
          displayName: true,
          city: true,
          telegram: true,
          email: true,
          showTelegram: true,
          showEmail: true,
          contactVisibility: true,
        },
      },
    },
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = await getListing(id);
  if (!listing) return { title: "Listing" };
  return {
    title: `${listing.title} — ${listing.city}`,
    description: listing.description.slice(0, 155),
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = await getListing(id);
  if (!listing) notFound();

  const viewer = await getSessionUser();
  const myProfile = await getCurrentProfile();
  const isOwner = Boolean(myProfile && myProfile.id === listing.authorId);
  const vis = listing.author.contactVisibility;
  const canSeeContact = vis === "PUBLIC" || (vis === "MEMBERS" && Boolean(viewer));
  const telegram =
    canSeeContact && listing.author.showTelegram ? listing.author.telegram : null;
  const email =
    canSeeContact && listing.author.showEmail ? listing.author.email : null;

  return (
    <PageShell>
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link href="/jobs" className="inline-flex text-sm font-medium text-[#55633f] hover:underline">
          ← Jobs &amp; services
        </Link>
        {isOwner && (
          <div className="flex items-center gap-3">
            <Link
              href={`/jobs/${listing.id}/edit`}
              className="rounded-lg border border-black/10 px-4 py-2.5 text-sm font-medium text-[#2b2e28] transition hover:bg-black/5 dark:border-white/15 dark:text-[#ecebe3] dark:hover:bg-white/8"
            >
              Edit
            </Link>
            <DeleteButton onDelete={deleteJobListing.bind(null, listing.id)} />
          </div>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase ${
                listing.kind === "SERVICE"
                  ? "bg-[#34c759]/15 text-[#248a3d]"
                  : "bg-[#7d8c63]/15 text-[#55633f]"
              }`}
            >
              {listing.kind === "SERVICE" ? "Service" : "Job"}
            </span>
            {listing.remote ? (
              <span className="text-xs text-[#6e7167]">Remote</span>
            ) : null}
          </div>

          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
            {listing.title}
          </h1>
          <p className="mt-2 text-[#6e7167] dark:text-[#9a9c8f]">{listing.city}</p>
          {listing.compensation ? (
            <p className="mt-3 inline-block rounded-full bg-[#7d8c63]/12 px-3 py-1 text-sm font-semibold text-[#55633f]">
              {listing.compensation}
            </p>
          ) : null}

          <h2 className="font-display mt-8 text-xl font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
            Description
          </h2>
          <p className="mt-3 leading-relaxed whitespace-pre-line text-[#3a3d35] dark:text-[#cdcec4]">
            {listing.description}
          </p>
        </div>

        {/* Contact panel — glass */}
        <aside className="order-1 glass-card h-fit p-5 lg:order-2">
          <p className="text-sm text-[#6e7167]">Posted by</p>
          <p className="font-display mt-0.5 text-lg font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
            {listing.author.displayName}
          </p>
          <p className="text-sm text-[#6e7167]">{listing.author.city}</p>

          <div className="mt-4 space-y-2">
            {telegram ? (
              <a
                href={`https://t.me/${telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                {listing.kind === "SERVICE" ? "Contact on Telegram" : "Apply via Telegram"}
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`} className="btn-secondary w-full">
                Send email
              </a>
            ) : null}
            {!telegram && !email ? (
              viewer ? (
                <p className="text-sm text-[#6e7167]">
                  No public contact shared for this listing.
                </p>
              ) : (
                <Link href="/login" className="btn-primary w-full">
                  Sign in to see contact
                </Link>
              )
            ) : null}
          </div>

          <div className="mt-4 border-t border-black/8 pt-3 dark:border-white/10">
            <ReportButton listingType="job" listingId={listing.id} />
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
