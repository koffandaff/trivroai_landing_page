"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, Headphones, BookOpen, ArrowRight } from "lucide-react";
import { showComingSoon } from "@/components/ui/ComingSoonModal";

const onboardingSteps = [
  { num: "01", title: "Initial Platform Walkthrough", desc: "A comprehensive tour of core features and capabilities." },
  { num: "02", title: "Workspace & Access Setup", desc: "Configuring roles, permissions, and team environments." },
  { num: "03", title: "Feature Orientation", desc: "Deep dives into specific tools relevant to your goals." },
];

const supportCards = [
  {
    icon: <Headphones size={22} />,
    title: "Priority Email Support",
    desc: "Direct access to our support team for platform and account-related queries.",
    cta: "CONTACT SUPPORT",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Knowledge Base",
    desc: "Comprehensive documentation and guides to help your team self-serve and scale faster.",
    cta: "VIEW DOCS",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-30 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">PARTNER IN SUCCESS</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              Support & <span className="text-accent italic">Onboarding</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              We ensure enterprises can adopt Trivro AI smoothly with guided onboarding and reliable support every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Onboarding Steps */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Rocket size={22} className="text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Onboarding Process</h2>
            </div>
            <div className="flex flex-col gap-4">
              {onboardingSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-accent/40">{step.num}</span>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                        <p className="text-sm text-muted">{step.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Support Cards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Headphones size={22} className="text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Ongoing Support</h2>
            </div>
            <div className="flex flex-col gap-4">
              {supportCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <GlassCard className="p-6">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-4 text-accent">
                      {card.icon}
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{card.title}</h4>
                    <p className="text-sm text-muted mb-4 leading-relaxed">{card.desc}</p>
                    <button onClick={() => showComingSoon()} className="text-accent text-xs font-bold tracking-[0.1em] uppercase flex items-center gap-2 hover:gap-3 transition-all cursor-pointer bg-transparent border-none p-0 text-left">
                      {card.cta} <ArrowRight size={14} />
                    </button>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
