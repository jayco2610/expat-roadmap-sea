/**
 * Safe demo seed — only inserts, never deletes.
 * Skips items that already exist (idempotent via upsert / skipDuplicates).
 * Run: npx tsx prisma/seed-demo.ts
 */
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEMO_USERS = [
  "demo-user-sea-001",
  "demo-user-sea-002",
  "demo-user-sea-003",
];

async function main() {
  // Profiles — upsert so re-runs are safe
  const [mia, arun, lena] = await Promise.all([
    prisma.profile.upsert({
      where: { userId: DEMO_USERS[0] },
      update: {},
      create: {
        userId: DEMO_USERS[0],
        displayName: "Mia Chen",
        bio: "Product designer from Taipei. 2 years in HCMC, love coffee shops and street food tours.",
        city: "Ho Chi Minh City",
        country: "Vietnam",
        languages: ["English", "Mandarin", "Vietnamese"],
        interests: ["design", "coffee", "motorbikes"],
        telegram: "@miachen_hcmc",
        contactVisibility: "MEMBERS",
        showEmail: false,
        showPhone: false,
        showTelegram: true,
      },
    }),
    prisma.profile.upsert({
      where: { userId: DEMO_USERS[1] },
      update: {},
      create: {
        userId: DEMO_USERS[1],
        displayName: "Arun Patel",
        bio: "Full-stack dev building from Ubud. Yoga at sunrise, deploy at sunset.",
        city: "Ubud",
        country: "Indonesia",
        languages: ["English", "Hindi"],
        interests: ["remote work", "yoga", "surf"],
        contactVisibility: "PUBLIC",
        showEmail: false,
        showPhone: false,
        showTelegram: true,
        telegram: "@arunubud",
      },
    }),
    prisma.profile.upsert({
      where: { userId: DEMO_USERS[2] },
      update: {},
      create: {
        userId: DEMO_USERS[2],
        displayName: "Lena Kowalski",
        bio: "ESL teacher and visa consultant helping EU expats settle in SEA.",
        city: "Ho Chi Minh City",
        country: "Vietnam",
        languages: ["English", "Polish", "Vietnamese"],
        interests: ["teaching", "visas", "hiking"],
        contactVisibility: "PRIVATE",
        showEmail: false,
        showPhone: false,
        showTelegram: false,
      },
    }),
  ]);

  // Housing listings
  await prisma.housingListing.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "demo-housing-001",
        title: "Bright studio near Ben Thanh",
        description: `Fully furnished 35m² studio in the heart of District 1, 5-minute walk to Ben Thanh Market.

Includes:
- Fast fiber Wi-Fi (200 Mbps)
- In-unit washing machine and kitchenette
- Quiet building with elevator and 24/7 reception
- Air conditioning
- Weekly cleaning on request

Great for a remote worker who wants to be central. Cafés, coworking and street food all within walking distance. Minimum stay 1 month.`,
        city: "Ho Chi Minh City",
        address: "12 Nguyen Thi Nghia, District 1",
        priceMonth: 650,
        propertyType: "APARTMENT",
        status: "PUBLISHED",
        authorId: mia.id,
      },
      {
        id: "demo-housing-002",
        title: "Ubud jungle room with desk",
        description: `Private room in a shared villa surrounded by rice fields, 10 minutes from Ubud center.

The space:
- Private ensuite bathroom
- Large desk and ergonomic chair
- Fiber internet throughout the villa
- Shared saltwater pool and open-air kitchen
- Monthly cleaning and pool service included

Live with two other nomads in a calm, green setting. Scooter recommended. Available 1 month minimum.`,
        city: "Ubud",
        address: "Jl. Raya Tebakan, Mas",
        priceMonth: 480,
        propertyType: "ROOM",
        status: "PUBLISHED",
        authorId: arun.id,
      },
      {
        id: "demo-housing-003",
        title: "Beachside 1BR in An Thuong, Da Nang",
        description: `Modern one-bedroom in Da Nang's An Thuong area. 3-minute walk to My Khe beach.

Highlights:
- 200 Mbps fiber + backup 4G router
- Balcony with partial sea view
- Full kitchen, washer, smart TV
- Building gym and rooftop coworking lounge
- Surrounded by cafés, gyms, Western restaurants

Motorbike parking included.`,
        city: "Da Nang",
        address: "15 An Thuong 4, Ngu Hanh Son",
        priceMonth: 700,
        propertyType: "APARTMENT",
        status: "PUBLISHED",
        authorId: lena.id,
      },
      {
        id: "demo-housing-004",
        title: "Canggu co-living loft",
        description: `Private loft inside a designed co-living house in Canggu, 7 minutes to Echo Beach.

What you get:
- Private room + bathroom in a 10-person community house
- Dedicated coworking floor with standing desks and fast fiber
- Pool, gym, and weekly community dinners
- All bills, cleaning and water included
- Scooter rental arranged on arrival

Min stay 1 month.`,
        city: "Canggu",
        address: "Jl. Pantai Batu Bolong, Canggu",
        priceMonth: 620,
        propertyType: "COLIVING",
        status: "PUBLISHED",
        authorId: mia.id,
      },
      {
        id: "demo-housing-005",
        title: "Quiet 2BR house in Nimman, Chiang Mai",
        description: `Two-bedroom house with a small garden in Nimman — Chiang Mai's café district.

Details:
- Two bedrooms (use one as an office)
- 100+ Mbps fiber
- Full kitchen, washer, two bathrooms
- Covered parking for scooters
- Walking distance to Maya Mall, cafés and coworking

Quiet soi, friendly neighbors. 3-month minimum preferred.`,
        city: "Chiang Mai",
        address: "Soi 7, Nimmanhaemin Rd",
        priceMonth: 540,
        propertyType: "HOUSE",
        status: "PUBLISHED",
        authorId: arun.id,
      },
      {
        id: "demo-housing-006",
        title: "KLCC high-rise studio, KL",
        description: `Serviced studio on the 28th floor with view of the Petronas Towers.

Includes:
- 300 Mbps fiber
- Infinity pool, gym and sky lounge
- Walking distance to KLCC and MRT
- Full kitchenette, washer/dryer
- Serviced cleaning twice a week

Big-city comfort at a fraction of Singapore prices. Great DE Rantau base. 1-month+ stays.`,
        city: "Kuala Lumpur",
        address: "Jalan Ampang, KLCC",
        priceMonth: 780,
        propertyType: "APARTMENT",
        status: "PUBLISHED",
        authorId: lena.id,
      },
      {
        id: "demo-housing-007",
        title: "Rawai studio, South Phuket",
        description: `Quiet furnished studio in Rawai — Phuket's most expat-friendly neighborhood.

Features:
- 150 Mbps fiber
- Air conditioning, hot water, kitchenette
- 5-minute scooter to Rawai beach and seafood market
- Covered parking
- No tourist crowds — mostly locals and long-stay expats

Great for focused work with beach access. 2-month minimum.`,
        city: "Phuket",
        address: "Soi Saiyuan, Rawai",
        priceMonth: 520,
        propertyType: "APARTMENT",
        status: "PUBLISHED",
        authorId: arun.id,
      },
      {
        id: "demo-housing-008",
        title: "Thao Dien apartment, Ho Chi Minh City",
        description: `Modern 1BR in District 2's expat hub — tree-lined streets, international restaurants, bike paths.

What's included:
- 200 Mbps fiber, backup router
- Fully equipped kitchen, washing machine
- Pool and gym in building
- 10-min bike ride to the river and ferries
- International schools, Western supermarkets nearby

Perfect for couples or a solo expat who wants comfort without D1 noise.`,
        city: "Ho Chi Minh City",
        address: "Nguyen Van Huong, Thao Dien, District 2",
        priceMonth: 950,
        propertyType: "APARTMENT",
        status: "PUBLISHED",
        authorId: lena.id,
      },
    ],
  });

  // Job listings
  await prisma.jobListing.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "demo-job-001",
        title: "Senior React Developer (remote)",
        description: `EU fintech startup hiring a senior frontend engineer to join a fully async team.

What you'll do:
- Build and own features in our Next.js / TypeScript web app
- Work closely with design and product (4h overlap with CET)
- Improve performance and test coverage

Requirements:
- 4+ years React + TypeScript in production
- Strong with Next.js and modern tooling
- Comfortable in a remote, written-first culture

Fully remote from SEA. Equipment budget and yearly team retreat included.`,
        city: "Remote",
        kind: "JOB",
        compensation: "$4,000–5,000 / month",
        remote: true,
        status: "PUBLISHED",
        authorId: arun.id,
      },
      {
        id: "demo-job-002",
        title: "Visa & relocation consulting — Vietnam",
        description: `One-on-one help navigating visas and settling into Vietnam, from someone who's done it for 100+ expats.

I help with:
- Choosing the right visa (e-visa, TRC, work permit) for your situation
- Document prep and application review
- Apartment contracts and avoiding common rental traps
- Setting up banking, SIM, and local registration

Sessions via video call or in person in Ho Chi Minh City. First call includes a written action plan.`,
        city: "Ho Chi Minh City",
        kind: "SERVICE",
        compensation: "From $150 / session",
        remote: false,
        status: "PUBLISHED",
        authorId: lena.id,
      },
      {
        id: "demo-job-003",
        title: "Content writer — travel & expat niche",
        description: `Part-time remote writer for a SEA relocation brand's blog and newsletter.

The work:
- 4–6 articles per month on visas, cost of living, and city guides
- Research-backed, practical, no fluff
- Light SEO (keywords and briefs provided)

You:
- Native or fluent English
- Have lived in or traveled SEA
- Can turn a brief into a clear, useful article

Flexible hours. Paid per article. Long-term preferred.`,
        city: "Remote",
        kind: "JOB",
        compensation: "$40–60 / article",
        remote: true,
        status: "PUBLISHED",
        authorId: mia.id,
      },
      {
        id: "demo-job-004",
        title: "Remote Product Designer (3-month contract)",
        description: `B2B SaaS company looking for a product designer with extension potential.

Scope:
- Redesign core dashboard flows in Figma
- Build and maintain the design system
- Hand off cleanly to a React engineering team

Requirements:
- 3+ years product design, B2B a plus
- Strong Figma and design-system skills
- Async-friendly, 3h overlap with US East

Fully remote. Paid weekly.`,
        city: "Remote",
        kind: "JOB",
        compensation: "$3,000–4,000 / month",
        remote: true,
        status: "PUBLISHED",
        authorId: mia.id,
      },
      {
        id: "demo-job-005",
        title: "Airport pickup & first-week setup — Da Nang",
        description: `Reliable local service for new arrivals in Da Nang.

I offer:
- Airport pickup with English-speaking driver
- Help with first-week errands: SIM, groceries, scooter rental
- Motorbike delivery and basic maintenance referrals

Honest pricing, used by dozens of nomads landing in Da Nang. Send me your flight details.`,
        city: "Da Nang",
        kind: "SERVICE",
        compensation: "From $15 / trip",
        remote: false,
        status: "PUBLISHED",
        authorId: arun.id,
      },
      {
        id: "demo-job-006",
        title: "Bookkeeping for freelancers & nomads",
        description: `Stay on top of your finances while living abroad.

I handle:
- Monthly bookkeeping and expense categorization
- Invoicing and income tracking across currencies
- Simple reports for your tax advisor

Experience with freelancers, remote employees, and small online businesses. Fully remote, monthly retainer.`,
        city: "Chiang Mai",
        kind: "SERVICE",
        compensation: "From $120 / month",
        remote: true,
        status: "PUBLISHED",
        authorId: lena.id,
      },
      {
        id: "demo-job-007",
        title: "Thai language tutor — beginner to intermediate",
        description: `One-on-one Thai lessons tailored to expat life — not textbook phrases, but what you actually need.

I cover:
- Survival Thai: markets, transport, food, directions
- Reading Thai script (for navigating without Google Maps)
- Conversation practice at your pace

Lessons via Zoom or in person in Chiang Mai. Flexible scheduling around your work hours.`,
        city: "Chiang Mai",
        kind: "SERVICE",
        compensation: "$25 / hour",
        remote: true,
        status: "PUBLISHED",
        authorId: lena.id,
      },
      {
        id: "demo-job-008",
        title: "Bali villa property manager (part-time)",
        description: `Small villa management company in Canggu looking for a part-time property coordinator.

Responsibilities:
- Guest check-ins and check-outs (mostly remote, some in-person)
- Coordinating cleaning and maintenance crews
- Responding to booking enquiries
- Monthly owner reporting

You're based in Bali, speak English fluently, and have a scooter. Bali experience preferred. 15–20h/week.`,
        city: "Canggu",
        kind: "JOB",
        compensation: "$600–800 / month",
        remote: false,
        status: "PUBLISHED",
        authorId: arun.id,
      },
    ],
  });

  // Events — dates relative to now so they stay in the future
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;

  await prisma.event.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "demo-event-001",
        title: "Nomad Coffee — District 1",
        description: `Casual Friday coworking and coffee. Bring your laptop, meet other remote workers, swap tips on visas and apartments. No agenda, just good people and good coffee.`,
        city: "Ho Chi Minh City",
        location: "The Workshop Coffee, 27 Ngô Đức Kế, District 1",
        startsAt: new Date(now + 3 * day),
        capacity: 20,
        status: "PUBLISHED",
        authorId: mia.id,
      },
      {
        id: "demo-event-002",
        title: "Sunrise Yoga & Breakfast — Ubud",
        description: `Gentle vinyasa flow with a view of the rice terraces, followed by a shared local breakfast. All levels welcome. Bring a mat or borrow one.`,
        city: "Ubud",
        location: "Tegallalang Rice Terrace viewpoint",
        startsAt: new Date(now + 5 * day),
        capacity: 12,
        status: "PUBLISHED",
        authorId: arun.id,
      },
      {
        id: "demo-event-003",
        title: "Expat Newcomers Meetup — Chiang Mai",
        description: `Just arrived in Chiang Mai or planning to? This monthly meetup connects new expats with people who know the city. Topics: SIM cards, best neighborhoods, visa options, where to find good Thai food.`,
        city: "Chiang Mai",
        location: "Ristr8to Coffee, Nimmanhaemin Rd",
        startsAt: new Date(now + 7 * day),
        capacity: 30,
        status: "PUBLISHED",
        authorId: lena.id,
      },
      {
        id: "demo-event-004",
        title: "Canggu Nomad Dinner",
        description: `Monthly dinner for digital nomads based in Canggu. Good food, honest conversations about remote work, visa situations, and what's changed in Bali lately. Usually 10–20 people, always a good mix.`,
        city: "Canggu",
        location: "Shelter Restaurant, Jl. Pantai Batu Bolong",
        startsAt: new Date(now + 10 * day),
        status: "PUBLISHED",
        authorId: mia.id,
      },
      {
        id: "demo-event-005",
        title: "DTV Visa Workshop — Bangkok",
        description: `Practical session on applying for Thailand's Destination Thailand Visa (DTV) in 2026. A visa consultant walks through documents, common rejections, and what consulates actually care about. Q&A included.`,
        city: "Bangkok",
        location: "Hubba Ekkamai Coworking, Ekkamai Soi 2",
        startsAt: new Date(now + 14 * day),
        capacity: 25,
        status: "PUBLISHED",
        authorId: lena.id,
      },
    ],
  });

  // Community profiles — 35 real-looking members from different countries
  await prisma.profile.createMany({
    skipDuplicates: true,
    data: [
      {
        userId: "community-user-001",
        displayName: "Sophie Martin",
        bio: "Freelance photographer from Lyon. Shooting portraits and street life across SEA for 3 years. Currently based in Canggu, available for collab projects.",
        city: "Canggu",
        country: "France",
        languages: ["English", "French", "Indonesian (basic)"],
        interests: ["photography", "surf", "plant-based food"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@sophie_sea_shots",
        avatarUrl: "https://i.pravatar.cc/300?u=sophie.martin.sea",
      },
      {
        userId: "community-user-002",
        displayName: "Dmitry Sokolov",
        bio: "Backend engineer (Go/Postgres) working remotely for a Berlin SaaS company. Chiang Mai for 2 years — coffee shops, mountains, bearable traffic. Ask me about Nimman neighborhoods.",
        city: "Chiang Mai",
        country: "Russia",
        languages: ["Russian", "English"],
        interests: ["hiking", "specialty coffee", "open source"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@dmitry_cm",
        avatarUrl: "https://i.pravatar.cc/300?u=dmitry.sokolov.cm",
      },
      {
        userId: "community-user-003",
        displayName: "Emma Wilson",
        bio: "Arrived in Da Nang as an ESL teacher, stayed for the food and the beach. Now teaching yoga and doing occasional editing work. An Thuong is underrated.",
        city: "Da Nang",
        country: "United Kingdom",
        languages: ["English"],
        interests: ["yoga", "swimming", "Vietnamese cooking"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=emma.wilson.danang",
      },
      {
        userId: "community-user-004",
        displayName: "Carlos García",
        bio: "Marketing consultant from Barcelona. Running campaigns for European brands targeting SEA markets. Bangkok suits my work hours — 4h overlap with CET without waking up early.",
        city: "Bangkok",
        country: "Spain",
        languages: ["Spanish", "English", "Catalan"],
        interests: ["marketing", "muay thai", "street food tours"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@carlos_bkk",
        avatarUrl: "https://i.pravatar.cc/300?u=carlos.garcia.bkk",
      },
      {
        userId: "community-user-005",
        displayName: "Hana Novak",
        bio: "Graphic designer and illustrator from Prague. Ubud gave me the creative space I couldn't find in Europe. I design brand identities for small hospitality businesses.",
        city: "Ubud",
        country: "Czech Republic",
        languages: ["Czech", "English", "German"],
        interests: ["illustration", "ceramics", "rice field walks"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@hana_designs",
        avatarUrl: "https://i.pravatar.cc/300?u=hana.novak.ubud",
      },
      {
        userId: "community-user-006",
        displayName: "Jake Thompson",
        bio: "Kiting, dropshipping, Ko Samui sunsets. Left a corporate job in Austin 4 years ago, haven't looked back. Run a small e-com store doing 6 figures remote.",
        city: "Ko Samui",
        country: "United States",
        languages: ["English", "Thai (survival)"],
        interests: ["kitesurfing", "e-commerce", "diving"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@jake_samui",
        avatarUrl: "https://i.pravatar.cc/300?u=jake.thompson.samui",
      },
      {
        userId: "community-user-007",
        displayName: "Nora Schmidt",
        bio: "Product manager at a fintech startup (Series B, full remote). Munich → HCMC three years ago. Obsessed with Vietnamese coffee, finding good pizza is still a work in progress.",
        city: "Ho Chi Minh City",
        country: "Germany",
        languages: ["German", "English", "Vietnamese (basic)"],
        interests: ["product management", "cycling", "board games"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=nora.schmidt.hcmc",
      },
      {
        userId: "community-user-008",
        displayName: "Priya Sharma",
        bio: "Data analyst working remotely for a Singapore-based logistics startup. Penang is perfect — food, culture, 1h to KL when I need the city. Georgetown mornings are something else.",
        city: "Penang",
        country: "India",
        languages: ["English", "Hindi", "Tamil (basic)"],
        interests: ["data viz", "cycling", "street art"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@priya_penang",
        avatarUrl: "https://i.pravatar.cc/300?u=priya.sharma.penang",
      },
      {
        userId: "community-user-009",
        displayName: "Lucas Fontaine",
        bio: "Professional chef from Lyon turned food entrepreneur. Running pop-up dinners in Bangkok that blend French technique with Thai ingredients. Monthly events, limited seats.",
        city: "Bangkok",
        country: "France",
        languages: ["French", "English", "Thai (basic)"],
        interests: ["gastronomy", "fermentation", "night markets"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@lucas_bkk_kitchen",
        avatarUrl: "https://i.pravatar.cc/300?u=lucas.fontaine.bkk",
      },
      {
        userId: "community-user-010",
        displayName: "Olga Kovalenko",
        bio: "Travel blogger and photographer from Kyiv. In Phuket since 2022. Document the nomad lifestyle honestly — costs, visa issues, the bad days too. 120K on Instagram.",
        city: "Phuket",
        country: "Ukraine",
        languages: ["Ukrainian", "Russian", "English"],
        interests: ["travel writing", "photography", "sea kayaking"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@olga_phuket_life",
        avatarUrl: "https://i.pravatar.cc/300?u=olga.kovalenko.phuket",
      },
      {
        userId: "community-user-011",
        displayName: "Tobias Lindqvist",
        bio: "Software architect, remote contractor for Swedish tech firms. Canggu for 18 months. Working on distributed systems by day, learning to surf by evening. Very slowly.",
        city: "Canggu",
        country: "Sweden",
        languages: ["Swedish", "English"],
        interests: ["distributed systems", "surfing", "scooter mechanics"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=tobias.lindqvist.canggu",
      },
      {
        userId: "community-user-012",
        displayName: "Aisha Abdullah",
        bio: "UX researcher working with Southeast Asian fintech companies. Malaysian, KL-based. Passionate about making financial products accessible to unbanked populations across the region.",
        city: "Kuala Lumpur",
        country: "Malaysia",
        languages: ["Malay", "English", "Mandarin"],
        interests: ["UX research", "accessibility", "urban cycling"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@aisha_ux_kl",
        avatarUrl: "https://i.pravatar.cc/300?u=aisha.abdullah.kl",
      },
      {
        userId: "community-user-013",
        displayName: "Michael O'Brien",
        bio: "Content creator from Melbourne. YouTube channel on budget living in SEA, 80K subscribers. Chiang Mai is my base — cost of living makes the numbers work at any subscriber count.",
        city: "Chiang Mai",
        country: "Australia",
        languages: ["English", "Thai (basic)"],
        interests: ["filmmaking", "budget travel", "Thai boxing"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@michael_obrien_nomad",
        avatarUrl: "https://i.pravatar.cc/300?u=michael.obrien.cm",
      },
      {
        userId: "community-user-014",
        displayName: "Yuki Watanabe",
        bio: "Japanese-English technical translator and localization consultant. Based in HCMC for 4 years. Help Japanese companies expand into Vietnam and vice versa.",
        city: "Ho Chi Minh City",
        country: "Japan",
        languages: ["Japanese", "English", "Vietnamese"],
        interests: ["linguistics", "literature", "Vietnamese coffee"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=yuki.watanabe.hcmc",
      },
      {
        userId: "community-user-015",
        displayName: "Sven Bergmann",
        bio: "Coordinator at an education NGO in Phnom Penh. We run vocational training programs in rural Cambodia. 6 years in-country, still learning how much I don't know.",
        city: "Phnom Penh",
        country: "Germany",
        languages: ["German", "English", "Khmer (intermediate)"],
        interests: ["development work", "photography", "cycling"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@sven_pp",
        avatarUrl: "https://i.pravatar.cc/300?u=sven.bergmann.pp",
      },
      {
        userId: "community-user-016",
        displayName: "Ana Sousa",
        bio: "Jewelry designer from Lisbon. Make slow, handcrafted pieces using local stones and recycled silver. Sell globally online, live quietly in Bali. Good life balance.",
        city: "Ubud",
        country: "Portugal",
        languages: ["Portuguese", "English", "Spanish"],
        interests: ["jewelry making", "silversmithing", "plant medicine"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=ana.sousa.ubud",
      },
      {
        userId: "community-user-017",
        displayName: "Ryan Mitchell",
        bio: "Full-stack web developer from Toronto. React + Node. Working with 3 long-term clients, mostly US startups. Bangkok because of the food scene — I've eaten here every day for 2 years and not repeated.",
        city: "Bangkok",
        country: "Canada",
        languages: ["English", "French (basic)"],
        interests: ["web dev", "food exploration", "tennis"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@ryan_bkk_dev",
        avatarUrl: "https://i.pravatar.cc/300?u=ryan.mitchell.bkk",
      },
      {
        userId: "community-user-018",
        displayName: "Natalia Ivanova",
        bio: "200h certified vinyasa yoga teacher from Moscow. Teaching at a retreat center in Koh Phangan. The full moon parties are loud but the mornings here are genuinely magical.",
        city: "Koh Phangan",
        country: "Russia",
        languages: ["Russian", "English"],
        interests: ["yoga", "meditation", "raw food"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@natalia_yoga_koh",
        avatarUrl: "https://i.pravatar.cc/300?u=natalia.ivanova.koh",
      },
      {
        userId: "community-user-019",
        displayName: "Omar Khalil",
        bio: "CPA working remotely for clients in the Gulf and Europe. Pattaya suits the budget and the timezone. If you need help with cross-border accounting for expats, I might be useful.",
        city: "Pattaya",
        country: "Lebanon",
        languages: ["Arabic", "English", "French"],
        interests: ["accounting", "fishing", "chess"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@omar_cpa_sea",
        avatarUrl: "https://i.pravatar.cc/300?u=omar.khalil.pattaya",
      },
      {
        userId: "community-user-020",
        displayName: "Clara Dubois",
        bio: "Product designer at a European health-tech company. Full remote since 2021. Da Nang was a weekend trip that turned into two years. Beach at 7am, Figma by 9.",
        city: "Da Nang",
        country: "France",
        languages: ["French", "English"],
        interests: ["product design", "swimming", "solo travel"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=clara.dubois.danang",
      },
      {
        userId: "community-user-021",
        displayName: "Piotr Kowalski",
        bio: "Indie game developer from Warsaw. Built two mobile games while living in Chiang Mai. The cost structure here makes indie sustainable in a way it wouldn't be in Europe.",
        city: "Chiang Mai",
        country: "Poland",
        languages: ["Polish", "English"],
        interests: ["game dev", "3D modeling", "mountain biking"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@piotr_game_cm",
        avatarUrl: "https://i.pravatar.cc/300?u=piotr.kowalski.cm",
      },
      {
        userId: "community-user-022",
        displayName: "Isabella Russo",
        bio: "Fashion and lifestyle content creator from Milan. Bali for the content, but also genuinely for the lifestyle. Seminyak base, Ubud weekends. Not all Instagram, some of it's real.",
        city: "Seminyak",
        country: "Italy",
        languages: ["Italian", "English", "French"],
        interests: ["fashion", "aesthetics", "local crafts"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@bella_bali_style",
        avatarUrl: "https://i.pravatar.cc/300?u=isabella.russo.bali",
      },
      {
        userId: "community-user-023",
        displayName: "Ben Cohen",
        bio: "Serial entrepreneur, currently building a marketplace for vetted travel services in SEA. Bangkok is the startup hub people underestimate. Great talent pool, reasonable office costs.",
        city: "Bangkok",
        country: "Israel",
        languages: ["Hebrew", "English"],
        interests: ["startups", "product", "Muay Thai"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@ben_cohen_bkk",
        avatarUrl: "https://i.pravatar.cc/300?u=ben.cohen.bkk",
      },
      {
        userId: "community-user-024",
        displayName: "Lin Mei",
        bio: "Finance manager at a regional PE firm, Singapore PR. Grew up in Chengdu, studied in London, landed here 5 years ago. Singapore is expensive but the quality of life trade-off is real.",
        city: "Singapore",
        country: "China",
        languages: ["Mandarin", "English", "Cantonese"],
        interests: ["finance", "running", "dim sum research"],
        contactVisibility: "PRIVATE",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=lin.mei.singapore",
      },
      {
        userId: "community-user-025",
        displayName: "José Rodrigues",
        bio: "DJ and music producer from São Paulo. Playing across SEA for 3 years — Koh Samui, Bali, Bangkok, KL. Produce remotely, play live. Ko Samui is home base when not touring.",
        city: "Ko Samui",
        country: "Brazil",
        languages: ["Portuguese", "English", "Spanish"],
        interests: ["music production", "DJing", "diving"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@jose_dj_sea",
        avatarUrl: "https://i.pravatar.cc/300?u=jose.rodrigues.samui",
      },
      {
        userId: "community-user-026",
        displayName: "Elena Popescu",
        bio: "Therapist (CBT) from Bucharest offering sessions online to expats across SEA. Living in Phuket. Specializing in relocation adjustment, burnout, and relationships under digital nomad stress.",
        city: "Phuket",
        country: "Romania",
        languages: ["Romanian", "English", "French"],
        interests: ["psychology", "mindfulness", "ocean swimming"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@elena_therapy_sea",
        avatarUrl: "https://i.pravatar.cc/300?u=elena.popescu.phuket",
      },
      {
        userId: "community-user-027",
        displayName: "Samuel Eriksson",
        bio: "Growth marketer specializing in B2C subscription products. Remote for a Stockholm company. HCMC for the energy and pace — it matches how fast the work moves.",
        city: "Ho Chi Minh City",
        country: "Norway",
        languages: ["Norwegian", "English"],
        interests: ["growth marketing", "running", "coffee culture"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=samuel.eriksson.hcmc",
      },
      {
        userId: "community-user-028",
        displayName: "Tara O'Sullivan",
        bio: "Copywriter and brand strategist from Dublin. Working with SaaS companies on messaging and positioning. KL is underrated for nomads — food, infrastructure, and the English is everywhere.",
        city: "Kuala Lumpur",
        country: "Ireland",
        languages: ["English", "Irish (basic)"],
        interests: ["writing", "brand strategy", "hiking"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@tara_copy_kl",
        avatarUrl: "https://i.pravatar.cc/300?u=tara.osullivan.kl",
      },
      {
        userId: "community-user-029",
        displayName: "Maximilian Kirsch",
        bio: "Architect and urban designer from Munich. Consulting on sustainable hospitality projects across SEA. Penang fascinates me — the colonial grid meets tropical vernacular. Best shophouses in the region.",
        city: "Penang",
        country: "Germany",
        languages: ["German", "English"],
        interests: ["architecture", "urban planning", "street photography"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=maximilian.kirsch.penang",
      },
      {
        userId: "community-user-030",
        displayName: "Ji-yeon Kim",
        bio: "Wellness coach and Pilates instructor from Seoul. Running an online membership for Korean expats in SEA. Also teaching in-person classes in Bangkok three times a week.",
        city: "Bangkok",
        country: "South Korea",
        languages: ["Korean", "English", "Thai (basic)"],
        interests: ["pilates", "wellness coaching", "Korean food abroad"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@jiyeon_wellness",
        avatarUrl: "https://i.pravatar.cc/300?u=jiyeon.kim.bkk",
      },
      {
        userId: "community-user-031",
        displayName: "Marco van der Berg",
        bio: "Blockchain developer and smart contract auditor. Remote from Amsterdam, living in Canggu. Crypto community here is real — not just tourists. Good coworking options within scooter distance.",
        city: "Canggu",
        country: "Netherlands",
        languages: ["Dutch", "English"],
        interests: ["blockchain", "cryptography", "surfing"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@marco_blockchain_bali",
        avatarUrl: "https://i.pravatar.cc/300?u=marco.vandenberg.canggu",
      },
      {
        userId: "community-user-032",
        displayName: "Lara Okonkwo",
        bio: "International trade consultant from Lagos. Based in HCMC helping Nigerian and West African businesses navigate Vietnam and Cambodia sourcing. The manufacturing connections here are genuinely valuable.",
        city: "Ho Chi Minh City",
        country: "Nigeria",
        languages: ["English", "Yoruba", "French"],
        interests: ["trade", "import/export", "street photography"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@lara_trade_hcmc",
        avatarUrl: "https://i.pravatar.cc/300?u=lara.okonkwo.hcmc",
      },
      {
        userId: "community-user-033",
        displayName: "Felix Huber",
        bio: "Independent financial advisor for expats from Zurich. Specialize in cross-border tax planning, pension portability and investment for people who live between countries. Chiang Mai for 5 years.",
        city: "Chiang Mai",
        country: "Switzerland",
        languages: ["German", "French", "English"],
        interests: ["finance", "hiking", "specialty coffee"],
        contactVisibility: "PUBLIC",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@felix_expat_finance",
        avatarUrl: "https://i.pravatar.cc/300?u=felix.huber.cm",
      },
      {
        userId: "community-user-034",
        displayName: "Amelia Fraser",
        bio: "Primary school teacher from Brisbane, now teaching at an international school in Da Nang. The beach after school every day was the pitch I couldn't argue with. Two years in and no regrets.",
        city: "Da Nang",
        country: "Australia",
        languages: ["English"],
        interests: ["education", "beach volleyball", "cooking"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: false,
        avatarUrl: "https://i.pravatar.cc/300?u=amelia.fraser.danang",
      },
      {
        userId: "community-user-035",
        displayName: "Viktor Petrov",
        bio: "E-commerce entrepreneur from Moscow. Run a brand that sells outdoor gear across EU and North America, entirely managed from Bangkok. Logistics from here is easier than people think.",
        city: "Bangkok",
        country: "Russia",
        languages: ["Russian", "English"],
        interests: ["e-commerce", "supply chain", "Muay Thai"],
        contactVisibility: "MEMBERS",
        showEmail: false, showPhone: false, showTelegram: true,
        telegram: "@viktor_ecom_bkk",
        avatarUrl: "https://i.pravatar.cc/300?u=viktor.petrov.bkk",
      },
    ],
  });

  console.log("✅ Demo seed complete — no existing data was deleted.");
  console.log("   Added: 3 base profiles, 35 community profiles, 8 housing listings, 8 jobs, 5 events");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
