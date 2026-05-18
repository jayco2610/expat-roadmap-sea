import Link from "next/link";
import type { Profile } from "@prisma/client";

export function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Link href={`/community/${profile.id}`} className="card-apple block p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/15 text-lg font-semibold text-[#0071e3]">
          {profile.displayName.charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-display truncate text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            {profile.displayName}
          </h2>
          <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            {profile.city}, {profile.country}
          </p>
          {profile.bio ? (
            <p className="mt-2 line-clamp-2 text-sm text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80">
              {profile.bio}
            </p>
          ) : null}
          {profile.languages.length > 0 ? (
            <p className="mt-2 text-xs text-[#0071e3]">{profile.languages.join(" · ")}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
