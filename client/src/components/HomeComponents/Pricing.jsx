"use client";

import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "$0",
            duration: "/month",
            description: "Perfect for testing the waters and exploring basic idea validation.",
            features: [
                "1 Project Validation",
                "Basic Competitor Analysis",
                "Standard Market Data",
                "Community Support"
            ],
            buttonText: "Start for Free",
            buttonStyle: "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50",
            isPopular: false
        },
        {
            name: "Pro",
            price: "$49",
            duration: "/month",
            description: "For serious founders and teams ready to build with deep insights.",
            features: [
                "Unlimited Validations",
                "Deep Competitor & Moat Analysis",
                "Real-time Market Data",
                "Pitch Deck Generation",
                "Priority Email Support"
            ],
            buttonText: "Get Started",
            buttonStyle: "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20",
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            duration: "",
            description: "Tailored solutions for accelerators, VCs, and enterprise teams.",
            features: [
                "Everything in Pro",
                "Custom Data Integrations",
                "Dedicated Account Manager",
                "API Access",
                "White-label Reports"
            ],
            buttonText: "Contact Sales",
            buttonStyle: "bg-slate-900 text-white hover:bg-slate-800",
            isPopular: false
        }
    ];

    return (
        <section id="pricing" className="py-24 relative overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider text-blue-600 bg-blue-50 border border-blue-100 uppercase mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        Simple Pricing
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 mb-4">
                        Plans that scale with you.
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg">
                        Start for free and upgrade as your startup grows. No hidden fees.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center"
                >
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                                plan.isPopular 
                                ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-900/5 ring-4 ring-blue-50 scale-105 z-10" 
                                : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-3">
                                    <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                                    <span className="text-slate-500 text-sm font-medium">{plan.duration}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed min-h-[40px]">
                                    {plan.description}
                                </p>
                            </div>

                            <button className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-colors mb-8 ${plan.buttonStyle}`}>
                                {plan.buttonText}
                            </button>

                            <div className="space-y-4">
                                <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">What's included</p>
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-blue-600" />
                                        </div>
                                        <span className="text-slate-600 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
