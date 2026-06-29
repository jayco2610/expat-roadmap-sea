"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { housingSchema } from "@/lib/validations";
import type { ActionState } from "./profile";

export async function createHousingListing(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { profile } = await requireProfile();

  const parsed = housingSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    city: formData.get("city"),
    address: formData.get("address"),
    priceMonth: formData.get("priceMonth"),
    currency: formData.get("currency") || "USD",
    propertyType: formData.get("propertyType"),
    availableFrom: formData.get("availableFrom") || undefined,
  });

  if (!parsed.success) {
    return { error: "Please check all required fields." };
  }

  const { availableFrom, ...rest } = parsed.data;

  await prisma.housingListing.create({
    data: {
      ...rest,
      availableFrom: availableFrom ? new Date(availableFrom) : null,
      authorId: profile.id,
    },
  });

  revalidatePath("/housing");
  redirect("/housing");
}

export async function updateHousingListing(
  id: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { profile } = await requireProfile();

  const listing = await prisma.housingListing.findFirst({
    where: { id, authorId: profile.id },
  });
  if (!listing) return { error: "Listing not found or you don't have permission." };

  const parsed = housingSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    city: formData.get("city"),
    address: formData.get("address"),
    priceMonth: formData.get("priceMonth"),
    currency: formData.get("currency") || "USD",
    propertyType: formData.get("propertyType"),
    availableFrom: formData.get("availableFrom") || undefined,
  });

  if (!parsed.success) return { error: "Please check all required fields." };

  const { availableFrom, ...rest } = parsed.data;

  await prisma.housingListing.update({
    where: { id },
    data: { ...rest, availableFrom: availableFrom ? new Date(availableFrom) : null },
  });

  revalidatePath("/housing");
  revalidatePath(`/housing/${id}`);
  redirect(`/housing/${id}`);
}

export async function deleteHousingListing(id: string): Promise<void> {
  const { profile } = await requireProfile();
  await prisma.housingListing.deleteMany({ where: { id, authorId: profile.id } });
  revalidatePath("/housing");
  redirect("/housing");
}
