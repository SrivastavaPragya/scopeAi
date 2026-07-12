"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
    return (
        <section id="cta" className="py-24 relative overflow-hidden bg-white md:px-20 px-6">
            <div className=" mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-8 py-16 md:p-20 text-center flex flex-col items-center justify-center shadow-2xl shadow-blue-900/5"
                >


                    {/* Content */}
                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider text-blue-700 bg-blue-100/80 border border-blue-200 uppercase mb-6 backdrop-blur-sm">
                            <Sparkles className="w-3 h-3 text-blue-600" />
                            Ready to Build?
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-900 mb-6 leading-tight">
                            Validate your idea before writing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">a single line of code.</span>
                        </h2>

                        <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-normal">
                            Join thousands of founders using Eva to discover competitors, analyze market gaps, and generate pitch decks in minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/25">
                                <span>Get Started for Free</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                                Book a Demo
                            </button>
                        </div>

                        <p className="text-slate-500 text-xs mt-6 font-medium">
                            No credit card required. 14-day free trial.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
