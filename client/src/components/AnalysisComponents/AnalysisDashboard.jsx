"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  TrendingUp,
  Shield,
  AlertTriangle,
  ArrowLeft,
  BarChart2,
  Globe,
  Link2,
  ExternalLink,
  Activity,
  Info,
  Server,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AnalysisDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchStarted = React.useRef(false);

  useEffect(() => {
    if (fetchStarted.current) return;
    fetchStarted.current = true;

    const fetchData = async () => {
      try {
        // Try to get prompt from URL, fallback to default
        const urlParams = new URLSearchParams(window.location.search);
        const userPrompt = urlParams.get("prompt");

        const response = await fetch(
          `
        ${process.env.NEXT_PUBLIC_API_URL}/api/startup-analysis`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: userPrompt,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch analysis data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching analysis:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans">
        <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
        <h2 className="text-xl font-semibold text-slate-700">
          Analyzing your startup idea...
        </h2>
        <p className="text-slate-500 mt-2">
          This might take a few moments as our AI evaluates the market.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans">
        <AlertTriangle className="w-10 h-10 text-red-500 mb-4" />
        <h2 className="text-xl font-semibold text-slate-700">
          Analysis Failed
        </h2>
        <p className="text-slate-500 mt-2">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!data || !data.result) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans">
        <AlertTriangle className="w-10 h-10 text-amber-500 mb-4" />
        <h2 className="text-xl font-semibold text-slate-700">No Data Found</h2>
        <p className="text-slate-500 mt-2">
          We couldn't generate an analysis for this prompt.
        </p>
      </div>
    );
  }

  const { result, sources, prompt } = data;

  // Generate mock metrics since API doesn't provide them yet
  const metrics = {
    overall_score: 85,
    market_potential: 92,
    execution_risk: 45,
    moat_strength: 88,
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      {/* Minimalist Corporate Header */}
      <header className="bg-white border-b border-slate-200 h-14 flex items-center px-6 sticky top-0 z-30">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Search
        </Link>
        <div className="mx-auto absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-5 h-5 bg-slate-900 flex items-center justify-center rounded-sm shadow-sm">
            <Activity className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-sm tracking-wide text-slate-900">
            EVA{" "}
            <span className="text-slate-400 font-normal">
              | Market Intelligence
            </span>
          </span>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full px-6 md:px-20 py-10 relative z-10">
        {/* Header Title Section */}
        <div className="mb-8 border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold tracking-widest uppercase rounded">
                Analysis Report
              </span>
              <span className="text-xs font-mono text-slate-400 border-l border-slate-300 pl-3">
                ID: {data.id?.substring(0, 8).toUpperCase() || "8492-AX"}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight capitalize leading-tight max-w-3xl">
              {prompt || "AI Powered LinkedIn Post Scheduler"}
            </h1>
            <p className="text-slate-500 text-sm mt-2 max-w-2xl">
              Comprehensive evaluation covering market potential, risk factors,
              and competitive landscape.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Overall Viability
              </p>
              <div className="text-4xl font-bold text-slate-900">
                {metrics.overall_score}
                <span className="text-xl text-slate-400 font-normal">/100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Column (Spans 2) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Executive Summary */}
            {result.summary && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <FileText className="w-4 h-4 text-slate-400" /> Executive
                  Summary
                </h2>
                <p className="text-slate-700 leading-relaxed text-sm">
                  {result.summary}
                </p>
              </div>
            )}

            {/* Market Analysis */}
            {result.market && (
              <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider p-6 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-slate-400" /> Market
                  Analysis
                </h2>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {result.market.problem &&
                    result.market.problem.length > 0 && (
                      <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">
                          Problems Addressed
                        </h3>
                        <ul className="space-y-3">
                          {result.market.problem.map((prob, idx) => (
                            <li
                              key={idx}
                              className="flex gap-3 text-sm text-slate-700 leading-snug"
                            >
                              <span className="text-slate-300 mt-0.5">•</span>
                              {prob}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  <div className="space-y-6">
                    {result.market.target_segments &&
                      result.market.target_segments.length > 0 && (
                        <div>
                          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                            Target Segments
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {result.market.target_segments.map((seg, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-md font-medium"
                              >
                                {seg}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    {result.market.pricing_signals &&
                      result.market.pricing_signals.length > 0 && (
                        <div>
                          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                            Pricing Models
                          </h3>
                          <ul className="space-y-2">
                            {result.market.pricing_signals.map((sig, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-slate-700 flex items-center gap-2 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-md"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />{" "}
                                {sig}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            )}

            {/* Defensible Moats */}
            {result.market?.moats && result.market.moats.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Shield className="w-4 h-4 text-slate-400" /> Competitive
                  Advantages & Moats
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {result.market.moats.map((moat, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 items-start text-sm text-slate-700 p-3 bg-slate-50 rounded-md border border-slate-100 hover:border-slate-300 transition-colors cursor-default"
                    >
                      <span className="font-mono text-slate-400 text-[10px] mt-0.5 bg-white border border-slate-200 px-1.5 py-0.5 rounded">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {moat}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Risk Assessment */}
            {result.market?.risks && result.market.risks.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <AlertTriangle className="w-4 h-4 text-slate-400" /> Risk
                  Assessment
                </h2>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-700">
                  {result.market.risks.map((risk, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 items-start p-2 hover:bg-slate-50 rounded transition-colors"
                    >
                      <span className="text-red-400 font-bold mt-0.5">!</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Facts placeholder (if empty, show a graceful empty state) */}
            {(!result.facts || result.facts.length === 0) && (
              <div className="bg-slate-50 border border-slate-200 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center shadow-sm">
                <Sparkles className="w-8 h-8 text-slate-300 mb-3" />
                <h3 className="text-sm font-semibold text-slate-700">
                  More Insights Coming Soon
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  We are still gathering more actionable facts and data points
                  for this specific market.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Column (Spans 1) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Key Metrics */}
            <div className="bg-slate-900 text-white rounded-lg p-6 shadow-md border border-slate-800">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <BarChart2 className="w-4 h-4" /> Quantitative Metrics
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    <span>Market Potential</span>
                    <span className="text-white font-mono">
                      {metrics.market_potential}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-sm h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-sm"
                      style={{ width: `${metrics.market_potential}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    <span>Execution Risk</span>
                    <span className="text-white font-mono">
                      {metrics.execution_risk}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-sm h-1.5">
                    <div
                      className="bg-amber-500 h-1.5 rounded-sm"
                      style={{ width: `${metrics.execution_risk}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    <span>Moat Strength</span>
                    <span className="text-white font-mono">
                      {metrics.moat_strength}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-sm h-1.5">
                    <div
                      className="bg-purple-500 h-1.5 rounded-sm"
                      style={{ width: `${metrics.moat_strength}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Competitors */}
            {result.competitors && result.competitors.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Server className="w-4 h-4 text-slate-400" /> Key Competitors
                </h2>
                <div className="space-y-3">
                  {result.competitors.map((comp, idx) => (
                    <div
                      key={idx}
                      className="text-sm font-medium text-slate-700 flex items-center justify-between border border-slate-200 px-3 py-2.5 rounded hover:bg-slate-50 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        {comp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Facts */}
            {result.facts && result.facts.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Info className="w-4 h-4 text-slate-400" /> Notable Facts
                </h2>
                <ul className="space-y-4">
                  {result.facts.map((fact, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-700 flex gap-3 leading-snug"
                    >
                      <span className="font-bold text-slate-300 font-mono mt-0.5">
                        {idx + 1}.
                      </span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Data Sources */}
            {sources && sources.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Globe className="w-4 h-4 text-slate-400" /> Intelligence
                  Sources
                </h2>
                <ul className="space-y-2">
                  {sources.map((source, idx) => (
                    <li key={idx}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-slate-50 p-2 rounded transition-colors group"
                      >
                        <Link2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2 leading-tight break-all">
                          {source.title ||
                            source.name ||
                            new URL(source.url).hostname}
                        </span>
                        <ExternalLink className="w-3 h-3 text-slate-300 ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
