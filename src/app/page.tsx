import { HowItWorks } from "@/features/landing/components/HowItWorks";
import { ProductHighlights } from "@/features/landing/components/ProductHighlights";
import { PopularDistricts } from "@/features/landing/components/PopularDistricts";
import { SupportSection } from "@/features/landing/components/SupportSection";
import { TestimonialsSection } from "@/features/landing/components/TestimonialsSection";
import { Hero } from "@/features/landing/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-12">
        <HowItWorks />
        <ProductHighlights />
        <PopularDistricts />
        <SupportSection />
        <TestimonialsSection />
      </div>
    </>
  );
}
