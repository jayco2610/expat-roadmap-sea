import Image from "next/image";
import { housingImage } from "@/lib/housing-image";

type HousingCardProps = {
  listing: {
    id: string;
    title: string;
    city: string;
    address: string;
    priceMonth: number;
    currency: string;
    propertyType: string;
    author: { displayName: string };
  };
};

export function HousingCard({ listing }: HousingCardProps) {
  return (
    <article className="card-apple group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={housingImage(listing.propertyType)}
          alt={listing.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#2b2e28] uppercase backdrop-blur-sm">
          {listing.propertyType.toLowerCase()}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-lg font-semibold leading-snug text-[#2b2e28] dark:text-[#ecebe3]">
            {listing.title}
          </h2>
          <p className="shrink-0 text-right text-lg font-semibold text-[#2b2e28] dark:text-[#ecebe3]">
            ${listing.priceMonth}
            <span className="block text-[11px] font-normal text-[#6e7167]">/ mo</span>
          </p>
        </div>
        <p className="mt-1 text-sm text-[#6e7167] dark:text-[#9a9c8f]">
          {listing.city} · {listing.address}
        </p>
        <p className="mt-auto pt-3 text-xs text-[#6e7167]/80 dark:text-[#9a9c8f]/80">
          by {listing.author.displayName}
        </p>
      </div>
    </article>
  );
}
