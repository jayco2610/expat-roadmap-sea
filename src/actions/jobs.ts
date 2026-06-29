"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireProfile } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { jobSchema } from "@/lib/validations";
import type { ActionState } from "./profile";

export async function createJobListing(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { profile } = await requireProfile();

  const parsed = jobSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    city: formData.get("city"),
    kind: formData.get("kind"),
    compensation: formData.get("compensation") || undefined,
    remote: formData.get("remote") === "on",
  });

  if (!parsed.success) {
    return { error: "Please check all required fields." };
  }

  await prisma.jobListing.create({
    data: {
      ...parsed.data,
      authorId: profile.id,
    },
  });

  revalidatePath("/jobs");
  redirect("/jobs");
}

export async function updateJobListing(
  id: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { profile } = await requireProfile();

  const listing = await prisma.jobListing.findFirst({
    where: { id, authorId: profile.id },
  });
  if (!listing) return { error: "Listing not found or you don't have permission." };

  const parsed = jobSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    city: formData.get("city"),
    kind: formData.get("kind"),
    compensation: formData.get("compensation") || undefined,
    remote: formData.get("remote") === "on",
  });

  if (!parsed.success) return { error: "Please check all required fields." };

  await prisma.jobListing.update({ where: { id }, data: parsed.data });

  revalidatePath("/jobs");
  revalidatePath(`/jobs/${id}`);
  redirect(`/jobs/${id}`);
}

export async function deleteJobListing(id: string): Promise<void> {
  const { profile } = await requireProfile();
  await prisma.jobListing.deleteMany({ where: { id, authorId: profile.id } });
  revalidatePath("/jobs");
  redirect("/jobs");
}
