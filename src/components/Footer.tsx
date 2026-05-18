import Link from "next/link";
import { navLinks } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#f5f5f7] dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
              Expat Roadmap SEA
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
              Your calm, curated guide to living and working across Southeast Asia — visas,
              cities, community, and more.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#6e6e73] transition hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-[#f5f5f7]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
          © {new Date().getFullYear()} Expat Roadmap SEA. Built for explorers.
        </p>
      </div>
    </footer>
  );
}
