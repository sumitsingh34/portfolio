"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-base">
        <span className="text-text">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--glass-bg)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
        />
      </div>
    </div>
  );
}
