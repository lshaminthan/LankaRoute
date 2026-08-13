import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesStrip } from "@/components/sections/FeaturesStrip";
import { PopularDistricts } from "@/components/sections/PopularDistricts";
import { SupportSection } from "@/components/sections/SupportSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-12 space-y-12">
        <HowItWorks />
        <FeaturesStrip />
        <PopularDistricts />
        <SupportSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
