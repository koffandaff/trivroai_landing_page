"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { FileText, ChevronDown } from "lucide-react";

const docs = [
  {
    title: "Getting Started with Trivro AI",
    desc: "Learn how to set up your account and start using Trivro AI in a few simple steps.",
    content: null,
  },
  {
    title: "Platform Overview",
    desc: "Trivro AI is an AI-powered marketing platform designed to centralize planning, execution, and optimization workflows.",
    content: {
      items: ["Dashboard layout", "Data flow overview", "Key modules", "User roles and permissions"],
    },
  },
  {
    title: "AI Tools Documentation",
    desc: "In-depth guides for each of the 51+ AI tools available on the Trivro AI platform.",
    content: {
      items: ["Meta Ads AI", "Funnel Genie", "AEO Optimizer", "WhatsApp Automation", "CRM Tools", "Content Engine"],
    },
  },
  {
    title: "Integrations & APIs",
    desc: "Connect Trivro AI with your existing tools and workflows. Explore available integrations.",
    content: {
      items: ["Webhook setup", "API authentication", "Third-party connectors", "Data export formats"],
    },
  },
  {
    title: "Best Practices",
    desc: "Learn industry best practices for maximizing ROI with AI-powered marketing systems.",
    content: {
      items: ["Campaign optimization", "Lead scoring strategies", "Content calendar planning", "Funnel architecture"],
    },
  },
];

export default function ResourcesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-30 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-8 backdrop-blur-md">
              <span className="text-xl text-accent">✴</span>
              <span className="text-sm font-medium tracking-widest uppercase text-accent">Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-5 tracking-tight">
              Documentation
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to understand, configure, and use Trivro AI effectively. This documentation covers platform basics, core features, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Docs Accordion */}
      <section className="px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {docs.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <GlassCard
                hover={false}
                className={`overflow-hidden transition-all ${openIndex === idx ? "border-accent/20 bg-accent/[0.02]" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-start gap-4 px-6 py-5 text-left hover:bg-foreground/[0.02] transition-colors cursor-pointer"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${openIndex === idx ? "bg-accent/15 text-accent" : "bg-foreground/[0.04] text-muted"} transition-colors`}>
                    <FileText size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold mb-1 ${openIndex === idx ? "text-accent" : "text-foreground"} transition-colors`}>
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{doc.desc}</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-muted shrink-0 mt-2 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-accent" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === idx && doc.content && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-20">
                        <div className="grid grid-cols-2 gap-2">
                          {doc.content.items.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
