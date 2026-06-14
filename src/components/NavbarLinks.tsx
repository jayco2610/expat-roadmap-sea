"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/routes";

export function NavbarLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <ul className="flex flex-wrap gap-1.5">
        {navLinks.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                prefetch={false}
                className={`block rounded-full px-3.5 py-2 text-sm font-medium whitespace-nowrap ${
                  active
                    ? "bg-black/8 text-[#111114] dark:bg-white/12 dark:text-[#f5f5f5]"
                    : "text-[#6e6e73] dark:text-[#9a9a9e]"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className="hidden items-center gap-1 md:flex">
      {navLinks.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-black/8 text-[#1d1d1f] dark:bg-white/12 dark:text-[#f5f5f7]"
                  : "text-[#6e6e73] hover:text-[#1d1d1f] dark:text-[#a1a1a6] dark:hover:text-[#f5f5f7]"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
