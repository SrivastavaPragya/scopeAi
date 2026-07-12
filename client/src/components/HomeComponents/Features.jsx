"use client";

import React from "react";
import {
    LineChart,
    Presentation,
    Users,
    Tag,
    ShieldCheck,
    Swords
} from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
    return (
        <section id="features" className="py-20 md:px-20 px-4  bg-white mx-auto">
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-left mb-16 max-w-3xl"
            >
                <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">
                    The Control Room
                </span>
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.05em] text-slate-900 leading-[1.05] mb-6">
                    Everything an investor asks —<br />
                    answered instantly.
                </h2>
                <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
                    One idea in. A full, board-ready validation dossier out. Every module is powered by
                    live web research.
                </p>
            </motion.div>

            {/* Main Grid Wrapper */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >

                {/* Left Side: Market Analysis & AI Pitch Deck */}
                <div className="flex flex-col gap-6 justify-between">

                    {/* Card 1: Market Analysis */}
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between relative overflow-hidden h-[360px] shadow-sm">
                        <div>
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-none">
                                        <LineChart className="w-5 h-5" />
                                    </div>
                                    <span className="font-heading font-extrabold text-slate-800 text-[17px]">
                                        Market Analysis
                                    </span>
                                </div>
                                <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400">
                                    TAM / SAM / SOM
                                </span>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <span className="block text-3xl font-black tracking-tight text-slate-900 font-heading">
                                        $48B
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                                        TAM
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-black tracking-tight text-slate-900 font-heading">
                                        $6.2B
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                                        SAM
                                    </span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-black tracking-tight text-blue-600 font-heading">
                                        27%
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                                        CAGR
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom SVG Chart */}
                        <div className="absolute bottom-0 left-0 w-full h-[120px]">
                            <svg
                                className="w-full h-full text-blue-600"
                                viewBox="0 0 300 100"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.12" />
                                        <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0.0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,90 Q50,95 100,85 T200,80 T300,40 L300,100 L0,100 Z"
                                    fill="url(#chartGrad)"
                                />
                                <path
                                    d="M0,90 Q50,95 100,85 T200,80 T300,40"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Card 2: AI Pitch Deck */}
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-none">
                                    <Presentation className="w-5 h-5" />
                                </div>
                                <span className="font-heading font-extrabold text-slate-800 text-[17px]">
                                    AI Pitch Deck
                                </span>
                            </div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400">
                                12 SLIDES
                            </span>
                        </div>

                        {/* Slide previews */}
                        <div className="grid grid-cols-4 gap-2">
                            {["Problem", "Solution", "Market", "Traction"].map((slide) => (
                                <div key={slide} className="bg-slate-50 border border-slate-100 p-2.5 flex flex-col justify-between h-[65px] rounded-none">
                                    <div className="w-5 h-1 bg-blue-600"></div>
                                    <span className="text-[10px] font-bold text-slate-500 font-heading">
                                        {slide}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Side: Competitors, Target Audience, Product Pricing, Defensibility & Moats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 3: Competitors (Spans 2 rows vertically) */}
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between md:row-span-2 shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-none">
                                        <Swords className="w-5 h-5" />
                                    </div>
                                    <span className="font-heading font-extrabold text-slate-800 text-[17px]">
                                        Competitors
                                    </span>
                                </div>
                            </div>

                            {/* Competitors List */}
                            <div className="space-y-4">
                                {[
                                    { name: "Notion AI", label: "HIGH", color: "bg-red-50 text-red-600" },
                                    { name: "Jasper", label: "MED", color: "bg-amber-50 text-amber-600" },
                                    { name: "CopyMonk", label: "LOW", color: "bg-emerald-50 text-emerald-600" },
                                ].map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
                                    >
                                        <span className="font-semibold text-slate-700 text-sm font-heading">
                                            {item.name}
                                        </span>
                                        <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-sm ${item.color}`}>
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-[11px] text-slate-400 font-normal leading-relaxed mt-6">
                            Live-scraped from Crunchbase, G2 & Product Hunt.
                        </p>
                    </div>

                    {/* Card 4: Target Audience */}
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-start shadow-sm h-[168px]">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-none">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="font-heading font-extrabold text-slate-800 text-[17px]">
                                    Target Audience
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-700 text-sm font-normal leading-relaxed">
                            <span className="font-bold text-slate-900 font-heading">Solo founders & indie SaaS builders</span>, 25—40, spending on productivity tooling.
                        </p>
                    </div>

                    {/* Card 5: Product Pricing */}
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-start shadow-sm h-[168px]">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-none">
                                    <Tag className="w-5 h-5" />
                                </div>
                                <span className="font-heading font-extrabold text-slate-800 text-[17px]">
                                    Product Pricing
                                </span>
                            </div>
                        </div>

                        <div className="mb-2">
                            <span className="text-3xl font-black text-slate-900 font-heading">
                                $29
                            </span>
                            <span className="text-xs font-semibold text-slate-400 ml-1">
                                /mo suggested
                            </span>
                        </div>

                        <p className="text-[12px] text-slate-500 font-normal leading-relaxed">
                            Freemium + usage-based upsell recommended.
                        </p>
                    </div>

                    {/* Card 6: Defensibility & Moats (Spans both columns at the bottom) */}
                    <div className="bg-white border border-slate-200 p-6 flex flex-col justify-between md:col-span-2 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-black text-white flex items-center justify-center rounded-none">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="font-heading font-extrabold text-slate-800 text-[17px]">
                                    Defensibility & Moats
                                </span>
                            </div>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-4">
                            {[
                                { name: "Network effect", value: 82 },
                                { name: "Data advantage", value: 68 },
                                { name: "Switching cost", value: 45 },
                            ].map((moat) => (
                                <div key={moat.name}>
                                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5 font-heading">
                                        <span>{moat.name}</span>
                                        <span className="text-slate-400">{moat.value}</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-100 rounded-none overflow-hidden">
                                        <div
                                            className="bg-blue-600 h-full rounded-none"
                                            style={{ width: `${moat.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </motion.div>
        </section>
    );
}
