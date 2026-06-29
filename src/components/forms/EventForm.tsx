"use client";

import { createEvent } from "@/actions/events";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";
import type { ActionState } from "@/actions/profile";

type Initial = {
  title: string;
  city: string;
  location: string;
  startsAt: Date | string;
  endsAt?: Date | string | null;
  capacity?: number | null;
  description: string;
};

type Props = {
  initial?: Initial;
  action?: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  submitLabel?: string;
};

function toDatetimeLocal(date?: Date | string | null) {
  if (!date) return undefined;
  return new Date(date).toISOString().slice(0, 16);
}

export function EventForm({ initial, action, submitLabel }: Props) {
  return (
    <ActionForm action={action ?? createEvent} submitLabel={submitLabel ?? "Publish event"}>
      <FormField
        label="Title"
        name="title"
        required
        placeholder="Nomad coffee meetup"
        defaultValue={initial?.title}
      />
      <FormField
        label="City"
        name="city"
        required
        defaultValue={initial?.city ?? "Ho Chi Minh City"}
      />
      <FormField
        label="Location"
        name="location"
        required
        placeholder="The Workshop Coffee, District 1"
        defaultValue={initial?.location}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Starts at"
          name="startsAt"
          type="datetime-local"
          required
          defaultValue={toDatetimeLocal(initial?.startsAt)}
        />
        <FormField
          label="Ends at"
          name="endsAt"
          type="datetime-local"
          defaultValue={toDatetimeLocal(initial?.endsAt)}
        />
      </div>
      <FormField
        label="Capacity"
        name="capacity"
        type="number"
        placeholder="Optional max attendees"
        defaultValue={initial?.capacity ?? undefined}
      />
      <FormField
        label="Description"
        name="description"
        as="textarea"
        required
        rows={6}
        placeholder="What to expect, who should join…"
        defaultValue={initial?.description}
      />
    </ActionForm>
  );
}
