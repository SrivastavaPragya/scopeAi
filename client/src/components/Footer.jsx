"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const fadeIn = {
    visible: { opacity: 1 },
  };

  const linkGroups = [
    {
      title: "Product",
      links: [
        { label: "Analyzer", href: "/analyzer" },
        { label: "Pricing", href: "/pricing" },
        { label: "API Docs", href: "/api-docs" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "#" },
        { label: "Press Kit", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status Page", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Compliance", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:hello@startupanalyzer.ai", label: "Email" },
  ];

  return (
    <footer className="relative  pt-20 pb-8 border-t bg-[#060b17]    grid-background  border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 mb-20 glow-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Get the latest insights, features, and product updates delivered
                to your inbox. No spam, just value.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-2 py-1 rounded-md bg-white/5 border-white/10 focus:border-blue-500/50 text-white placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r rounded-md from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30 px-6"
              >
                {subscribed ? "✓" : <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm mt-4"
            >
              Thanks for subscribing! Check your email to confirm.
            </motion.p>
          )}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-2 group mb-6">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 blur-xl bg-blue-400/30 group-hover:bg-cyan-400/40 transition-all" />
              </div>
              <span className="text-xl font-bold text-gradient">
                Startup Analyzer
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              AI-powered startup validation platform helping founders make
              smarter decisions faster.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-blue-500/20 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Groups */}
          {linkGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © 2025 Startup Analyzer. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with <Heart className="w-3 h-3 text-red-400 inline" /> and
              powered by LangChain + LLM
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Status
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Accessibility
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Changelog
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
