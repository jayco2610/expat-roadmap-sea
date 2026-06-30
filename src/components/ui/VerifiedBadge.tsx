export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <span
      title="Verified member"
      className={`inline-flex shrink-0 items-center gap-0.5 rounded-full bg-[#2AABEE]/12 px-1.5 py-0.5 text-[10px] font-semibold text-[#2AABEE] ${className}`}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2 14.9 4.1 18.5 4 19.5 7.5 22 10l-1.5 3.5L22 17l-2.5 2.5-1 3.5-3.6-.1L12 25l-2.9-2.1-3.6.1-1-3.5L2 17l1.5-3.5L2 10l2.5-2.5L5.5 4l3.6.1z" opacity="0.18" />
        <path d="M10.5 14.2 8 11.7l-1.3 1.3 3.8 3.8 7-7-1.3-1.3z" />
      </svg>
      Verified
    </span>
  );
}

export function memberSince(date: Date): string {
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(
    new Date(date),
  );
}
