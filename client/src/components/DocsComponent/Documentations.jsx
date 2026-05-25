"use client";
import { motion } from "framer-motion";
import { FileSearch, Presentation, Sparkles } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Documentations = () => {
  return (
    <div className=" bg-[#060b17]   grid-background  text-white">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
              API Documentation
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Integrate Startup Analyzer into your workflow with our powerful
            RESTful API.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: FileSearch,
              title: "Market Research",
              description:
                "Gather relevant web sources for a startup idea and retain them with the analysis.",
            },
            {
              icon: Sparkles,
              title: "AI Analysis",
              description:
                "Generate summaries, facts, competitor signals, and structured market insights.",
            },
            {
              icon: Presentation,
              title: "Pitch Deck Export",
              description:
                "Request an optional presentation artifact alongside the completed analysis.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0c1224]/60 border border-[#1b2540] rounded-2xl p-8 text-center hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documentations;
