import type { Metadata } from "next";
import { Suspense } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { CompareClient } from "./CompareClient";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";

export const metadata: Metadata = {
  title: "Compare Cities in Southeast Asia — Cost, Visas, Internet (2026)",
  description:
    "Side-by-side comparison of Chiang Mai, Bali, Da Nang, Kuala Lumpur, Phuket, Ho Chi Minh City, and Phnom Penh: monthly budget, rent, coworking, visas, and internet speed.",
  alternates: { canonical: `${BASE_URL}/compare` },
  openGraph: {
    title: "Compare Cities in Southeast Asia",
    description:
      "Monthly budget, rent, visas, and internet for 7 expat cities, side by side.",
    url: `${BASE_URL}/compare`,
    siteName: "Expat Roadmap SEA",
  },
};

export default function ComparePage() {
  return (
    <PageShell>
      <PageHeader
        title="Compare cities"
        description="Pick up to three cities and see the numbers side by side. All figures come from our 2026 guides."
      />
      <Suspense>
        <CompareClient />
      </Suspense>
    </PageShell>
  );
}
