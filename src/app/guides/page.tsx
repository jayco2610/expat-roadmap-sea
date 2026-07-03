import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { guides } from "@/lib/guides";
import { toGuideCard } from "@/lib/guide-filters";
import { GuidesExplorer } from "./GuidesExplorer";

export const metadata: Metadata = {
  title: "Expat Guides for Southeast Asia",
  description:
    "Visa guides, cost of living breakdowns, and practical advice for expats in Thailand, Bali, Vietnam, and across Southeast Asia. Updated for 2026.",
  openGraph: {
    title: "Expat Guides for Southeast Asia 2026",
    description:
      "Visa guides, cost of living, and practical advice for digital nomads in Thailand, Bali, Vietnam, and SEA.",
  },
};

export default function GuidesPage() {
  const cards = guides.map(toGuideCard);

  return (
    <PageShell>
      <PageHeader
        title="Expat guides"
        description="Visa rules, tax basics, and practical tips for living and working across Southeast Asia. Written for digital nomads and long-stay expats."
      />
      <Suspense>
        <GuidesExplorer guides={cards} />
      </Suspense>
    </PageShell>
  );
}
