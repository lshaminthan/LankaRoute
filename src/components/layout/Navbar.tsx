"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

// New design system utilities are defined in globals.css

const navLinks = [

  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#popular-districts", label: "Districts" },
  { href: "/#support", label: "Support" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass text-white shadow-sm backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-primary-blue">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-blue">
            <Icon name="compass" className="h-5 w-5" />
          </span>
          LankaRoute
        </Link>

        <nav className="hidden items-center gap-8 lg:flex text-primary-blue">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-blue/85 transition-colors hover:text-primary-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary-blue lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>

      {open && (
        <div className="glass text-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-blue/90 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

          </Container>
        </div>
      )}
    </header>
  );
}
