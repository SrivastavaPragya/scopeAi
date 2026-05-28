import Features from "@/components/AboutComponents/Features";
import Story from "@/components/AboutComponents/Story";

import React from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "About The AI Startup Analyzer",
  description:
    "Learn how ScopeAI helps founders validate startup ideas using AI, market research signals, competitor analysis, and structured startup insights.",
  path: "/about",
  keywords: ["about ScopeAI", "startup validation platform", "founder research"],
});

const page = () => {
  return (
    <div>
      <Story />
      <Features />
    </div>
  );
};

export default page;
