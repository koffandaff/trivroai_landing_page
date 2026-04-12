"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Zap, BarChart3, Shield, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Centralized Workflows",
    desc: "AI-powered marketing systems that unify planning and execution across the entire organization.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Operational Efficiency",
    desc: "Significantly reduced operational overhead by eliminating tool sprawl and manual handoffs.",
  },
  {
    icon: <Shield size={22} />,
    title: "Security & Compliance",
    desc: "Enterprise-grade data protection with role-based access controls, encryption at rest, and audit logs.",
    href: "/enterprise/security",
  },
  {
    icon: <Layers size={22} />,
    title: "Custom Workflows",
    desc: "Adapt the platform to your internal processes instead of forcing rigid workflows on your team.",
    href: "/enterprise/custom-workflows",
  },
];

export default function EnterprisePage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-30 pointer-events-none" />

      {/* Hero */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-8 backdrop-blur-md">
              <span className="text-xl text-accent">✴</span>
              <span className="text-sm font-medium tracking-widest uppercase text-accent">Enterprise Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none text-center lg:text-left">
              Enterprise <span className="text-accent italic">Overview</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
              Trivro AI is an enterprise-ready marketing platform designed to help organizations plan, execute, and optimize marketing operations efficiently — without increasing team size or tool complexity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <GlassCard key={idx} className="p-8 group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{feature.desc}</p>
                {feature.href && (
                  <Link href={feature.href} className="text-accent text-xs font-bold tracking-[0.1em] uppercase flex items-center gap-2 hover:gap-3 transition-all">
                    LEARN MORE <ArrowRight size={14} />
                  </Link>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 mb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Built for <span className="text-accent italic">Scale</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-base leading-relaxed">
              Trivro AI provides the platform. Your teams stay in control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-8 group text-center">
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">Mid-Market & Enterprise</h3>
              <p className="text-muted text-sm leading-relaxed">Growing organizations needing structured marketing systems.</p>
            </GlassCard>
            <GlassCard className="p-8 group text-center">
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">Leadership Teams</h3>
              <p className="text-muted text-sm leading-relaxed">Founders and executives requiring visibility into marketing ROI.</p>
            </GlassCard>
            <GlassCard className="p-8 group text-center">
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">Marketing Teams</h3>
              <p className="text-muted text-sm leading-relaxed">Execution teams managing multiple complex initiatives simultaneously.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Ready to scale your enterprise marketing?
            </h2>
            <p className="text-muted mb-8">
              Talk to our enterprise team to explore custom solutions for your organization.
            </p>
            <PremiumButton size="lg" href="#">
              Contact Enterprise Sales <ArrowRight size={18} />
            </PremiumButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
