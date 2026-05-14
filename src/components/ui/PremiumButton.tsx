"use client";


import { cn } from "@/lib/utils";
import Link from "next/link";
import { showComingSoon } from "./ComingSoonModal";

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
      "bg-accent text-background hover:bg-foreground hover:text-background border border-accent/20 shadow-[0_4px_20px_rgba(229,208,140,0.15)]",
    secondary:
      "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10",
    outline:
      "border border-accent/30 text-accent hover:text-foreground hover:bg-accent/10 hover:border-accent/60",
    ghost: "text-muted hover:text-foreground hover:bg-foreground/5",
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

  if (href && href !== "#") {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    } else if (!href || href === "#") {
      showComingSoon();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};
