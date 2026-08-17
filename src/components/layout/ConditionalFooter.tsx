"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";

const HIDDEN_ON = ["/chat"];

export function ConditionalFooter() {
  const pathname = usePathname();
  if (HIDDEN_ON.includes(pathname)) return null;
  return <Footer />;
}
