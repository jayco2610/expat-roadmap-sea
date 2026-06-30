import Link from "next/link";
import type { Profile } from "@prisma/client";
import { VerifiedBadge, memberSince } from "@/components/ui/VerifiedBadge";

export function ProfileCard({ profile }: { profile: Profile }) {
  const initials = profile.displayName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Link href={`/community/${profile.id}`} className="glass-card block p-4 transition-shadow hover:shadow-md active:scale-[0.99]">
      <div className="flex items-start gap-3.5">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-[#7d8c63]/15 ring-1 ring-black/5 dark:ring-white/10">
          {profile.avatarUrl ? (
            <img
              src={profile.avatarUrl}
              alt={profile.displayName}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-base font-semibold text-[#7d8c63]">
              {initials}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h2 className="font-display truncate text-[15px] font-semibold leading-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              {profile.displayName}
            </h2>
            {profile.verified ? <VerifiedBadge /> : null}
          </div>
          <p className="mt-0.5 truncate text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
            {[profile.city, profile.country].filter(Boolean).join(", ")} · since{" "}
            {memberSince(profile.createdAt)}
          </p>
          {profile.bio ? (
            <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-[#1d1d1f]/75 dark:text-[#f5f5f7]/70">
              {profile.bio}
            </p>
          ) : null}
          {profile.languages.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {profile.languages.slice(0, 3).map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-[#7d8c63]/10 px-2 py-0.5 text-[11px] font-medium text-[#7d8c63] dark:bg-[#7d8c63]/20"
                >
                  {lang}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
