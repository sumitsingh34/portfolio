"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiAcademicCap } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EDUCATION } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {EDUCATION.map((edu) => (
            <motion.div key={edu.degree + edu.institution} variants={fadeInUp}>
              <GlassCard className="p-6 h-full relative overflow-hidden">
                {/* Accent left border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue to-accent-purple" />

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple flex-shrink-0">
                    <HiAcademicCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-heading">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-blue text-sm">{edu.field}</p>
                    <p className="text-muted text-sm mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted text-xs">{edu.location}</p>

                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="text-muted">
                        <span className="text-heading font-medium">{edu.year}</span>
                      </span>
                      <span className="text-muted">
                        GPA: <span className="text-heading font-medium">{edu.gpa}</span>
                      </span>
                    </div>

                    {/* Key coursework */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {edu.coursework.slice(0, 4).map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2 py-1 rounded-md bg-[var(--tag-bg)] text-muted"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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
