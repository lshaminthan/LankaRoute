"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getCurrentUser, logout as logoutRequest, type AuthUser } from "@/services/api";

type AuthContextValue = {
  user: AuthUser | null;
  isLoading: boolean;
  setUser: (user: AuthUser | null) => void;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // The access token lives in an httpOnly cookie on the API origin, so the only
  // way to know who is signed in is to ask the API.
  useEffect(() => {
    let active = true;

    getCurrentUser()
      .then((result) => {
        if (!active) return;
        setUser(result.success ? result.data?.user ?? null : null);
      })
      .catch(() => {
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const signOut = useCallback(async () => {
    try {
      await logoutRequest();
    } catch (error) {
      console.error("Sign out request failed", error);
    } finally {
      setUser(null);
    }
  }, []);

  const value = useMemo(() => ({ user, isLoading, setUser, signOut }), [user, isLoading, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider.");
  }

  return context;
}
