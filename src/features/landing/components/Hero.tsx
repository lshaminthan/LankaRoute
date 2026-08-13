import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="hero-bg flex min-h-[60vh] items-center justify-center text-center px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
          Plan Your Dream Trip in Minutes
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">
          AI-powered itineraries, transport schedules, and hotel bookings tailored for Sri Lanka.
        </p>
        <Link
          href="/#how-it-works"
          className="inline-block bg-white text-primary-blue font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          How It Works
        </Link>
      </div>
    </section>
  );
}
