import type { Metadata } from "next";
import { EventForm } from "@/components/forms/EventForm";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { requireProfile } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Create event",
};

export const dynamic = "force-dynamic";

export default async function NewEventPage() {
  await requireProfile();
  return (
    <PageShell>
      <PageHeader title="Host an event" description="Share a meetup with the expat community." />
      <div className="max-w-2xl">
        <EventForm />
      </div>
    </PageShell>
  );
}
