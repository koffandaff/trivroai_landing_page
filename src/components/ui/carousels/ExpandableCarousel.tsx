"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ExpandableItem {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string; // Tailwind gradient classes
}

interface ExpandableCarouselProps {
  items: ExpandableItem[];
  className?: string;
}

export const ExpandableCarousel = ({ items, className }: ExpandableCarouselProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to first item expanded

  return (
    <div className={cn("flex flex-col md:flex-row gap-4 w-full h-[500px]", className)}>
      {items.map((item, index) => {
        const isExpanded = hoveredIndex === index || (hoveredIndex === null && index === 0);

        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHoveredIndex(index)}
            layout
            initial={false}
            animate={{
              flexGrow: isExpanded ? 5 : 1,
              flexBasis: isExpanded ? "40%" : "15%",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className={cn(
              "relative rounded-2xl overflow-hidden cursor-pointer group glass-card transition-colors duration-500",
              isExpanded ? "border-accent/40" : "border-foreground/5 hover:border-foreground/10"
            )}
          >
            {/* Background Gradient */}
            <div className={cn("absolute inset-0 opacity-20 transition-opacity duration-500", item.gradient, isExpanded ? "opacity-40" : "group-hover:opacity-30")} />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              {/* Category Badge - Rotated on Desktop when closed */}
              <div className={cn(
                "absolute transition-all duration-500 ease-in-out origin-bottom-left",
                isExpanded 
                  ? "top-6 left-6 rotate-0" 
                  : "bottom-6 left-6 -rotate-90 md:-rotate-90 origin-left md:bottom-auto md:top-auto md:translate-y-[-50%] whitespace-nowrap"
              )}>
                <span className="badge text-[10px] bg-black/40 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Main Content */}
              <motion.div
                animate={{ opacity: isExpanded ? 1 : 0, y: isExpanded ? 0 : 20 }}
                transition={{ duration: 0.3, delay: isExpanded ? 0.1 : 0 }}
                className={cn("flex flex-col gap-3", !isExpanded && "pointer-events-none")}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-none">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground-muted line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-2 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
