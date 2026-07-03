"use client";

import { useEffect, useState } from "react";
import { headingId } from "@/lib/guide-filters";

export function GuideToc({ headings }: { headings: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "0% 0% -75% 0%" },
    );
    for (const h of headings) {
      const el = document.getElementById(headingId(h));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  const list = (
    <ol className="space-y-2">
      {headings.map((h) => {
        const id = headingId(h);
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm leading-snug transition ${
                active === id
                  ? "font-medium text-[#55633f] dark:text-[#a8b88a]"
                  : "text-[#6e6e73] hover:text-[#1d1d1f] dark:text-[#9a9a9e] dark:hover:text-[#f5f5f7]"
              }`}
            >
              {h}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Mobile: collapsible block above the article */}
      <details className="mb-8 rounded-2xl border border-[#e5e5ea] p-4 xl:hidden dark:border-[#3a3a3c]">
        <summary className="cursor-pointer text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
          On this page
        </summary>
        <div className="mt-3">{list}</div>
      </details>

      {/* Desktop: sticky rail to the right of the article */}
      <nav
        aria-label="Table of contents"
        className="fixed top-28 right-[max(1rem,calc(50%-40rem))] hidden w-56 xl:block"
      >
        <p className="mb-3 text-xs font-semibold tracking-wide text-[#9a9a9e] uppercase">
          On this page
        </p>
        {list}
      </nav>
    </>
  );
}
