import { SkeletonGrid, SkeletonPageHeader } from "@/components/ui/SkeletonCard";
import { PageShell } from "@/components/layout/PageShell";

export default function Loading() {
  return (
    <PageShell>
      <SkeletonPageHeader />
      <div className="mb-6 flex gap-2 animate-pulse">
        {[80, 60, 72].map((w, i) => (
          <div key={i} className="h-9 rounded-full bg-black/8 dark:bg-white/10" style={{ width: w }} />
        ))}
      </div>
      <SkeletonGrid count={4} />
    </PageShell>
  );
}
