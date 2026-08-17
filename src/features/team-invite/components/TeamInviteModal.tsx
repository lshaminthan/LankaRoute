"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

const MAX_MEMBERS = 10;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function TeamInviteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [members, setMembers] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  // `open` only ever becomes true from a user click, which can't happen
  // until after hydration, so `document` is always available here.
  if (!open) return null;

  function handleAdd(event: React.FormEvent) {
    event.preventDefault();
    const email = emailInput.trim().toLowerCase();

    if (!EMAIL_PATTERN.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (members.includes(email)) {
      setError("That email is already added.");
      return;
    }
    if (members.length >= MAX_MEMBERS) {
      setError(`You can add up to ${MAX_MEMBERS} members.`);
      return;
    }

    setMembers((prev) => [...prev, email]);
    setEmailInput("");
    setError(null);
  }

  function handleRemove(email: string) {
    setMembers((prev) => prev.filter((member) => member !== email));
    setError(null);
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-md translate-x-[200px] -translate-y-[250px] overflow-y-auto rounded-[2rem] bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900">Add your travel group</h2>
            <p className="mt-1 text-sm text-gray-500">
              Invite up to {MAX_MEMBERS} people by email — they&apos;ll get access once sharing is live.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-light-grey hover:text-gray-600"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleAdd} className="mt-6 flex items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
          <Icon name="mail" className="h-4 w-4 shrink-0 text-gray-400" />
          <input
            type="email"
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
            placeholder="friend@example.com"
            disabled={members.length >= MAX_MEMBERS}
            className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={members.length >= MAX_MEMBERS}
            className="shrink-0 text-sm font-semibold text-primary-blue hover:underline disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:no-underline"
          >
            Add
          </button>
        </form>
        {error && <p className="mt-2 text-xs text-accent-coral">{error}</p>}

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-gray-400">Admin</p>
        <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-light-grey px-4 py-2.5">
          <span className="flex items-center gap-2.5 text-sm text-gray-800">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-coral/10 text-accent-coral">
              <Icon name="user" className="h-3.5 w-3.5" />
            </span>
            You
          </span>
          <span className="rounded-full bg-accent-coral/10 px-2.5 py-0.5 text-xs font-medium text-accent-coral">
            Admin
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            Members
          </p>
          <p className="text-xs font-medium text-gray-400">
            {members.length}/{MAX_MEMBERS}
          </p>
        </div>

        {members.length === 0 ? (
          <p className="mt-3 text-sm text-gray-400">No members added yet.</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {members.map((email) => (
              <li
                key={email}
                className="flex items-center justify-between gap-3 rounded-xl bg-light-grey px-4 py-2.5"
              >
                <span className="flex items-center gap-2.5 truncate text-sm text-gray-800">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                    <Icon name="user" className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate">{email}</span>
                </span>
                <button
                  type="button"
                  onClick={() => handleRemove(email)}
                  aria-label={`Remove ${email}`}
                  className="shrink-0 text-gray-400 hover:text-accent-coral"
                >
                  <Icon name="close" className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        <Button variant="primary" size="md" className="mt-6 w-full" onClick={onClose}>
          Done
        </Button>
      </div>
    </div>,
    document.body,
  );
}
