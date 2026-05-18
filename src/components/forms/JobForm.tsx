"use client";

import { createJobListing } from "@/actions/jobs";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";

export function JobForm() {
  return (
    <ActionForm action={createJobListing} submitLabel="Post listing">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Type"
          name="kind"
          as="select"
          defaultValue="JOB"
          options={[
            { value: "JOB", label: "Job" },
            { value: "SERVICE", label: "Service / freelance" },
          ]}
        />
        <FormField label="City" name="city" required defaultValue="Ubud" />
      </div>
      <FormField label="Title" name="title" required placeholder="React developer / Visa agent" />
      <FormField label="Compensation" name="compensation" placeholder="$2k–3k / project rate" />
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="remote" defaultChecked className="h-4 w-4 rounded" />
        Remote-friendly
      </label>
      <FormField label="Description" name="description" as="textarea" required rows={6} />
    </ActionForm>
  );
}
