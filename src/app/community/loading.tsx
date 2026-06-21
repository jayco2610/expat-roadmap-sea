import { SkeletonGrid, SkeletonPageHeader } from "@/components/ui/SkeletonCard";
import { PageShell } from "@/components/layout/PageShell";

export default function Loading() {
  return (
    <PageShell>
      <SkeletonPageHeader />
      <SkeletonGrid count={6} />
    </PageShell>
  );
}
