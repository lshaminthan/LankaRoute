import type { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-light-grey px-3 py-1 text-xs font-medium text-gray-600 ${className}`}
    >
      {children}
    </span>
  );
}
