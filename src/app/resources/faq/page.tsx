"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const faqCategories = [
  {
    category: "General",
    items: [
      { q: "What is Trivro AI?", a: "Trivro AI is an all-in-one AI marketing platform designed to centralize planning, execution, and optimization without requiring large teams or agency dependency." },
      { q: "Can Trivro AI replace marketing agencies?", a: "Yes. Our platform automates many of the routine and complex tasks traditionally handled by external agencies, giving your internal teams full control over strategy and execution." },
      { q: "Who should use Trivro AI?", a: "Trivro AI is built for founders, marketing teams, and enterprises who need scalable go-to-market systems with high operational efficiency." },
      { q: "Do I need technical or coding skills to use Trivro AI?", a: "No. Our intuitive workflows and AI-driven interfaces mean you can design funnels, deploy campaigns, and integrate tools without writing a single line of code." }
    ]
  },
  {
    category: "Tools & Features",
    items: [
      { q: "How does Trivro AI help with funnels and landing pages?", a: "We provide AI-powered templates and structure guidelines that generate complete, high-converting landing pages and funnels in a fraction of the time." },
      { q: "How does Trivro AI help with SEO and AEO?", a: "Our tools analyze search intent and AEO (Answer Engine Optimization) structures, guiding your content creation to rank higher on modern AI search engines." },
      { q: "How many AI tools are included?", a: "The platform currently boasts 51+ proprietary AI tools tailored specifically for marketing, growth, and operations." }
    ]
  },
  {
    category: "WhatsApp & Communication",
    items: [
      { q: "Does Trivro AI support WhatsApp API marketing?", a: "Yes, we fully integrate with the official WhatsApp Cloud API, allowing you to run automated broadcast campaigns, handle support, and build logic-based conversational flows." }
    ]
  },
  {
    category: "Pricing & Value",
    items: [
      { q: "Is Trivro AI cost-effective for startups?", a: "Absolutely. By reducing the need for multiple disparate software subscriptions and expensive agency retainers, Trivro AI drastically lowers the total cost of ownership for your marketing stack." },
      { q: "Is there a free trial?", a: "We offer a deep-dive demonstration and pilot period primarily customized for enterprise and committed teams to properly evaluate the system's impact." }
    ]
  },
  {
    category: "Company & Authority",
    items: [
      { q: "Who created Trivro AI?", a: "Trivro AI is built by a team of growth experts and engineers who have spent years scaling marketing operations and tackling the inefficiencies of traditional agency models." },
      { q: "Why is AI marketing better than traditional agencies?", a: "It provides consistency, speed, and massive cost savings. AI execution doesn't suffer from miscommunication, timezone delays, or human bottlenecking." }
    ]
  }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-glow-accent opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">SUPPORT CENTER</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              Frequently Asked <span className="text-accent italic">Questions</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about Trivro AI. Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Lists */}
      <section className="px-6 mb-24 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {faqCategories.map((cat, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-xl font-bold text-accent mb-6 px-2">{cat.category}</h2>
              <div className="flex flex-col gap-3">
                {cat.items.map((faq, idx) => {
                  const isOpen = openFaq === faq.q;
                  return (
                    <GlassCard key={idx} className="overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <span className="font-medium text-white">{faq.q}</span>
                        <ChevronDown size={18} className={`text-white/40 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <div className="px-6 pb-6 pt-2 text-white/50 text-sm leading-relaxed border-t border-white/[0.05] mt-2">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#161618] to-[#111112] border border-accent/10 p-10 md:p-14 shadow-[0_0_60px_rgba(229,208,140,0.06)] relative overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-white/45 leading-relaxed max-w-2xl mx-auto mb-10">
              Our experts are ready to help you build your in-house AI marketing system today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PremiumButton size="md" href="#">
                Book a Strategy Session <ArrowRight size={16} />
              </PremiumButton>
              <Link href="/pricing" className="text-xs font-bold text-white/60 uppercase tracking-[0.15em] hover:text-accent transition-colors px-6 py-3 border border-white/10 rounded-full hover:bg-white/5">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
