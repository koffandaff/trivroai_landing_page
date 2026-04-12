"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Shield, Target, Zap, Search, MessageSquare, Settings, CheckCircle2 } from "lucide-react";

const expertiseCards = [
  {
    icon: <Shield size={22} />,
    title: "AI Marketing Systems",
    desc: "End-to-end AI ecosystems to run ads, funnels, landing pages, content, CRM, and automation — all from one platform.",
  },
  {
    icon: <Target size={22} />,
    title: "Funnel & Conversion Strategy",
    desc: "High-converting funnels and landing pages designed around buyer intent, psychology, and data-driven optimization.",
  },
  {
    icon: <Zap size={22} />,
    title: "Meta & Performance Ads",
    desc: "AI-powered Meta and performance ad frameworks that generate quality leads and maximize ROI without guesswork.",
  },
  {
    icon: <Search size={22} />,
    title: "SEO, AEO & AI Content",
    desc: "Search-ready and answer-engine-optimized content built to rank on Google, ChatGPT, Gemini, and voice platforms.",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "WhatsApp API & Automation",
    desc: "Zero-markup WhatsApp API marketing with AI chatbots, broadcasts, automated follow-ups, and lead qualification.",
  },
  {
    icon: <Settings size={22} />,
    title: "CRM & Workflow Automation",
    desc: "AI-driven CRM, lead management, and workflows that help teams respond faster and close more deals.",
  },
];

const trustPoints = [
  {
    title: "Globally Proven AI Marketing Frameworks",
    desc: "Our AI-driven systems are inspired by and aligned with strategies used by businesses worldwide — delivering faster execution and higher conversions than traditional marketing.",
  },
  {
    title: "51+ Integrated AI Marketing Tools",
    desc: "Ads, funnels, landing pages, SEO, AEO, CRM, WhatsApp API, automation — all under one powerful ecosystem.",
  },
  {
    title: "Used by Founders, Agencies & Businesses",
    desc: "Trusted by startup founders, marketing agencies, real estate brands, service businesses, and consultants to run marketing in-house.",
  },
  {
    title: "50–70% Marketing Cost Savings",
    desc: "Businesses reduce dependency on agencies and multiple subscriptions, saving significantly while scaling faster.",
  },
  {
    title: "AI-First, Future-Ready Marketing",
    desc: "Built for modern search and discovery — optimized for Google, ChatGPT, Gemini, Perplexity, and voice assistants.",
  },
  {
    title: "No Coding. No Big Teams. No Guesswork.",
    desc: "Designed for non-technical founders and lean teams who want control without complexity.",
  },
];

export default function ExpertisePage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-30 pointer-events-none" />

      {/* Hero */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-8 backdrop-blur-md">
              <span className="text-xl text-accent">✴</span>
              <span className="text-sm font-medium tracking-widest uppercase text-accent">Capabilities & Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-6 tracking-tight leading-[1.1]">
              Built for Founders who want <br />
              <span className="text-accent italic pr-2">Speed, Clarity, and Ownership.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              We help founders and businesses replace agency dependency with powerful in-house AI marketing systems that deliver faster execution, better leads, and full control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="px-6 mb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseCards.map((card, idx) => (
              <GlassCard key={idx} className="p-8 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Trust Trivro AI */}
      <section className="px-6 section-dark py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-normal text-foreground mb-4 tracking-tight">
              Why Businesses <span className="text-accent italic pr-2">Trust Trivro AI</span>
            </h2>
            <p className="text-xs font-bold text-muted tracking-[0.15em] uppercase">
              TRUSTED. PROVEN. BUILT FOR RESULTS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
