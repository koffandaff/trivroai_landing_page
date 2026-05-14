"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";
import { showComingSoon } from "@/components/ui/ComingSoonModal";

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-glow-accent opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">SUCCESS STORIES</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              Case <span className="text-accent italic">Studies</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              How organizations use Trivro AI to make marketing and operational work more efficient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="group cursor-pointer overflow-hidden relative min-h-[400px]">
            {/* Background image mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-background z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            
            <div className="relative z-20 h-full p-8 flex flex-col justify-end">
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Retail</span>
              <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:underline decoration-accent underline-offset-4 decoration-2">Acme Retail</h3>
              <p className="text-muted mb-6 max-w-sm">(placeholder) Detailed overview of how Acme Retail structured their marketing system with Trivro AI.</p>
              
              <button onClick={() => showComingSoon()} className="flex items-center gap-2 text-sm text-foreground font-medium uppercase tracking-wider group-hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0 text-left">
                View Case <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </GlassCard>

          <GlassCard className="group cursor-pointer overflow-hidden relative min-h-[400px]">
            {/* Background image mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-card to-background z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            
            <div className="relative z-20 h-full p-8 flex flex-col justify-end">
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-3">Agencies</span>
              <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:underline decoration-accent underline-offset-4 decoration-2">Bright Agency</h3>
              <p className="text-muted mb-6 max-w-sm">(placeholder) How Bright Agency scaled client delivery using centralized AI workflows.</p>
              
              <button onClick={() => showComingSoon()} className="flex items-center gap-2 text-sm text-foreground font-medium uppercase tracking-wider group-hover:text-accent transition-colors cursor-pointer bg-transparent border-none p-0 text-left">
                View Case <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
