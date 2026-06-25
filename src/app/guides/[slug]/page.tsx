import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { getGuide, guides } from "@/lib/guides";
import { getLinksForCountry } from "@/lib/embassy-links";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.updatedAt,
      tags: guide.tags,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const officialLinks = getLinksForCountry(guide.country);

  return (
    <PageShell>
      <div className="mx-auto max-w-2xl">
        <div className="mb-2">
          <Link
            href="/guides"
            className="text-sm text-[#6e6e73] hover:text-[#7d8c63] dark:text-[#9a9a9e] dark:hover:text-[#7d8c63]"
          >
            ← All guides
          </Link>
        </div>

        <header className="mb-10 mt-4">
          <div className="mb-3 flex flex-wrap gap-2">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-xs text-[#6e6e73] dark:bg-[#2c2c2e] dark:text-[#9a9a9e]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
            {guide.title}
          </h1>

          <p className="mt-3 text-lg leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
            {guide.description}
          </p>

          <div className="mt-4 flex items-center gap-3 text-sm text-[#9a9a9e]">
            <span>{guide.readingTime} min read</span>
            <span>·</span>
            <span>Last updated: {guide.updatedAt}</span>
          </div>
        </header>

        <article className="space-y-8">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-3 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
                {section.heading}
              </h2>
              <div className="space-y-3 text-[#3d3d3f] dark:text-[#c7c7cc]">
                {section.body.split("\n\n").map((paragraph, i) => {
                  const isListBlock =
                    paragraph.startsWith("-") || paragraph.startsWith("1.");
                  if (isListBlock) {
                    const lines = paragraph
                      .split("\n")
                      .filter((l) => l.trim());
                    const isOrdered = paragraph.startsWith("1.");
                    return isOrdered ? (
                      <ol
                        key={i}
                        className="list-decimal space-y-1 pl-5 leading-relaxed"
                      >
                        {lines.map((line, j) => (
                          <li key={j}>{line.replace(/^\d+\.\s*/, "")}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul
                        key={i}
                        className="list-disc space-y-1 pl-5 leading-relaxed"
                      >
                        {lines.map((line, j) => (
                          <li key={j}>{line.replace(/^-\s*/, "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </section>
          ))}
        </article>

        {officialLinks.length > 0 && (
          <div className="mt-10 rounded-2xl border border-[#e5e5ea] bg-[#f5f5f7] p-6 dark:border-[#3a3a3c] dark:bg-[#1c1c1e]">
            <h2 className="mb-4 text-base font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              Official links
            </h2>
            <ul className="space-y-2">
              {officialLinks.map((link) => (
                <li key={link.url} className="flex items-start gap-2">
                  <span className="mt-0.5 text-[#7d8c63]">↗</span>
                  <div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#2AABEE] hover:underline"
                    >
                      {link.label}
                    </a>
                    {link.note && (
                      <span className="ml-2 text-xs text-[#9a9a9e]">{link.note}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 rounded-2xl bg-[#7d8c63]/[0.08] p-6 dark:bg-[#7d8c63]/[0.12]">
          <p className="mb-4 text-[#3d3d3f] dark:text-[#c7c7cc]">
            {guide.cta.text}
          </p>
          <Link
            href={guide.cta.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#7d8c63] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#e55f00] transition"
          >
            {guide.cta.label}
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
