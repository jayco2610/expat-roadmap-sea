import Script from "next/script";
import type { GuideFaq } from "@/lib/guide-extras";

export function GuideFaqSection({ faqs, lang }: { faqs: GuideFaq[]; lang: "en" | "ru" }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mt-12">
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="mb-4 text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
        {lang === "ru" ? "Частые вопросы" : "Frequently asked questions"}
      </h2>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-[#e5e5ea] p-5 dark:border-[#3a3a3c]"
          >
            <summary className="cursor-pointer list-none font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">
              <span className="mr-2 inline-block text-[#7d8c63] transition-transform group-open:rotate-90">
                ›
              </span>
              {f.q}
            </summary>
            <p className="mt-3 leading-relaxed text-[#3d3d3f] dark:text-[#c7c7cc]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
