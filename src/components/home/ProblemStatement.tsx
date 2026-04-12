"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { AlertCircle } from "lucide-react";

const problems = [
  {
    title: "Too many disconnected tools",
    desc: "Teams waste 40% of their time managing tool sprawl instead of generating revenue.",
  },
  {
    title: "High marketing costs",
    desc: "Fragmented systems lead to redundant subscriptions and expensive agency dependencies.",
  },
  {
    title: "Low conversion rates",
    desc: "Inconsistent data leads to poor targeting and slow execution of growth cycles.",
  },
];

export const ProblemStatement = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-glow-accent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Marketing Is Broken for Most Businesses
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Most AI tools add more complexity instead of solving the real problem. Businesses today struggle with fragmented systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <GlassCard key={idx} className="p-8 text-left">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <AlertCircle size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{problem.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
