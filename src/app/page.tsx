import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PopularGuides } from "@/components/home/PopularGuides";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { PeopleSection } from "@/components/home/PeopleSection";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DestinationsSection />
      <PopularGuides />
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
