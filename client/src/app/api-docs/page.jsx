import Documentations from "@/components/DocsComponent/Documentations";
import Endpoints from "@/components/DocsComponent/Endpoints";
import QuickStart from "@/components/DocsComponent/QuickStart";
import React from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "API Documentation",
  description:
    "Explore the ScopeAI startup analysis API, including request format, health checks, and AI-generated market research responses.",
  path: "/api-docs",
  keywords: ["startup analysis API", "ScopeAI API docs", "AI market research API"],
});

const page = () => {
  return (
    <div>
      <Documentations />
      <QuickStart />
      <Endpoints />
    </div>
  );
};

export default page;
