"use client"

import { motion, type Variants } from "framer-motion"
import { WhatIDeliverAccordion } from "./hightlight-accordion"

export function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-12 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          
          <motion.div variants={itemVariants} className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              About Me
            </h2>
            <motion.div
              className="h-1 w-12 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>

          
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-10"
          >
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I am a Full Stack Developer focused on building reliable,
                scalable, and user-centered web applications. I work across the
                stack — from crafting responsive interfaces to designing secure
                backend systems and APIs.
              </p>

              <p className="text-base leading-relaxed">
                My experience spans real-world products including dashboards,
                authentication systems, real-time applications, and data-driven
                platforms. I care deeply about clean architecture, performance,
                and writing code that teams can confidently maintain and scale.
              </p>

              <p className="text-base leading-relaxed">
                Outside of day-to-day development, I continuously improve my
                skills by exploring new tools, refining existing systems, and
                building personal projects that mirror production environments.
              </p>
            </div>

            
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground">
                Core Technologies
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "NestJS",
                  "Socket.IO",
                  "REST APIs",
                  "Firebase",
                  "Tailwind CSS",
                  "Git",
                  "Vercel",
                  "Render",
                  "React Native",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1 rounded-full text-sm font-medium
                      bg-primary/10 text-primary
                      border border-primary/30
                      transition-all duration-200
                      hover:bg-primary/20
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          
          <motion.div variants={itemVariants}>
            <WhatIDeliverAccordion />
          </motion.div>

          
          <motion.div variants={itemVariants} className="pt-4 space-y-4">
            <p className="text-base text-muted-foreground">
              I am open to Full Stack, Frontend, or Backend roles where I can
              contribute to impactful products and grow alongside strong
              engineering teams.
            </p>

            <a
              href="https://www.linkedin.com/in/matheew-nifemi-24aa1038b"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block px-5 py-2.5 rounded-lg text-sm font-medium
                bg-primary text-primary-foreground
                transition-all duration-300
                hover:ring-2 hover:ring-primary/60 hover:ring-offset-2
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              Connect on LinkedIn
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
