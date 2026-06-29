"use client";

import { createHousingListing } from "@/actions/housing";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";
import type { ActionState } from "@/actions/profile";

type Initial = {
  title: string;
  city: string;
  address: string;
  propertyType: string;
  priceMonth: number;
  currency: string;
  description: string;
  availableFrom?: string | null;
};

type Props = {
  initial?: Initial;
  action?: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  submitLabel?: string;
};

export function HousingForm({ initial, action, submitLabel }: Props) {
  return (
    <ActionForm action={action ?? createHousingListing} submitLabel={submitLabel ?? "Post listing"}>
      <FormField
        label="Title"
        name="title"
        required
        placeholder="Bright 1BR near Ben Thanh"
        defaultValue={initial?.title}
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="City" name="city" required defaultValue={initial?.city ?? "Ho Chi Minh City"} />
        <FormField
          label="Property type"
          name="propertyType"
          as="select"
          defaultValue={initial?.propertyType ?? "APARTMENT"}
          options={[
            { value: "ROOM", label: "Room" },
            { value: "APARTMENT", label: "Apartment" },
            { value: "HOUSE", label: "House" },
            { value: "COLIVING", label: "Co-living" },
          ]}
        />
      </div>
      <FormField label="Address" name="address" required defaultValue={initial?.address} />
      <div className="grid gap-5 sm:grid-cols-3">
        <FormField
          label="Price / month"
          name="priceMonth"
          type="number"
          required
          defaultValue={initial?.priceMonth}
        />
        <FormField label="Currency" name="currency" defaultValue={initial?.currency ?? "USD"} />
        <FormField
          label="Available from"
          name="availableFrom"
          type="date"
          defaultValue={
            initial?.availableFrom
              ? new Date(initial.availableFrom).toISOString().split("T")[0]
              : undefined
          }
        />
      </div>
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
