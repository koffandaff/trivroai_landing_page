"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Sparkles, PenTool, Search } from "lucide-react";

const tools = [
  {
    icon: <Sparkles size={22} />,
    title: "Meta Ads AI",
    tagline: "GENERATE HIGH-ROI ADS IN MINUTES",
    desc: "Automatically create scroll-stopping creatives and copy that convert browsers into buyers.",
  },
  {
    icon: <PenTool size={22} />,
    title: "Funnel Genie",
    tagline: "LAUNCH SALES FUNNELS 3X FASTER",
    desc: "AI-powered page builder that designs and writes your entire conversion path in seconds.",
  },
  {
    icon: <Search size={22} />,
    title: "AEO Optimizer",
    tagline: "BE THE ANSWER ON EVERY AI ENGINE",
    desc: "Optimize your content for ChatGPT, Gemini, and Perplexity to dominate the new search era.",
  },
];

export const EnterpriseTools = () => {
  return (
    <section className="py-24 px-6 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-glow-accent opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Integrated AI Marketing <span className="text-gradient-accent">Powerhouses</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-base leading-relaxed">
            A suite of specialized enterprise tools designed to automate your most critical marketing operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <GlassCard key={idx} variant="accent" className="p-8 text-left group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{tool.title}</h3>
              <p className="text-accent text-xs font-bold tracking-[0.1em] uppercase mb-4">
                {tool.tagline}
              </p>
              <p className="text-muted text-sm leading-relaxed">{tool.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
