"use client";

import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";

type Variant = "dark" | "light";
type Size = "md" | "sm";

interface ButtonFilledProps {
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

export default function ButtonFilled({
  children,
  href,
  onClick,
  variant = "dark",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  external = false,
  className = "",
}: ButtonFilledProps) {
  const cls = [
    "btn-filled",
    variant === "light" ? "btn-filled-light" : "",
    size === "sm" ? "btn-filled-sm" : "",
    className,
  ].filter(Boolean).join(" ");

  const iconSize = size === "sm" ? 12 : 14;

  const inner = (
    <>
      <span className="btn-filled-circle">
        {loading ? (
          <Loader2 size={iconSize} className="animate-spin" />
        ) : (
          <ArrowUpRight size={iconSize} />
        )}
      </span>
      <span>{children}</span>
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
