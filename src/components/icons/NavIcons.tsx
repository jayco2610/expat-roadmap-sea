type IconProps = { className?: string };

const base = "h-6 w-6";

export const navIcons: Record<string, (p: IconProps) => React.ReactNode> = {
  "/map": ({ className }: IconProps) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 1 1 13 0C18.5 15.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "/guides": ({ className }: IconProps) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15.5H5.5A1.5 1.5 0 0 1 4 18V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15.5h5.5A1.5 1.5 0 0 0 20 18V5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  "/community": ({ className }: IconProps) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 19.5c0-3 2.9-5 6.5-5s6.5 2 6.5 5M16 5.5a3.5 3.5 0 0 1 0 6M18.5 14.8c1.8.7 3 2 3 3.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/housing": ({ className }: IconProps) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3.5 10.5 12 3.5l8.5 7M5.5 9v10.5h13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19.5v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  "/events": ({ className }: IconProps) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/jobs": ({ className }: IconProps) => (
    <svg className={className ?? base} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="7" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12h17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};
