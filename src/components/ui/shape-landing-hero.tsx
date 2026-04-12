"use client";

import { motion, Variants } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { StarButton } from "./star-button";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-foreground/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-foreground/[0.08]",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export function HeroGeometric({
    badge = "Platform Highlights",
    title1 = "Build & Scale",
    title2 = "High-Converting Campaigns",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E5D08C]/[0.02] via-transparent to-foreground/[0.02] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-[#E5D08C]/[0.1]" // Sand Gold
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-zinc-500/[0.15]" // Grey
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-[#E5D08C]/[0.08]" // Faint Sand
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-foreground/[0.05]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-[#D3BE7F]/[0.12]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/[0.03] border border-foreground/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-[#E5D08C] stroke-none" />
                        <span className="text-sm text-foreground-muted tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-medium mb-6 md:mb-8 tracking-tight leading-[1.05]">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-[#E5D08C] via-[#F2E4B8] to-[#D3BE7F]"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-foreground-muted mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            India&apos;s Best AI Marketing Tools Ecosystem | 51+ AI Tools Under One System. Reduce dependency, cut costs, and take full control of your growth.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="#contact" className="block">
                            <StarButton>Book Platform Demo</StarButton>
                        </Link>
                        <Link href="/pricing" className="px-6 py-3 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/10 transition-colors font-medium text-center">
                            View Pricing
                        </Link>
                    </motion.div>

                    <motion.div
                        custom={4}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-foreground/[0.05] pt-12 max-w-5xl mx-auto"
                    >
                        <GlassCard className="p-6 relative group overflow-hidden border border-foreground/5 hover:border-accent/40 hover:bg-foreground/[0.04] transition-all cursor-default text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-[11px] sm:text-xs font-bold text-foreground tracking-widest uppercase mb-2 relative z-10 flex items-center justify-center gap-2"><span className="text-accent text-lg leading-none">✴</span>Boost Lead Quality</h3>
                            <p className="text-muted text-xs leading-relaxed relative z-10">Higher conversion with smart AI automation.</p>
                        </GlassCard>
                        <GlassCard className="p-6 relative group overflow-hidden border border-foreground/5 hover:border-accent/40 hover:bg-foreground/[0.04] transition-all cursor-default text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-[11px] sm:text-xs font-bold text-foreground tracking-widest uppercase mb-2 relative z-10 flex items-center justify-center gap-2"><span className="text-accent text-lg leading-none">✴</span>Cut Costs by 50–70%</h3>
                            <p className="text-muted text-xs leading-relaxed relative z-10">Replace agencies and expensive subscriptions.</p>
                        </GlassCard>
                        <GlassCard className="p-6 relative group overflow-hidden border border-foreground/5 hover:border-accent/40 hover:bg-foreground/[0.04] transition-all cursor-default text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-[11px] sm:text-xs font-bold text-foreground tracking-widest uppercase mb-2 relative z-10 flex items-center justify-center gap-2"><span className="text-accent text-lg leading-none">✴</span>AI In-House Execution</h3>
                            <p className="text-muted text-xs leading-relaxed relative z-10">No agencies needed. No hidden platform fees.</p>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>

            {/* Gradient overlay to smoothly blend with next sections */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        </div>
    );
}
