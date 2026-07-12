"use client";

import React from "react";
import { Lightbulb, Compass, ShieldCheck, Presentation, ArrowRight } from "lucide-react";

export default function About() {

    return (
        <section className="py-20 md:px-20 px-6 border-y border-slate-100/80 bg-slate-50 relative overflow-hidden">
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none z-0"></div>

            {/* Ambient Spotlight Gradients */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-400/[0.01] rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-400/[0.01] rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="mx-auto relative  z-10">
                <div className="flex  gap-4 items-center">

                    {/* Left Column: Heading, Paragraphs, Features List & CTA Button */}
                    <div className=" w-[50%]    flex flex-col justify-center">
                        <div className="flex">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 uppercase mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                                About Eva
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.04em] text-slate-900 leading-[1.05] uppercase max-w-2xl">
                            <span className="text-blue-600">Eva</span> is here to be your assistance.
                        </h2>

                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-6 font-normal max-w-xl">
                            We are ready to help you build creative digital products by validating your ideas, mapping competitors, and creating board-ready pitch decks instantly.
                        </p>

                        {/* Styled Callout Box */}
                        <div className="border-l-4 border-blue-500 pl-4 py-2.5 my-6 bg-blue-50/30 rounded-r-xl max-w-xl">
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic">
                               we take pride in our values — service, integrity, and excellence. We help you map out your path from concept to creation with unbiased, real-time live internet analytics."
                            </p>
                        </div>

                        {/* Value Checklist Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8 max-w-xl">
                            {[
                                "Real-time web validation",
                                "Target audience discovery",
                                "Competitor & moat analysis",
                                "Downloadable pitch decks"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2.5">
                                    <span className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 text-[10px] shrink-0 font-bold">
                                        ✓
                                    </span>
                                    <span className="text-slate-700 text-xs sm:text-sm font-semibold">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm md:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-md hover:shadow-blue-600/20 hover:translate-y-[-1px] focus:outline-none group">
                                Let's Discuss
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Services Cards in a Staggered Masonry Grid */}
                    <div className=" w-[50%]   grid grid-cols-2 gap-4 items-start">
                        {/* Grid Column 1 */}
                        <div className="flex flex-col gap-4">
                            {/* Card 1: Validation Engine (Short) */}
                            <div className="bg-blue-50 border-t-2 shadow-lg border-t-blue-500 border-x border-b border-blue-100/80 p-6 flex flex-col justify-between  hover:border-blue-500/35 hover:shadow-md transition-all duration-300 group min-h-[190px]">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                                        <Lightbulb className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h4 className="font-heading font-extrabold text-slate-900 text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                                        Validation Engine
                                    </h4>
                                    <p className="text-slate-500 text-[11px] leading-relaxed">
                                        Enter your startup concept and get an objective validation score.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Competitor Mapping (Tall) */}
                            <div className="bg-white border-t-2 border-t-sky-500   border-x border-b border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col justify-between hover:border-blue-500/35 hover:shadow-md transition-all duration-300 group min-h-[250px]">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h4 className="font-heading font-extrabold text-sm mb-1.5 text-blue-600 transition-colors">
                                        Competitor Mapping
                                    </h4>
                                    <p className="text-slate-500 text-[11px] leading-relaxed">
                                        Discover direct and indirect competitors automatically scraped from live databases and product review sites to identify potential business moats.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Grid Column 2 */}
                        <div className="flex flex-col gap-4 mt-8">
                            {/* Card 2: Market Analysis (Tall) */}
                            <div className="bg-white border-t-2 border-t-indigo-500 border-x border-b border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6 flex flex-col justify-between hover:border-blue-500/35 hover:shadow-md transition-all duration-300 group min-h-[250px]">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                                        <Compass className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h4 className="font-heading font-extrabold text-sm mb-1.5 text-blue-600 transition-colors">
                                        Market Analysis
                                    </h4>
                                    <p className="text-slate-500 text-[11px] leading-relaxed">
                                        Get auto-generated TAM, SAM, SOM metrics along with growth projections, buyer personas, and industry trends to understand true market demand.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: Pitch Deck Generator (Short) */}
                            <div className="bg-blue-50/60 border-t-2 shadow-lg border-t-blue-600 border-x border-b border-blue-100/80 p-6 flex flex-col justify-between  hover:border-blue-500/35 hover:shadow-md transition-all duration-300 group min-h-[190px]">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                                        <Presentation className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <h4 className="font-heading font-extrabold text-slate-900 text-sm mb-1.5 group-hover:text-blue-600 transition-colors">
                                        Pitch Deck
                                    </h4>
                                    <p className="text-slate-500 text-[11px] leading-relaxed">
                                        Generate structured, slide-by-slide pitch presentations summarizing your startup idea.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
