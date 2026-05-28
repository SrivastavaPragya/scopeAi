import Awards from "@/components/HomeComponents/Awards";
import FeatureSection from "@/components/HomeComponents/FeatureSection";
import Hero from "@/components/HomeComponents/Hero";
import IdeaValidator from "@/components/HomeComponents/IdeaValidator";
import React from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "AI Startup Idea Analyzer",
  description:
    "Validate startup ideas with AI-powered market research, competitor discovery, pricing signals, moats, risks, and pitch deck generation.",
  path: "/",
  keywords: ["startup idea analyzer", "AI market validation", "startup research"],
});

const page = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <IdeaValidator />
      <Awards />
    </div>
  );
};

export default page;
