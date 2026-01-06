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

export  function ProjectCard({ project, index }: ProjectCardProps) {
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
        <h3 className="text-xl hover:text-primary hover:underline underline-offset-4 transition-all duration-200">{project.title}</h3>
        <p className="text-sm text-muted-foreground font-medium mt-3">{project.subtitle}</p>
      </div>

      <p className="text-sm leading-relaxed text-gray-600 font-sans mb-4">{project.description}</p>

      <motion.div
        className="mb-4 p-3 bg-background rounded border border-primary/20"
        whileHover={{ borderColor: "var(--primary)" }}
      >
        <p className="text-sm font-semibold text-primary mb-1">Measurable Impact:</p>
        <p className="text-sm text-foreground">{project.impact}</p>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <motion.span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.liveDemo ? (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors bg-primary/10 px-3 py-2 rounded"
            >
              Live Demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
          </motion.div>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View on GitHub
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.article>
  )
}
