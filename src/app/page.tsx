"use client";

import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ProblemStatement } from "@/components/home/ProblemStatement";
import { ExecutionSteps } from "@/components/home/ExecutionSteps";
import { VideoDemo } from "@/components/home/VideoDemo";
import { StrategySession } from "@/components/home/StrategySession";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { EnterpriseTools } from "@/components/home/EnterpriseTools";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { EfficiencyBanner } from "@/components/home/EfficiencyBanner";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* ─── HOMEPAGE SECTIONS ─── */}
      <HeroGeometric />
      <ProblemStatement />
      <ExecutionSteps />
      <VideoDemo />
      <StrategySession />
      <ExpertiseGrid />
      <EnterpriseTools />
      <ProblemSolution />
      <EfficiencyBanner />
      <Testimonials />
      <FAQ />
      <FinalCTA />

      {/* ─── Floating Action Group ─── */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactOpen(true)}
          className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-black shadow-[0_4px_20px_rgba(229,208,140,0.3)] cursor-pointer hover:bg-white transition-all z-50"
        >
          <MessageCircle size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      {/* ─── Contact Modal ─── */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsContactOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-md"
          >
            <GlassCard variant="dark" className="p-8 border-accent/10">
              <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
              <p className="text-sm text-white/40 mb-6">Get in touch with the Trivro AI team.</p>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/40 transition-colors placeholder:text-white/20"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/50 font-medium uppercase tracking-wider">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/40 transition-colors placeholder:text-white/20"
                    placeholder="john@company.com"
                  />
                </div>
                <PremiumButton
                  className="mt-2 w-full"
                  onClick={async () => {
                    try {
                      const formData = {
                        name: (document.getElementById("contact-name") as HTMLInputElement)?.value,
                        email: (document.getElementById("contact-email") as HTMLInputElement)?.value,
                      };
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                      });
                      if (res.ok) {
                        alert("Message sent successfully!");
                        setIsContactOpen(false);
                      } else {
                        alert("Failed to send message. Please check your inputs.");
                      }
                    } catch {
                      alert("An error occurred.");
                    }
                  }}
                >
                  Send Message
                </PremiumButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </div>
  );
}
