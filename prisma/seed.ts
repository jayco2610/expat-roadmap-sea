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
        description: "Fully furnished 35m² studio, fast Wi‑Fi, washer, quiet building. 5 min walk to market.",
        city: "Ho Chi Minh City",
        address: "12 Nguyen Thi Nghia, District 1",
        priceMonth: 650,
        propertyType: "APARTMENT",
        authorId: mia.id,
      },
      {
        title: "Ubud jungle room with desk",
        description: "Private room in shared villa, fiber internet, pool, monthly cleaning included.",
        city: "Ubud",
        address: "Jl. Raya Tebakan, Mas",
        priceMonth: 480,
        propertyType: "ROOM",
        authorId: arun.id,
      },
    ],
  });

  await prisma.jobListing.createMany({
    data: [
      {
        title: "Senior React Developer (remote)",
        description: "EU fintech startup, async team, 4h overlap with CET. TypeScript, Next.js, 4+ years.",
        city: "Ho Chi Minh City",
        kind: "JOB",
        compensation: "$4k–5k / month",
        remote: true,
        authorId: arun.id,
      },
      {
        title: "Visa & relocation consulting",
        description: "Help with DN visa, temporary residence, and apartment contracts in Vietnam.",
        city: "Ho Chi Minh City",
        kind: "SERVICE",
        compensation: "From $150 / session",
        remote: false,
        authorId: lena.id,
      },
      {
        title: "Content writer — travel & expat niche",
        description: "Part-time blog posts and newsletter for SEA relocation brand.",
        city: "Ubud",
        kind: "JOB",
        compensation: "$40–60 / article",
        remote: true,
        authorId: mia.id,
      },
    ],
  });

  console.log("Seed complete:", { profiles: 3, events: 2, housing: 2, jobs: 3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
