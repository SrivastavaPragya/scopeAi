"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonial() {
    const scrollRef = useRef(null);

    const testimonials = [
        {
            stars: 5,
            text: "“I killed an idea I'd have spent 6 months on. Eva surfaced two funded competitors I'd never heard of in 40 seconds.”",
            name: "Maya Rodriguez",
            role: "Founder, Loop Labs",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            stars: 5,
            text: "“The pitch deck it generated was 90% of the way there. My seed round deck literally started as a Eva export.”",
            name: "David Chen",
            role: "CEO, Northwind",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            stars: 5,
            text: "“It's like having a research analyst on retainer for the price of a coffee. The moat scoring alone changed our positioning.”",
            name: "Aisha Bello",
            role: "Solo founder",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            stars: 5,
            text: "“Validation used to take weeks of user interviews and surveys. Eva gives us a launch-ready assessment in under a minute.”",
            name: "Marcus Thorne",
            role: "Product Lead, Apex",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
        },
        {
            stars: 5,
            text: "“We saved thousands in market research costs. The depth of the competitor analysis and risk matrix is truly unmatched.”",
            name: "Elena Rostova",
            role: "Co-Founder, Synthetix",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
        }
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Scroll by one card width (roughly 380px to 400px + gap)
            const cardWidth = 400;
            const scrollTo = direction === "left"
                ? scrollLeft - cardWidth
                : scrollLeft + cardWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:px-20 px-6 bg-gray-50 border-y border-slate-100 overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                {/* Header section without arrows */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-xs md:text-sm font-mono font-bold tracking-[0.2em] text-blue-600 uppercase block mb-3">
                            FIELD NOTES
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.04em] text-slate-900 max-w-xl leading-tight">
                            Founders decide faster with Eva.
                        </h2>
                    </div>
                </div>

                {/* Slider Relative Wrapper for Left/Right Arrows */}
                <div className="relative px-2 sm:px-8">
                    {/* Left Arrow Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-[-16px] sm:left-[-24px] top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-all shadow-md focus:outline-none"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5 stroke-[2]" />
                    </button>

                    {/* Slider Scrollable Row */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 -mx-6 px-6 snap-x snap-mandatory"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-slate-200/80 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] snap-start hover:border-blue-500/40 hover:shadow-md transition-all duration-300"
                            >
                                {/* Card Content */}
                                <div>
                                    {/* Blue Stars */}
                                    <div className="flex gap-1 mb-6 text-blue-600 text-sm">
                                        {Array.from({ length: item.stars }).map((_, i) => (
                                            <span key={i} className="text-[16px]">★</span>
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <blockquote className="text-[15px] sm:text-[16px] text-slate-700 font-normal leading-relaxed mb-8">
                                        {item.text}
                                    </blockquote>
                                </div>

                                {/* User details footer with Divider */}
                                <div>
                                    <div className="h-[1px] bg-slate-100 w-full mb-6"></div>
                                    <div className="flex items-center gap-3">
                                        {item.avatar ? (
                                            <img
                                                src={item.avatar}
                                                alt={item.name}
                                                className="w-10 h-10 rounded-full object-cover bg-slate-100"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-sm">
                                                {item.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="font-heading font-bold text-[14px] text-slate-800 leading-snug">
                                                {item.name}
                                            </h4>
                                            <p className="text-[12px] text-slate-400 font-medium">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-[-16px] sm:right-[-24px] top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-all shadow-md focus:outline-none"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5 stroke-[2]" />
                    </button>
                </div>
            </div>

            {/* Custom CSS to hide scrollbar */}
            <style dangerouslySetInnerHTML={{__html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
}
