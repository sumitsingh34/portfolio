"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";
import { SOCIAL_LINKS, NAV_ITEMS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  email: <HiMail className="w-5 h-5" />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold gradient-text">Sumit Singh</span>
            <p className="mt-2 text-sm text-muted">
              Software Engineer crafting scalable web applications and cloud-native solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(1, 6).map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-muted hover:text-heading transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-heading uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.icon === "email" ? undefined : "_blank"}
                  rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg glass glass-hover text-muted hover:text-heading transition-colors"
                  aria-label={link.label}
                >
                  {iconMap[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} &nbsp; Sumit Singh. Built with Next.js &amp; Tailwind CSS.
          </p>
          <button
            onClick={() => scrollToSection("hero")}
            className="p-2 rounded-lg glass glass-hover text-muted hover:text-heading transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <HiArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
