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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">
                        What I&apos;m Working On
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-12 h-1 bg-primary rounded-full mb-6"
                        style={{ transformOrigin: "left" }}
                    />

                    <p className="text-lg text-gray-600 font-sans leading-relaxed">
                        I&apos;m currently building a{" "}
                        <motion.span
                            initial={{ opacity: 0.5 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="font-medium text-foreground bg-linear-to-r from-primary/10 to-transparent px-1 rounded"
                        >
                            React Native mobile application
                        </motion.span>{" "}
                        using Expo, with a focus on clean UI architecture, mobile navigation,
                        and predictable state management.
                    </p>

                    <p className="mt-4 text-base text-gray-600 font-sans leading-relaxed">
                        The application uses{" "}
                        <span className="font-medium text-foreground">
                            Firebase as the backend
                        </span>
                        , implementing{" "}
                        <span className="font-medium text-foreground">
                            Firebase Authentication
                        </span>{" "}
                        for secure user sign-up and sign-in, along with{" "}
                        <span className="font-medium text-foreground">
                            Firebase Database
                        </span>{" "}
                        for persistent data storage and real-time synchronization.
                    </p>

                    <p className="mt-4 text-base text-gray-600 font-sans leading-relaxed">
                        The project is currently shared as a{" "}
                        <span className="font-medium text-foreground">
                            development preview
                        </span>{" "}
                        and can be viewed using{" "}
                        <a
                            href="https://expo.dev/accounts/moon_light12/projects/library-books/updates/d55ee49f-0654-4ffb-a959-05e52e49f4e4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary underline underline-offset-4 hover:opacity-80 transition"
                        >
                            Expo Go
                        </a>
                        , enabling rapid iteration and real-device testing prior to app store
                        deployment.
                    </p>

                    <span className="inline-block mt-4 text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                        React Native · Expo · Firebase Auth · Firebase Database · In Development
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
