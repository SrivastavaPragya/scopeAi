"use client";

import React from "react";
import { Pencil, Globe, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:px-20 px-4 bg-gray-50 border border-gray-200 mx-auto">
      {/* Header Row */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
      >
        <div className="max-w-xl">
          <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">
            The Workflow
          </span>
          <h2 className=" text-4xl  md:text-5xl font-black tracking-[-0.05em] text-slate-900 leading-[1.05]">
            From napkin to numbers in<br />
            three steps.
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal md:mb-2">
            No dashboards to learn. No analysts to hire. Just answers, grounded in what the
            internet actually says today.
          </p>
        </div>
      </motion.div>

      {/* Grid Container */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 bg-white border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 shadow-sm"
      >
        
        {/* Step 1 */}
        <div className="group p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-all hover:bg-slate-50/50">
          <div className="flex items-center justify-between mb-8">
            <span className="text-4xl md:text-5xl font-black tracking-tight text-slate-200 font-heading transition-colors duration-300 group-hover:text-blue-600">
              01
            </span>
            <Pencil className="w-5 h-5 text-slate-800 stroke-[1.5]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3">
              Describe your idea
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Type one sentence or a full concept. No forms, no signup walls — just your raw idea.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="group p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-all hover:bg-slate-50/50">
          <div className="flex items-center justify-between mb-8">
            <span className="text-4xl md:text-5xl font-black tracking-tight text-slate-200 font-heading transition-colors duration-300 group-hover:text-blue-600">
              02
            </span>
            <Globe className="w-5 h-5 text-slate-800 stroke-[1.5]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3">
              AI searches the live web
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Eva crawls real-time sources — funding data, reviews, forums and market reports.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="group p-8 md:p-10 flex flex-col justify-between min-h-[220px] transition-all hover:bg-slate-50/50">
          <div className="flex items-center justify-between mb-8">
            <span className="text-4xl md:text-5xl font-black tracking-tight text-slate-200 font-heading transition-colors duration-300 group-hover:text-blue-600">
              03
            </span>
            <FileText className="w-5 h-5 text-slate-800 stroke-[1.5]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-slate-900 text-lg mb-3">
              Get a full dossier
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-normal">
              Market sizing, competitors, moats, pricing, risks and a pitch deck — ready to share.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
