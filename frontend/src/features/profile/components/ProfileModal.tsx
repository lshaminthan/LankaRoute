"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { deleteAccount, logout, updateAccount } from "@/services/api";

export function ProfileModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleStartEditing() {
    setError("");
    setCurrentPassword("");
    setNewPassword("");
    setIsEditing(true);
  }

  async function handleSaveProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSaving(true);

    try {
      const result = await updateAccount(name, email, currentPassword, newPassword);
      if (!result.success) {
        setError(result.error?.message || result.message || "Failed to update account.");
        return;
      }

      setIsEditing(false);
      setCurrentPassword("");
      setNewPassword("");
    } catch {
      setError("Unable to update your account. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

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

  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.error("Sign out failed", error);
    } finally {
      onClose();
      router.push("/login");
    }
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
          <h2 className="font-display text-xl font-bold text-gray-900">{name || "Your Name"}</h2>
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
            <span>{email || "you@example.com"}</span>
          </div>
        </div>

        {isEditing && (
          <form onSubmit={handleSaveProfile} className="mt-6 space-y-3 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Name
              <input value={name} onChange={(event) => setName(event.target.value)} required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Email
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              Current password
              <input type="password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-gray-700">
              New password
              <input type="password" minLength={8} value={newPassword} onChange={(event) => setNewPassword(event.target.value)} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2" />
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <div className="flex gap-2">
              <Button type="submit" size="md" className="flex-1" disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
              <Button type="button" variant="secondary" size="md" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}

        {!isEditing && <div className="mt-6 flex flex-col gap-2">
          <div className="flex gap-2">
            <Button type="button" variant="primary" size="md" className="flex-1" onClick={handleStartEditing}>
              Edit Profile
            </Button>
            <Button type="button" variant="secondary" size="md" className="flex-1" onClick={handleSignOut}>
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
        </div>}
      </div>
    </div>,
    document.body,
  );
}
