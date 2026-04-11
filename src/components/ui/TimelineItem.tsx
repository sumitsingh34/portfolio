"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[12px_1fr] lg:grid-cols-[1fr_24px_1fr] gap-4 lg:gap-6`}
    >
      {/* Left content (desktop only) */}
      <div className={`hidden lg:block ${isLeft ? "" : "order-none"}`}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass rounded-2xl p-5 sm:p-6"
          >
            <CardContent experience={experience} />
          </motion.div>
        ) : (
          <div />
        )}
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-3 lg:w-4 h-3 lg:h-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-lg shadow-accent-blue/30 flex-shrink-0 mt-6"
        />
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Right content (desktop) / Main content (mobile) */}
      <div>
        {isLeft ? (
          <>
            {/* Empty on desktop (content is on left), visible on mobile */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <CardContent experience={experience} />
              </motion.div>
            </div>
            <div className="hidden lg:block" />
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass rounded-2xl p-5 sm:p-6"
          >
            <CardContent experience={experience} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function CardContent({ experience }: { experience: Experience }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-mono text-accent-blue">{experience.period}</span>
        <span
          className={`text-sm px-2 py-0.5 rounded-full ${
            experience.type === "work"
              ? "bg-accent-blue/10 text-accent-blue"
              : experience.type === "part-time"
              ? "bg-accent-cyan/10 text-accent-cyan"
              : "bg-accent-purple/10 text-accent-purple"
          }`}
        >
          {experience.type === "work" ? "Full-Time" : experience.type === "part-time" ? "Part-Time" : "Academic"}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-heading">{experience.role}</h3>
      <p className="text-accent-purple mb-3">
        {experience.company} &middot; {experience.location}
      </p>

      <ul className="space-y-1.5 mb-4">
        {experience.description.map((desc, i) => (
          <li key={i} className="text-muted flex gap-2">
            <span className="text-accent-blue mt-1 flex-shrink-0">&#8226;</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-[var(--tag-bg)] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );
}
