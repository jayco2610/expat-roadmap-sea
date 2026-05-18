import type { Metadata } from "next";
import { ProfileForm } from "@/components/forms/ProfileForm";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/ui/PageHeader";
import { getCurrentProfile, requireUser } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Profile settings",
};

export const dynamic = "force-dynamic";

export default async function ProfileSettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ onboarding?: string }>;
}) {
  await requireUser();
  const params = await searchParams;
  const profile = await getCurrentProfile();
  const onboarding = params.onboarding === "1";

  return (
    <PageShell>
      <PageHeader
        title={onboarding ? "Create your expat profile" : "Profile & privacy"}
        description="Your public community profile and contact privacy controls."
      />
      <div className="max-w-2xl">
        <ProfileForm profile={profile} showPrivacy />
      </div>
    </PageShell>
  );
}
