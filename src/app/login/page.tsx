"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const result = await login(email, password);
    setIsSubmitting(false);

    if (!result.success) {
      setError(result.error?.message || result.message);
      return;
    }

    router.push("/welcome");
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center bg-light-grey px-4 py-16">
      <div className="mx-auto w-full max-w-md rounded-[2rem] bg-white p-8 shadow-xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-gray-500">Log in to keep planning your Sri Lanka trip.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </label>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-primary-blue hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
