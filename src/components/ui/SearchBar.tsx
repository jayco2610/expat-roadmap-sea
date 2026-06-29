"use client";

type SearchBarProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChange, placeholder = "Search…" }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <svg
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6e7167]"
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/8 bg-white py-2.5 pl-9 pr-4 text-sm text-[#1d1d1f] placeholder:text-[#6e7167] focus:outline-none focus:ring-2 focus:ring-[#55633f]/30 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-[#f5f5f7] dark:placeholder:text-[#6e6e73]"
      />
    </div>
  );
}
