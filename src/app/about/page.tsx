"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-30 pointer-events-none" />

      {/* Title */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              About <span className="text-accent italic">Trivro AI.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tight leading-tight">
              Akanksha Raj Trivedi
            </h2>
            <div className="space-y-5 text-muted text-base leading-relaxed">
              <p>
                Akanksha Raj Trivedi is an AI tools consultant and marketing systems architect focused on helping businesses build scalable, in-house AI marketing ecosystems.
              </p>
              <p>
                Trivro AI was founded to help startups and founders replace traditional agencies with powerful in-house AI marketing systems using globally proven frameworks for faster execution and lower costs.
              </p>
            </div>
          </motion.div>

          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="badge mb-6 inline-flex">MEET THE FOUNDER</span>
            <div className="mt-4 aspect-[3/4] rounded-3xl overflow-hidden relative border border-foreground/[0.08]">
              <Image 
                src="/creator.png"
                alt="Akanksha Raj Trivedi"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-foreground font-bold text-lg leading-none mb-1">Akanksha Raj Trivedi</p>
                <p className="text-accent/80 text-xs font-semibold uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-24 section-dark relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Our Mission
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              To democratize enterprise-grade marketing technology — giving every founder, small team, and growing business access to the same AI-powered systems used by industry leaders, without the cost or complexity.
            </p>
            <PremiumButton size="lg" href="#">
              Join the Platform <ArrowRight size={18} />
            </PremiumButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
