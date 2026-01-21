"use client"

import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React native",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "Super-base"],
    },
    {
      category: "Databases & DevOps",
      skills: ["MongoDB", "Firebase", "Firestore", "Vercel", "Git", "GitHub"],
    },
  ]

  return (
    <section id="skills" className="py-4 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.h2
          className="text-3xl hover:text-primary hover:underline underline-offset-4 transition-all duration-200 decoration-blue-900 font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        
        <div className="space-y-10 mt-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                {category.category}
              </h3>

              <ul className="
                grid grid-cols-2 lg:grid-cols-3
                gap-x-6 gap-y-2
              ">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="
                      text-sm text-muted-foreground
                      transition-colors duration-200
                      hover:text-blue-600
                      cursor-default
                    "
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
