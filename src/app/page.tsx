import { TripPlanner } from "@/components/planner/TripPlanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesStrip } from "@/components/sections/FeaturesStrip";
import { PopularDistricts } from "@/components/sections/PopularDistricts";
import { SupportSection } from "@/components/sections/SupportSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <TripPlanner />
      <HowItWorks />
      <FeaturesStrip />
      <PopularDistricts />
      <SupportSection />
      <TestimonialsSection />
    </>
  );
}
