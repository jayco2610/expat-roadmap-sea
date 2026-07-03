import Link from "next/link";
import Script from "next/script";

export type Crumb = { name: string; href?: string };

export function GuideBreadcrumbs({ crumbs, baseUrl }: { crumbs: Crumb[]; baseUrl: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${baseUrl}${c.href}` } : {}),
    })),
  };

  return (
    <>
      <Script
        id="jsonld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-2">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#6e6e73] dark:text-[#9a9a9e]">
          {crumbs.map((c, i) => (
            <li key={c.name} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {c.href ? (
                <Link
                  href={c.href}
                  className="hover:text-[#7d8c63] dark:hover:text-[#7d8c63]"
                >
                  {c.name}
                </Link>
              ) : (
                <span className="max-w-[16rem] truncate text-[#9a9a9e]">{c.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
