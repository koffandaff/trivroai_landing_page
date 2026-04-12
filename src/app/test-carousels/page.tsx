import React from "react";
import { InfiniteMarquee } from "@/components/ui/carousels/InfiniteMarquee";
import { CoverflowCarousel } from "@/components/ui/carousels/CoverflowCarousel";
import { ExpandableCarousel } from "@/components/ui/carousels/ExpandableCarousel";
import { SnapScrollCarousel } from "@/components/ui/carousels/SnapScrollCarousel";

export const metadata = {
  title: "Carousel Explorations | Trivoo",
};

// --- DUMMY DATA ---
const marqueeItems = [
  "Predictive Analytics",
  "Dynamic Funnels",
  "Conversion AI",
  "Automated A/B Testing",
  "Smart Retargeting",
  "Ad Creative Gen",
  "AEO Optimization",
];

const coverflowItems = [
  {
    id: "c1",
    title: "Meta Ads Mastery",
    subtitle: "Consistently generate high-ROI ad creatives trained on $50M+ in successful ad spend.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c2",
    title: "Instant Funnel Builder",
    subtitle: "Launch high-converting landing pages that adapt in real-time to user intent.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c3",
    title: "SEO & AEO Dominance",
    subtitle: "Structure your content to be the definitive answer for ChatGPT, Gemini, and search engines.",
    image: "https://images.unsplash.com/photo-1432888117426-ed5c8682611e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c4",
    title: "Predictive LTV",
    subtitle: "Identify your most valuable customers before they even make their first purchase.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "c5",
    title: "Automated Workflows",
    subtitle: "Connect your entire marketing stack with intelligent, self-healing automations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
];

const expandableItems = [
  {
    id: "e1",
    title: "Analyze",
    category: "Step 01",
    description: "Our AI immediately ingests your historical data, identifying patterns and missing conversion opportunities.",
    gradient: "bg-gradient-to-br from-green-500/10 to-transparent",
  },
  {
    id: "e2",
    title: "Generate",
    category: "Step 02",
    description: "Instantly produce hundreds of targeted copy variations and ad creatives tailored to specific audience clusters.",
    gradient: "bg-gradient-to-br from-emerald-500/10 to-transparent",
  },
  {
    id: "e3",
    title: "Deploy",
    category: "Step 03",
    description: "Push campaigns live directly to Meta, Google, and TikTok with optimized budget allocation.",
    gradient: "bg-gradient-to-br from-teal-500/10 to-transparent",
  },
  {
    id: "e4",
    title: "Scale",
    category: "Step 04",
    description: "Continuous micro-adjustments scale winning campaigns while ruthlessly cutting underperformers.",
    gradient: "bg-gradient-to-br from-[#C4D9CC]/10 to-transparent",
  },
];

const snapItems = [
  {
    id: "s1",
    title: "Hyper-Personalization",
    description: "Deliver unique experiences to every visitor based on real-time behavior and intent signals.",
    metric: "34%",
    metricLabel: "Uplift in CVR",
  },
  {
    id: "s2",
    title: "Unified Analytics",
    description: "Stop guessing. See exactly which touchpoints contribute to your bottom line in a single dashboard.",
    metric: "360°",
    metricLabel: "Attribution",
  },
  {
    id: "s3",
    title: "Creative Fatigue Prevention",
    description: "Automatically cycle out declining creatives and swap in fresh variations before CPA rises.",
    metric: "2.5x",
    metricLabel: "Ad Lifespan",
  },
  {
    id: "s4",
    title: "Voice Share Tracker",
    description: "Monitor your brand's presence across all major AI LLMs and traditional search indexes.",
    metric: "24/7",
    metricLabel: "Monitoring",
  },
  {
    id: "s5",
    title: "Churn Prediction",
    description: "Identify at-risk subscribers and automated tailored win-back campaigns to save revenue.",
    metric: "-18%",
    metricLabel: "Avg Churn",
  },
];

export default function TestCarouselsPage() {
  return (
    <div className="min-h-screen bg-[#0C120E] text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Layout Carousel <span className="text-gradient-green">Explorations</span>
        </h1>
        <p className="text-foreground-muted max-w-2xl text-lg">
          A testing ground to evaluate different Framer Motion interactions and carousel structures within the Avenor-inspired aesthetic.
        </p>
      </div>

      <div className="space-y-32">
        {/* Infinite Marquee */}
        <section>
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <h2 className="text-2xl font-semibold mb-2">1. Infinite Marquee</h2>
            <p className="text-foreground-muted text-sm">Best for logos, feature pills, or continuous background elements.</p>
          </div>
          <InfiniteMarquee items={marqueeItems} speed={30} />
        </section>

        {/* Coverflow Carousel */}
        <section>
          <div className="max-w-7xl mx-auto px-6 mb-8">
            <h2 className="text-2xl font-semibold mb-2">2. Apple-Style 3D Coverflow</h2>
            <p className="text-foreground-muted text-sm">Best for premium hero sections or deep visual case studies.</p>
          </div>
          <CoverflowCarousel items={coverflowItems} />
        </section>

        {/* Expandable Accordion */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">3. Expandable Accordion Stack</h2>
            <p className="text-foreground-muted text-sm">Best for step-by-step processes or interactive feature matrices.</p>
          </div>
          <ExpandableCarousel items={expandableItems} />
        </section>

        {/* Snap Scroll Gallery */}
        <section className="max-w-7xl mx-auto">
          <div className="px-6 mb-8">
            <h2 className="text-2xl font-semibold mb-2">4. Horizontal Snap Scroll</h2>
            <p className="text-foreground-muted text-sm">Best for standard galleries, stats, or blog post highlights.</p>
          </div>
          <SnapScrollCarousel items={snapItems} />
        </section>
      </div>
    </div>
  );
}
