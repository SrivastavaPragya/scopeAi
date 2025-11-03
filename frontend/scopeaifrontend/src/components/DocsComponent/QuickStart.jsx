"use client";
import { motion } from "framer-motion";
import { Code, Key, Zap, Shield, Book, Terminal } from "lucide-react";
import React from "react";

const QuickStart = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[#0a0e1a] grid-background px-6 md:px-24 overflow-hidden">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass rounded-3xl p-8 md:p-12 mb-12"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Terminal className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">Quick Start</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-sm text-blue-400">
                1
              </span>
              Get Your API Key
            </h3>
            <div className="bg-black/40 rounded-xl p-4 border border-white/5">
              <code className="text-cyan-400 text-sm">
                curl -X POST https://api.startupanalyzer.ai/v1/auth/keys \<br />
                &nbsp;&nbsp;-H "Authorization: Bearer YOUR_TOKEN"
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-sm text-blue-400">
                2
              </span>
              Make Your First Request
            </h3>
            <div className="bg-black/40 rounded-xl p-4 border border-white/5">
              <code className="text-cyan-400 text-sm block whitespace-pre">
                {`curl -X POST https://api.startupanalyzer.ai/v1/analyze \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "idea": "AI-powered meal planning app",
    "analysis_type": "full"
  }'`}
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-sm text-blue-400">
                3
              </span>
              Handle the Response
            </h3>
            <div className="bg-black/40 rounded-xl p-4 border border-white/5">
              <code className="text-cyan-400 text-sm block whitespace-pre">
                {`{
  "status": "success",
  "data": {
    "moat": "AI-driven insights...",
    "pricing": "Freemium model...",
    "competitors": ["Notion AI", "Copy.ai"],
    "target_audience": "Early-stage founders...",
    "scope": "Global reach with..."
  }
}`}
              </code>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default QuickStart;
