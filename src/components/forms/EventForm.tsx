"use client";

import { createEvent } from "@/actions/events";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";

export function EventForm() {
  return (
    <ActionForm action={createEvent} submitLabel="Publish event">
      <FormField label="Title" name="title" required placeholder="Nomad coffee meetup" />
      <FormField label="City" name="city" required defaultValue="Ho Chi Minh City" />
      <FormField label="Location" name="location" required placeholder="The Workshop Coffee, District 1" />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Starts at" name="startsAt" type="datetime-local" required />
        <FormField label="Ends at" name="endsAt" type="datetime-local" />
      </div>
      <FormField label="Capacity" name="capacity" type="number" placeholder="Optional max attendees" />
      <FormField
        label="Description"
        name="description"
        as="textarea"
        required
        rows={6}
        placeholder="What to expect, who should join…"
      />
    </ActionForm>
  );
}
