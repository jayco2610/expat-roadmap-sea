import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updateEvent } from "@/actions/events";
import { EventForm } from "@/components/forms/EventForm";
import { PageShell } from "@/components/layout/PageShell";
import { requireProfile } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = { title: "Edit event" };
export const dynamic = "force-dynamic";

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { profile } = await requireProfile();

  if (!isDbConfigured()) notFound();

  const event = await prisma.event.findFirst({
    where: { id, authorId: profile.id },
  });
  if (!event) notFound();

  const action = updateEvent.bind(null, id);

  return (
    <PageShell>
      <Link href={`/events/${id}`} className="mb-6 inline-flex text-sm font-medium text-[#55633f] hover:underline">
        ← Back to event
      </Link>
      <h1 className="font-display mb-6 text-3xl font-semibold tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
        Edit event
      </h1>
      <div className="max-w-2xl">
        <EventForm
          initial={{
            title: event.title,
            city: event.city,
            location: event.location,
            startsAt: event.startsAt,
            endsAt: event.endsAt,
            capacity: event.capacity,
            description: event.description,
          }}
          action={action}
          submitLabel="Save changes"
        />
      </div>
    </PageShell>
  );
}
