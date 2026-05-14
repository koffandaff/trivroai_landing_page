"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { showComingSoon } from "@/components/ui/ComingSoonModal";

const faqs = [
  {
    q: "What is Trivro AI?",
    a: "Trivro AI is an all-in-one AI marketing platform with 51+ tools that help businesses build, automate, and scale marketing operations without needing agencies or large teams.",
  },
  {
    q: "Can Trivro AI replace marketing agencies?",
    a: "Yes. Trivro AI is designed to give founders and businesses full control over their marketing from ad creation and funnel building to CRM automation and SEO, reducing agency dependency by 50–70%.",
  },
  {
    q: "Do I need technical skills to use Trivro AI?",
    a: "Not at all. Trivro AI is built for non-technical founders and lean teams. The platform uses guided AI workflows and templates so you can launch campaigns without writing a single line of code.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 section-dark relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Got Questions? <span className="text-gradient-accent">We Have Answers</span>
          </h2>
          <p className="text-muted text-base leading-relaxed">
            The most common questions about building your in-house AI marketing system.
          </p>
        </motion.div>

        <div className="glass-card overflow-hidden divide-y divide-white/[0.06]">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-foreground/[0.02] transition-colors cursor-pointer"
              >
                <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-6 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => showComingSoon()}
            className="text-accent text-xs font-bold tracking-[0.1em] uppercase inline-flex items-center gap-2 hover:gap-3 transition-all bg-transparent border-none p-0 cursor-pointer"
          >
            VIEW ALL FREQUENTLY ASKED QUESTIONS <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
