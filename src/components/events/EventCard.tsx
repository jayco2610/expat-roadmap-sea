import Image from "next/image";
import Link from "next/link";
import { eventImage } from "@/lib/event-image";

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
    <Link
      href={`/events/${event.id}`}
      className="card-apple group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={eventImage(event.title)}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[#55633f] backdrop-blur-sm">
          {date}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="font-display text-lg font-semibold leading-snug text-[#2b2e28] dark:text-[#ecebe3]">
          {event.title}
        </h2>
        <p className="mt-1 text-sm text-[#6e7167] dark:text-[#9a9c8f]">
          {event.city} · {event.location}
        </p>
        {event._count ? (
          <p className="mt-auto pt-3 text-xs text-[#6e7167]/80 dark:text-[#9a9c8f]/80">
            {event._count.rsvps} going
          </p>
        ) : null}
      </div>
    </Link>
  );
}
