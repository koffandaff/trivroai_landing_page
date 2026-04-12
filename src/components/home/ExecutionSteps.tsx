"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Connect Your Goals",
    desc: "Tell Trivro what you want to achieve, leads, sales, or growth. No technical setup required.",
  },
  {
    number: "2",
    title: "Execute Workflows",
    desc: "Launch pages, ads, and content using guided AI workflows built on industry best practices.",
  },
  {
    number: "3",
    title: "Optimize & Scale",
    desc: "Track performance metrics in real-time and let the system scale what works for your business.",
  },
];

export const ExecutionSteps = () => {
  return (
    <section className="py-24 px-6 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-accent opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Execution. Rapid Growth.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl border border-accent/20 bg-accent/5 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
