"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { profileSchema } from "@/lib/validations";

export type ActionState = { error?: string; success?: string } | undefined;

function splitList(value?: string) {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function upsertProfile(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const user = await requireUser();

  const parsed = profileSchema.safeParse({
    displayName: formData.get("displayName"),
    bio: formData.get("bio") || undefined,
    city: formData.get("city"),
    country: formData.get("country"),
    languages: formData.get("languages"),
    interests: formData.get("interests"),
    email: formData.get("email") || undefined,
    phone: formData.get("phone") || undefined,
    telegram: formData.get("telegram") || undefined,
    contactVisibility: formData.get("contactVisibility"),
    showEmail: formData.get("showEmail") === "on",
    showPhone: formData.get("showPhone") === "on",
    showTelegram: formData.get("showTelegram") === "on",
  });

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors.displayName?.[0] ?? "Invalid form data." };
  }

  const data = parsed.data;

  await prisma.profile.upsert({
    where: { userId: user.id },
    create: {
      userId: user.id,
      displayName: data.displayName,
      bio: data.bio,
      city: data.city,
      country: data.country,
      languages: splitList(data.languages),
      interests: splitList(data.interests),
      email: data.email || null,
      phone: data.phone || null,
      telegram: data.telegram || null,
      contactVisibility: data.contactVisibility,
      showEmail: data.showEmail,
      showPhone: data.showPhone,
      showTelegram: data.showTelegram,
    },
    update: {
      displayName: data.displayName,
      bio: data.bio,
      city: data.city,
      country: data.country,
      languages: splitList(data.languages),
      interests: splitList(data.interests),
      email: data.email || null,
      phone: data.phone || null,
      telegram: data.telegram || null,
      contactVisibility: data.contactVisibility,
      showEmail: data.showEmail,
      showPhone: data.showPhone,
      showTelegram: data.showTelegram,
    },
  });

  revalidatePath("/community");
  revalidatePath("/settings/profile");

  redirect("/community");
}
