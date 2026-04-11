"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiLocationMarker, HiCheck } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const contactIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="w-5 h-5" />,
  linkedin: <FaLinkedin className="w-5 h-5" />,
  email: <HiMail className="w-5 h-5" />,
};

const brandColors: Record<string, string> = {
  github: "text-[var(--color-github)]",
  linkedin: "text-[#0A66C2]",
  email: "text-[#EA4335]",
};

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mykbryzq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to chat? Let's connect!"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Contact form */}
          <motion.div variants={fadeInUp}>
            <GlassCard className="p-6 sm:p-8">
              {formState === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
                  >
                    <HiCheck className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-muted mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-[var(--input-bg)] border border-border text-heading placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-muted mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-[var(--input-bg)] border border-border text-heading placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-muted mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-[var(--input-bg)] border border-border text-heading placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-lg bg-[var(--input-bg)] border border-border text-heading placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-red-400">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-heading font-medium hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                  >
                    {formState === "submitting" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-heading mb-2">
                Let&apos;s Work Together
              </h3>
              <p className="text-muted">
                I&apos;m always open to discussing new opportunities, creative ideas,
                or ways to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <GlassCard className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    <HiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted">Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-heading hover:text-accent-blue transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple">
                    <HiLocationMarker className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted">Location</p>
                    <p className="text-heading">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Social links */}
            <div>
              <p className="text-sm text-muted mb-3">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.icon === "email" ? undefined : "_blank"}
                    rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                    className={`p-3 rounded-lg glass glass-hover ${brandColors[link.icon]} hover:text-heading transition-colors`}
                    aria-label={link.label}
                  >
                    {contactIconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
