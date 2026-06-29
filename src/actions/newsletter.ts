"use server";

import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export async function subscribeToNewsletter(email: string): Promise<{ error?: string; success?: boolean }> {
  if (!email || !email.includes("@")) return { error: "Please enter a valid email." };
  if (!isDbConfigured()) return { success: true };

  try {
    await prisma.newsletterSubscriber.upsert({
      where: { email },
      create: { email },
      update: {},
    });
    return { success: true };
  } catch {
    return { error: "Something went wrong. Please try again." };
  }
}
