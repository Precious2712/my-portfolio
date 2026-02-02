"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    title: string
    subtitle: string
    description: string
    impact: string
    technologies: string[]
    link: string
    liveDemo?: boolean
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium mt-2">
          {project.subtitle}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-gray-600 mb-4">
        {project.description}
      </p>

      {/* <div className="mb-4 p-3 bg-background rounded border border-primary/20">
        <p className="text-sm font-semibold text-primary mb-1">
          Engineering Impact
        </p>
        <p className="text-sm text-foreground">
          {project.impact}
        </p>
      </div> */}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-primary/10 px-3 py-2 rounded"
        >
          {project.liveDemo ? "Live Demo" : "View on GitHub"}
        </Link>
      </div>
    </motion.article>
  )
}
