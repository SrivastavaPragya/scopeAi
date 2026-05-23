"use client";

import { motion } from "framer-motion";
import { Code, Key, Zap, Shield, Book, Terminal } from "lucide-react";

const Endpoints = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[#0a0e1a] min-h-screen grid-background px-6 md:px-24 overflow-hidden">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 md:p-12 mb-12"
      >
        <div className="flex items-center space-x-3 mb-8">
          <Book className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white">Endpoints</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              method: "POST",
              endpoint: "/v1/analyze",
              description:
                "Analyze a startup idea and get comprehensive insights",
            },
            {
              method: "GET",
              endpoint: "/v1/analyses/:id",
              description: "Retrieve a previously generated analysis by ID",
            },
            {
              method: "GET",
              endpoint: "/v1/analyses",
              description: "List all your analyses with pagination",
            },
            {
              method: "POST",
              endpoint: "/v1/export",
              description: "Export analysis results to PDF or CSV format",
            },
          ].map((endpoint, index) => (
            <div
              key={index}
              className="bg-black/20 rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <span
                  className={`px-3 py-1 rounded text-xs font-bold ${
                    endpoint.method === "POST"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {endpoint.method}
                </span>
                <div className="flex-1">
                  <code className="text-cyan-400 font-mono">
                    {endpoint.endpoint}
                  </code>
                  <p className="text-gray-400 mt-2">{endpoint.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Endpoints;
