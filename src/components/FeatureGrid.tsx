import Link from "next/link";
import { featureCards } from "@/lib/routes";

export function FeatureGrid() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
            Everything in one place
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#6e6e73] dark:text-[#a1a1a6]">
            Navigate your move with clarity — from first research to settling in.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map(({ title, description, href, emoji }) => (
            <li key={href}>
              <Link href={href} className="card-apple group block h-full p-6">
                <span className="text-2xl" aria-hidden>
                  {emoji}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
                  {description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[#0071e3] opacity-0 transition group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
