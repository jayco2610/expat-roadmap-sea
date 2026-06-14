# Expat Roadmap SEA

A full-stack community platform for expats and digital nomads in Southeast Asia — built as a portfolio project by a PM using AI-assisted development.

**Live demo:** [expat-roadmap-sea.vercel.app](https://expat-roadmap-sea.vercel.app)

---

## What it does

| Section | Features |
|---|---|
| **Community** | Expat profiles with privacy controls (contacts visible to everyone / members only / nobody) |
| **Events** | Create meetups, RSVP with Going / Maybe status |
| **Housing** | Listings board for rooms, apartments, co-living |
| **Jobs** | Remote roles and local services with Job / Service filter |
| **Map** | Interactive Leaflet map of accommodations in HCMC and Ubud |
| **Auth** | Email sign-up/in via Supabase Auth, profile settings |

## Stack

- **Next.js 15** — App Router, React Server Components, Server Actions
- **Tailwind CSS 4** — dark/light theme (Polestar-inspired dark, Apple Wallet-inspired light)
- **Prisma ORM** + **Supabase** — PostgreSQL + Auth
- **React Leaflet** — interactive map with CartoCSS tiles
- **Vercel** — production deployment with auto-deploy from GitHub

## Why this exists

I'm a product manager exploring how far AI-assisted development can go for someone without a traditional engineering background. This project was built end-to-end using Claude as the primary development tool — from architecture decisions to component-level implementation.

The goal was to ship something real: a working product with auth, a database, mobile-responsive UI, and production deployment. Not a tutorial clone — a platform with a defined use case, real routing, and actual data persistence.

## Setup

### Prerequisites

- Node.js 18.18+
- [Supabase](https://supabase.com) project (PostgreSQL + Auth)

### Install

```bash
git clone https://github.com/jayco2610/expat-roadmap-sea.git
cd expat-roadmap-sea
npm install
```

### Environment variables

Create `.env` (for Prisma CLI):

```
DATABASE_URL="postgresql://..."   # Transaction pooler, port 6543, add ?pgbouncer=true&connection_limit=1
DIRECT_URL="postgresql://..."     # Direct connection, port 5432
```

Create `.env.local` (for Next.js):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Database

```bash
npm run db:push    # push schema to Supabase
npm run db:seed    # load demo data (3 profiles, 2 events, 2 listings, 3 jobs)
```

### Run

```bash
npm run dev        # http://localhost:3000
```

## Routes

| Route | Description |
|---|---|
| `/` | Landing page |
| `/map` | Interactive accommodation map |
| `/community`, `/community/[id]` | Profiles and public profile view |
| `/events`, `/events/new`, `/events/[id]` | Events list, create, detail + RSVP |
| `/housing`, `/housing/new` | Housing board and post listing |
| `/jobs`, `/jobs/new` | Jobs and services board |
| `/settings/profile` | Edit profile and contact privacy |
| `/login` | Sign in / sign up |

## Author

**Jasur Akhmadaliev** — Product Manager

[Telegram: @pmvision_ai](https://t.me/pmvision_ai)
