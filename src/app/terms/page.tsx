import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for using the LankaRoute Sri Lanka trip planning platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Terms of Service</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            LankaRoute is currently in early access. Itineraries, transport times and hotel
            suggestions shown in this version are illustrative sample data used to demonstrate
            the planning experience, and do not yet reflect live bookings or real-time schedules.
          </p>
          <p>
            By using this preview of LankaRoute, you agree that no bookings, payments or
            reservations are made through the platform at this stage. Full terms will be
            published when live booking and AI itinerary generation are launched.
          </p>
          <p>For questions about these terms, contact hello@lankaroute.com.</p>
        </div>
      </Container>
    </section>
  );
}
