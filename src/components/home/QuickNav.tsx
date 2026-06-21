import Link from "next/link";
import { navLinks } from "@/lib/routes";
import { navIcons } from "@/components/icons/NavIcons";

export function QuickNav() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto -mt-8 max-w-5xl">
        <nav className="card-apple grid grid-cols-3 gap-1 p-2 sm:grid-cols-6 sm:p-3">
          {navLinks.map(({ href, label }) => {
            const Icon = navIcons[href];
            return (
              <Link
                key={href}
                href={href}
                className="group flex flex-col items-center gap-2 rounded-xl px-2 py-4 text-[#6e7167] transition hover:bg-[#7d8c63]/10 hover:text-[#55633f] dark:text-[#9a9c8f] dark:hover:text-[#cdd6b8]"
              >
                {Icon ? <Icon className="h-6 w-6" /> : null}
                <span className="text-xs font-medium sm:text-sm">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
