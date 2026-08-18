import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="inline-block rounded-2xl bg-white px-4 py-3 shadow-sm">
              <Image src="/images/logo1.svg" alt="LankaRoute" width={860} height={200} className="h-9 w-auto" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-y-8 sm:divide-x sm:divide-white/10">
            <div className="pr-8 sm:pr-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Plan</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
                <Link href="/plan" className="hover:text-white">
                  Plan a Trip
                </Link>
                <Link href="/chat" className="hover:text-white">
                  AI Chat
                </Link>
              </div>
            </div>

            <div className="pr-8 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Explore</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
                <Link href="/#how-it-works" className="hover:text-white">
                  How It Works
                </Link>
                <Link href="/#faq" className="hover:text-white">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="sm:pl-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Company</p>
              <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
                <Link href="/#team" className="hover:text-white">
                  Team
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2026 LankaRoute. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
