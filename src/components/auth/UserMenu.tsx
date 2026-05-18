import Link from "next/link";
import { signOut } from "@/actions/auth";
import { getCurrentProfile, getSessionUser } from "@/lib/auth";

export async function UserMenu() {
  const user = await getSessionUser();

  if (!user) {
    return (
      <Link href="/login" className="btn-secondary hidden text-sm sm:inline-flex">
        Sign in
      </Link>
    );
  }

  const profile = await getCurrentProfile();

  return (
    <div className="hidden items-center gap-2 sm:flex">
      <Link
        href="/settings/profile"
        className="rounded-full px-3 py-1.5 text-sm font-medium text-[#6e6e73] hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-[#f5f5f7]"
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
