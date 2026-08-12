import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the LankaRoute Sri Lanka trip planning platform.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
          <p>
            This preview version of LankaRoute runs entirely in your browser. Your interest,
            district and place selections are kept in local page state to generate a sample
            itinerary and are not sent to, or stored on, any server.
          </p>
          <p>
            A full privacy policy covering account data, bookings and support conversations will
            be published alongside the production release of LankaRoute.
          </p>
          <p>For privacy questions, contact hello@lankaroute.com.</p>
        </div>
      </Container>
    </section>
  );
}
