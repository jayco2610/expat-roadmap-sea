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
    <article className="card-apple p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="rounded-full bg-black/6 px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase dark:bg-white/10">
            {listing.propertyType.toLowerCase()}
          </span>
          <h2 className="font-display mt-2 text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            {listing.title}
          </h2>
          <p className="mt-1 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            {listing.city} · {listing.address}
          </p>
          <p className="mt-2 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">by {listing.author.displayName}</p>
        </div>
        <p className="shrink-0 text-right text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
          ${listing.priceMonth}
          <span className="block text-[11px] font-normal text-[#6e6e73]">/ mo</span>
        </p>
      </div>
    </article>
  );
}
