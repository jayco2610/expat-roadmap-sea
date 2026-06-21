type BadgeConfig = {
  cls: string;
  glow?: boolean;
  icon: React.ReactNode;
};

const flame = (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2c.5 3-1.5 4.5-3 6.5C7.5 10.5 7 12.3 7 14a5 5 0 0 0 10 0c0-1.8-.8-3.3-1.7-4.6-.4 1-.9 1.6-1.8 1.6 1-2.4.3-4.7-1.5-9Z" />
  </svg>
);

const trend = (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 17l6-6 4 4 7-7" />
    <path d="M17 8h4v4" />
  </svg>
);

const star = (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
  </svg>
);

const spark = (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l1.6 4.9L18.5 8 13.6 9.6 12 14.5l-1.6-4.9L5.5 8l4.9-1.1L12 2Z" />
  </svg>
);

const configs: Record<string, BadgeConfig> = {
  Hot: { cls: "bg-orange-500 text-white", glow: true, icon: flame },
  Trending: { cls: "bg-[#55633f] text-white", icon: trend },
  Popular: { cls: "bg-white/95 text-[#2b2e28]", icon: star },
  New: { cls: "bg-white/95 text-[#55633f]", icon: spark },
};

export function DestinationBadge({ badge }: { badge: string }) {
  const c = configs[badge] ?? configs.Popular;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur-sm ${c.cls} ${
        c.glow ? "shadow-[0_0_14px_rgba(249,115,22,0.7)]" : ""
      }`}
    >
      <span className={c.glow ? "animate-pulse" : ""}>{c.icon}</span>
      {badge}
    </span>
  );
}
