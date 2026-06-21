import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";

// Comma-separated env override, falls back to the owner's email.
const ADMIN_EMAILS = (
  process.env.ADMIN_EMAILS ?? "jasurakhmadaliev283@gmail.com"
)
  .split(",")
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

export async function isAdmin() {
  const user = await getSessionUser();
  const email = user?.email?.toLowerCase();
  return Boolean(email && ADMIN_EMAILS.includes(email));
}

export async function requireAdmin() {
  if (!(await isAdmin())) redirect("/");
}
