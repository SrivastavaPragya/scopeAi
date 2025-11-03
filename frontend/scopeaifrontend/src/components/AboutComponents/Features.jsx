"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Brain, Zap, Globe } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-[#0a0e1a] grid-background px-6 md:px-20 overflow-hidden">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-bold mb-12 text-center px-6 md:px-20 text-white">
          Powered by <span className="text-gradient">Advanced Technology</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "LangChain",
              description:
                "Advanced orchestration framework for building reliable AI agents that analyze your startup from multiple angles.",
            },
            {
              icon: Sparkles,
              title: "GPT-4 & Claude",
              description:
                "State-of-the-art language models trained on vast amounts of business and market data for accurate insights.",
            },
            {
              icon: Zap,
              title: "Web Search APIs",
              description:
                "Real-time access to current market data, competitor information, and industry trends for up-to-date analysis.",
            },
          ].map((tech, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              //   variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <tech.icon className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {tech.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Features;
