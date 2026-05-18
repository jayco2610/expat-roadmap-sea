import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";

export async function getSessionUser() {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return null;
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function requireUser(redirectTo = "/login") {
  const user = await getSessionUser();
  if (!user) redirect(redirectTo);
  return user;
}

export async function getCurrentProfile() {
  const user = await getSessionUser();
  if (!user) return null;
  return prisma.profile.findUnique({ where: { userId: user.id } });
}

export async function requireProfile() {
  const user = await requireUser();
  const profile = await prisma.profile.findUnique({ where: { userId: user.id } });
  if (!profile) redirect("/settings/profile?onboarding=1");
  return { user, profile };
}
