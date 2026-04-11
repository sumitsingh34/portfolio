"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Color bar */}
      <div className="h-1 bg-gradient-to-r from-accent-blue to-accent-purple" />

      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-heading mb-2 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-[var(--tag-bg)] text-accent-blue"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted hover:text-heading transition-colors duration-200"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted hover:text-accent-blue transition-colors"
            >
              <FaExternalLinkAlt className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
