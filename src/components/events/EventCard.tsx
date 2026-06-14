import Link from "next/link";

type EventCardProps = {
  event: {
    id: string;
    title: string;
    city: string;
    location: string;
    startsAt: Date;
    _count?: { rsvps: number };
  };
};

export function EventCard({ event }: EventCardProps) {
  const date = new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(event.startsAt));

  return (
    <Link href={`/events/${event.id}`} className="card-apple block p-5">
      <p className="text-xs font-medium tracking-wide text-[#ff6a00] uppercase">{date}</p>
      <h2 className="font-display mt-1 text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
        {event.title}
      </h2>
      <p className="mt-1 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
        {event.city} · {event.location}
      </p>
      {event._count ? (
        <p className="mt-3 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
          {event._count.rsvps} going
        </p>
      ) : null}
    </Link>
  );
}
