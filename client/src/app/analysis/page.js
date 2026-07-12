import AnalysisDashboard from "@/components/AnalysisComponents/AnalysisDashboard";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Analysis Results",
  description: "Detailed moat analysis, competitors, and market insights for your startup idea validation.",
  path: "/analysis",
  keywords: ["startup analysis", "competitor mapping", "market insights", "moat analysis"],
});

export default function AnalysisPage() {
  return <AnalysisDashboard />;
}
