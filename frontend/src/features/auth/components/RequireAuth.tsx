"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/features/auth/components/AuthProvider";
import { loginPathFor } from "@/features/auth/utils/authRedirect";

// Wraps a page that needs an account. The session cookie is httpOnly on the API
// origin, so the Next server cannot read it — the check has to happen here,
// once AuthProvider has finished asking the API who is signed in.
export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.toString();
  const target = query ? `${pathname}?${query}` : pathname;

  useEffect(() => {
    // `replace`, not `push`, so going Back from the login page doesn't land on
    // the guarded page and bounce through the redirect again.
    if (!isLoading && !user) {
      router.replace(loginPathFor(target));
    }
  }, [isLoading, user, target, router]);

  if (isLoading || !user) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-light-grey">
        <span
          className="h-8 w-8 animate-spin rounded-full border-2 border-primary-blue/25 border-t-primary-blue"
          aria-hidden
        />
        <span className="sr-only">Checking your session…</span>
      </div>
    );
  }

  return <>{children}</>;
}
