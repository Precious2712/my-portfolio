'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Plus, Minus } from "lucide-react";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const highlights = [
    {
        title: "End-to-End Full Stack Development",
        description:
            "I build complete, production-ready web applications — from intuitive frontend interfaces to secure backend APIs and scalable database architecture."
    },
    {
        title: "Modern Frontend Engineering",
        description:
            "I develop responsive, high-performance user interfaces using React and Next.js, with a strong focus on accessibility, UX, and clean component design."
    },
    {
        title: "Backend APIs & Authentication",
        description:
            "I design and implement secure RESTful APIs with Node.js and Express, including authentication, authorization, and role-based access control."
    },
    {
        title: "Database Design & Data Modeling",
        description:
            "I structure efficient and scalable databases using MongoDB and SQL, ensuring data integrity, performance optimization, and future scalability."
    },
    {
        title: "Deployment & Production Readiness",
        description:
            "I deploy and manage applications using platforms like Vercel and Render, handling environment configuration and production builds."
    },
    {
        title: "Real-Time & Interactive Features",
        description:
            "I implement real-time functionality such as live updates and chat systems using Socket.IO to improve user engagement and interactivity."
    }
];

export function WhatIDeliverAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="space-y-4"
        >
            <h3 className="text-xl font-semibold text-foreground">
                What I Bring to a Team
            </h3>

            <div className="space-y-3">
                {highlights.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`
                bg-background/60 backdrop-blur
                border border-border
                rounded-lg
                transition-all duration-300
                hover:border-primary/40
                ${isOpen ? "bg-primary/5 border-primary/40" : ""}
              `}
                        >
                           
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className="
                  w-full flex items-center justify-between cursor-pointer
                  gap-3 p-4 text-left
                  focus:outline-none
                "
                            >
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="font-semibold text-sm md:text-base text-foreground">
                                        {item.title}
                                    </span>
                                </div>

                                <span className="ml-2 flex items-center justify-center">
                                    {isOpen ? (
                                        <Minus className="w-4 h-4 text-primary" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-primary" />
                                    )}
                                </span>
                            </button>

                            
                            <motion.div
                                initial={false}
                                animate={{
                                    height: isOpen ? "auto" : 0,
                                    opacity: isOpen ? 1 : 0
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden px-4"
                            >
                                <p className="pb-4 text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
}
