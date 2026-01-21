"use client"

import { motion } from "framer-motion"

export function CurrentFocus() {
  return (
    <section id="current-focus" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl space-y-5"
        >
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">
              Current Focus
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-1 bg-primary rounded-full"
            />
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently building a{" "}
            <span className="font-medium text-foreground">
              React Native aviation booking application
            </span>{" "}
            using Expo, with emphasis on clean UI structure, smooth navigation,
            and scalable state management.
          </p>

          <p className="text-base text-muted-foreground leading-relaxed">
            The app uses{" "}
            <span className="font-medium text-foreground">
              Supabase
            </span>{" "}
            as the primary backend for PostgreSQL data storage and authentication,
            while leveraging prior experience with{" "}
            <span className="font-medium text-foreground">
              Firebase
            </span>{" "}
            for real-time data handling and auth workflows.
          </p>

          <span className="inline-block pt-2 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
            React Native · Expo · Supabase · Firebase · In Progress
          </span>
        </motion.div>
      </div>
    </section>
  )
}
