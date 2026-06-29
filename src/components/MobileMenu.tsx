"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/routes";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-black/6 md:hidden dark:hover:bg-white/10"
      >
        <span className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
          <span
            className={`block h-[1.5px] w-full rounded-full bg-[#2b2e28] transition-all duration-200 dark:bg-[#ecebe3] ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full rounded-full bg-[#2b2e28] transition-all duration-200 dark:bg-[#ecebe3] ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-full rounded-full bg-[#2b2e28] transition-all duration-200 dark:bg-[#ecebe3] ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-black/6 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-md md:hidden dark:border-white/10 dark:bg-[#1c1c1e]/95">
          <nav>
            <ul className="space-y-0.5">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`flex w-full items-center rounded-xl px-3 py-3 text-base font-medium transition ${
                        active
                          ? "bg-[#55633f]/10 text-[#2b2e28] dark:bg-[#7d8c63]/20 dark:text-[#ecebe3]"
                          : "text-[#2b2e28] hover:bg-black/5 dark:text-[#ecebe3] dark:hover:bg-white/8"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 border-t border-black/5 pt-3 dark:border-white/10">
              <Link
                href="/map"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Explore map
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
