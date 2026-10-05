import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-light" | "text";

const base =
  "group inline-flex items-center justify-center gap-3 whitespace-nowrap font-sans text-[0.95rem] font-medium tracking-[0.01em] transition-[background-color,color,border-color] duration-(--duration-base) ease-editorial";

const variants: Record<Variant, string> = {
  primary: "min-h-12 bg-bordo px-7 text-paper hover:bg-bordo-deep",
  outline: "min-h-12 border border-ink px-7 text-ink hover:bg-ink hover:text-paper",
  "outline-light": "min-h-12 border border-paper/60 px-7 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  text: "min-h-11 border-b border-current pb-1 text-ink hover:text-bordo",
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 12"
      width="20"
      height="12"
      className={`shrink-0 transition-transform duration-(--duration-base) ease-editorial group-hover:translate-x-1 ${className}`}
    >
      <path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", arrow = false, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {arrow && <ArrowIcon />}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; arrow?: boolean };

export function Button({ variant = "primary", arrow = false, className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${className}`} {...props}>
      <span>{children}</span>
      {arrow && <ArrowIcon />}
    </button>
  );
}
