import Link from "next/link";
import { signOut } from "@/actions/auth";
import { getCurrentProfile, getSessionUser } from "@/lib/auth";

export async function UserMenu() {
  const user = await getSessionUser();

  if (!user) {
    return (
      <Link href="/login" className="btn-secondary text-sm">
        Sign in
      </Link>
    );
  }

  const profile = await getCurrentProfile();

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/settings/profile"
        className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-[#6e6e73] hover:text-[#111114] sm:block dark:text-[#9a9a9e] dark:hover:text-[#f5f5f5]"
      >
        {profile?.displayName ?? "Profile"}
      </Link>
      <form action={signOut}>
        <button type="submit" className="btn-secondary text-sm">
          Sign out
        </button>
      </form>
    </div>
  );
}
