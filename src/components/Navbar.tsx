import Link from "next/link";
import { UserMenu } from "@/components/auth/UserMenu";
import { NavbarLinks } from "@/components/NavbarLinks";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
            Expat Roadmap
          </span>
          <span className="rounded-full bg-[#7d8c63]/15 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wider text-[#55633f] uppercase dark:text-[#cdd6b8]">
            SEA
          </span>
        </Link>

        <NavbarLinks />

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <UserMenu />
          <Link href="/map" className="btn-primary hidden text-sm md:inline-flex">
            Explore map
          </Link>
        </div>
      </nav>

      <div className="border-t border-black/5 px-4 py-2 md:hidden dark:border-white/10">
        <NavbarLinks mobile />
      </div>
    </header>
  );
}
