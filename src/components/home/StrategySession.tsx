"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { ArrowRight } from "lucide-react";

export const StrategySession = () => {
  return (
    <section className="py-24 px-6 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-accent opacity-30 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="badge mb-6 inline-flex">Limited onboarding slots available</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Book a <span className="text-gradient-accent">1:1 Strategy Session</span>
          </h2>
          <p className="text-muted text-base md:text-lg mb-2 leading-relaxed">
            One-time setup guidance to help you launch faster.{" "}
            <span className="line-through text-muted">₹299</span>{" "}
            <span className="text-accent font-semibold">Free</span>
          </p>
          <div className="mt-8">
            <PremiumButton size="lg" href="#">
              Book Strategy Call <ArrowRight size={18} />
            </PremiumButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
