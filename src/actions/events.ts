"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { RsvpStatus } from "@prisma/client";
import { requireProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { eventSchema } from "@/lib/validations";
import type { ActionState } from "./profile";

export async function createEvent(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { profile } = await requireProfile();

  const parsed = eventSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    city: formData.get("city"),
    location: formData.get("location"),
    startsAt: formData.get("startsAt"),
    endsAt: formData.get("endsAt") || undefined,
    capacity: formData.get("capacity") || undefined,
  });

  if (!parsed.success) {
    return { error: "Please check all required fields." };
  }

  const { endsAt, capacity, startsAt, ...rest } = parsed.data;

  const event = await prisma.event.create({
    data: {
      ...rest,
      startsAt: new Date(startsAt),
      endsAt: endsAt ? new Date(endsAt) : null,
      capacity: capacity === "" || capacity === undefined ? null : Number(capacity),
      authorId: profile.id,
    },
  });

  revalidatePath("/events");
  redirect(`/events/${event.id}`);
}

export async function rsvpEvent(eventId: string, status: RsvpStatus = "GOING") {
  const { profile } = await requireProfile();

  await prisma.eventRsvp.upsert({
    where: {
      eventId_profileId: { eventId, profileId: profile.id },
    },
    create: { eventId, profileId: profile.id, status },
    update: { status },
  });

  revalidatePath(`/events/${eventId}`);
  revalidatePath("/events");
}

export async function cancelRsvp(eventId: string) {
  const { profile } = await requireProfile();

  await prisma.eventRsvp.updateMany({
    where: { eventId, profileId: profile.id },
    data: { status: "CANCELLED" },
  });

  revalidatePath(`/events/${eventId}`);
  revalidatePath("/events");
}
