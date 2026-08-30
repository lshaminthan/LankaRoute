"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { GoogleSignInButton } from "@/components/ui/GoogleSignInButton";
import { useAuth } from "@/features/auth/components/AuthProvider";
import { signup, googleSignIn } from "@/services/api";

export default function SignupPage() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const result = await signup(name, email, password);
    setIsSubmitting(false);

    if (!result.success) {
      setError(result.error?.message || result.message);
      return;
    }

    setUser(result.data?.user ?? null);
    router.push("/plan");
  }

  async function handleGoogleCredential(idToken: string) {
    setError("");
    const result = await googleSignIn(idToken);

    if (!result.success) {
      setError(result.error?.message || result.message);
      return;
    }

    setUser(result.data?.user ?? null);
    router.push("/plan");
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center bg-light-grey px-4 py-16">
      <div className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Save trips, share with your group, and track live.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
              <Icon name="user" className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-light-grey px-4 py-3">
              <Icon name="lock" className="h-4 w-4 shrink-0 text-gray-400" />
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-light-grey" />
          <span className="text-xs font-medium text-gray-400">OR</span>
          <div className="h-px flex-1 bg-light-grey" />
        </div>

        <GoogleSignInButton onCredential={handleGoogleCredential} />

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary-blue hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
