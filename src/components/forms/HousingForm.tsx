"use client";

import { createHousingListing } from "@/actions/housing";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";

export function HousingForm() {
  return (
    <ActionForm action={createHousingListing} submitLabel="Post listing">
      <FormField label="Title" name="title" required placeholder="Bright 1BR near Ben Thanh" />
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="City" name="city" required defaultValue="Ho Chi Minh City" />
        <FormField
          label="Property type"
          name="propertyType"
          as="select"
          defaultValue="APARTMENT"
          options={[
            { value: "ROOM", label: "Room" },
            { value: "APARTMENT", label: "Apartment" },
            { value: "HOUSE", label: "House" },
            { value: "COLIVING", label: "Co-living" },
          ]}
        />
      </div>
      <FormField label="Address" name="address" required />
      <div className="grid gap-5 sm:grid-cols-3">
        <FormField label="Price / month" name="priceMonth" type="number" required />
        <FormField label="Currency" name="currency" defaultValue="USD" />
        <FormField label="Available from" name="availableFrom" type="date" />
      </div>
      <FormField label="Description" name="description" as="textarea" required rows={6} />
    </ActionForm>
  );
}
