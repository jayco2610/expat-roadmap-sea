import type { Metadata } from "next";
import { HousingForm } from "@/components/forms/HousingForm";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { requireProfile } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Post housing",
};

export const dynamic = "force-dynamic";

export default async function NewHousingPage() {
  await requireProfile();
  return (
    <PageShell>
      <PageHeader title="Post housing" description="List a room or apartment for expats." />
      <div className="max-w-2xl">
        <HousingForm />
      </div>
    </PageShell>
  );
}
