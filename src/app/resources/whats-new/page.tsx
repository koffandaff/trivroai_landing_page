"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, CalendarDays } from "lucide-react";

const updates = [
  {
    status: "Live",
    date: "Feb 19 2026",
    headline: "Live Now on Amazon & Flipkart in 150+ Countries",
    title: "New Book Launch Announcement",
    desc: "We are thrilled to announce the release of our latest book \"Last Call To Learn AI\" , now available on Amazon! 🎉",
    link: "#",
    tag: "Updates"
  }
];

export default function WhatsNewPage() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-glow-accent opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">PLATFORM EVOLUTION</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              What&apos;s New at <span className="text-accent italic">Trivro AI</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Tracking the continuous evolution of enterprise marketing. Exclusive updates, new AI tools, and platform enhancements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 mb-12 relative z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-3">
          {["All", "New Tools", "Updates", "Improvements"].map((tab, idx) => (
            <button
              key={idx}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                idx === 0
                  ? "bg-foreground/10 text-foreground border border-foreground/20"
                  : "bg-transparent border border-foreground/5 text-muted hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Feed */}
      <section className="px-6 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {updates.map((update, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
                {/* Date column */}
                <div className="md:w-32 shrink-0 flex flex-col gap-2 border-l border-accent/30 pl-4 py-1 relative before:absolute before:-left-[1px] before:top-0 before:h-full before:bg-gradient-to-b before:from-accent before:to-transparent before:w-[2px]">
                  <span className="text-xs uppercase tracking-widest text-accent font-bold">
                    {update.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted text-sm">
                    <CalendarDays size={14} />
                    <span>{update.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted mb-2 block">
                    {update.headline}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                    {update.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {update.desc}
                  </p>
                  <a href={update.link} className="inline-flex items-center gap-2 text-sm text-accent font-bold uppercase tracking-[0.15em] hover:opacity-80 transition-opacity">
                    View Details <ArrowRight size={16} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
