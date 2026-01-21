"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="flex items-center justify-center bg-background pt-20">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            Full-Stack Engineer building scalable, real-world web applications
          </motion.h1>

          
          <motion.p
            variants={itemVariants}
            className="text-primary font-medium mb-6"
          >
            React · Next.js · Node.js · MongoDB · Firebase
          </motion.p>

          
          <motion.ul
            variants={itemVariants}
            className="space-y-2 text-gray-600 text-sm md:text-base mb-8"
          >
            <li>• Built and deployed multiple production-ready full-stack applications</li>
            <li>• Experience with authentication, real-time systems, dashboards, and APIs</li>
            <li>• Strong focus on clean architecture, performance, and maintainable code</li>
          </motion.ul>

          
          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <Link
              href="https://github.com/Precious2712"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative px-7 py-3 rounded-lg font-medium
                bg-primary text-primary-foreground
                transition-all duration-300
                hover:scale-[1.02]
                hover:ring-2 hover:ring-primary/60 hover:ring-offset-2
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              View GitHub
            </Link>

            <Link
              href="#contact"
              className="
                px-7 py-3 rounded-lg font-medium
                border border-primary text-primary
                transition-all duration-300
                hover:bg-primary/10
              "
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
