"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleAnalyze = () => {
    if (inputValue.trim()) {
      router.push(`/analysis?prompt=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
      {/* Main Container */}
      <div className=" mx-auto flex flex-col items-center z-10">

        {/* Top Badge */}
        <div className="inline-flex mt-[2.3rem] items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white shadow-sm mb-4">
          <span className="w-2.5 h-2.5 bg-blue-600 inline-block"></span>
          <span className="text-[15px] md:text-xs font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
            AI-Powered Validation Engine
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-7xl font-black tracking-[-0.06em] leading-[0.92]">
          Stop guessing.<br />


          Validate your idea in<br />
          <span className="relative inline-block text-blue-600 select-none">
            60 seconds.
            <svg
              className="absolute left-0 -bottom-2 w-full h-[6px] text-blue-500"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M1 8.5c18-2.5 36-3.5 54-3.5 17 0 34 1 51 3.5"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 md:mt-10 text-slate-500 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          Eva searches the live internet and returns market analysis, competitor mapping,
          defensible moats, pricing strategy, risk assessment and a ready pitch deck — for any
          startup idea.
        </p>

        {/* Search / Input Box */}
        <div className="mt-10 md:mt-12 w-full max-w-2xl bg-white border-2 border-blue-600 flex items-center shadow-lg focus-within:shadow-blue-600/10 transition-shadow">
          <div className="pl-4 pr-2 text-slate-400 flex items-center justify-center">
            <Globe className="w-5 h-5 stroke-[1.5]" />
          </div>
          <input
            type="text"
            placeholder="Describe your startup idea..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') handleAnalyze();
            }}
            className="w-full py-4 px-2 text-slate-800 placeholder-slate-400 text-sm md:text-base focus:outline-none bg-transparent"
          />
          <button 
            onClick={handleAnalyze}
            className="h-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base px-6 py-4 flex items-center gap-2 transition-colors whitespace-nowrap"
          >
            Analyze Idea
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Generates tags row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
          <span className="flex items-center gap-1.5 text-slate-400 font-mono tracking-wider uppercase font-semibold text-[10px] md:text-xs">
            <Sparkles className="w-3.5 h-3.5 text-slate-400 stroke-[1.5]" />
            Generates
          </span>

          {["Market size", "Competitors", "Moats", "Pricing", "Pitch deck", "Risks"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 font-medium text-xs rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>


    </section>
  );
}
