import { Hero } from "@/components/Hero";
import { QuickNav } from "@/components/home/QuickNav";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PopularGuides } from "@/components/home/PopularGuides";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickNav />
      <DestinationsSection />
      <PopularGuides />
    </>
  );
}
