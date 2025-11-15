"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Variants for smooth transitions
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const FeatureSection = () => {
  const router = useRouter();
  const features = [
    {
      icon: Shield,
      title: "Moat Analysis",
      description:
        "Identify your competitive advantages and defensibility strategies",
      color: "blue",
    },
    {
      icon: Target,
      title: "Target Audience",
      description:
        "Discover who your ideal customers are and how to reach them",
      color: "cyan",
    },
    {
      icon: TrendingUp,
      title: "Pricing Strategy",
      description: "Get data-driven recommendations for optimal pricing models",
      color: "teal",
    },
    {
      icon: Users,
      title: "Competitor Research",
      description:
        "Deep analysis of your competitive landscape and market position",
      color: "blue",
    },
    {
      icon: Sparkles,
      title: "Market Scope",
      description:
        "Understand your total addressable market and growth potential",
      color: "cyan",
    },
    {
      icon: TrendingUp,
      title: "AI-Driven Reports",
      description: "Comprehensive insights powered by advanced language models",
      color: "teal",
    },
  ];

  return (
    <div className="bg-[#0a0e1a] min-h-screen grid-background overflow-hidden">
      {/* ===== Feature Section ===== */}
      <section className="py-32 px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to validate and launch your startup successfully
          </p>
        </motion.div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="glass glass-hover rounded-2xl p-8 group cursor-pointer hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 8 }}
                className={`w-16 h-16 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-6 transition-transform duration-300`}
              >
                <feature.icon
                  className={`w-8 h-8 text-${feature.color}-400 transition-transform group-hover:scale-110 duration-300`}
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== CTA Section ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-32 px-[8rem]"
      >
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(56,189,248,0.25)",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass rounded-3xl p-12 md:p-20 text-center glow-border transition-all duration-300"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="text-gradient">Validate Your Idea?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of founders using AI to make smarter decisions
          </p>

          <div className="flex justify-center">
            <motion.button
              className="bg-gradient-to-r flex justify-center items-center from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-lg px-[3rem] py-3 rounded-full shadow-2xl shadow-blue-500/30 group"
              onClick={() => {
                router.push("/analyze");
              }}
            >
              Start Analyzing Now
              <ArrowRight className="ml-2 w-5 h-8 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FeatureSection;
