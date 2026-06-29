import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updateJobListing } from "@/actions/jobs";
import { JobForm } from "@/components/forms/JobForm";
import { PageShell } from "@/components/layout/PageShell";
import { requireProfile } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Edit listing" };
export const dynamic = "force-dynamic";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { profile } = await requireProfile();

  if (!isDbConfigured()) notFound();

  const listing = await prisma.jobListing.findFirst({
    where: { id, authorId: profile.id },
  });
  if (!listing) notFound();

  const action = updateJobListing.bind(null, id);

  return (
    <PageShell>
      <Link href={`/jobs/${id}`} className="mb-6 inline-flex text-sm font-medium text-[#55633f] hover:underline">
        ← Back to listing
      </Link>
      <h1 className="font-display mb-6 text-3xl font-semibold tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
        Edit listing
      </h1>
      <div className="max-w-2xl">
        <JobForm
          initial={{
            title: listing.title,
            city: listing.city,
            kind: listing.kind,
            compensation: listing.compensation,
            remote: listing.remote,
            description: listing.description,
          }}
          action={action}
          submitLabel="Save changes"
        />
      </div>
    </PageShell>
  );
}
