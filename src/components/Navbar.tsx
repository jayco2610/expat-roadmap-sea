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
          className="shrink-0 text-sm font-bold tracking-[0.1em] whitespace-nowrap text-[#111114] uppercase dark:text-[#f5f5f5]"
        >
          Expat Roadmap{" "}
          <span className="text-[#7d8c63]">SEA</span>
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
