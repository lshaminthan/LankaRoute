import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section className="hero-bg py-16 text-center sm:py-20">
      <Container>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Your Sri Lanka route, timed and ready to go
        </h2>
        <Link
          href="/plan"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary-blue shadow-lg transition-colors hover:bg-gray-100"
        >
          Plan a trip
        </Link>
      </Container>
    </section>
  );
}
