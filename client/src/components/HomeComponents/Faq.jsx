"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does the live internet search work?",
            answer: " Eva scans search engines, databases, news sources, and startup directories in real-time to analyze current market conditions. It maps out existing competitors, recent product launches, and general industry trends to compile a comprehensive validation report."
        },
        {
            question: "Is the market data reliable?",
            answer: "Yes. Eva aggregates data from multiple authenticated live web sources, cross-references findings to ensure accuracy, and presents you with sourced insights, metrics, and trends that reflect today's actual market landscape."
        },
        {
            question: "Can I really generate a pitch deck?",
            answer: "Absolutely. Once the validation engine finishes analyzing your idea, it compiles the key findings into a professionally structured, downloadable pitch deck including market size, user pain points, competition, and a suggested business model."
        },
        {
            question: "Do I need to sign up to try it?",
            answer: "The Explorer plan is free and lets you validate a few ideas without commitment. Upgrade only when you need unlimited analyses and the full pitch-deck engine."
        },
        {
            question: "Who is Eva built for?",
            answer: "Eva is built for builders, solo founders, product managers, and enterprise innovation teams who want to test hypotheses quickly. It helps you save months of effort and capital by identifying potential showstoppers in seconds."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:px-20 px-6 bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-blue-600 uppercase block mb-3">
                        QUESTIONS
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.04em] text-slate-900 leading-tight">
                        Everything else you're wondering.
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="flex flex-col">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div 
                                key={index} 
                                className="border-b border-slate-200/80 last:border-0"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full py-6 flex items-center justify-between text-left gap-4 hover:text-blue-600 transition-colors focus:outline-none group"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-heading font-extrabold text-base sm:text-lg md:text-[19px] text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180 text-blue-600" : ""
                                        }`} 
                                    />
                                </button>
                                
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isOpen ? "max-h-60 pb-6 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
