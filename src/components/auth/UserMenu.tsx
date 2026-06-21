"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function UserMenu() {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setSignedIn(Boolean(data.user)));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(Boolean(session?.user));
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Reserve space while we check — avoids layout shift, keeps render static
  if (signedIn === null) {
    return <div className="h-9 w-20" aria-hidden />;
  }

  if (!signedIn) {
    return (
      <Link href="/login" className="btn-secondary text-sm">
        Sign in
      </Link>
    );
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setSignedIn(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/settings/profile"
        className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-[#6e7167] hover:text-[#2b2e28] sm:block dark:text-[#9a9c8f] dark:hover:text-[#ecebe3]"
      >
        Profile
      </Link>
      <button type="button" onClick={handleSignOut} className="btn-secondary text-sm">
        Sign out
      </button>
    </div>
  );
}
