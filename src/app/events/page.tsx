import type { Metadata } from "next";
import { unstable_cache } from "next/cache";
import { EventsListClient } from "@/components/events/EventsListClient";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Expat Events & Meetups in Southeast Asia",
  description:
    "Networking events, nomad meetups and group tours for expats in Thailand, Bali, Vietnam and across SEA. Join, RSVP and meet people nearby.",
  openGraph: {
    title: "Expat Events & Meetups in Southeast Asia",
    description:
      "Networking events and group tours for expats in Thailand, Bali and Vietnam.",
  },
};

export const revalidate = 60;

const getEvents = unstable_cache(
  () =>
    prisma.event.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { startsAt: "asc" },
      include: {
        rsvps: { where: { status: "GOING" }, select: { id: true } },
      },
    }),
  ["events-list"],
  { revalidate: 60 },
);

export default async function EventsPage() {
  const events = isDbConfigured() ? await getEvents() : [];

  return (
    <PageShell>
      <PageHeader
        title="Events"
        description="Meetups and gatherings with RSVP. Know who's going before you show up."
        action={{ href: "/events/new", label: "Create event" }}
      />

      <EventsListClient
        events={events.map((e) => ({ ...e, _count: { rsvps: e.rsvps.length } }))}
      />
    </PageShell>
  );
}
