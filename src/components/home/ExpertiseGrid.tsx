"use client";

import { motion, Variants } from "framer-motion";
import { BentoCard } from "@/components/ui/bento-card";
import { Shield, Target, Zap, Search, MessageSquare, Settings } from "lucide-react";

const expertiseItems = [
  {
    icon: <Shield />,
    tag: "Core Priority",
    title: "AI Marketing Systems Ecosystem",
    description: "End-to-end AI ecosystems to run ads, funnels, landing pages, content, CRM, and automation.",
    className: "md:col-span-2",
    variant: "featured" as const,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: <Target />,
    tag: "Strategy",
    title: "Funnel & Conversion Design",
    description: "High-converting funnels and pages designed around buyer intent, psychology, and logic.",
    className: "md:col-span-1",
    variant: "gold" as const,
  },
  {
    icon: <Zap />,
    tag: "Ads",
    title: "Meta Performance AI",
    description: "AI-powered Meta ad frameworks that generate quality leads and maximize ROI consistently.",
    className: "md:col-span-1",
    variant: "default" as const,
  },
  {
    icon: <Search />,
    tag: "Growth",
    title: "SEO, AEO & Voice Ranking",
    description: "Search-ready, answer-engine-optimized content built to dominate Google, ChatGPT, and Gemini.",
    className: "md:col-span-2",
    variant: "default" as const,
  },
  {
    icon: <MessageSquare />,
    tag: "Communications",
    title: "0-Markup WhatsApp API",
    description: "Automated follow-ups, chatbots, and broadcasts directly through our integrated WhatsApp layers.",
    className: "md:col-span-1",
    variant: "default" as const,
  },
  {
    icon: <Settings />,
    tag: "Pipelines",
    title: "CRM & Autonomous Workflows",
    description: "AI-driven lead management systems that help teams respond faster and close significantly more deals.",
    className: "md:col-span-2",
    variant: "featured" as const,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
  },
];

export const ExpertiseGrid = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="solutions" className="py-32 px-6 relative bg-background-secondary overflow-hidden">
      {/* Decorative dot pattern behind the grid */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,var(--background-secondary)_70%)] z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-6">
             <span className="text-xl text-accent">✴</span>
             <span className="text-sm font-medium tracking-widest uppercase text-accent">System Architecture</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-normal text-foreground mb-6 tracking-tight">
            Our <span className="text-accent italic pr-2">Expertise</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed font-light">
            We help founders and businesses replace agency dependency with powerful in-house AI marketing systems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseItems.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants} className={item.className}>
              <BentoCard 
                variant={item.variant} 
                tag={item.tag}
                title={item.title}
                description={item.description}
                icon={item.icon}
                imageUrl={item.imageUrl}
                className="h-full min-h-[300px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
