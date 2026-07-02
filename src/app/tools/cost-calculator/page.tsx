import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { CostCalculatorClient } from "./CostCalculatorClient";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";

export const metadata: Metadata = {
  title: "Cost of Living Calculator — Southeast Asia (2026)",
  description:
    "Estimate your monthly budget in Chiang Mai, Bali, Da Nang, Kuala Lumpur, Phuket, Ho Chi Minh City, or Phnom Penh based on housing, food, and lifestyle.",
  alternates: { canonical: `${BASE_URL}/tools/cost-calculator` },
  openGraph: {
    title: "Southeast Asia Cost of Living Calculator",
    description: "Pick a city and lifestyle, get a realistic monthly budget.",
    url: `${BASE_URL}/tools/cost-calculator`,
    siteName: "Expat Roadmap SEA",
  },
};

export default function CostCalculatorPage() {
  return (
    <PageShell>
      <PageHeader
        title="Cost calculator"
        description="Pick a city and your lifestyle, get a realistic monthly number. Built from the same data as our guides."
      />
      <CostCalculatorClient />
    </PageShell>
  );
}
