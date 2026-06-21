import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { destinations, getDestination } from "@/lib/destinations";
import { getGuide } from "@/lib/guides";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Destination" };
  return {
    title: `${d.name}, ${d.country} for Expats & Nomads`,
    description: d.blurb,
    openGraph: { title: `${d.name} for expats`, description: d.blurb },
  };
}

const metrics = (d: NonNullable<ReturnType<typeof getDestination>>) => [
  { label: "Cost of living", value: `$${d.cost}`, sub: "/ mo" },
  { label: "Internet", value: d.internet, sub: "" },
  { label: "Weather", value: d.weather, sub: "avg" },
  { label: "Best visa", value: d.visa, sub: "" },
];

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const guide = d.guideSlug ? getGuide(d.guideSlug) : undefined;

  return (
    <div className="px-4 pt-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Hero image with overlaid title */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl sm:aspect-[21/9]">
          <Image
            src={d.image}
            alt={`${d.name}, ${d.country}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,22,16,0.8) 0%, rgba(20,22,16,0.2) 50%, rgba(20,22,16,0) 100%)",
            }}
          />
          <Link
            href="/map"
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-sm font-medium text-[#2b2e28] backdrop-blur-sm transition hover:bg-white"
          >
            ← Map
          </Link>
          <div className="absolute right-5 bottom-5 left-5">
            <p className="label-upper text-white/80">{d.country}</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              {d.name}
            </h1>
          </div>
        </div>

        {/* Metric tiles — glass */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics(d).map((m) => (
            <div key={m.label} className="glass-card p-4">
              <p className="text-xs text-[#6e7167]">{m.label}</p>
              <p className="font-display mt-1 text-2xl font-semibold text-[#2b2e28]">
                {m.value}
                {m.sub ? (
                  <span className="ml-1 text-sm font-normal text-[#6e7167]">{m.sub}</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>

        {/* Blurb */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#3a3d35] dark:text-[#cdcec4]">
          {d.blurb}
        </p>

        {/* Explore links */}
        <h2 className="font-display mt-10 mb-4 text-2xl font-semibold tracking-tight text-[#2b2e28] dark:text-[#ecebe3]">
          Explore {d.name}
        </h2>
        <div className="flex flex-wrap gap-3">
          {guide ? (
            <Link href={`/guides/${guide.slug}`} className="btn-primary">
              Read the visa guide
            </Link>
          ) : null}
          <Link href="/housing" className="btn-secondary">
            Find housing
          </Link>
          <Link href="/community" className="btn-secondary">
            Meet the community
          </Link>
          <Link href="/events" className="btn-secondary">
            Upcoming events
          </Link>
        </div>
      </div>
    </div>
  );
}
