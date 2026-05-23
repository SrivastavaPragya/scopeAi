"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Meet Eva" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    // { href: "/analyze", label: "Analyzer" },
    // { href: "/blog", label: "Blog" },
    { href: "/api-docs", label: "API Docs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 blur-xl bg-blue-400/30 group-hover:bg-cyan-400/40 transition-all" />
              </div>
              <span className="text-xl font-bold text-gradient">
                Startup Analyzer
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/analyze" className="hidden md:block">
                <button className="relative bg-gradient-to-r px-3 py-2 rounded-md from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30">
                  Get Started
                </button>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 right-0 z-40 md:hidden glass border-b border-white/5"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-white transition-colors py-2 text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/analyzer" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
