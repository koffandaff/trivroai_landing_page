"use client";

import { motion } from "framer-motion";
import { PremiumButton } from "@/components/ui/PremiumButton";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Subtle organic background gradient mesh */}
      <div className="absolute top-[10%] left-[20%] w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,rgba(38,64,46,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[30%] right-[15%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(38,64,46,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight text-foreground mb-6 leading-[1.05]">
            Build & Scale <br className="hidden md:block" />
            <span className="font-medium text-foreground">High-Converting Campaigns</span>
          </h1>
          <p className="text-sm md:text-base text-muted max-w-xl mx-auto mb-10 leading-relaxed font-light">
            India&apos;s Best AI Marketing Tools Ecosystem | 51+ AI Tools Under One System. Reduce dependency, cut costs, and take full control of your growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <PremiumButton size="lg" href="#">
              Book Platform Demo
            </PremiumButton>
            <PremiumButton variant="outline" size="lg" href="/pricing">
              View Pricing
            </PremiumButton>
          </div>
        </motion.div>

        {/* Step-by-Step System Flow */}
        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20 mt-12">
          {[
            {
              num: "01",
              title: "Connect Data",
              desc: "Integrate platforms & data sources.",
              icon: "✦"
            },
            {
              num: "02",
              title: "AI Analysis",
              desc: "Discover hidden conversion gaps.",
              icon: "✦"
            },
            {
              num: "03",
              title: "Generate Assets",
              desc: "Auto-create high-ROI campaigns.",
              icon: "✦"
            },
            {
              num: "04",
              title: "Scale Confidently",
              desc: "Continuous autonomous optimization.",
              icon: "✦"
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-accent/15 p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent/30 transition-colors duration-500 min-h-[220px]"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(43,87,61,0.2)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-accent/60 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform origin-top-left">
                <span className="text-xl">{step.icon}</span>
              </div>
              
              <div className="relative z-10 mt-auto pt-8">
                <div className="text-accent/50 font-mono text-xs mb-3 tracking-widest">{step.num}</div>
                <h3 className="text-foreground font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Connecting Line indicator on desktop */}
              {i < 3 && (
                <div className="hidden md:block absolute right-0 top-12 w-4 h-[1px] bg-accent/30 translate-x-full"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
