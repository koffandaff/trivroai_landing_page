"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "dark";
  hover?: boolean;
}

export const GlassCard = ({
  children,
  className,
  variant = "default",
  hover = true,
}: GlassCardProps) => {
  const variants = {
    default: "bg-card border border-card-border hover:border-accent/30",
    accent: "bg-card border border-accent/20 hover:border-accent/40",
    dark: "bg-background border border-card-border hover:border-accent/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-[2rem] transition-all duration-500",
        variants[variant],
        !hover && "hover:border-foreground/[0.04] hover:bg-background-secondary",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
