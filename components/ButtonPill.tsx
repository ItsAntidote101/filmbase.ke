"use client";

import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

type Variant = "primary" | "primary-white" | "secondary-dark" | "secondary-light";
type Size = "md" | "sm";

interface ButtonPillProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  "primary":         "btn-pill-primary",
  "primary-white":   "btn-pill-white",
  "secondary-dark":  "btn-pill-secondary-dark",
  "secondary-light": "btn-pill-secondary-light",
};

export default function ButtonPill({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  external = false,
  className = "",
}: ButtonPillProps) {
  const cls = [
    "btn-pill",
    variantClass[variant],
    size === "sm" ? "btn-pill-sm" : "",
    className,
  ].filter(Boolean).join(" ");

  const iconSize = size === "sm" ? 14 : 15;

  const inner = (
    <>
      <span>{children}</span>
      <span className="btn-circle">
        <span className="btn-arrow">
          {loading ? (
            <Loader2 size={iconSize} className="animate-spin" />
          ) : (
            <ArrowRight size={iconSize} />
          )}
        </span>
      </span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {inner}
        </a>
      );
    }
    return <Link href={href} className={cls}>{inner}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={cls}>
      {inner}
    </button>
  );
}
