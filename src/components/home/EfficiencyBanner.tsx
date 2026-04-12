"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export const EfficiencyBanner = () => {
  return (
    <section className="py-16 px-6 section-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-gradient-to-br from-card to-background border border-accent/10 p-10 md:p-14 text-center mb-12 shadow-lg"
        >
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
            Trivro AI is built to support{" "}
            <strong className="text-foreground">efficient marketing execution</strong> — not to replace teams or strategy, but to provide the system that makes growth sustainable and manageable.
          </p>
        </motion.div>

        {/* Ecosystem CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-bold text-muted tracking-[0.15em] uppercase">
            CHECK ALL{" "}
            <Link href="/#solutions" className="text-accent hover:underline">
              51+ AI MARKETING TOOLS
            </Link>{" "}
            IN OUR ECOSYSTEM.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
