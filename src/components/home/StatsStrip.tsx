import { unstable_cache } from "next/cache";
import { guides } from "@/lib/guides";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

const getMemberCount = unstable_cache(
  async () => prisma.profile.count(),
  ["stats-member-count"],
  { revalidate: 300 },
);

export async function StatsStrip() {
  const members = isDbConfigured() ? await getMemberCount() : 0;

  const stats = [
    { value: String(guides.length), label: "guides, EN + RU" },
    ...(members > 0 ? [{ value: String(members), label: "community members" }] : []),
    { value: "24/7", label: "AI assistant answers" },
  ];

  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-black/8 bg-white/60 px-6 py-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-10">
            {i > 0 && (
              <span aria-hidden className="hidden h-8 w-px bg-black/10 sm:block dark:bg-white/15" />
            )}
            <div className="text-center">
              <p className="font-display text-2xl font-semibold tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
                {s.value}
              </p>
              <p className="mt-0.5 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
