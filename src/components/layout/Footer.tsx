import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <Container className="flex flex-col items-center gap-5 py-10 text-center">
        <Link href="/" className="rounded-2xl bg-white px-4 py-3 shadow-sm">
          <Image src="/images/logo1.svg" alt="LankaRoute" width={860} height={200} className="h-9 w-auto" />
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

        
      </Container>
    </footer>
  );
}
