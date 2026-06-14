"use client";

import { useTransition } from "react";
import { cancelRsvp, rsvpEvent } from "@/actions/events";
import type { RsvpStatus } from "@prisma/client";

type RsvpButtonsProps = {
  eventId: string;
  currentStatus: RsvpStatus | null;
  isLoggedIn: boolean;
};

export function RsvpButtons({ eventId, currentStatus, isLoggedIn }: RsvpButtonsProps) {
  const [pending, startTransition] = useTransition();

  if (!isLoggedIn) {
    return (
      <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
        <a href="/login" className="text-[#ff6a00] hover:underline">
          Sign in
        </a>{" "}
        to RSVP.
      </p>
    );
  }

  const going = currentStatus === "GOING";
  const maybe = currentStatus === "MAYBE";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => rsvpEvent(eventId, "GOING"))}
        className={going ? "btn-primary" : "btn-secondary"}
      >
        Going
      </button>
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => rsvpEvent(eventId, "MAYBE"))}
        className={maybe ? "btn-primary" : "btn-secondary"}
      >
        Maybe
      </button>
      {(going || maybe) && (
        <button
          type="button"
          disabled={pending}
          onClick={() => startTransition(() => cancelRsvp(eventId))}
          className="btn-secondary text-sm"
        >
          Cancel
        </button>
      )}
    </div>
  );
}
