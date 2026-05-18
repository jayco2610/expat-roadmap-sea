import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description?: string;
  action?: { href: string; label: string };
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl dark:text-[#f5f5f7]">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-[#6e6e73] dark:text-[#a1a1a6]">{description}</p>
        ) : null}
      </div>
      {action ? (
        <Link href={action.href} className="btn-primary shrink-0 text-sm">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
