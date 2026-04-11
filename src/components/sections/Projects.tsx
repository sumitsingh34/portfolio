"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="projects" className="py-16 md:py-24 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Some of the things I've built"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}

          {/* More Projects card */}
          <motion.a
            ref={ref}
            href="https://github.com/sumitsingh34"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: PROJECTS.length * 0.1 }}
            className="group glass rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center p-6 text-center min-h-[200px]"
          >
            <FaGithub className="w-12 h-12 text-muted group-hover:text-accent-blue transition-colors mb-4" />
            <h3 className="text-xl font-semibold text-heading mb-2">More Projects</h3>
            <p className="text-muted mb-4">Check out more of my work on GitHub</p>
            <span className="inline-flex items-center gap-2 text-accent-blue font-medium">
              View GitHub
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
