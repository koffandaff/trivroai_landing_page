"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CoverflowItem {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
}

interface CoverflowCarouselProps {
  items: CoverflowItem[];
  className?: string;
}

export const CoverflowCarousel = ({ items, className }: CoverflowCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className={cn("relative w-full overflow-hidden py-12 perspective-1000", className)}>
      <div className="flex items-center justify-center min-h-[400px] relative">
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const diff = index - activeIndex;

            // Visual configuration based on distance from center
            const isVisible = Math.abs(diff) <= 2;
            if (!isVisible) return null;

            const xOff = diff * 150; 
            const scale = 1 - Math.abs(diff) * 0.15;
            const rotateY = diff * -15; 
            const opacity = 1 - Math.abs(diff) * 0.3;
            const zIndex = items.length - Math.abs(diff);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: xOff,
                  scale,
                  rotateY,
                  opacity,
                  zIndex,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1], // Custom easing for premium feel
                }}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "absolute w-[300px] h-[400px] rounded-2xl cursor-pointer preserve-3d shadow-2xl glass-card",
                  isActive ? "border-accent border-[1.5px] bg-card" : "border-foreground/5 bg-card/60"
                )}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Simulated Image / Content Area */}
                <div className="absolute inset-0 m-4 rounded-xl overflow-hidden bg-black/40 border border-foreground/5 flex flex-col justify-end p-6">
                    {item.image && (
                      <div className="absolute inset-0 z-0">
                        <Image src={item.image} alt={item.title || "Carousel item image"} fill unoptimized className="object-cover w-full h-full" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      </div>
                    )}
                  {/* Subtle top glow */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none z-0" />
                  
                  <div className="relative z-10">
                    <motion.h3 
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                      className="text-xl font-bold text-foreground mb-2"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      animate={{ opacity: isActive ? 1 : 0 }}
                      className="text-sm text-foreground-muted line-clamp-3"
                    >
                      {item.subtitle}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="p-3 rounded-full bg-card border border-foreground/10 text-foreground hover:bg-accent hover:text-black hover:border-accent disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-muted text-sm font-medium tracking-widest">
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button
          onClick={handleNext}
          disabled={activeIndex === items.length - 1}
          className="p-3 rounded-full bg-card border border-foreground/10 text-foreground hover:bg-accent hover:text-black hover:border-accent disabled:opacity-30 disabled:pointer-events-none transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
