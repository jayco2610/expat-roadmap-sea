import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { guides } from "@/lib/guides";

const BASE_URL = "https://expat-roadmap-sea.vercel.app";

export const metadata: Metadata = {
  title: "Investors — Expat Roadmap SEA",
  description:
    "Pre-seed. AI assistant plus community platform for expats and digital nomads in Southeast Asia. The problem, the product, the model, and where we are honestly.",
  alternates: { canonical: `${BASE_URL}/investors` },
  robots: { index: false },
};

const sections = [
  {
    title: "The problem",
    body: [
      "Information for moving to Southeast Asia is scattered across outdated blogs, closed Facebook groups, and Telegram chats in a dozen languages. Visa rules change quarterly; most answers people find are wrong by the time they read them.",
      "35+ million people work remotely while traveling, and Southeast Asia is their number one region. They plan a move that costs thousands of dollars using free content written for clicks, not accuracy.",
    ],
  },
  {
    title: "The product",
    body: [
      "One platform that answers the whole journey: verified city and visa guides (English and Russian), an AI assistant in Telegram trained on those guides, and a community layer — people, housing, events, and jobs in one place.",
      "The AI bot is the wedge: instant answers, free tier of 5 questions a day, paid tier for unlimited access. The platform is the moat: content plus community that a chatbot alone cannot replicate.",
    ],
  },
  {
    title: "Business model",
    body: [
      "Pro subscription ($9.99/month): unlimited AI answers plus premium guides. Willingness to pay at this price was confirmed in customer interviews before launch.",
      "Second layer: B2B partnerships with insurance, visa agencies, and coworking spaces (referral economics), then verified and featured listings once marketplace liquidity arrives.",
    ],
  },
  {
    title: "Where we are (honestly)",
    body: [
      "Pre-seed, pre-revenue, solo founder. MVP launched June 2026: the platform is live, the AI bot answers real questions daily, and organic Google traffic has started. Weekly visitors are still counted in dozens, growing triple-digit percent week over week from that small base.",
      "We publish our numbers as they are. What we need capital for: full-time focus, content expansion to 100+ guides, and the first 1,000 active users.",
    ],
  },
];

export default function InvestorsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-medium text-[#7d8c63]">For investors</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[#2b2e28] sm:text-5xl dark:text-[#ecebe3]">
          The operating system for moving to Southeast Asia
        </h1>
        <p className="mt-4 text-lg text-[#6e6e73] dark:text-[#a1a1a6]">
          AI assistant + verified guides + community. Pre-seed stage, building in public.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { n: String(guides.length), label: "guides, EN + RU" },
            { n: "6", label: "countries covered" },
            { n: "24/7", label: "AI assistant in Telegram" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#e5e5ea] p-4 text-center dark:border-[#3a3a3c]"
            >
              <p className="font-display text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                {s.n}
              </p>
              <p className="mt-1 text-xs text-[#6e6e73] dark:text-[#9a9a9e]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                {s.title}
              </h2>
              <div className="space-y-3 text-[#3d3d3f] dark:text-[#c7c7cc]">
                {s.body.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#7d8c63]/[0.08] p-6 dark:bg-[#7d8c63]/[0.12]">
          <h2 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            Get the full picture
          </h2>
          <p className="mt-2 text-[#3d3d3f] dark:text-[#c7c7cc]">
            One-pager, financial model, and a product walkthrough are available on request.
          </p>
          <a
            href="mailto:jasurakhmadaliev283@gmail.com?subject=Expat%20Roadmap%20SEA%20—%20investor%20materials"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#7d8c63] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#e55f00]"
          >
            Request materials
          </a>
        </div>

        <p className="mt-8 text-sm text-[#9a9a9e]">
          Founder: Jasur Akhmadaliev — product manager, building Expat Roadmap SEA in public.{" "}
          <Link href="/about" className="text-[#2AABEE] hover:underline">
            About the project
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
