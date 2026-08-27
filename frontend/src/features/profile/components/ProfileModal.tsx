"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { deleteAccount } from "@/services/api";

export function ProfileModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();

  async function handleDeleteAccount() {
    const confirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmed) return;

    const result = await deleteAccount();

    if (!result.success) {
      window.alert(result.error?.message || result.message || "Failed to delete account.");
      return;
    }

    onClose();
    router.push("/login");
  }

  // `open` only ever becomes true from a user click, which can't happen
  // until after hydration, so `document` is always available here.
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-[2rem] bg-white p-6 text-center shadow-xl sm:p-8">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-light-grey hover:text-gray-600"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <span className="mx-auto -mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary-blue/10 text-3xl font-bold text-primary-blue">
          <Icon name="user" className="h-10 w-10" />
        </span>

        <div className="mt-4 flex items-center justify-center gap-2">
          <h2 className="font-display text-xl font-bold text-gray-900">Your Name</h2>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-blue/10 px-2.5 py-0.5 text-xs font-semibold text-primary-blue">
            <Icon name="check" className="h-3 w-3" />
            Verified
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">Sri Lanka Traveler</p>

        <p className="mt-4 text-sm text-gray-500">
          Add a short bio to tell your group a bit about yourself and how you like to travel.
        </p>

        <div className="mt-5 flex flex-col items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Icon name="mapPin" className="h-3.5 w-3.5" />
            <span>Add your location</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="mail" className="h-3.5 w-3.5" />
            <span>you@example.com</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <div className="flex gap-2">
            <Button variant="primary" size="md" className="flex-1">
              Edit Profile
            </Button>
            <Button variant="secondary" size="md" className="flex-1">
              Log Out
            </Button>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="md"
            className="w-full border border-red-200 text-red-600 hover:bg-red-50"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
