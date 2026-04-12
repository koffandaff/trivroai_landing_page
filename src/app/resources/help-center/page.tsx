"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";

const helpSections = [
  {
    title: "Account & Access",
    faqs: [
      { q: "How do I create an account?", a: "To create an account, click the 'Log In' button in the navbar and select 'Sign Up'. You will be guided through setting up your workspace." },
      { q: "Can multiple users access one workspace?", a: "Yes, depending on your enterprise plan, you can invite multiple team members and assign role-based access." },
      { q: "How do I reset my password?", a: "On the login screen, click 'Forgot Password' to receive a secure reset link via email." }
    ]
  },
  {
    title: "Billing & Plans",
    faqs: [
      { q: "Where can I view my subscription details?", a: "Navigate to Settings > Billing within your dashboard to view your current plan." },
      { q: "Can I change my plan later?", a: "Yes, you can upgrade or modify your plan at any time. Changes will be reflected in your next billing cycle." },
      { q: "Where can I see my invoices?", a: "All invoices are automatically generated and stored in the Billing section for download." }
    ]
  },
  {
    title: "Platform Usage",
    faqs: [
      { q: "How do I start a new campaign?", a: "From the main dashboard, click 'New Campaign' to trigger the AI planning workflow." },
      { q: "Is training required to use Trivro AI?", a: "No, Trivro AI is designed for ease of use, though we do offer onboarding for enterprise clients." },
      { q: "How do I create a new workflow?", a: "Head to the Workflows tab and use our visual builder to structure your new process." }
    ]
  },
  {
    title: "Troubleshooting",
    faqs: [
      { q: "I’m unable to access a feature.", a: "Check your assigned role permissions. If you are an admin, contact support to verify your plan limits." },
      { q: "Who do I contact for support?", a: "Reach out to our priority support team at support@trivro.in." }
    ]
  }
];

export default function HelpCenterPage() {
  const [openSection, setOpenSection] = useState<string | null>("Account & Access");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-glow-accent opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">SUPPORT</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              Help <span className="text-accent italic">Center</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions and guidance for using Trivro AI smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 mb-24 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-32 flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-4 px-4">Categories</h3>
              {helpSections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => setOpenSection(section.title)}
                  className={`text-left px-4 py-2.5 rounded-xl transition-all text-sm font-medium ${
                    openSection === section.title
                      ? "bg-accent/10 border border-accent/20 text-accent"
                      : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="flex-1">
            {helpSections.map((section) => (
              <div key={section.title} className={openSection === section.title ? "block" : "hidden"}>
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/[0.05] pb-4">{section.title}</h2>
                <div className="flex flex-col gap-3">
                  {section.faqs.map((faq, idx) => {
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
        </div>
      </section>

      {/* Content Support Section */}
      <section className="px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#161618] to-[#111112] border border-accent/10 p-10 md:p-14 shadow-[0_0_60px_rgba(229,208,140,0.06)] relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Need more help?</h3>
            <p className="text-white/40 mb-10 text-sm max-w-lg mx-auto relative z-10">
              Our support team is here to assist you with your Trivro AI account or platform usage. We typically respond within 24 business hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left">
              <a href="mailto:support@trivro.in" className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-colors">
                <Mail size={24} className="text-accent" />
                <div>
                  <div className="text-white font-medium mb-1">Email Support</div>
                  <div className="text-white/40 text-xs">support@trivro.in</div>
                </div>
              </a>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-colors">
                <Phone size={24} className="text-accent" />
                <div>
                  <div className="text-white font-medium mb-1">Phone</div>
                  <div className="text-white/40 text-xs">+91 92747 41994</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-3 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/40 transition-colors">
                <MapPin size={24} className="text-accent" />
                <div>
                  <div className="text-white font-medium mb-1">Office</div>
                  <div className="text-white/40 text-xs text-balance">Satya Square, C-303, Tragad Rd, Ahmedabad</div>
                </div>
              </div>
            </div>
            
            <p className="text-white/20 text-[10px] mt-10 uppercase tracking-widest relative z-10 max-w-sm mx-auto">
              Not intended for sales, partnerships, or marketing inquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
