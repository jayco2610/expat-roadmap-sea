import Link from "next/link";
import { featureCards } from "@/lib/routes";

const icons: Record<string, React.ReactNode> = {
  "/map": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-6.5-5.2-6.5-10.2a6.5 6.5 0 1 1 13 0C18.5 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  "/community": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2.5 19.5c0-3 2.9-5 6.5-5s6.5 2 6.5 5M16 5.5a3.5 3.5 0 0 1 0 6M18.5 14.8c1.8.7 3 2 3 3.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  "/housing": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3.5 10.5 12 3.5l8.5 7M5.5 9v10.5h13V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 19.5v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  "/events": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "/jobs": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="7" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12h17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export function FeatureGrid() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map(({ title, description, href }, index) => {
            const isAccent = href === "/map";
            return (
              <li key={href} className={isAccent ? "sm:col-span-2" : ""}>
                <Link
                  href={href}
                  className={`${
                    isAccent ? "tile-accent" : "card-apple"
                  } group flex h-full min-h-[200px] flex-col justify-between p-6`}
                >
                  <div>
                    <p
                      className={`label-upper ${
                        isAccent ? "text-white/70" : "text-[#ff6a00]"
                      }`}
                    >
                      0{index + 1}
                    </p>
                    <h3
                      className={`font-display mt-2 text-2xl font-bold tracking-tight ${
                        isAccent ? "text-white" : "text-[#111114] dark:text-[#f5f5f5]"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-2 max-w-md text-sm leading-relaxed ${
                        isAccent ? "text-white/80" : "text-[#6e6e73] dark:text-[#9a9a9e]"
                      }`}
                    >
                      {description}
                    </p>
                  </div>
                  <div
                    className={`mt-6 flex items-end justify-between ${
                      isAccent ? "text-white" : "text-[#111114] dark:text-[#f5f5f5]"
                    }`}
                  >
                    {icons[href]}
                    <span
                      className={`text-sm font-medium ${
                        isAccent
                          ? "text-white/80 group-hover:text-white"
                          : "text-[#6e6e73] group-hover:text-[#ff6a00] dark:text-[#9a9a9e]"
                      } transition`}
                    >
                      Open
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
