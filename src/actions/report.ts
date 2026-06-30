"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function resolveReport(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id"));
  await prisma.report.update({ where: { id }, data: { resolved: true } });
  revalidatePath("/admin");
}

export async function reportListing(
  listingType: string,
  listingId: string,
  reason: string,
): Promise<{ success: boolean }> {
  if (!["housing", "job", "event"].includes(listingType) || !listingId) {
    return { success: false };
  }
  await prisma.report.create({
    data: { listingType, listingId, reason: reason.slice(0, 500) || null },
  });
  return { success: true };
}
