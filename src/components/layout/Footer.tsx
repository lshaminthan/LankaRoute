import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { districts } from "@/data/districts";

export function Footer() {
  return (
    <footer className="glass text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-blue">
                <Icon name="compass" className="h-5 w-5" />
              </span>
              LankaRoute
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              An AI-powered Sri Lanka trip planner built by{" "}
              <span className="font-medium text-white">Aura Code Labs</span>. Real routes, real
              transport times, real places.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="LankaRoute on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-blue"
              >
                <Icon name="facebook" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LankaRoute on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-blue"
              >
                <Icon name="instagram" className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LankaRoute on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary-blue"
              >
                <Icon name="youtube" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Aura Code Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#support" className="hover:text-white">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Explore Districts
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-white/80 sm:grid-cols-3">
              {districts.map((district) => (
                <Link key={district.id} href={`/districts/${district.id}`} className="hover:text-white">
                  {district.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p className="text-sm">&copy; {new Date().getFullYear()} LankaRoute by Aura Code Labs. All rights reserved.</p>
          <p className="text-sm">Made for travelers exploring Sri Lanka, island-wide.</p>
        </div>
      </Container>
    </footer>
  );
}
