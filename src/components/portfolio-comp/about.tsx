"use client"

import { motion, type Variants } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
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
    <section id="about" className="py-6 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl decoration-blue-900 hover:text-primary hover:underline underline-offset-4 transition-all duration-200 md:text-4xl">About Me</h2>
            <motion.div
              className="h-1 bg-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-10"
          >
            <div className="space-y-4 text-gray-600 font-sans font-bold">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated Full Stack Developer with a strong foundation in building end-to-end web applications. My expertise spans frontend frameworks like React and Next.js, and backend technologies including Node.js, Express, and MongoDB.
                I am passionate about crafting solutions that are not just functional, but also efficient, scalable, and delightful to use.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I have worked on real-world projects that showcase my ability to:

                Build dynamic user interfaces and responsive layouts

                Design secure RESTful APIs and implement authentication flows

                Structure databases for performance and scalability

                Deploy applications to platforms like Vercel and Render

                I believe in writing clean, maintainable code, and solving problems through thoughtful design and continuous learning.
                When I am not coding, I am learning new tools, exploring cloud services, or building personal projects that sharpen my skills.
              </p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Socket.IO",
                  "REST APIs",
                  "Git",
                  "Vercel",
                  "Nest.js",
                  "Render",
                  "Node-mailer",
                  "Express.js",
                  "React-native",
                  "Tailwind CSS",
                  "Firebase"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                    text-blue-600
                      px-3 py-1
                      bg-primary/10
                      border border-primary/30
                      rounded-full
                      text-sm font-medium text-primary
                      transition-all duration-200
                      hover:bg-primary/20
                      hover:scale-105
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>


          <motion.div variants={itemVariants} className="space-y-4">
            <WhatIDeliverAccordion />
          </motion.div>


          <motion.div variants={itemVariants} className="pt-6">
            <p className="text-base text-muted-foreground mb-4">
              Looking for opportunities in Full Stack Development, Backend
              Engineering, or Frontend roles at scaling startups or established
              companies building innovative products.
            </p>

            <div className="flex gap-3 flex-wrap bg-blue-500">
              <a
                href="https://www.linkedin.com/in/matheew-nifemi-24aa1038b"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 rounded-lg font-medium text-sm
                  bg-primary text-primary-foreground
                  transition-all duration-300
                  hover:ring-2 hover:ring-primary/60 hover:ring-offset-2
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                "
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-card border border-border rounded-lg p-8 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.3
            }}
            whileHover={{
              borderColor: "var(--primary)",
              scale: 1.02,
              y: -3,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h3
              className="text-lg font-bold mb-4 text-primary"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Professional Experience
            </motion.h3>

            <article className="space-y-3">
              <div>
                <p className="font-semibold">Full Stack Developer</p>
                <p className="text-sm text-muted-foreground">Elonatech, Lagos, Nigeria • 2025  Present</p>
              </div>

              <motion.ul
                className="text-sm text-muted-foreground space-y-2 ml-4 list-disc"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{
                    color: "var(--primary)",
                    x: 5,
                    transition: { duration: 0.1 }
                  }}
                >
                  Resolved critical frontend bugs on product pages, ensuring 100% accurate product detail display
                </motion.li>

                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{
                    color: "var(--primary)",
                    x: 5,
                    transition: { duration: 0.1 }
                  }}
                >
                  Debugged and repaired POST API endpoints, enabling admins to add new products with zero errors
                </motion.li>

                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{
                    color: "var(--primary)",
                    x: 5,
                    transition: { duration: 0.1 }
                  }}
                >
                  Implemented full CRUD operations for blog module, managing 50+ content items across platform
                </motion.li>

                <motion.li
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{
                    color: "var(--primary)",
                    x: 5,
                    transition: { duration: 0.1 }
                  }}
                >
                  Managed Git workflow with 20+ commits, ensuring zero production environment disruptions
                </motion.li>
              </motion.ul>
            </article>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
