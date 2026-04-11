"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/data";
import { scrollToSection, trackResumeDownload } from "@/lib/utils";
import { HiDownload, HiX } from "react-icons/hi";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => scrollToSection(href), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-72 glass bg-dark"
          >
            <div className="flex flex-col h-full p-6">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="p-2 text-muted hover:text-heading transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col gap-2 mt-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left px-4 py-3 rounded-lg text-[length:var(--font-size-nav)] transition-colors cursor-pointer ${
                      activeSection === item.href
                        ? "text-heading bg-card"
                        : "text-muted hover:text-heading hover:bg-card"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* Resume button */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                onClick={trackResumeDownload}
                className="flex items-center justify-center gap-2 px-4 py-3 text-[length:var(--font-size-body)] font-medium text-white rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 transition-opacity"
              >
                <HiDownload className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
