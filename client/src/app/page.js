import React from "react";
import Hero from "@/components/HomeComponents/Hero";
import Clients from "@/components/HomeComponents/Clients";
import HowItWorks from "@/components/HomeComponents/HowItWorks";
import Features from "@/components/HomeComponents/Features";
import About from "@/components/HomeComponents/About";
import Testimonial from "@/components/HomeComponents/Testimonial";
import Pricing from "@/components/HomeComponents/Pricing";
import Faq from "@/components/HomeComponents/Faq";
import CtaSection from "@/components/HomeComponents/CtaSection";
import Footer from "@/components/HomeComponents/Footer";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata({
  title: "Eva | AI-Powered Startup Validation Engine",
  description:
    "Validate startup ideas with AI-powered market research, competitor discovery, pricing signals, moats, risks, and pitch deck generation in 60 seconds.",
  path: "/",
  keywords: [
    "startup validation",
    "AI startup tool",
    "idea validator",
    "market research AI",
  ],
});

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Clients />
      <HowItWorks />
      <Features />
      <About />
      <Testimonial />
      <Pricing />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  );
}
