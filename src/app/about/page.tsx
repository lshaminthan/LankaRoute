import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About LankaRoute & Aura Code Labs",
  description:
    "LankaRoute is built by Aura Code Labs — Sri Lankan developers building an AI-powered trip planner focused entirely on Sri Lanka.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About LankaRoute</h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            LankaRoute is an AI-powered trip planner built for one country only: Sri Lanka. We
            believe travelers exploring the island deserve a planning tool that understands local
            transport, real districts and real places — not a generic template stretched over a
            map it doesn&apos;t really know.
          </p>
          <p>
            LankaRoute is built and maintained by{" "}
            <span className="font-semibold text-gray-900">Aura Code Labs</span>, a small team of
            Sri Lankan developers. We&apos;re building the routes, transport data and hotel
            suggestions we&apos;d want to use ourselves when planning a trip around the island.
          </p>
          <p>
            This is an early version of LankaRoute. The interface you&apos;re using is built on
            realistic sample data while we connect it to live transport schedules, hotel
            availability and a production AI planning engine.
          </p>
        </div>
      </Container>
    </section>
  );
}
