"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Olivia Morgan",
    title: "CTO, QuantumLeap Systems",
    image: "/user7.jpg",
    text: "The analysis depth is unbelievable. Our team relies on it daily for fast, accurate market intelligence.",
  },
  {
    name: "Arjun Mehta",
    title: "Founder, Innovexa Labs",
    image: "/user8.jpg",
    text: "Feels like having a senior strategist on call 24/7. Clean UI, smart insights, and truly actionable output.",
  },
  {
    name: "Mia Thompson",
    title: "Product Manager, AeroStack",
    image: "/user9.jpg",
    text: "The speed and clarity of insights blew us away. It turned complex research into a smooth, guided experience.",
  },
  {
    name: "Noah Rivera",
    title: "Strategy Lead, CircuitHive",
    image: "/user10.jpg",
    text: "We tested dozens of AI tools — this one stands out. The precision of the recommendations is unmatched.",
  },
  {
    name: "Harper Lin",
    title: "CEO, VisionPulse",
    image: "/user11.jpg",
    text: "Beautiful interface, flawless performance. It’s now part of every pitch deck and decision we make.",
  },
  {
    name: "Ethan Brooks",
    title: "Head of Innovation, CoreBridge",
    image: "/user12.jpg",
    text: "A truly next-gen platform. The insights feel handcrafted — yet delivered instantly by AI.",
  },
];

const tiltVariants = {
  initial: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { scale: 1.05, rotateX: 5, rotateY: -5 },
};

const Testimonials = () => {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section
      id="Testimonials"
      className="relative py-24 px-6 lg:px-[5rem] bg-[#0a0e1a] min-h-screen  grid-background text-white overflow-hidden"
    >
      {/* Background Effects */}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-3 glass px-6 py-2 rounded-full border border-white/10 shadow-md mb-6">
          <Quote className="h-5 w-5 text-cyan-400" />
          <span className="text-sm text-gray-300 font-medium">
            Real Stories, Real Impact
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gradient from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Hear from the innovators, founders, and creators who’ve used our AI
          platform to accelerate their growth and ideas.
        </p>
      </motion.div>

      {/* Moving Grid Section */}
      <div className="space-y-12">
        {/* Row 1 - moves right → left */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...row1, ...row1].map((t, i) => (
            <motion.div
              key={`r1-${i}`}
              variants={tiltVariants}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="min-w-[320px] max-w-[340px] flex-shrink-0 relative glass bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_#00e0ff40] transition-all duration-500 cursor-pointer"
            >
              <Quote className="absolute top-6 left-6 w-6 h-6 text-cyan-400/40" />
              <p className="text-gray-200 mt-8 mb-6 text-sm leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center mt-auto space-x-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400 p-[2px]">
                  <div
                    aria-label={t.name}
                    className="rounded-full w-full h-full bg-[#0c1224] flex items-center justify-center font-semibold text-cyan-300"
                  >
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 - moves left → right */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...row2, ...row2].map((t, i) => (
            <motion.div
              key={`r2-${i}`}
              variants={tiltVariants}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="min-w-[320px] max-w-[340px] flex-shrink-0 relative glass bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_#00e0ff40] transition-all duration-500 cursor-pointer"
            >
              <Quote className="absolute top-6 left-6 w-6 h-6 text-cyan-400/40" />
              <p className="text-gray-200 mt-8 mb-6 text-sm leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center mt-auto space-x-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-500 to-cyan-400 p-[2px]">
                  <div
                    aria-label={t.name}
                    className="rounded-full w-full h-full bg-[#0c1224] flex items-center justify-center font-semibold text-cyan-300"
                  >
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
