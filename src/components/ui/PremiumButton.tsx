"use client";


import { cn } from "@/lib/utils";
import Link from "next/link";

interface PremiumButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

export const PremiumButton = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  href,
}: PremiumButtonProps) => {
  const variants = {
    primary:
      "bg-accent text-black hover:bg-white border border-accent/20 shadow-[0_4px_20px_rgba(229,208,140,0.15)]",
    secondary:
      "bg-white/5 text-white hover:bg-white/10 border border-white/10",
    outline:
      "border border-accent/30 text-accent hover:text-white hover:bg-accent/10 hover:border-accent/60",
    ghost: "text-white/60 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-sm font-medium",
  };

  const buttonClasses = cn(
    "rounded-full transition-all duration-300 font-medium inline-flex items-center justify-center gap-2 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};
