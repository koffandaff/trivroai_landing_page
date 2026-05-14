"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const ComingSoonModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-coming-soon", handleOpen);
    return () => window.removeEventListener("open-coming-soon", handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-foreground/10 z-[101] shadow-2xl p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-foreground tracking-tight">Coming Soon</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-muted hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <span className="text-2xl">✴</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Feature in Progress</h3>
              <p className="text-muted leading-relaxed max-w-sm">
                We&apos;re currently working hard on this feature. It will be available in an upcoming release. Stay tuned!
              </p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-foreground/5">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-full bg-foreground/5 border border-foreground/10 text-foreground text-sm font-bold uppercase tracking-widest hover:bg-foreground/10 transition-colors"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const showComingSoon = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-coming-soon"));
  }
};
