import type { Metadata } from "next";
import { JobForm } from "@/components/forms/JobForm";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { requireProfile } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Post job or service",
};

export const dynamic = "force-dynamic";

export default async function NewJobPage() {
  await requireProfile();
  return (
    <PageShell>
      <PageHeader title="Post a job or service" description="Help expats find work or hire local help." />
      <div className="max-w-2xl">
        <JobForm />
      </div>
    </PageShell>
  );
}
