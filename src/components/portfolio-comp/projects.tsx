"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"
import { projects } from "@/data/project"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export function Projects() {
  return (
    <section id="projects" className="py-14 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl hover:text-primary hover:underline underline-offset-4 transition-all duration-200 decoration-blue-900 font-sans">Featured Projects</h2>
          <p className="text-gray-600 text-lg mt-3 font-sans">
            Eight production-ready applications demonstrating full-stack expertise
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
