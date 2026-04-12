"use client";

import { motion } from "framer-motion";
import { StarButton } from "@/components/ui/star-button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#0D0D0E] border-t border-card-border">
      <DotPattern width={24} height={24} className="opacity-40" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="text-xl text-accent">✴</span>
            <span className="text-sm font-medium tracking-widest uppercase text-white/70">Get Started</span>
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
            <button className="px-6 py-3 rounded-full border border-white/10 text-white/50 hover:bg-white/5 hover:text-white transition-all text-xs font-bold uppercase tracking-[0.15em]">
              View Plans
            </button>
          </div>
        </motion.div>

        {/* Bottom Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-white/20 tracking-[0.15em] uppercase"
        >
          <span className="hover:text-accent transition-colors cursor-pointer">AI Tools Ecosystem</span>
          <span className="hover:text-accent transition-colors cursor-pointer">Platform Comparison</span>
          <span className="hover:text-accent transition-colors cursor-pointer">Industry Use Cases</span>
          <span className="hover:text-accent transition-colors cursor-pointer">Customer Reviews</span>
        </motion.div>
      </div>
    </section>
  );
};
