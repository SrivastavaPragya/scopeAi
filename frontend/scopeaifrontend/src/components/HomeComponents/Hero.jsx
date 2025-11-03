"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className=" min-h-screen  pt-[6rem] flex flex-col items-center bg-[#0a0e1a] grid-background overflow-hidden justify-center text-center text-white  ">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      {/* Subheading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-sm glass sm:text-base px-4 py-1.5 rounded-full"
      >
        🚀 AI-Powered Validation Platform
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
      >
        <span className="text-gradient">Validate Your</span>
        <br />
        <span className="text-white">Startup Idea with AI</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-6 text-gray-400 max-w-2xl text-lg"
      >
        Instant insights on your moat, pricing, competitors, and audience —
        powered by LangChain and advanced AI models.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex flex-wrap group items-center justify-center gap-4 mt-8"
      >
        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition flex items-center gap-2">
          Try Analyzer{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-2 transition-transform duration-300"
          />
        </button>
        <button className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition font-medium">
          Learn More
        </button>
      </motion.div>

      {/* Steps section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 glass rounded-2xl p-8 glow-border"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-400">1</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-white">Enter Idea</h3>
              <p className="text-sm text-gray-400">Describe your concept</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-cyan-400">2</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-white">AI Analysis</h3>
              <p className="text-sm text-gray-400">Get instant insights</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-400">3</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-white">Make Decisions</h3>
              <p className="text-sm text-gray-400">Build with confidence</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,#020617_80%)]" />
    </section>
  );
};

export default Hero;
