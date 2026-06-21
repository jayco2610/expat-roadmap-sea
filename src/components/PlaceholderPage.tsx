import Link from "next/link";

type PlaceholderPageProps = {
  title: string;
  description: string;
  icon: string;
};

export function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8 sm:py-28">
      <span
        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm ring-1 ring-black/8 dark:bg-[#1c1c1e] dark:ring-white/10"
        aria-hidden
      >
        {icon}
      </span>
      <h1 className="font-display mt-8 text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl dark:text-[#f5f5f7]">
        {title}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
        {description}
      </p>
      <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7d8c63]/10 px-4 py-2 text-sm font-medium text-[#7d8c63]">
        Coming soon
      </p>
      <div className="mt-10">
        <Link href="/" className="btn-secondary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
