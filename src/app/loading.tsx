import { SkeletonGrid, SkeletonPageHeader } from "@/components/ui/SkeletonCard";

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-5 pt-8 pb-24 sm:px-8">
      <SkeletonPageHeader />
      <SkeletonGrid count={4} />
    </div>
  );
}
