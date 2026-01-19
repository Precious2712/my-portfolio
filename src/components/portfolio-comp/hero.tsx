"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className=" flex items-center justify-center bg-background pt-20">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Precious Odumirin
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text- hover:text-primary hover:underline underline-offset-4 transition-all duration-200"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base leading-relaxed text-gray-500 mb-8 font-sans font-bold"
          >
            I am a passionate and results-oriented Full Stack Developer specializing in building scalable web applications that solve real-world problems and drive business impact. With hands-on experience in modern JavaScript technologies, 
            I deliver robust, production-ready solutions — from intuitive front-end experiences to secure and performant backend services.
            I have successfully architected and deployed multiple full-stack applications, including e-commerce platforms, real-time chat systems, dashboards, and secure wallet transfer systems. My focus is always on clean code, maintainable architecture, and fast deployment cycles.
            I thrive in collaborative environments and I am open to roles in Full Stack, Frontend, or Backend Engineering where I can contribute to meaningful products and grow with high-impact teams.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <Link
              href="https://github.com/Precious2712"
              target="_blank"
              rel="noopener noreferrer"
              className="
    relative px-7 py-3 rounded-lg font-medium bg-blue-700
    bg-primary text-primary-foreground
    transition-all duration-300
    hover:scale-[1.02]
    hover:ring-2 hover:ring-primary/60 hover:ring-offset-2
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
  "
            >
              GitHub
            </Link>

          </motion.div>
        </div>

        
      </motion.div>
    </section>
  )
}
