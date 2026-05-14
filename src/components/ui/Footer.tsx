"use client";

import Link from "next/link";
import { showComingSoon } from "@/components/ui/ComingSoonModal";


const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "OUR SERVICES", href: "/#solutions" },
  { name: "PROCESS", href: "/#solutions" },
  { name: "EXPERTISE", href: "/expertise" },
  { name: "PRICING", href: "/pricing" },
];

export const Footer = () => {
  return (
    <footer className="relative bg-background pt-24 pb-8 overflow-hidden [perspective:1000px]">
      {/* Muted background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(229, 208, 140,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* Left Column - Brand & Mission */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <span className="text-accent text-xl group-hover:rotate-90 transition-transform duration-500">✴</span>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                TRIVRO<span className="font-light text-accent">.ai</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs font-light">
              We help startups and growing businesses make better decisions, move faster, and scale smoothly using AI.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <button onClick={() => showComingSoon()} className="w-10 h-10 rounded-full border border-foreground/5 flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </button>
              <button onClick={() => showComingSoon()} className="w-10 h-10 rounded-full border border-foreground/5 flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
              <button onClick={() => showComingSoon()} className="w-10 h-10 rounded-full border border-foreground/5 flex items-center justify-center text-muted hover:text-foreground hover:bg-foreground/5 transition-all cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1c.3-1.6 1.4-2.8 3-3.1C8.7 3.5 12 3.5 12 3.5s3.3 0 6.5.5c1.6.3 2.7 1.5 3 3.1.5 1.5.5 4.9.5 4.9s0 3.4-.5 4.9c-.3 1.6-1.4 2.8-3 3.1-3.2.5-6.5.5-6.5.5s-3.3 0-6.5-.5c-1.6-.3-2.7-1.5-3-3.1-.5-1.5-.5-4.9-.5-4.9s0-3.4.5-4.9z"/><path d="m9.7 15.5 6-3.5-6-3.5z"/></svg>
              </button>
            </div>
          </div>

          {/* Middle Column - Contact */}
          <div className="md:col-span-4 md:pt-2">
            <h4 className="text-xs font-medium tracking-[0.1em] text-muted uppercase mb-4">
              WE&apos;D LOVE TO HELP YOU GROW
            </h4>
            <a href="mailto:support@trivro.in" className="text-xl text-foreground border-b border-foreground/30 pb-1 hover:border-accent hover:text-accent transition-colors mb-12 inline-block">
              support@trivro.in
            </a>

            <div className="mt-8">
              <h4 className="text-xs font-medium tracking-[0.1em] text-muted uppercase mb-4">
                LOCATION
              </h4>
              <p className="text-sm text-foreground leading-relaxed max-w-[200px] font-light">
                Built in India. Operating globally for high-growth enterprises.
              </p>
            </div>
          </div>

          {/* Right Column - Nav Links */}
          <div className="md:col-span-4 md:pt-2 flex flex-col md:items-end">
            <h4 className="text-xs font-medium tracking-[0.1em] text-muted uppercase mb-6 md:text-right w-full">
              MENU
            </h4>
            <ul className="flex flex-col gap-4 md:items-end">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs font-medium tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Small Print */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-muted relative z-20">
          <p>© 2026 TRIVRO.AI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <button onClick={() => showComingSoon()} className="hover:text-foreground transition-colors cursor-pointer uppercase text-[10px] tracking-[0.15em] text-muted">TERMS & CONDITION</button>
            <button onClick={() => showComingSoon()} className="hover:text-foreground transition-colors cursor-pointer uppercase text-[10px] tracking-[0.15em] text-muted">PRIVACY POLICY</button>
          </div>
        </div>
      </div>

      {/* Massive Background Typography overlapping the bottom */}
      <h1 
        className="absolute bottom-[-10%] md:bottom-[-20%] left-1/2 -translate-x-1/2 text-[20vw] font-bold text-foreground/[0.02] tracking-tighter w-full text-center select-none pointer-events-none"
        style={{ transformStyle: "preserve-3d", transform: "translateX(-50%) rotateX(20deg)" }}
      >
        TRIVRO.AI
      </h1>
    </footer>
  );
};
