"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/data";
import { scrollToSection, trackResumeDownload } from "@/lib/utils";
import { HiDownload } from "react-icons/hi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const detect = () => {
      const offset = 120;
      let current = "hero";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = item.href;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", detect, { passive: true });
    detect();
    return () => window.removeEventListener("scroll", detect);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold gradient-text cursor-pointer"
            >
              SS
            </button>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-[length:var(--font-size-nav)] transition-colors cursor-pointer ${
                    activeSection === item.href
                      ? "text-accent-blue"
                      : "text-muted hover:text-heading"
                  }`}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                onClick={trackResumeDownload}
                className="flex items-center gap-2 px-4 py-2 text-[length:var(--font-size-body)] font-medium text-white rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 transition-opacity"
              >
                <HiDownload className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 text-muted hover:text-heading transition-colors cursor-pointer"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
