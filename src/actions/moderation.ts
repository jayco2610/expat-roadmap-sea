"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function moderate(formData: FormData) {
  await requireAdmin();

  const type = formData.get("type");
  const id = String(formData.get("id"));
  const action = formData.get("action");
  const status = action === "approve" ? "PUBLISHED" : "REJECTED";

  if (type === "housing") {
    await prisma.housingListing.update({ where: { id }, data: { status } });
    revalidatePath("/housing");
  } else if (type === "job") {
    await prisma.jobListing.update({ where: { id }, data: { status } });
    revalidatePath("/jobs");
  } else if (type === "event") {
    await prisma.event.update({ where: { id }, data: { status } });
    revalidatePath("/events");
  }

  revalidatePath("/");
  revalidatePath("/admin");
}
