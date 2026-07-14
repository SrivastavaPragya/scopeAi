"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [serverStatus, setServerStatus] = useState("checking");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
        const res = await fetch(`${apiUrl}/api/health`);
        if (res.ok) {
          setServerStatus("live");
        } else {
          setServerStatus("down");
        }
      } catch (error) {
        setServerStatus("down");
      }
    };

    // Check immediately on load
    checkHealth();

    // Check every 10 minutes (600,000 ms) to keep Hugging Face space awake
    const intervalId = setInterval(checkHealth, 600000);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="w-4 h-4 bg-blue-600 block"></span>
          <span className="font-heading font-black text-2xl tracking-tight text-slate-900">EVA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">How it works</button>
          <button onClick={() => scrollToSection("features")} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Features</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Pricing</button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">FAQ</button>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm" title="Server Status">
            {serverStatus === "checking" && <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>}
            {serverStatus === "live" && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>}
            {serverStatus === "down" && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
            <span className="text-slate-600">
              {serverStatus === "checking" && "Connecting..."}
              {serverStatus === "live" && "System Live"}
              {serverStatus === "down" && "Offline"}
            </span>
          </div>

          <button onClick={() => scrollToSection("cta")} className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
