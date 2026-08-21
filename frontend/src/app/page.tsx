import { Hero } from "@/features/landing/components/Hero";
import { HowItWorks } from "@/features/landing/components/HowItWorks";
import { Testimonials } from "@/features/landing/components/Testimonials";
import { Team } from "@/features/landing/components/Team";
import { FAQ } from "@/features/landing/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Team />
      <Testimonials />
      <FAQ />
    </>
  );
}
