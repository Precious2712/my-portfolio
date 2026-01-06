"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Contact() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 font-sans mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm actively seeking opportunities to contribute my Full Stack expertise to innovative teams. Let's connect
          and discuss how I can drive value for your projects.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com/Precious2712"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium inline-block"
            >
              GitHub Profile
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
