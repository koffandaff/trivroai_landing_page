"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: string[];
  className?: string;
  speed?: number; // duration in seconds
}

export const InfiniteMarquee = ({
  items,
  className,
  speed = 20,
}: InfiniteMarqueeProps) => {
  // Duplicate items to ensure seamless scrolling
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative flex overflow-hidden w-full group py-8 mask-edges",
        className
      )}
      style={{
        // A subtle fade out on the left and right edges
        maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        className="flex shrink-0 gap-8 min-w-full"
        animate={{
          x: ["0%", "-33.333333%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center shrink-0 px-8 py-4 glass-card border-white/5 whitespace-nowrap bg-[#111A14]/80 backdrop-blur-md text-white/70 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm font-medium tracking-wider uppercase">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
