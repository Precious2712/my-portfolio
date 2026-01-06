"use client"

import { motion } from "framer-motion"

export function CurrentFocus() {
    return (
        <section id="current-focus" className="py-10 bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="max-w-3xl"
                >
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
                        What I'm Working On
                    </h2>

                    {/* Animated divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-12 h-1 bg-primary rounded-full mb-6"
                        style={{ transformOrigin: "left" }}
                    />

                    {/* Content */}
                    <p className="text-lg text-gray-600 font-sans leading-relaxed">
                        Currently deepening my frontend engineering skills by learning{" "}
                        <motion.span
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="font-medium text-foreground bg-linear-to-r from-primary/10 to-transparent px-1 rounded"
                        >
                            Reactive Native Programming
                        </motion.span>
                        . I'm following a structured, hands-on course and actively applying
                        the concepts by planning and building a personal project focused on
                        scalable state management, performance optimization, and predictable
                        UI data flow.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}