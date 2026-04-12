"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SnapItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

interface SnapScrollCarouselProps {
  items: SnapItem[];
  className?: string;
}

export const SnapScrollCarousel = ({ items, className }: SnapScrollCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth === clientWidth) {
      setScrollProgress(0);
      return;
    }
    const progress = scrollLeft / (scrollWidth - clientWidth);
    setScrollProgress(progress);
  };

  useEffect(() => {
    requestAnimationFrame(() => handleScroll());
  }, []);

  return (
    <div className={cn("w-full py-8", className)}>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-4 md:px-12 w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, idx) => (
          <div 
            key={item.id}
            className="snap-center shrink-0 w-[85vw] md:w-[400px] group"
          >
            <div className="h-[300px] glass-card border-white/5 group-hover:border-accent/40 transition-colors duration-500 p-8 flex flex-col justify-between relative overflow-hidden bg-card">
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-glow-accent opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />
              
              <div>
                <div className="text-4xl font-light text-white/20 mb-6 font-mono">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.metric && (
                <div className="border-t border-white/5 pt-4 mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-accent">{item.metric}</span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{item.metricLabel}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        {/* Dummy spacer to allow last item to snap to left if needed, or just standard padding */}
        <div className="shrink-0 w-4 md:w-12 snap-center" />
      </div>

      {/* Custom Progress Bar */}
      <div className="max-w-md mx-auto mt-4 px-12 md:px-0">
        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-accent to-white/40 rounded-full"
            style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
            initial={false}
          />
        </div>
      </div>
    </div>
  );
};
