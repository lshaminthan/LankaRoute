"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

const navLinks = [
  { href: "/#planner", label: "Plan a Trip" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#popular-districts", label: "Districts" },
  { href: "/#support", label: "Support" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deep-blue text-white shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-blue">
            <Icon name="compass" className="h-5 w-5" />
          </span>
          LankaRoute
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#planner"
          className="hidden rounded-full bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-deep-blue lg:inline-flex"
        >
          Start Planning
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-deep-blue lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#planner"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white"
            >
              Start Planning
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
