"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { showComingSoon } from "@/components/ui/ComingSoonModal";

const navItems = [
  { name: "Solutions", href: "/#solutions" },
  { name: "Expertise", href: "/expertise" },
  {
    name: "Enterprise",
    href: "/enterprise",
    children: [
      { name: "Enterprise Overview", href: "/enterprise" },
      { name: "Security & Compliance", href: "/enterprise/security" },
      { name: "Custom Workflows", href: "/enterprise/custom-workflows" },
      { name: "Support & Onboarding", href: "/enterprise/support" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { 
    name: "Resources", 
    href: "/resources/documentation",
    children: [
      { name: "Blog / Insights", href: "https://blog.trivro.in/" },
      { name: "What's New", href: "/resources/whats-new" },
      { name: "Documentation", href: "/resources/documentation" },
      { name: "Help Center", href: "/resources/help-center" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "FAQs", href: "/resources/faq" },
    ]
  },
  { name: "About", href: "/about" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6",
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/80 border-b border-card-border"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Desktop Navigation (Left)  */}
        <div className="hidden lg:flex items-center gap-1 w-1/3">
          {navItems.slice(0,3).map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="px-4 py-6 -my-4 text-xs font-medium uppercase tracking-[0.05em] text-muted hover:text-foreground transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 before:absolute before:-top-4 before:left-0 before:h-4 before:w-full">
                  <div className="bg-card border border-card-border rounded-3xl shadow-2xl p-3 flex flex-col gap-1 backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="px-4 py-3 text-sm font-medium text-muted hover:text-accent hover:bg-foreground/[0.03] rounded-2xl transition-colors whitespace-nowrap block"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Brand (Center) */}
        <div className="flex justify-center w-1/3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-accent text-xl group-hover:rotate-90 transition-transform duration-500">✴</span>
            <span className="text-xl font-bold tracking-tight text-foreground">
              TRIVRO<span className="font-light text-accent">.ai</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation (Right) */}
        <div className="hidden lg:flex items-center justify-end gap-1 w-1/3">
          {navItems.slice(3).map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="px-4 py-6 -my-4 text-xs font-medium uppercase tracking-[0.05em] text-muted hover:text-foreground transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
              </Link>

              {item.children && (
                <div className="absolute top-full right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 before:absolute before:-top-4 before:left-0 before:h-4 before:w-full">
                  <div className="bg-card border border-card-border rounded-3xl shadow-2xl p-3 flex flex-col gap-1 backdrop-blur-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="px-4 py-3 text-sm font-medium text-muted hover:text-accent hover:bg-foreground/[0.03] rounded-2xl transition-colors whitespace-nowrap block"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full border border-card-border hover:bg-foreground/5 transition-all group"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-accent group-hover:rotate-45 transition-transform duration-500" />
            ) : (
              <Moon size={16} className="text-accent group-hover:-rotate-12 transition-transform duration-500" />
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:bg-foreground/10 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[-1] top-0 left-0 right-0 h-screen overflow-y-auto bg-background/98 backdrop-blur-2xl flex flex-col p-8 pt-24 pb-32"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col border-b border-foreground/[0.04]">
                  {!item.children ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-medium tracking-tight text-foreground py-4 flex items-center justify-between"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                        className="text-xl font-medium tracking-tight text-foreground py-4 flex items-center justify-between text-left"
                      >
                        {item.name}
                        <ChevronDown 
                          size={20} 
                          className={cn("transition-transform duration-300", openMobileDropdown === item.name && "rotate-180")} 
                        />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-2 pb-4"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="pl-4 py-2 text-base text-muted hover:text-accent font-medium border-l border-foreground/10 ml-2"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4">
              <button onClick={() => showComingSoon()} className="text-center py-4 font-bold uppercase tracking-[0.2em] rounded-full bg-accent text-background hover:bg-foreground hover:text-background transition-all text-xs">
                Book a Demo
              </button>
              <button
                onClick={toggleTheme}
                className="text-center py-4 font-medium uppercase tracking-[0.15em] rounded-full border border-card-border text-foreground hover:bg-foreground/5 transition-all text-xs flex items-center justify-center gap-2"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
