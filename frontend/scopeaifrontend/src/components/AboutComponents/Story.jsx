"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Story = () => {
  return (
    <div className="bg-[#0a0e1a] grid-background px-6 md:px-20 pt-[8rem] overflow-hidden relative">
      {/* Gradient decorative elements */}
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />

      {/* ====== Header Section ====== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Empowering Founders with{" "}
          <span className="text-gradient">AI-Powered Validation</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          We believe every startup idea deserves a fair chance. Our mission is
          to democratize access to world-class startup validation insights.
        </motion.p>
      </motion.div>

      {/* ====== Story Section ====== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerStagger}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-[5rem] mb-20 relative overflow-hidden"
      >
        {/* subtle glowing border animation */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0px rgba(56,189,248,0)",
              "0 0 30px rgba(56,189,248,0.15)",
              "0 0 0px rgba(56,189,248,0)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-3xl pointer-events-none"
        />

        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-8 text-white"
        >
          Our Story
        </motion.h2>

        <motion.div
          variants={containerStagger}
          className="space-y-6 text-lg text-gray-300 leading-relaxed relative z-10"
        >
          {[
            "Startup Analyzer was born from a simple observation: founders spend months or even years building products without validating core assumptions. We've seen brilliant ideas fail not because they were bad, but because critical questions went unanswered.",
            "We built this platform to give every entrepreneur access to the same level of market intelligence that top-tier VCs and accelerators use. Using advanced AI models powered by LangChain, we analyze thousands of data points to provide actionable insights in seconds.",
            "Today, we're helping thousands of founders make smarter decisions, validate faster, and build with confidence. Our AI doesn't replace human judgment — it augments it, giving you the data you need to make informed choices.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="hover:text-gray-200 transition-colors duration-300"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Story;
