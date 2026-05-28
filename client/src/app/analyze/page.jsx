import AnalyzerPage from "@/components/AnalyzeComponent/AnalyzerPage";
import React from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Analyze Your Startup Idea",
  description:
    "Run an AI-powered startup analysis to uncover market problems, customer segments, competitors, pricing signals, moats, and risks.",
  path: "/analyze",
  keywords: ["analyze startup idea", "AI startup validator", "market analysis tool"],
});

const page = () => {
  return (
    <div>
      <AnalyzerPage />
    </div>
  );
};

export default page;
