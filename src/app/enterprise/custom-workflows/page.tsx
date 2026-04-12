"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Workflow, PenTool, CheckSquare, Users } from "lucide-react";

const customizations = [
  {
    icon: <Workflow size={22} />,
    title: "Campaign Structure",
    desc: "Define how your campaigns are planned and organized.",
  },
  {
    icon: <PenTool size={22} />,
    title: "Content Flows",
    desc: "Tailor content creation and distribution paths.",
  },
  {
    icon: <CheckSquare size={22} />,
    title: "Approval Chains",
    desc: "Configure custom review and sign-off processes.",
  },
  {
    icon: <Users size={22} />,
    title: "Team Collaboration",
    desc: "Shape how departments interact and hand off work.",
  },
];

export default function CustomWorkflowsPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-glow-accent opacity-30 pointer-events-none" />

      {/* Header */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              Custom <span className="text-accent italic">Workflows</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-2xl leading-relaxed">
              Every organization operates differently. Trivro AI adapts to your internal processes instead of forcing rigid workflows on your team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You Can Customize */}
      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">What You Can Customize</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizations.map((item, idx) => (
              <GlassCard key={idx} className="p-6 group">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-5 text-accent group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Speed + Consistency Banner */}
      <section className="px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-[#161618] to-[#111112] border border-accent/10 p-10 md:p-14 shadow-[0_0_60px_rgba(229,208,140,0.06)]">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Speed + Consistency</h3>
            <p className="text-white/45 leading-relaxed max-w-2xl">
              Custom workflows allow enterprises to maintain consistency while giving teams flexibility to execute faster. Maintain your competitive edge without operational friction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
