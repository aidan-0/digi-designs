"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// TODO: when clicking outside of nav, close it
// Add something down the bottom, like an email or something


export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { text: "Showcase", href: "/showcase" },
    { text: "Services", href: "/#services" },
    { text: "Process", href: "/#process" },
    { text: "Guarantees", href: "/#guarantees" },
    { text: "Contact Us", href: "/#contact" },
  ]

  return (
    <div className="absolute z-50">
      <Button
        variant="outline"
        size="icon"
        className="fixed top-8 right-8 z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-64 bg-background/85 shadow-lg p-6 z-40"
            id="mobile-navbar-style"
          >
            <div className="flex flex-col h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <Link href="/">
                  <Image
                    src="/webp-logos/Digi_Designs_Logo_Blue.webp"
                    alt="Digi Logo"
                    width={128}
                    height={128}
                    className="w-28 h-14"
                  />
                </Link>
              </motion.div>
              <nav className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-lg hover:text-dd-light-blue transition duration-400"
                      onClick={toggleMenu}
                    >
                      <span>{item.text}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}