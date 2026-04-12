"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Layers, Zap, BarChart3, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: <Layers size={22} />,
    title: "Marketing Execution",
    challenge: "Marketing execution often breaks down due to scattered tools, manual coordination, and inconsistent processes, leading to slow launches and missed opportunities.",
    solution: "Trivro AI centralizes execution from ad creation and funnel design to CRM workflows, enabling faster, more consistent launches across channels.",
    bullets: ["Unified campaign management", "Faster go-to-market", "Consistent brand execution"],
  },
  {
    icon: <Zap size={22} />,
    title: "Automation & Workflows",
    challenge: "Manual tasks and disconnected processes consume time and introduce errors, limiting the ability to scale marketing efforts efficiently.",
    solution: "Built-in AI automation handles repetitive tasks, follow-ups, broadcasts, content scheduling, so teams focus on strategy, not operations.",
    bullets: ["Automated follow-ups", "Smart scheduling", "Reduced manual work"],
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Performance & Analytics",
    challenge: "Limited visibility across tools makes it difficult to understand performance, measure ROI, and identify areas for improvement.",
    solution: "Integrated analytics provide a unified view of marketing performance, allowing teams to track outcomes and identify trends.",
    bullets: ["Clear performance insights", "Improved decision-making", "Better campaign visibility"],
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Growth Enablement",
    challenge: "As businesses grow, marketing operations become harder to manage without systems designed for scale and consistency.",
    solution: "Trivro AI enables scalable growth by providing structured workflows and insights that support expansion without increasing complexity.",
    bullets: ["Scalable operations", "Repeatable growth processes", "Better team alignment"],
  },
];

export const ProblemSolution = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-6 inline-flex">PROBLEM → SOLUTION</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">
            Built to Fix How Marketing <br />
            <span className="text-primary">Actually Breaks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Most marketing problems don&apos;t come from lack of ideas — they come from fragmented execution. Trivro AI brings structure, speed, and clarity to everyday operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, idx) => (
            <GlassCard key={idx} className="p-8 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>

              {/* Challenge */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="text-xs font-bold text-white/40 tracking-[0.1em] uppercase">THE CHALLENGE</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{item.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-accent tracking-[0.1em] uppercase">THE SOLUTION</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-medium">{item.solution}</p>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-2 mb-6">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-center gap-2 text-sm text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link href="/expertise" className="text-accent text-xs font-bold tracking-[0.1em] uppercase flex items-center gap-2 hover:gap-3 transition-all">
                EXPLORE SOLUTION <ArrowRight size={14} />
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
