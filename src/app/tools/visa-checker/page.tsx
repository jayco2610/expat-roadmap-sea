import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { VisaCheckerClient } from "./VisaCheckerClient";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";

export const metadata: Metadata = {
  title: "Visa Checker — Which Visa Do You Need in Southeast Asia? (2026)",
  description:
    "Pick a country and length of stay, get the visa that fits: Thailand DTV, Malaysia DE Rantau, Indonesia E33G, Vietnam e-visa, Cambodia EB, Sri Lanka ETA.",
  alternates: { canonical: `${BASE_URL}/tools/visa-checker` },
  openGraph: {
    title: "Southeast Asia Visa Checker",
    description: "Country + length of stay → the visa that fits, with the full guide.",
    url: `${BASE_URL}/tools/visa-checker`,
    siteName: "Expat Roadmap SEA",
  },
};

export default function VisaCheckerPage() {
  return (
    <PageShell>
      <PageHeader
        title="Visa checker"
        description="Two questions, one answer: the visa that fits your plan, with the guide that explains it."
      />
      <VisaCheckerClient />
    </PageShell>
  );
}
