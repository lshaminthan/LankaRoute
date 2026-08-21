import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-blue text-white hover:bg-deep-blue disabled:bg-primary-blue/40 disabled:cursor-not-allowed",
  secondary:
    "bg-white text-primary-blue border border-primary-blue hover:bg-light-grey disabled:opacity-40 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-primary-blue hover:bg-light-grey disabled:opacity-40 disabled:cursor-not-allowed",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base sm:text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue ${variantClasses[variant]} ${sizeClasses[size]}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
