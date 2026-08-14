import { Hero } from "@/features/landing/components/Hero";
import { HowItWorks } from "@/features/landing/components/HowItWorks";
import { SampleTrips } from "@/features/landing/components/SampleTrips";
import { ProductHighlights } from "@/features/landing/components/ProductHighlights";
import { Team } from "@/features/landing/components/Team";
import { FAQ } from "@/features/landing/components/FAQ";
import { FinalCTA } from "@/features/landing/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SampleTrips />
      <ProductHighlights />
      <Team />
      <FAQ />
      <FinalCTA />
    </>
  );
}
