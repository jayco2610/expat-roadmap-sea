import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteHousingListing } from "@/actions/housing";
import { DeleteButton } from "@/components/ui/DeleteButton";
import { getCurrentProfile, getSessionUser } from "@/lib/auth";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";
import { housingImage } from "@/lib/housing-image";
import { ReportButton } from "@/components/ReportButton";

async function getListing(id: string) {
  if (!isDbConfigured()) return null;
  return prisma.housingListing.findFirst({
    where: { id, status: "PUBLISHED" },
    include: {
      author: {
        select: {
          displayName: true,
          city: true,
          telegram: true,
          email: true,
          showTelegram: true,
          showEmail: true,
          contactVisibility: true,
        },
      },
    },
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = await getListing(id);
  if (!listing) return { title: "Housing" };
  return {
    title: `${listing.title} — ${listing.city}`,
    description: listing.description.slice(0, 155),
  };
}

export default async function HousingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = await getListing(id);
  if (!listing) notFound();

  const viewer = await getSessionUser();
  const myProfile = await getCurrentProfile();
  const isOwner = Boolean(myProfile && myProfile.id === listing.authorId);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${listing.address}, ${listing.city}`,
  )}`;

  const vis = listing.author.contactVisibility;
  const canSeeContact = vis === "PUBLIC" || (vis === "MEMBERS" && Boolean(viewer));
  const telegram =
    canSeeContact && listing.author.showTelegram ? listing.author.telegram : null;
  const email =
    canSeeContact && listing.author.showEmail ? listing.author.email : null;

  return (
    <div className="px-4 pt-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 flex items-center justify-between gap-4">
          <Link
            href="/housing"
            className="inline-flex text-sm font-medium text-[#55633f] hover:underline"
          >
            ← Housing
          </Link>
          {isOwner && (
            <div className="flex items-center gap-3">
              <Link
                href={`/housing/${listing.id}/edit`}
                className="rounded-lg border border-black/10 px-4 py-2.5 text-sm font-medium text-[#2b2e28] transition hover:bg-black/5 dark:border-white/15 dark:text-[#ecebe3] dark:hover:bg-white/8"
              >
                Edit
              </Link>
              <DeleteButton onDelete={deleteHousingListing.bind(null, listing.id)} />
            </div>
          )}
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
          <Image
            src={housingImage(listing.propertyType)}
            alt={listing.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide text-[#2b2e28] uppercase backdrop-blur-sm">
            {listing.propertyType.toLowerCase()}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-[#2b2e28] sm:text-4xl dark:text-[#ecebe3]">
              {listing.title}
            </h1>
            <p className="mt-2 text-[#6e7167] dark:text-[#9a9c8f]">
              {listing.city} · {listing.address}
            </p>
          </div>
          <p className="font-display text-3xl font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
            ${listing.priceMonth}
            <span className="text-base font-normal text-[#6e7167]"> / mo</span>
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-xl font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
              About this place
            </h2>
            <p className="mt-3 leading-relaxed whitespace-pre-line text-[#3a3d35] dark:text-[#cdcec4]">
              {listing.description}
            </p>

            <h2 className="font-display mt-8 text-xl font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
              Location
            </h2>
            <p className="mt-2 text-[#6e7167] dark:text-[#9a9c8f]">
              {listing.address}, {listing.city}
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-3 inline-flex"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Contact panel — glass */}
          <aside className="order-1 glass-card h-fit p-5 lg:order-2">
            <p className="text-sm text-[#6e7167]">Posted by</p>
            <p className="font-display mt-0.5 text-lg font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
              {listing.author.displayName}
            </p>
            <p className="text-sm text-[#6e7167]">{listing.author.city}</p>

            <div className="mt-4 space-y-2">
              {telegram ? (
                <a
                  href={`https://t.me/${telegram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Message on Telegram
                </a>
              ) : null}
              {email ? (
                <a href={`mailto:${email}`} className="btn-secondary w-full">
                  Send email
                </a>
              ) : null}
              {!telegram && !email ? (
                viewer ? (
                  <p className="text-sm text-[#6e7167]">
                    This host hasn&apos;t shared public contacts.
                  </p>
                ) : (
                  <Link href="/login" className="btn-primary w-full">
                    Sign in to see contact
                  </Link>
                )
              ) : null}
            </div>

            <div className="mt-4 border-t border-black/8 pt-3 dark:border-white/10">
              <ReportButton listingType="housing" listingId={listing.id} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
