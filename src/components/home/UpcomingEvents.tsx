import { unstable_cache } from "next/cache";
import Link from "next/link";
import { EventCard } from "@/components/events/EventCard";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

const getUpcoming = unstable_cache(
  () =>
    prisma.event.findMany({
      where: { status: "PUBLISHED" },
      orderBy: { startsAt: "asc" },
      take: 3,
      include: { rsvps: { where: { status: "GOING" }, select: { id: true } } },
    }),
  ["home-upcoming-events"],
  { revalidate: 60 },
);

export async function UpcomingEvents() {
  if (!isDbConfigured()) return null;
  const events = await getUpcoming();
  if (events.length === 0) return null;

  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              Upcoming events
            </h2>
            <p className="mt-1 text-[#6e7167] dark:text-[#9a9c8f]">
              Meetups and gatherings across the region
            </p>
          </div>
          <Link
            href="/events"
            className="hidden shrink-0 rounded-full border border-[#2b2e28]/15 px-4 py-2 text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 sm:inline-flex dark:border-white/20 dark:text-[#ecebe3]"
          >
            View all
          </Link>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <li key={event.id}>
              <EventCard
                event={{ ...event, _count: { rsvps: event.rsvps.length } }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
