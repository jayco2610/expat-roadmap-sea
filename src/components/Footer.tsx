import Link from "next/link";
import { navLinks } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#f2f2f7] dark:border-white/10 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#111114] uppercase dark:text-[#f5f5f5]">
              Expat Roadmap SEA
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
              Your calm, curated guide to living and working across Southeast Asia: visas,
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

        <div className="mt-10 flex items-center justify-between">
          <p className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
            © {new Date().getFullYear()} Expat Roadmap SEA. Built for explorers.
          </p>
          <Link
            href="/about"
            className="text-xs text-[#6e6e73] transition hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-[#f5f5f7]"
          >
            About the project
          </Link>
        </div>
      </div>
    </footer>
  );
}
