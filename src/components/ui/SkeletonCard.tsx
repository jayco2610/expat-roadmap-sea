export function SkeletonCard() {
  return (
    <div className="card-apple animate-pulse p-5">
      <div className="mb-3 h-3 w-16 rounded-full bg-black/8 dark:bg-white/10" />
      <div className="mb-2 h-5 w-3/4 rounded-lg bg-black/8 dark:bg-white/10" />
      <div className="h-4 w-full rounded-lg bg-black/6 dark:bg-white/8" />
      <div className="mt-1 h-4 w-2/3 rounded-lg bg-black/6 dark:bg-white/8" />
      <div className="mt-6 flex items-center justify-between">
        <div className="h-3 w-20 rounded-full bg-black/6 dark:bg-white/8" />
        <div className="h-3 w-12 rounded-full bg-black/6 dark:bg-white/8" />
      </div>
    </div>
  );
}

export function SkeletonPageHeader() {
  return (
    <div className="mb-8 animate-pulse">
      <div className="mb-2 h-8 w-48 rounded-xl bg-black/8 dark:bg-white/10" />
      <div className="h-4 w-80 rounded-lg bg-black/6 dark:bg-white/8" />
    </div>
  );
}

export function SkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i}>
          <SkeletonCard />
        </li>
      ))}
    </ul>
  );
}
