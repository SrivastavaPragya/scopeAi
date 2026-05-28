import React from "react";
import PriceComponent from "@/components/PricingComponent/PriceComponent";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Pricing",
  description:
    "View ScopeAI pricing options for AI-powered startup validation, market analysis, competitor research, and pitch deck generation.",
  path: "/pricing",
  keywords: ["ScopeAI pricing", "startup analyzer pricing", "AI market research pricing"],
});

const page = () => {
  return (
    <div>
      <PriceComponent />
    </div>
  );
};

export default page;
