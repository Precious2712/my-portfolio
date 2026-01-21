"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Plus, Minus } from "lucide-react"
import { highlights } from "@/data/high-light"

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}


export function WhatIDeliverAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="space-y-4"
        >
            <h3 className="text-xl font-semibold text-foreground">
                What I Deliver
            </h3>

            <div className="space-y-3">
                {highlights.map((item, index) => {
                    const isOpen = openIndex === index

                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`
                border border-border rounded-lg
                transition-all duration-300
                hover:border-primary/40
                ${isOpen ? "bg-primary/5 border-primary/40" : "bg-background"}
              `}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="
                  w-full flex items-start justify-between gap-3
                  p-4 text-left cursor-pointer
                  focus:outline-none
                "
                            >
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="font-medium text-sm md:text-base text-foreground">
                                        {item.title}
                                    </span>
                                </div>

                                {isOpen ? (
                                    <Minus className="w-4 h-4 text-primary mt-1" />
                                ) : (
                                    <Plus className="w-4 h-4 text-primary mt-1" />
                                )}
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: isOpen ? "auto" : 0,
                                    opacity: isOpen ? 1 : 0,
                                }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="overflow-hidden px-4"
                            >
                                <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}
