"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiBadgeCheck } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { CERTIFICATIONS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Certifications() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-16 md:py-24 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and recognitions"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div key={cert.title} variants={fadeInUp}>
              <GlassCard className="p-5 h-full">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-accent-blue/10 text-accent-blue flex-shrink-0">
                    <HiBadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-heading">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-accent-purple mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted mt-1">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
