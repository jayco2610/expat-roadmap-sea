import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBlock } from "@/components/community/ContactBlock";
import { PageShell } from "@/components/layout/PageShell";
import { getSessionUser } from "@/lib/auth";
import { contactVisibilityLabels } from "@/lib/contact-privacy";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!isDbConfigured()) return { title: "Profile" };
  const profile = await prisma.profile.findUnique({ where: { id } });
  return { title: profile?.displayName ?? "Profile" };
}

export default async function ProfilePage({ params }: Props) {
  const { id } = await params;
  if (!isDbConfigured()) notFound();

  const profile = await prisma.profile.findUnique({ where: { id } });
  if (!profile) notFound();

  const viewer = await getSessionUser();

  return (
    <PageShell>
      <Link
        href="/community"
        className="mb-6 inline-flex text-sm text-[#ff6a00] hover:underline"
      >
        ← Back to community
      </Link>

      <article className="card-apple max-w-2xl p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#ff6a00]/15 text-2xl font-semibold text-[#ff6a00]">
            {profile.displayName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="font-display text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
              {profile.displayName}
            </h1>
            <p className="mt-1 text-[#6e6e73] dark:text-[#a1a1a6]">
              {profile.city}, {profile.country}
            </p>
          </div>
        </div>

        {profile.bio ? (
          <p className="mt-6 leading-relaxed text-[#1d1d1f]/90 dark:text-[#f5f5f7]/90">{profile.bio}</p>
        ) : null}

        {profile.languages.length > 0 ? (
          <p className="mt-4 text-sm">
            <span className="text-[#6e6e73] dark:text-[#a1a1a6]">Languages: </span>
            {profile.languages.join(", ")}
          </p>
        ) : null}

        {profile.interests.length > 0 ? (
          <p className="mt-2 text-sm">
            <span className="text-[#6e6e73] dark:text-[#a1a1a6]">Interests: </span>
            {profile.interests.join(", ")}
          </p>
        ) : null}

        <section className="mt-8 border-t border-black/8 pt-6 dark:border-white/10">
          <h2 className="font-display text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            Contact
          </h2>
          <p className="mt-1 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
            Visibility: {contactVisibilityLabels[profile.contactVisibility]}
          </p>
          <div className="mt-4">
            <ContactBlock profile={profile} viewerUserId={viewer?.id ?? null} />
          </div>
        </section>
      </article>
    </PageShell>
  );
}
