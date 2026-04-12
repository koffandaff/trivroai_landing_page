"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Zap, Shield, Crown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const comparisonData = {
  traditional: [
    { item: "Marketing Team", cost: "₹1.5L - 5L" },
    { item: "10+ Tools", cost: "₹50K+" },
  ],
  trivro: [
    { item: "Unified Platform", cost: "₹18,000" },
    { item: "All Tools Included", cost: "₹0" },
  ],
};

const plans = [
  {
    name: "Monthly Plan",
    icon: <Zap size={22} className="text-accent" />,
    price: "₹18,000",
    gst: "+ 18% GST",
    tag: "PAY AS YOU GROW",
    tagline: "Perfect for early-stage founders",
    features: [
      "All Core Apps (AI + CRM + Sites + Email)",
      "Unlimited Projects (Funnels, Blogs, Landing Pages)",
      "Email Support (Business hours)",
    ],
    cta: "CHOOSE MONTHLY PLAN",
    popular: false,
  },
  {
    name: "Quarterly Plan",
    icon: <Shield size={22} className="text-accent" />,
    price: "₹39,999",
    gst: "+ 18% GST",
    tag: "INCLUDES EVERYTHING IN MONTHLY +",
    tagline: "Recommended for growing teams",
    features: [
      "Quarterly Check-Ins (Roadmap Review)",
      "Growth Planning Sessions",
      "Priority Support Responses",
    ],
    cta: "CHOOSE QUARTERLY PLAN",
    popular: true,
  },
  {
    name: "Yearly Plan",
    icon: <Crown size={22} className="text-accent" />,
    price: "₹94,999",
    gst: "+ 18% GST",
    tag: "INCLUDES EVERYTHING IN QUARTERLY +",
    tagline: "Full business empowerment",
    features: [
      "Premium Support (24/7)",
      "Early Features Access",
      "1-on-1 Niche Clarity Session",
      "Done-For-You Landing Page",
      "First Meta Ad Account Setup",
      "Business Launch Support",
    ],
    cta: "GO YEARLY",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 relative bg-background min-h-screen">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-40 pointer-events-none" />

      {/* Cost Efficiency Header */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-8 backdrop-blur-md">
              <span className="text-xl text-accent">✴</span>
              <span className="text-sm font-medium tracking-widest uppercase text-accent">Cost Efficiency</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-4 tracking-tight leading-none">
              Invest in Growth,<br />
              <span className="text-accent italic pr-2">Not Overhead</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
              One platform replaces entire marketing teams. See ROI from day one.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <GlassCard className="p-8 md:p-10 max-w-3xl mx-auto border-accent/10 shadow-[0_0_60px_rgba(229,208,140,0.02)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Traditional */}
                <div className="text-left">
                  <p className="text-xs font-bold text-white/20 tracking-[0.12em] uppercase mb-6">TRADITIONAL APPROACH</p>
                  {comparisonData.traditional.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                      <span className="text-sm text-white/50">{item.item}</span>
                      <span className="text-sm font-semibold text-white/60">{item.cost}</span>
                    </div>
                  ))}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl font-medium text-red-500/70">₹2L - 5.5L</span>
                    <span className="text-white/20 text-sm uppercase">/mo</span>
                  </div>
                </div>

                {/* Trivro */}
                <div className="text-left">
                  <p className="text-xs font-bold text-accent tracking-[0.12em] uppercase mb-6">WITH TRIVRO.AI</p>
                  {comparisonData.trivro.map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-accent/10">
                      <span className="text-sm text-accent/70">{item.item}</span>
                      <span className="text-sm font-semibold text-accent">{item.cost}</span>
                    </div>
                  ))}
                  <div className="mt-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-medium text-accent">₹18,000</span>
                      <span className="text-accent/30 text-sm uppercase">/mo</span>
                    </div>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-widest mt-2 p-1 bg-accent/10 inline-block">SAVE UP TO 97% MONTHLY</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-10 mt-12 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
            <Link href="/#solutions" className="hover:text-accent transition-colors flex items-center gap-2">
              EXPLORE 51+ AI TOOLS <ArrowRight size={12} />
            </Link>
            <Link href="#" className="hover:text-accent transition-colors flex items-center gap-2">
              BOOK A STRATEGY DEMO <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-5 py-2 rounded-full bg-accent text-black text-[10px] font-bold uppercase tracking-[0.2em]">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <GlassCard
                  variant={plan.popular ? "accent" : "default"}
                  className={`p-8 h-full flex flex-col ${plan.popular ? "border-accent/30 shadow-[0_0_50px_rgba(229,208,140,0.05)]" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-normal text-foreground tracking-tight">{plan.name}</h3>
                  </div>

                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-4xl font-medium text-foreground">{plan.price}</span>
                    <span className="text-muted text-xs uppercase tracking-widest">{plan.gst}</span>
                  </div>
                  <p className="text-accent text-[10px] font-bold uppercase tracking-[0.15em] mb-2">{plan.tag}</p>
                  <p className="text-muted text-sm mb-8 font-light">{plan.tagline}</p>

                  <div className="border-t border-white/[0.05] pt-8 mb-8 flex-1">
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-4 text-sm text-foreground/70 font-light">
                          <CheckCircle2 size={16} className="text-accent/60 mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                      plan.popular 
                        ? "bg-accent text-black hover:bg-white" 
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                    }`}
                  >
                    {plan.cta} <ArrowRight size={14} />
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[10px] text-white/20 tracking-[0.25em] uppercase mt-20 font-medium">
            BILLED VIA RAZORPAY SECURE • HIGH-PERFORMANCE INFRASTRUCTURE • NO HIDDEN COSTS
          </p>
        </div>
      </section>
    </div>
  );
}
