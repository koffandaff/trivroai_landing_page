"use client";

import { motion } from "framer-motion";
import { StarButton } from "@/components/ui/star-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ArrowRight } from "lucide-react";
import { showComingSoon } from "@/components/ui/ComingSoonModal";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden section-dark border-t border-card-border">
      <DotPattern width={24} height={24} className="opacity-40" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 mb-8 backdrop-blur-md">
            <span className="text-xl text-accent">✴</span>
            <span className="text-sm font-medium tracking-widest uppercase text-muted">Get Started</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-6 tracking-tight leading-none">
            Ready to Modernize Your{" "}
            <span className="text-accent italic">Marketing Execution?</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join 500+ businesses scaling their growth with the definitive enterprise AI marketing platform. Stop relying on outdated agency cycles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <StarButton>
              Book Your Demo <ArrowRight size={16} />
            </StarButton>
            <button 
              className="px-6 py-3 rounded-full border border-foreground/10 text-muted hover:bg-foreground/5 hover:text-foreground transition-all text-xs font-bold uppercase tracking-[0.15em]"
              onClick={() => showComingSoon()}
            >
              View Plans
            </button>
          </div>
        </motion.div>

        {/* Bottom Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-foreground/20 tracking-[0.15em] uppercase"
        >
          <button onClick={() => showComingSoon()} className="hover:text-accent transition-colors cursor-pointer uppercase bg-transparent border-none p-0 text-foreground/20 font-semibold text-xs tracking-[0.15em]">AI Tools Ecosystem</button>
          <button onClick={() => showComingSoon()} className="hover:text-accent transition-colors cursor-pointer uppercase bg-transparent border-none p-0 text-foreground/20 font-semibold text-xs tracking-[0.15em]">Platform Comparison</button>
          <button onClick={() => showComingSoon()} className="hover:text-accent transition-colors cursor-pointer uppercase bg-transparent border-none p-0 text-foreground/20 font-semibold text-xs tracking-[0.15em]">Industry Use Cases</button>
          <button onClick={() => showComingSoon()} className="hover:text-accent transition-colors cursor-pointer uppercase bg-transparent border-none p-0 text-foreground/20 font-semibold text-xs tracking-[0.15em]">Customer Reviews</button>
        </motion.div>
      </div>
    </section>
  );
};
