"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiDownload, HiChevronDown } from "react-icons/hi";
import ParticleField from "@/components/effects/ParticleField";
import GradientOrb from "@/components/effects/GradientOrb";
import Button from "@/components/ui/Button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  email: <HiMail className="w-5 h-5" />,
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background effects */}
      <ParticleField />
      <GradientOrb />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-sm sm:text-base font-mono mb-3"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-3"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-9 sm:h-11 mb-4 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-accent-blue font-medium"
            >
              {PERSONAL_INFO.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted text-base sm:text-lg max-w-2xl mx-auto mb-6"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            href={PERSONAL_INFO.resumeUrl}
            download
          >
            <HiDownload className="w-5 h-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.icon === "email" ? undefined : "_blank"}
              rel={link.icon === "email" ? undefined : "noopener noreferrer"}
              className="p-3 rounded-full border-2 border-accent-blue/30 text-muted hover:text-accent-blue hover:border-accent-blue/60 hover:bg-accent-blue/10 transition-all duration-200"
              aria-label={link.label}
            >
              {socialIconMap[link.icon]}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border-2 border-accent-blue/30 text-muted hover:text-accent-blue hover:border-accent-blue/60 hover:bg-accent-blue/10 transition-all duration-200 cursor-pointer z-10"
        aria-label="Scroll down"
      >
        <HiChevronDown className="w-5 h-5 animate-bounce-slow" />
      </motion.button>
    </section>
  );
}
