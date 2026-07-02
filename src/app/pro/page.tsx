import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";
const BOT_URL = "https://t.me/expat_roadmap_bot";

export const metadata: Metadata = {
  title: "Pro — Unlimited AI Answers About Southeast Asia",
  description:
    "Free: 5 questions a day to the Expat Roadmap AI assistant. Pro: unlimited questions and priority answers, paid directly in Telegram.",
  alternates: { canonical: `${BASE_URL}/pro` },
  openGraph: {
    title: "Expat Roadmap Pro",
    description: "Unlimited AI answers about visas, cities, and life in Southeast Asia.",
    url: `${BASE_URL}/pro`,
    siteName: "Expat Roadmap SEA",
  },
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    cta: { label: "Ask the bot", href: BOT_URL },
    highlight: false,
    features: [
      "5 questions a day to the AI assistant",
      "Answers built on our 2026 guides, not generic AI",
      "All guides on the site, EN and RU",
      "Community, housing, events, and jobs access",
    ],
  },
  {
    name: "Pro",
    price: "300 Stars",
    period: "one-time, in Telegram",
    cta: { label: "Upgrade in the bot", href: BOT_URL },
    highlight: true,
    features: [
      "Unlimited questions, no daily cap",
      "Longer, more detailed answers",
      "Priority processing",
      "Support an independent project built in public",
    ],
  },
];

export default function ProPage() {
  return (
    <PageShell>
      <PageHeader
        title="Ask anything. Then ask more."
        description="The AI assistant answers questions about visas, cities, money, and daily life in Southeast Asia — trained on our own guides, not the open internet."
      />

      <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-6 ${
              tier.highlight
                ? "border-[#7d8c63] bg-[#7d8c63]/[0.06] dark:bg-[#7d8c63]/[0.12]"
                : "border-[#e5e5ea] dark:border-[#3a3a3c]"
            }`}
          >
            <h2 className="text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              {tier.name}
            </h2>
            <p className="mt-2">
              <span className="font-display text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                {tier.price}
              </span>
              <span className="ml-2 text-sm text-[#6e6e73] dark:text-[#9a9a9e]">{tier.period}</span>
            </p>
            <ul className="mt-5 space-y-2.5">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#3d3d3f] dark:text-[#c7c7cc]">
                  <span className="mt-0.5 text-[#7d8c63]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={tier.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${
                tier.highlight
                  ? "bg-[#7d8c63] text-white hover:bg-[#e55f00]"
                  : "border border-[#e5e5ea] text-[#1d1d1f] hover:border-[#7d8c63] dark:border-[#3a3a3c] dark:text-[#f5f5f7]"
              }`}
            >
              {tier.cta.label}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-xs text-[#9a9a9e]">
        Payment happens inside Telegram via Telegram Stars — no card details shared with us.
        Questions about Pro: message the bot and ask.
      </p>
    </PageShell>
  );
}
