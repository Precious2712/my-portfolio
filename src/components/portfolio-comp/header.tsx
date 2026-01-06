"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-background/50 backdrop-blur-sm"
        } border-b border-border`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="font-bold text-xl text-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Precious
        </motion.div>

        <div className="relative ">
          <button onClick={handleOpen} className="bg-sky-400 p-1 rounded-lg">
            <Menu className="cursor-pointer"  />
          </button>

          {open && (
            <ul className="flex flex-col gap-2 text-sm absolute bg-blue-500 py-2 px-3 rounded-md top-10 right-0">
              {[
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <motion.li key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href={item.href} className="hover:text-primary transition-colors hover:bg-gray-700 p-1.5 rounded-lg">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
