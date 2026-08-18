"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui/Icon";

const MAX_MEMBERS = 4;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function TeamInviteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [members, setMembers] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

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
    setShowAddForm(false);
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
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-gray-900">Team Members</h2>
            <p className="mt-1 text-sm text-gray-500">
              Invite up to {MAX_MEMBERS} people by email to join this trip.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm((prev) => !prev)}
              disabled={members.length >= MAX_MEMBERS}
              className="flex items-center gap-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <Icon name="userPlus" className="h-4 w-4" />
              Invite Member
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-light-grey hover:text-gray-600"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>
        </div>

        {showAddForm && (
          <form onSubmit={handleAdd} className="mt-5 flex items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
            <Icon name="mail" className="h-4 w-4 shrink-0 text-gray-400" />
            <input
              type="email"
              autoFocus
              value={emailInput}
              onChange={(event) => setEmailInput(event.target.value)}
              placeholder="friend@example.com"
              className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 text-sm font-semibold text-primary-blue hover:underline"
            >
              Add
            </button>
          </form>
        )}
        {error && <p className="mt-2 text-xs text-accent-coral">{error}</p>}

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-coral/10 text-accent-coral">
                <Icon name="user" className="h-5 w-5" />
              </span>
              <p className="font-semibold text-gray-900">You</p>
            </div>
            <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
              <Icon name="shield" className="h-3 w-3" />
              Admin
            </span>
          </div>

          {members.map((email) => (
            <div key={email} className="relative rounded-2xl border border-gray-200 p-5">
              <button
                type="button"
                onClick={() => handleRemove(email)}
                aria-label={`Remove ${email}`}
                className="absolute right-4 top-4 text-gray-300 hover:text-accent-coral"
              >
                <Icon name="close" className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 pr-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
                  <Icon name="user" className="h-5 w-5" />
                </span>
                <p className="truncate font-semibold text-gray-900">Invited</p>
              </div>
              <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary-blue/10 px-2.5 py-1 text-xs font-semibold text-primary-blue">
                <Icon name="shield" className="h-3 w-3" />
                Member
              </span>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
                <Icon name="mail" className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{email}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
