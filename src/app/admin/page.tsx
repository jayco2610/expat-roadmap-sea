import type { Metadata } from "next";
import { moderate } from "@/actions/moderation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { requireAdmin } from "@/lib/admin";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { SeedCommunityButton } from "./SeedButton";

export const metadata: Metadata = {
  title: "Moderation",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

type PendingItem = {
  type: "housing" | "job" | "event";
  id: string;
  title: string;
  meta: string;
  author: string;
};

export default async function AdminPage() {
  await requireAdmin();

  if (!isDbConfigured()) {
    return (
      <PageShell>
        <PageHeader title="Moderation" description="Database not configured." />
      </PageShell>
    );
  }

  const [housing, jobs, events] = await Promise.all([
    prisma.housingListing.findMany({
      where: { status: "PENDING" },
      include: { author: { select: { displayName: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.jobListing.findMany({
      where: { status: "PENDING" },
      include: { author: { select: { displayName: true } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.event.findMany({
      where: { status: "PENDING" },
      include: { author: { select: { displayName: true } } },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const items: PendingItem[] = [
    ...housing.map((h) => ({
      type: "housing" as const,
      id: h.id,
      title: h.title,
      meta: `${h.city} · $${h.priceMonth}/mo · ${h.propertyType.toLowerCase()}`,
      author: h.author.displayName,
    })),
    ...jobs.map((j) => ({
      type: "job" as const,
      id: j.id,
      title: j.title,
      meta: `${j.city} · ${j.kind.toLowerCase()}${j.compensation ? ` · ${j.compensation}` : ""}`,
      author: j.author.displayName,
    })),
    ...events.map((e) => ({
      type: "event" as const,
      id: e.id,
      title: e.title,
      meta: `${e.city} · ${e.location}`,
      author: e.author.displayName,
    })),
  ];

  return (
    <PageShell>
      <PageHeader
        title="Moderation"
        description={`${items.length} listing${items.length === 1 ? "" : "s"} waiting for review.`}
      />

      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#6e7167]">Tools</h2>
        <SeedCommunityButton />
      </div>

      {items.length === 0 ? (
        <div className="glass-card p-8 text-center text-[#6e7167]">
          All clear — nothing waiting for review.
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={`${item.type}-${item.id}`}
              className="card-apple flex flex-wrap items-center justify-between gap-4 p-5"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#7d8c63]/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-[#55633f] uppercase">
                    {item.type}
                  </span>
                  <h2 className="font-display truncate text-lg font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-1 text-sm text-[#6e7167]">{item.meta}</p>
                <p className="text-xs text-[#6e7167]/80">by {item.author}</p>
              </div>

              <div className="flex shrink-0 gap-2">
                <form action={moderate}>
                  <input type="hidden" name="type" value={item.type} />
                  <input type="hidden" name="id" value={item.id} />
                  <input type="hidden" name="action" value="approve" />
                  <button type="submit" className="btn-primary text-sm">
                    Approve
                  </button>
                </form>
                <form action={moderate}>
                  <input type="hidden" name="type" value={item.type} />
                  <input type="hidden" name="id" value={item.id} />
                  <input type="hidden" name="action" value="reject" />
                  <button type="submit" className="btn-secondary text-sm">
                    Reject
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
