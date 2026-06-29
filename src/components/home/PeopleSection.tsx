import { unstable_cache } from "next/cache";
import Link from "next/link";
import { ProfileCard } from "@/components/community/ProfileCard";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

const getPeople = unstable_cache(
  () => prisma.profile.findMany({ orderBy: { createdAt: "desc" }, take: 4 }),
  ["home-people"],
  { revalidate: 60 },
);

const STATIC_MEMBERS = [
  { id: "k", name: "Катя М.", location: "Бали, Чангу", tagline: "Контент + SMM, 2 года на острове", bg: "#e8d5bc", fg: "#7d5a35" },
  { id: "d", name: "Дима Р.", location: "Чиангмай", tagline: "Разработчик, горы и Nimman", bg: "#bcd5e8", fg: "#2d5f7a" },
  { id: "a", name: "Аня С.", location: "Дананг", tagline: "UX-дизайнер, An Thuong street", bg: "#c8e8bc", fg: "#3a6b2e" },
  { id: "l", name: "Алекс К.", location: "Куала-Лумпур", tagline: "PM, DE Rantau Pass", bg: "#e8bcd5", fg: "#7a2d5f" },
];

function StaticPeopleSection() {
  return (
    <section className="px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              People of SEA
            </h2>
            <p className="mt-1 text-[#6e7167] dark:text-[#9a9c8f]">
              Real members living across the region
            </p>
          </div>
          <Link
            href="/community"
            className="hidden shrink-0 rounded-full border border-[#2b2e28]/15 px-4 py-2 text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 sm:inline-flex dark:border-white/20 dark:text-[#ecebe3]"
          >
            View all
          </Link>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATIC_MEMBERS.map((m) => (
            <li key={m.id}>
              <div className="card-apple flex flex-col gap-4 p-5">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold"
                  style={{ backgroundColor: m.bg, color: m.fg }}
                >
                  {m.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-[#2b2e28] dark:text-[#ecebe3]">{m.name}</p>
                  <p className="text-sm text-[#7d8c63]">{m.location}</p>
                  <p className="mt-1 text-sm text-[#6e7167] dark:text-[#9a9c8f]">{m.tagline}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function PeopleSection() {
  if (!isDbConfigured()) return <StaticPeopleSection />;
  const profiles = await getPeople();
  if (profiles.length === 0) return <StaticPeopleSection />;

  return (
    <section className="px-4 pt-16 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              People of SEA
            </h2>
            <p className="mt-1 text-[#6e7167] dark:text-[#9a9c8f]">
              Real members living across the region
            </p>
          </div>
          <Link
            href="/community"
            className="hidden shrink-0 rounded-full border border-[#2b2e28]/15 px-4 py-2 text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 sm:inline-flex dark:border-white/20 dark:text-[#ecebe3]"
          >
            View all
          </Link>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <li key={profile.id}>
              <ProfileCard profile={profile} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
