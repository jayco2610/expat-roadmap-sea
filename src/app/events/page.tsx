import type { Metadata } from "next";
import { EventCard } from "@/components/events/EventCard";
import { PageShell } from "@/components/layout/PageShell";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { getSessionUser } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Events",
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const user = await getSessionUser();
  const events = isDbConfigured()
    ? await prisma.event.findMany({
        orderBy: { startsAt: "asc" },
        include: {
          rsvps: { where: { status: "GOING" }, select: { id: true } },
        },
      })
    : [];

  return (
    <PageShell>
      <PageHeader
        title="Events"
        description="Meetups and gatherings with RSVP — know who's going before you show up."
        action={
          user
            ? { href: "/events/new", label: "Create event" }
            : { href: "/login", label: "Sign in to host" }
        }
      />

      {events.length === 0 ? (
        <EmptyState
          title="No upcoming events"
          description="Host a nomad meetup, workshop, or dinner."
          action={{ href: "/events/new", label: "Create event" }}
        />
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {events.map((event) => (
            <li key={event.id}>
              <EventCard
                event={{
                  ...event,
                  _count: { rsvps: event.rsvps.length },
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
