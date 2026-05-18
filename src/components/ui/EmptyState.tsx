import Link from "next/link";

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="card-apple mx-auto max-w-md p-8 text-center">
      <h2 className="font-display text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{title}</h2>
      <p className="mt-2 text-sm text-[#6e6e73] dark:text-[#a1a1a6]">{description}</p>
      {action ? (
        <Link href={action.href} className="btn-primary mt-6 inline-flex text-sm">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
