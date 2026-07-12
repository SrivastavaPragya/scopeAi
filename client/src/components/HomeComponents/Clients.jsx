"use client";

import React from "react";

export default function Clients() {
    const clients = [
        "TECHSTARS",
        "SEQUOIA SCOUTS",
        "500 GLOBAL",
        "ANTLER",
        "PRODUCT HUNT",
        "INDIE HACKERS",
        "A16Z SPEEDRUN",
        "Y COMBINATOR",
    ];

    // Duplicate the array to ensure a seamless infinite scrolling marquee effect
    const marqueeClients = [...clients, ...clients, ...clients];

    return (
        <section className="py-8 bg-gray-50 border-y border-gray-200 overflow-hidden">
            <div className=" mx-auto px-4">
                {/* Title / Label */}
                <div className="text-center mb-8">
                    <p className="text-[10px] md:text-xs font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">
                        Trusted by founders backed by
                    </p>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full overflow-hidden marquee-mask py-4">
                    <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
                        {marqueeClients.map((client, index) => (
                            <span
                                key={index}
                                className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-slate-300 hover:text-slate-400 transition-colors uppercase select-none font-heading shrink-0"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
