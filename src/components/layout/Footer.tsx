import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <Container className="flex flex-col items-center gap-5 py-10 text-center">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-blue to-accent-coral text-white">
            <Icon name="route" className="h-5 w-5" />
          </span>
          LankaRoute
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
          <Link href="/#how-it-works" className="hover:text-white">
            How It Works
          </Link>
          <Link href="/#faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/#team" className="hover:text-white">
            Team
          </Link>
        </nav>

        <p className="text-xs text-white/60">Made by Aura Code Labs · Sri Lanka</p>
      </Container>
    </footer>
  );
}
