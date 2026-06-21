import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEMO_USERS = [
  "00000000-0000-4000-8000-000000000001",
  "00000000-0000-4000-8000-000000000002",
  "00000000-0000-4000-8000-000000000003",
];

async function main() {
  await prisma.eventRsvp.deleteMany();
  await prisma.event.deleteMany();
  await prisma.housingListing.deleteMany();
  await prisma.jobListing.deleteMany();
  await prisma.profile.deleteMany();

  const [mia, arun, lena] = await Promise.all([
    prisma.profile.create({
      data: {
        userId: DEMO_USERS[0],
        displayName: "Mia Chen",
        bio: "Product designer from Taipei. 2 years in HCMC, love coffee shops and street food tours.",
        city: "Ho Chi Minh City",
        country: "Vietnam",
        languages: ["English", "Mandarin", "Vietnamese"],
        interests: ["design", "coffee", "motorbikes"],
        email: "mia@example.com",
        telegram: "@miachen",
        contactVisibility: "MEMBERS",
        showEmail: false,
        showPhone: false,
        showTelegram: true,
      },
    }),
    prisma.profile.create({
      data: {
        userId: DEMO_USERS[1],
        displayName: "Arun Patel",
        bio: "Full-stack dev building from Ubud. Yoga at sunrise, deploy at sunset.",
        city: "Ubud",
        country: "Indonesia",
        languages: ["English", "Hindi"],
        interests: ["remote work", "yoga", "surf"],
        email: "arun@example.com",
        phone: "+628123456789",
        contactVisibility: "PUBLIC",
        showEmail: true,
        showPhone: true,
        showTelegram: true,
        telegram: "@arunubud",
      },
    }),
    prisma.profile.create({
      data: {
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

  const meetup = await prisma.event.create({
    data: {
      title: "District 1 Nomad Coffee",
      description:
        "Casual Friday coworking & coffee. Bring your laptop, meet other remote workers, swap tips on visas and apartments.",
      city: "Ho Chi Minh City",
      location: "The Workshop Coffee, 27 Ngô Đức Kế",
      startsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      capacity: 20,
      authorId: mia.id,
    },
  });

  const yoga = await prisma.event.create({
    data: {
      title: "Sunrise Yoga & Breakfast",
      description: "Gentle vinyasa followed by local breakfast. All levels welcome.",
      city: "Ubud",
      location: "Tegallalang Rice Terrace viewpoint",
      startsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      authorId: arun.id,
    },
  });

  await prisma.eventRsvp.createMany({
    data: [
      { eventId: meetup.id, profileId: arun.id, status: "GOING" },
      { eventId: meetup.id, profileId: lena.id, status: "MAYBE" },
      { eventId: yoga.id, profileId: mia.id, status: "GOING" },
    ],
  });

  await prisma.housingListing.createMany({
    data: [
      {
        title: "Bright studio near Ben Thanh",
        description: `Fully furnished 35m² studio in the heart of District 1, a 5-minute walk to Ben Thanh Market.

What's included:
- Fast fiber Wi-Fi (200 Mbps), perfect for video calls
- In-unit washing machine and full kitchenette
- Quiet, secure building with elevator and 24/7 reception
- Air conditioning in the main room
- Weekly cleaning available on request

Great for a remote worker who wants to be central. Cafes, coworking and street food all within walking distance. Minimum stay 1 month.`,
        city: "Ho Chi Minh City",
        address: "12 Nguyen Thi Nghia, District 1",
        priceMonth: 650,
        propertyType: "APARTMENT",
        authorId: mia.id,
      },
      {
        title: "Ubud jungle room with desk",
        description: `Private room in a shared villa surrounded by rice fields, 10 minutes from Ubud center.

The space:
- Private ensuite bathroom
- Large desk and ergonomic chair set up for work
- Fiber internet throughout the villa
- Shared saltwater pool and open-air kitchen
- Monthly cleaning and pool service included

Live with two other nomads in a calm, green setting. Scooter recommended to get around. Available for stays of 1 month or longer.`,
        city: "Ubud",
        address: "Jl. Raya Tebakan, Mas",
        priceMonth: 480,
        propertyType: "ROOM",
        authorId: arun.id,
      },
      {
        title: "Beachside 1BR in An Thuong",
        description: `Modern one-bedroom apartment in Da Nang's An Thuong area, the nomad heart of the city. 3-minute walk to My Khe beach.

Highlights:
- 200 Mbps fiber, backup 4G router included
- Balcony with partial sea view
- Full kitchen, washer, smart TV
- Building gym and rooftop coworking lounge
- Surrounded by cafes, gyms and Western restaurants

Ideal long-stay base for remote workers. Motorbike parking included.`,
        city: "Da Nang",
        address: "15 An Thuong 4, Ngu Hanh Son",
        priceMonth: 700,
        propertyType: "APARTMENT",
        authorId: lena.id,
      },
      {
        title: "Canggu co-living loft",
        description: `Private loft inside a designed co-living house in Canggu, 7 minutes to Echo Beach.

What you get:
- Private room + bathroom in a 10-person community house
- Dedicated coworking floor with standing desks and fast fiber
- Pool, gym, and weekly community dinners
- All bills, cleaning and water included
- Scooter rental arranged on arrival

Built for nomads who want community and a ready-made routine. Min stay 1 month.`,
        city: "Canggu",
        address: "Jl. Pantai Batu Bolong, Canggu",
        priceMonth: 620,
        propertyType: "COLIVING",
        authorId: mia.id,
      },
      {
        title: "Quiet 2BR house in Chiang Mai",
        description: `Two-bedroom house with a small garden in Nimman, Chiang Mai's cafe district.

Details:
- Two bedrooms, perfect for a couple or to use one as an office
- 100+ Mbps fiber internet
- Full kitchen, washer, two bathrooms
- Covered parking for a car or two scooters
- Walking distance to Maya Mall, cafes and coworking

Excellent value for a long stay. Quiet soi, friendly neighbors. 3-month minimum preferred.`,
        city: "Chiang Mai",
        address: "Soi 7, Nimmanhaemin Rd",
        priceMonth: 540,
        propertyType: "HOUSE",
        authorId: arun.id,
      },
      {
        title: "KLCC high-rise studio",
        description: `Serviced studio on the 28th floor with a view of the Petronas Towers, central Kuala Lumpur.

Includes:
- 300 Mbps fiber, ideal for heavy uploads
- Infinity pool, gym and sky lounge in the building
- Walking distance to KLCC, Suria mall and the MRT
- Full kitchenette, washer/dryer, daily security
- Serviced cleaning twice a week

Big-city comfort at a fraction of Singapore prices. Great for a DE Rantau base. Flexible 1-month+ stays.`,
        city: "Kuala Lumpur",
        address: "Jalan Ampang, KLCC",
        priceMonth: 780,
        propertyType: "APARTMENT",
        authorId: lena.id,
      },
    ],
  });

  await prisma.jobListing.createMany({
    data: [
      {
        title: "Senior React Developer (remote)",
        description: `EU fintech startup hiring a senior frontend engineer to join a fully async team.

What you'll do:
- Build and own features in our Next.js / TypeScript web app
- Work closely with design and product on a 4-hour overlap with CET
- Improve performance and test coverage across the codebase

We're looking for:
- 4+ years with React and TypeScript in production
- Strong with Next.js, state management and modern tooling
- Comfortable in a remote, written-first culture

Fully remote from anywhere in Southeast Asia. Equipment budget and yearly team retreat included.`,
        city: "Ho Chi Minh City",
        kind: "JOB",
        compensation: "$4k–5k / month",
        remote: true,
        authorId: arun.id,
      },
      {
        title: "Visa & relocation consulting",
        description: `One-on-one help navigating visas and settling into Vietnam, from someone who has done it for 100+ expats.

I help with:
- Choosing the right visa (e-visa, TRC, work permit) for your situation
- Document prep and application review
- Apartment contracts and avoiding common rental traps
- Setting up banking, SIM, and local registration

Sessions over video call or in person in Ho Chi Minh City. First call includes a written action plan.`,
        city: "Ho Chi Minh City",
        kind: "SERVICE",
        compensation: "From $150 / session",
        remote: false,
        authorId: lena.id,
      },
      {
        title: "Content writer: travel & expat niche",
        description: `Part-time remote writer for a SEA relocation brand's blog and newsletter.

The work:
- 4–6 articles per month on visas, cost of living, and city guides
- Research-backed, practical, no fluff
- Light SEO (we provide keywords and briefs)

You:
- Native or fluent English
- Have lived in or traveled SEA (you get the audience)
- Can turn a brief into a clear, useful article

Flexible hours, paid per article, long-term collaboration preferred.`,
        city: "Ubud",
        kind: "JOB",
        compensation: "$40–60 / article",
        remote: true,
        authorId: mia.id,
      },
      {
        title: "Remote Product Designer (contract)",
        description: `B2B SaaS company looking for a product designer for a 3-month contract with extension potential.

Scope:
- Redesign core dashboard flows in Figma
- Build and maintain the design system
- Hand off cleanly to a React engineering team

Requirements:
- 3+ years product design, B2B experience a plus
- Strong Figma and design-system skills
- Async-friendly, 3h overlap with US East

Fully remote. Paid weekly.`,
        city: "Bali",
        kind: "JOB",
        compensation: "$3k–4k / month",
        remote: true,
        authorId: mia.id,
      },
      {
        title: "Motorbike delivery & airport pickup",
        description: `Reliable local service for new arrivals in Da Nang.

I offer:
- Airport pickup with English-speaking driver
- Help with first-week errands (SIM, groceries, scooter rental)
- Motorbike delivery and basic maintenance referrals

Honest pricing, on time, used by dozens of nomads landing in Da Nang. Message me your flight details.`,
        city: "Da Nang",
        kind: "SERVICE",
        compensation: "From $15 / trip",
        remote: false,
        authorId: arun.id,
      },
      {
        title: "Bookkeeping for freelancers & nomads",
        description: `Stay on top of your finances while living abroad.

I handle:
- Monthly bookkeeping and expense categorization
- Invoicing and income tracking across currencies
- Simple reports you can hand to a tax advisor

Experience with freelancers, remote employees, and small online businesses. Fully remote, monthly retainer.`,
        city: "Chiang Mai",
        kind: "SERVICE",
        compensation: "From $120 / month",
        remote: true,
        authorId: lena.id,
      },
    ],
  });

  // Security: lock down direct anon/public access. The app reads through
  // Prisma (postgres role, bypasses RLS); the public Supabase key gets nothing.
  for (const t of ["Profile", "HousingListing", "JobListing", "Event", "EventRsvp"]) {
    await prisma.$executeRawUnsafe(`ALTER TABLE "${t}" ENABLE ROW LEVEL SECURITY;`);
  }
  console.log("RLS enabled on all tables");

  console.log("Seed complete: profiles 3, events 2, housing 6, jobs 6");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
