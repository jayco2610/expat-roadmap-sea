"use client";

import type { Profile } from "@prisma/client";
import { upsertProfile } from "@/actions/profile";
import { contactVisibilityLabels } from "@/lib/contact-privacy";
import { AvatarUpload } from "@/components/ui/AvatarUpload";
import { ActionForm } from "./ActionForm";
import { FormField } from "@/components/ui/FormField";

type ProfileFormProps = {
  profile?: Profile | null;
  showPrivacy?: boolean;
};

export function ProfileForm({ profile, showPrivacy = true }: ProfileFormProps) {
  return (
    <ActionForm action={upsertProfile} submitLabel={profile ? "Save profile" : "Create profile"}>
      {profile?.userId && (
        <AvatarUpload
          currentUrl={profile.avatarUrl}
          userId={profile.userId}
          displayName={profile.displayName}
        />
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Display name" name="displayName" required defaultValue={profile?.displayName} />
        <FormField label="City" name="city" required defaultValue={profile?.city ?? "Ho Chi Minh City"} />
        <FormField label="Country" name="country" required defaultValue={profile?.country ?? "Vietnam"} />
        <FormField
          label="Languages"
          name="languages"
          placeholder="English, Vietnamese"
          hint="Comma-separated"
          defaultValue={profile?.languages.join(", ")}
        />
      </div>
      <FormField
        label="Bio"
        name="bio"
        as="textarea"
        rows={4}
        defaultValue={profile?.bio ?? ""}
        placeholder="Tell other expats about yourself…"
      />
      <FormField
        label="Interests"
        name="interests"
        placeholder="remote work, surfing, coffee"
        hint="Comma-separated"
        defaultValue={profile?.interests.join(", ")}
      />

      {showPrivacy ? (
        <fieldset className="card-apple space-y-4 p-5">
          <legend className="font-display text-lg font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            Contact privacy
          </legend>
          <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
            Control who can see your contact details on your public profile.
          </p>
          <FormField
            label="Who can see contacts"
            name="contactVisibility"
            as="select"
            defaultValue={profile?.contactVisibility ?? "MEMBERS"}
            options={Object.entries(contactVisibilityLabels).map(([value, label]) => ({
              value,
              label,
            }))}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="showEmail"
                defaultChecked={profile?.showEmail}
                className="h-4 w-4 rounded border-black/20"
              />
              Show email
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="showPhone"
                defaultChecked={profile?.showPhone}
                className="h-4 w-4 rounded border-black/20"
              />
              Show phone
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="showTelegram"
                defaultChecked={profile?.showTelegram ?? true}
                className="h-4 w-4 rounded border-black/20"
              />
              Show Telegram
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <FormField label="Email" name="email" type="email" defaultValue={profile?.email ?? ""} />
            <FormField label="Phone" name="phone" defaultValue={profile?.phone ?? ""} />
            <FormField label="Telegram" name="telegram" placeholder="@username" defaultValue={profile?.telegram ?? ""} />
          </div>
        </fieldset>
      ) : null}
    </ActionForm>
  );
}
