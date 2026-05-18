import type { ListingKind } from "@prisma/client";

type JobCardProps = {
  listing: {
    id: string;
    title: string;
    city: string;
    kind: ListingKind;
    compensation: string | null;
    remote: boolean;
    description: string;
    author: { displayName: string };
  };
};

export function JobCard({ listing }: JobCardProps) {
  return (
    <article className="card-apple p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
            listing.kind === "SERVICE"
              ? "bg-[#34c759]/15 text-[#248a3d] dark:text-[#34c759]"
              : "bg-[#0071e3]/15 text-[#0071e3]"
          }`}
        >
          {listing.kind === "SERVICE" ? "Service" : "Job"}
        </span>
        {listing.remote ? (
          <span className="text-xs text-[#6e6e73] dark:text-[#a1a1a6]">Remote</span>
        ) : null}
      </div>
      <h2 className="font-display mt-2 text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
        {listing.title}
      </h2>
      <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">{listing.city}</p>
      {listing.compensation ? (
        <p className="mt-2 text-sm font-medium text-[#0071e3]">{listing.compensation}</p>
      ) : null}
      <p className="mt-3 line-clamp-3 text-sm text-[#1d1d1f]/85 dark:text-[#f5f5f7]/85">
        {listing.description}
      </p>
      <p className="mt-3 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">Posted by {listing.author.displayName}</p>
    </article>
  );
}
