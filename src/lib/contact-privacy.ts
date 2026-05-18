import type { ContactVisibility, Profile } from "@prisma/client";

type ContactFields = Pick<Profile, "email" | "phone" | "telegram" | "showEmail" | "showPhone" | "showTelegram" | "contactVisibility">;

export function canViewContacts(
  profile: ContactFields & { userId: string },
  viewerUserId: string | null | undefined,
): boolean {
  if (viewerUserId && viewerUserId === profile.userId) return true;
  switch (profile.contactVisibility) {
    case "PUBLIC":
      return true;
    case "MEMBERS":
      return Boolean(viewerUserId);
    case "PRIVATE":
      return false;
    default:
      return false;
  }
}

export function getVisibleContacts(
  profile: ContactFields & { userId: string },
  viewerUserId: string | null | undefined,
) {
  if (!canViewContacts(profile, viewerUserId)) {
    return { email: null, phone: null, telegram: null };
  }

  return {
    email: profile.showEmail ? profile.email : null,
    phone: profile.showPhone ? profile.phone : null,
    telegram: profile.showTelegram ? profile.telegram : null,
  };
}

export const contactVisibilityLabels: Record<ContactVisibility, string> = {
  PUBLIC: "Everyone",
  MEMBERS: "Logged-in members only",
  PRIVATE: "Only me (hidden from others)",
};
