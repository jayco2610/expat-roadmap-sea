import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "About Expat Roadmap SEA",
  description:
    "Expat Roadmap SEA is a community platform and AI assistant for digital nomads and expats living across Southeast Asia. Built by a PM, for the community.",
  alternates: {
    canonical: "https://expat-roadmap-sea.vercel.app/about",
  },
  openGraph: {
    title: "About Expat Roadmap SEA",
    description:
      "A community platform and AI assistant for expats in Thailand, Bali, Vietnam, and across Southeast Asia.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl">

        <header className="mb-12">
          <p className="label-upper mb-3 text-[#7d8c63]">About the project</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl dark:text-[#f5f5f7]">
            Built by someone who actually lives here
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
            Expat Roadmap SEA started from a simple problem: the information expats actually need — visa rules, real costs, grey-area schemes, honest neighborhood breakdowns — is scattered across five-year-old Reddit threads and Facebook groups full of conflicting advice.
          </p>
        </header>

        <div className="space-y-10 text-[#3d3d3f] dark:text-[#c7c7cc]">

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              What this is
            </h2>
            <p className="leading-relaxed">
              A platform for people who have already decided to move to Southeast Asia — or are seriously considering it. Not a travel blog. Not a sponsored guide.
              The goal is practical information that holds up when you actually arrive: what the visa costs, how long it takes, what the immigration officer actually asks for, which neighborhoods have reliable internet, and what happens when things go wrong.
            </p>
            <p className="mt-3 leading-relaxed">
              The platform has three parts: a <Link href="/guides" className="text-[#7d8c63] hover:underline">library of guides</Link> updated for 2026, a <Link href="/community" className="text-[#7d8c63] hover:underline">community</Link> where expats share firsthand experience, and an AI assistant — the{" "}
              <a href="https://t.me/ExpatRoadmapBot" target="_blank" rel="noopener noreferrer" className="text-[#7d8c63] hover:underline">
                Expat Roadmap SEA bot
              </a>{" "}
              on Telegram — that answers specific questions in plain language, around the clock.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              Who built it
            </h2>
            <p className="leading-relaxed">
              I am Jasur Akhmadaliev, a product manager currently based between Russia and Southeast Asia. I have spent the last two years navigating visas, apartments, coworking spaces, and expat bureaucracy across Thailand, Bali, and Vietnam — and building this as I go.
            </p>
            <p className="mt-3 leading-relaxed">
              The project is also an experiment in building a product with AI as the main tool: the guides are written and structured with Claude, the Telegram bot runs on Groq&apos;s Llama 3.3, and the whole stack was assembled without a dedicated engineering team. I write about the process — the decisions, the mistakes, the things that actually worked — on my{" "}
              <a href="https://t.me/pmvision_ai" target="_blank" rel="noopener noreferrer" className="text-[#7d8c63] hover:underline">
                Telegram channel
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              What is covered
            </h2>
            <ul className="space-y-2 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#7d8c63]">→</span>
                <span><strong className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Visas</strong> — DTV, E33G, DE Rantau, e-visa, KITAS, LTR, and what each one actually requires in practice</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#7d8c63]">→</span>
                <span><strong className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Cost of living</strong> — real numbers from people living there, not estimates from expat salary surveys</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#7d8c63]">→</span>
                <span><strong className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Tax</strong> — what Thailand&apos;s 2024 rule change means for remote workers, how double taxation treaties work in practice</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#7d8c63]">→</span>
                <span><strong className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Neighborhoods</strong> — Canggu vs Ubud, Nimman vs Old City, An Thuong vs My Khe — for people who want to live, not just visit</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-[#7d8c63]">→</span>
                <span><strong className="font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">Grey-area questions</strong> — what people actually do about banking, health insurance, and income that does not fit neatly into visa categories</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              The AI assistant
            </h2>
            <p className="leading-relaxed">
              The{" "}
              <a href="https://t.me/ExpatRoadmapBot" target="_blank" rel="noopener noreferrer" className="text-[#7d8c63] hover:underline">
                Telegram bot
              </a>{" "}
              is trained on the same knowledge base that powers this site. Ask it anything about life in Southeast Asia — it answers like a friend who has been living there for years, not like a customer service script.
            </p>
            <p className="mt-3 leading-relaxed">
              Five questions per day are free. Pro access (300 Telegram Stars, one-time) removes the limit and includes a private channel with insider tips on deposits, grey-area schemes, and local hacks that do not belong in a public guide.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              What this is not
            </h2>
            <p className="leading-relaxed">
              Legal or tax advice. Everything here is practical information shared in good faith, not professional counsel. For anything that involves significant money or legal status, talk to a qualified local advisor.
            </p>
            <p className="mt-3 leading-relaxed">
              A finished product. The platform is being built actively. Some sections are thin, some guides are missing, and the community is early. If you find something wrong or outdated, the community section is the fastest way to flag it.
            </p>
          </section>

        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/guides"
            className="btn-primary text-center"
          >
            Read the guides
          </Link>
          <a
            href="https://t.me/ExpatRoadmapBot"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#2b2e28]/15 px-5 py-2.5 text-center text-sm font-medium text-[#2b2e28] transition hover:bg-[#2b2e28]/5 dark:border-white/20 dark:text-[#ecebe3]"
          >
            Try the bot on Telegram
          </a>
        </div>

      </div>
    </PageShell>
  );
}
