"use client";
import React from "react";
import { motion } from "framer-motion";

const Support = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[#0a0e1a]   grid-background  h-[50vh]   overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center w-[55rem] mx-auto"
      >
        <div className="glass rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Looking for support?
          </h3>
          <p className="text-gray-400 mb-6">
            Check out our documentation and FAQs for quick answers to common
            questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 px-3 py-1 bg-black rounded-md border-blue-500/30 hover:border-blue-500/60 text-white">
              View Documentation
            </button>
            <button className="border-2 px-3 py-1 rounded-md bg-black border-blue-500/30 hover:border-blue-500/60 text-white">
              Visit Help Center
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Support;
