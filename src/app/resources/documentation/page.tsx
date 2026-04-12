"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { BookOpen, Layers, Server, Settings, ArrowRight } from "lucide-react";

const sections = [
  {
    icon: <Settings size={22} />,
    title: "Getting Started with Trivro AI",
    desc: "Learn how to set up your account and start using Trivro AI in a few simple steps.",
    links: ["Creating your account", "Accessing the dashboard", "Understanding your workspace", "Initial configuration"]
  },
  {
    icon: <BookOpen size={22} />,
    title: "Platform Overview",
    desc: "Trivro AI is an AI-powered marketing platform designed to centralize planning, execution, and optimization workflows.",
    links: []
  },
  {
    icon: <Layers size={22} />,
    title: "Core Features",
    desc: "Primary capabilities to help teams plan, create, and measure campaigns.",
    links: []
  },
  {
    icon: <Server size={22} />,
    title: "Integrations",
    desc: "Trivro AI integrates with commonly used marketing and analytics tools. Integration details will be added as they become available.",
    links: []
  }
];

export default function DocumentationPage() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-glow-accent opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">KNOWLEDGE BASE</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              <span className="text-accent italic">Documentation</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to understand, configure, and use Trivro AI effectively. This documentation covers platform basics, core features, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <GlassCard className="p-8 h-full flex flex-col group cursor-pointer hover:border-accent/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed mb-6 flex-1">
                  {section.desc}
                </p>
                
                {section.links.length > 0 ? (
                  <ul className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/[0.05]">
                    {section.links.map((link, lidx) => (
                      <li key={lidx} className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors">
                        <ArrowRight size={14} className="text-accent/50" />
                        {link}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
