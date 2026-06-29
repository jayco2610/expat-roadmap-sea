import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { isDbConfigured } from "@/lib/db";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Placeholder profiles to remove (created by original seed without avatars)
const REMOVE_NAMES = ["Mia Chen", "Arun Patel", "Lena Kowalski"];

const RU_BEAUTY_PROFILES = [
  {
    userId: "ru-beauty-001",
    displayName: "Alina Smirnova",
    bio: "Tattoo artist from Moscow. Working out of private studios in Canggu for 3 years. Fine line, blackwork, botanical motifs. Book a session through Telegram — portfolio on request.",
    city: "Canggu",
    country: "Russia",
    languages: ["Russian", "English"],
    interests: ["tattoo art", "illustration", "surf"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@alina_tattoo_bali",
    avatarUrl: "https://i.pravatar.cc/300?img=20",
  },
  {
    userId: "ru-beauty-002",
    displayName: "Katya Popova",
    bio: "Hairstylist and salon owner from Saint Petersburg. Running a small beauty space in Rawai with a Russian-speaking team. Cuts, colour, keratin, extensions, balayage.",
    city: "Phuket",
    country: "Russia",
    languages: ["Russian", "English", "Thai (basic)"],
    interests: ["hair styling", "colour techniques", "diving"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@katya_beauty_phuket",
    avatarUrl: "https://i.pravatar.cc/300?img=27",
  },
  {
    userId: "ru-beauty-003",
    displayName: "Lena Morozova",
    bio: "Nail artist and educator from Novosibirsk. 8+ years teaching nail design. Gel, acryl, nail art — from minimal to complex. Also run online courses in Russian for nail students in Asia.",
    city: "Chiang Mai",
    country: "Russia",
    languages: ["Russian", "English"],
    interests: ["nail art", "education", "ceramics"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@lena_nails_cm",
    avatarUrl: "https://i.pravatar.cc/300?img=32",
  },
  {
    userId: "ru-beauty-004",
    displayName: "Sasha Petrova",
    bio: "Portrait and lifestyle photographer from Moscow. Studio and outdoor sessions across Bali — couples, solo, brands. Natural light, honest shots. No heavy retouching, just real moments.",
    city: "Seminyak",
    country: "Russia",
    languages: ["Russian", "English"],
    interests: ["photography", "film", "sunsets"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@sasha_photo_bali",
    avatarUrl: "https://i.pravatar.cc/300?img=40",
  },
  {
    userId: "ru-beauty-005",
    displayName: "Vika Sokolova",
    bio: "Makeup artist from Yekaterinburg, based in Bangkok for 2 years. Editorial, event, and bridal makeup. Also offer 1:1 makeup lessons — English or Russian. Portfolio on Instagram.",
    city: "Bangkok",
    country: "Russia",
    languages: ["Russian", "English"],
    interests: ["makeup artistry", "fashion", "street food"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@vika_mua_bkk",
    avatarUrl: "https://i.pravatar.cc/300?img=44",
  },
  {
    userId: "ru-beauty-006",
    displayName: "Masha Kozlova",
    bio: "Lash lift and lamination specialist from Krasnodar. Based in HCMC. Brow architecture, tinting, lamination. Also work with lash extensions. Book via Telegram, same-day slots often available.",
    city: "Ho Chi Minh City",
    country: "Russia",
    languages: ["Russian", "English", "Vietnamese (basic)"],
    interests: ["lash & brow", "beauty trends", "Vietnamese coffee"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@masha_lashes_hcmc",
    avatarUrl: "https://i.pravatar.cc/300?img=56",
  },
  {
    userId: "ru-beauty-007",
    displayName: "Dasha Novikova",
    bio: "Beauty blogger and content creator from Moscow. 200K+ on Instagram. Covering expat life, beauty routines in tropical climates, honest product reviews, and what actually survives Bali humidity.",
    city: "Ko Samui",
    country: "Russia",
    languages: ["Russian", "English"],
    interests: ["content creation", "beauty blogging", "beach"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@dasha_beauty_sea",
    avatarUrl: "https://i.pravatar.cc/300?img=60",
  },
  {
    userId: "ru-beauty-008",
    displayName: "Yulia Lebedeva",
    bio: "Certified massage therapist and reiki practitioner from Saint Petersburg. Thai, Swedish, and deep tissue massage in Ubud. Home visits and retreat collaborations available.",
    city: "Ubud",
    country: "Russia",
    languages: ["Russian", "English"],
    interests: ["massage therapy", "wellness", "yoga"],
    contactVisibility: "PUBLIC" as const,
    showEmail: false, showPhone: false, showTelegram: true,
    telegram: "@yulia_massage_ubud",
    avatarUrl: "https://i.pravatar.cc/300?img=65",
  },
];

export async function POST() {
  if (!isDbConfigured()) {
    return NextResponse.json({ error: "DB not configured" }, { status: 503 });
  }

  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Remove old placeholder profiles (all copies, including duplicates)
    const deleted = await prisma.profile.deleteMany({
      where: { displayName: { in: REMOVE_NAMES } },
    });

    // Insert new Russian beauty profiles
    const created = await prisma.profile.createMany({
      data: RU_BEAUTY_PROFILES,
      skipDuplicates: true,
    });

    return NextResponse.json({
      ok: true,
      deleted: deleted.count,
      created: created.count,
      message: `Removed ${deleted.count} old profiles, added ${created.count} new profiles.`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
