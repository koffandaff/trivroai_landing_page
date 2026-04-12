"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Working with Trivro AI completely changed the way we do marketing. Earlier, we were spending heavily on agencies without clear results. With Trivro AI, we finally built a proper marketing system — funnels, ads, and landing pages — without needing a big team.",
    name: "Ankita Rajawat",
    role: "BUSINESS OWNER",
  },
  {
    quote:
      "Trivro AI is a powerful all-in-one marketing platform. From funnel creation to WhatsApp automation and CRM — everything works smoothly. It's beginner-friendly yet powerful enough to scale campaigns reliably.",
    name: "Ankit Kumar",
    role: "FOUNDER",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-6 inline-flex">✦ REAL GROWTH</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
            Trusted by Forward-Thinking <br />
            <span className="text-gradient-accent">Businesses</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <GlassCard key={idx} className="p-8 md:p-10">
              <div className="text-accent/20 text-6xl font-serif leading-none mb-4">&quot;</div>
              <p className="text-muted text-base leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted tracking-[0.1em] uppercase mt-1">{t.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="#"
            className="text-accent text-xs font-bold tracking-[0.1em] uppercase inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            READ MORE CUSTOMER STORIES <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
