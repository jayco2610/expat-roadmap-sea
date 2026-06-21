import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PopularGuides } from "@/components/home/PopularGuides";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { PeopleSection } from "@/components/home/PeopleSection";

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
        <PeopleSection />
      </Suspense>
    </>
  );
}
