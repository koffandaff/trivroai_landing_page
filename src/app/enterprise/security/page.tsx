"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Database, Lock, Globe } from "lucide-react";

const securityFeatures = [
  {
    icon: <Database size={22} />,
    title: "Data Protection",
    items: [
      "Secure handling of user and campaign data",
      "Controlled access based on roles and permissions",
      "AES-256 encryption at rest",
    ],
  },
  {
    icon: <Lock size={22} />,
    title: "Account Security",
    items: [
      "Protected login and workspace access",
      "Role-based visibility for teams",
      "Session management and audit logs",
    ],
  },
  {
    icon: <Globe size={22} />,
    title: "Operational Reliability",
    items: [
      "Stable infrastructure designed for business continuity",
      "Responsible AI usage practices",
      "99.9% uptime commitment",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="pt-28 pb-20 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-accent/5 opacity-30 pointer-events-none" />

      <section className="px-6 mb-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge mb-6 inline-flex">ENTERPRISE GRADE</span>
            <h1 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight leading-none">
              Security & <span className="text-accent italic">Compliance</span>
            </h1>
            <p className="text-white/45 text-base md:text-lg max-w-2xl leading-relaxed">
              Security and data responsibility are foundational to how Trivro AI is built. We prioritize the protection of your enterprise data through every layer of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityFeatures.map((feature, idx) => (
              <GlassCard key={idx} className="p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-6 text-accent">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-5">{feature.title}</h3>
                <ul className="flex flex-col gap-3">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/45">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
