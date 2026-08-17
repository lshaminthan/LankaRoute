"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { TeamInviteModal } from "@/features/team-invite/components/TeamInviteModal";

// New design system utilities are defined in globals.css

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass text-white shadow-sm backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/">
          <Image src="/images/logo1.svg" alt="LankaRoute" width={860} height={200} className="h-9 w-auto" priority />
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

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <button
            type="button"
            onClick={() => setTeamModalOpen(true)}
            aria-label="Add team members"
            title="Add team members"
            className="flex h-9 w-9 items-center justify-center rounded-full text-primary-blue transition-colors hover:bg-primary-blue/10"
          >
            <Icon name="users" className="h-5 w-5" />
          </button>
          <Link
            href="/login"
            className="text-sm font-medium text-primary-blue/85 transition-colors hover:text-primary-blue"
          >
            Log In
          </Link>
          <Link
            href="/plan"
            className="inline-flex items-center justify-center rounded-full bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-deep-blue"
          >
            Plan a trip
          </Link>
        </div>

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
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTeamModalOpen(true);
              }}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-primary-blue/90 hover:bg-white/10"
            >
              <Icon name="users" className="h-4 w-4" />
              Add team members
            </button>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-blue/90 hover:bg-white/10"
            >
              Log In
            </Link>
            <Link
              href="/plan"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-deep-blue"
            >
              Plan a trip
            </Link>
          </Container>
        </div>
      )}

      <TeamInviteModal open={teamModalOpen} onClose={() => setTeamModalOpen(false)} />
    </header>
  );
}
