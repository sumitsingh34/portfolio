"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-3">
        {title}
      </h2>
      <div className="mx-auto w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mb-4" />
      {subtitle && (
        <p className="text-muted max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
