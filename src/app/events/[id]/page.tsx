import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteEvent } from "@/actions/events";
import { RsvpButtons } from "@/components/events/RsvpButtons";
import { DeleteButton } from "@/components/ui/DeleteButton";
import { PageShell } from "@/components/layout/PageShell";
import { getCurrentProfile, getSessionUser } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!isDbConfigured()) return { title: "Event" };
  const event = await prisma.event.findUnique({ where: { id } });
  return { title: event?.title ?? "Event" };
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params;
  if (!isDbConfigured()) notFound();

  const event = await prisma.event.findFirst({
    where: { id, status: "PUBLISHED" },
    include: {
      author: true,
      rsvps: {
        where: { status: { in: ["GOING", "MAYBE"] } },
        include: { profile: true },
      },
    },
  });

  if (!event) notFound();

  const user = await getSessionUser();
  const myProfile = await getCurrentProfile();
  const isOwner = Boolean(myProfile && myProfile.id === event.authorId);
  const myRsvp = myProfile
    ? await prisma.eventRsvp.findUnique({
        where: {
          eventId_profileId: { eventId: event.id, profileId: myProfile.id },
        },
      })
    : null;

  const going = event.rsvps.filter((r) => r.status === "GOING");
  const dateFmt = new Intl.DateTimeFormat("en", {
    dateStyle: "full",
    timeStyle: "short",
  });

  return (
    <PageShell>
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link href="/events" className="inline-flex text-sm text-[#7d8c63] hover:underline">
          ← All events
        </Link>
        {isOwner && (
          <div className="flex items-center gap-3">
            <Link
              href={`/events/${event.id}/edit`}
              className="rounded-lg border border-black/10 px-4 py-2.5 text-sm font-medium text-[#2b2e28] transition hover:bg-black/5 dark:border-white/15 dark:text-[#ecebe3] dark:hover:bg-white/8"
            >
              Edit
            </Link>
            <DeleteButton onDelete={deleteEvent.bind(null, event.id)} label="Delete event" />
          </div>
        )}
      </div>

      <article className="card-apple max-w-2xl p-6 sm:p-8">
        <p className="text-sm font-medium text-[#7d8c63]">
          {dateFmt.format(event.startsAt)}
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
          {event.title}
        </h1>
        <p className="mt-2 text-[#6e6e73] dark:text-[#a1a1a6]">
          {event.city} · {event.location}
        </p>
        {event.capacity ? (
          <p className="mt-1 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            Capacity: {event.capacity}
          </p>
        ) : null}

        <p className="mt-6 whitespace-pre-wrap leading-relaxed">{event.description}</p>

        <p className="mt-4 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
          Hosted by{" "}
          <Link href={`/community/${event.author.id}`} className="text-[#7d8c63] hover:underline">
            {event.author.displayName}
          </Link>
        </p>

        <section className="mt-8 border-t border-black/8 pt-6 dark:border-white/10">
          <h2 className="font-display text-lg font-semibold">RSVP</h2>
          <div className="mt-4">
            <RsvpButtons
              eventId={event.id}
              currentStatus={myRsvp?.status ?? null}
              isLoggedIn={Boolean(user)}
            />
          </div>
          {going.length > 0 ? (
            <ul className="mt-4 space-y-1 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
              {going.map((r) => (
                <li key={r.id}>
                  <Link href={`/community/${r.profile.id}`} className="text-[#7d8c63] hover:underline">
                    {r.profile.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      </article>
    </PageShell>
  );
}
