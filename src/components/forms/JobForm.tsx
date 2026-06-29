"use client";

import { createJobListing } from "@/actions/jobs";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";
import type { ActionState } from "@/actions/profile";

type Initial = {
  title: string;
  city: string;
  kind: string;
  compensation?: string | null;
  remote: boolean;
  description: string;
};

type Props = {
  initial?: Initial;
  action?: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  submitLabel?: string;
};

export function JobForm({ initial, action, submitLabel }: Props) {
  return (
    <ActionForm action={action ?? createJobListing} submitLabel={submitLabel ?? "Post listing"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Type"
          name="kind"
          as="select"
          defaultValue={initial?.kind ?? "JOB"}
          options={[
            { value: "JOB", label: "Job" },
            { value: "SERVICE", label: "Service / freelance" },
          ]}
        />
        <FormField label="City" name="city" required defaultValue={initial?.city ?? "Ubud"} />
      </div>
      <FormField
        label="Title"
        name="title"
        required
        placeholder="React developer / Visa agent"
        defaultValue={initial?.title}
      />
      <FormField
        label="Compensation"
        name="compensation"
        placeholder="$2k–3k / project rate"
        defaultValue={initial?.compensation ?? undefined}
      />
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          name="remote"
          defaultChecked={initial?.remote ?? true}
          className="h-4 w-4 rounded"
        />
        Remote-friendly
      </label>
      <FormField
        label="Description"
        name="description"
        as="textarea"
        required
        rows={6}
        defaultValue={initial?.description}
      />
    </ActionForm>
  );
}
