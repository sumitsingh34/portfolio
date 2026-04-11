"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiCode,
  HiGlobe,
  HiDatabase,
  HiCloud,
  HiChartBar,
  HiCog,
} from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import SkillBar from "@/components/ui/SkillBar";
import { SKILL_CATEGORIES } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  code: <HiCode className="w-6 h-6" />,
  web: <HiGlobe className="w-6 h-6" />,
  database: <HiDatabase className="w-6 h-6" />,
  cloud: <HiCloud className="w-6 h-6" />,
  data: <HiChartBar className="w-6 h-6" />,
  tools: <HiCog className="w-6 h-6" />,
};

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-16 md:py-24 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <GlassCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-accent-blue/10 text-accent-blue">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="text-lg font-semibold text-heading">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
