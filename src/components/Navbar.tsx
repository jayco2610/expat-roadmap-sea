import Link from "next/link";
import { UserMenu } from "@/components/auth/UserMenu";
import { NavbarLinks } from "@/components/NavbarLinks";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="glass-nav sticky top-0 z-50">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]"
        >
          Expat Roadmap{" "}
          <span className="text-[#0071e3]">SEA</span>
        </Link>

        <NavbarLinks />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserMenu />
          <Link href="/map" className="btn-primary hidden text-sm sm:inline-flex">
            Explore map
          </Link>
        </div>
      </nav>

      <div className="border-t border-black/5 px-5 py-2 md:hidden dark:border-white/10">
        <NavbarLinks mobile />
      </div>
    </header>
  );
}
