import FullAnalysisPage from "@/components/AnalyzeComponent/FullAnalysisPage";
import React from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Startup Analysis Results",
  description:
    "Review AI-generated startup analysis results, market signals, competitor insights, risks, moats, and source references.",
  path: "/full-analysis",
  noIndex: true,
});

const page = () => {
  return (
    <div>
      <FullAnalysisPage />
    </div>
  );
};

export default page;
