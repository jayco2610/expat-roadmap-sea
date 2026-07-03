import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { AskBotSection } from "@/components/home/AskBotSection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PopularGuides } from "@/components/home/PopularGuides";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { PeopleSection } from "@/components/home/PeopleSection";
import { Newsletter } from "@/components/home/Newsletter";

// Pre-render the homepage as static HTML and refresh it in the background
// every 5 minutes. First visit is instant from the CDN — no cold start,
// no blank screen — while events/people/jobs stay reasonably fresh.
export const revalidate = 300;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <StatsStrip />
      </Suspense>
      <DestinationsSection />
      <PopularGuides />
      <AskBotSection />
      <Suspense fallback={null}>
        <UpcomingEvents />
      </Suspense>
      <Suspense fallback={null}>
        <OpportunitiesSection />
      </Suspense>
      <Suspense fallback={null}>
        <PeopleSection />
      </Suspense>
      <Newsletter />
    </>
  );
}
