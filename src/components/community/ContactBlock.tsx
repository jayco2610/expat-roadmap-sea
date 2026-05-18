import { getVisibleContacts } from "@/lib/contact-privacy";
import type { Profile } from "@prisma/client";

export function ContactBlock({
  profile,
  viewerUserId,
}: {
  profile: Profile;
  viewerUserId: string | null;
}) {
  const contacts = getVisibleContacts(profile, viewerUserId);
  const hasAny = contacts.email || contacts.phone || contacts.telegram;

  if (!hasAny) {
    return (
      <p className="text-sm text-[#6e6e73] dark:text-[#a1a1a6]">
        Contact details are hidden based on this member&apos;s privacy settings.
      </p>
    );
  }

  return (
    <ul className="space-y-2 text-sm">
      {contacts.email ? (
        <li>
          <span className="text-[#6e6e73] dark:text-[#a1a1a6]">Email: </span>
          <a href={`mailto:${contacts.email}`} className="text-[#0071e3] hover:underline">
            {contacts.email}
          </a>
        </li>
      ) : null}
      {contacts.phone ? (
        <li>
          <span className="text-[#6e6e73] dark:text-[#a1a1a6]">Phone: </span>
          <a href={`tel:${contacts.phone}`} className="text-[#0071e3] hover:underline">
            {contacts.phone}
          </a>
        </li>
      ) : null}
      {contacts.telegram ? (
        <li>
          <span className="text-[#6e6e73] dark:text-[#a1a1a6]">Telegram: </span>
          <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">{contacts.telegram}</span>
        </li>
      ) : null}
    </ul>
  );
}
