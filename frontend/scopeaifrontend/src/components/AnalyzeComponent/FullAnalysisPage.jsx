// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FileText, LineChart, BookOpen } from "lucide-react";

// const FullAnalysisPage = () => {
//   const [analysis, setAnalysis] = useState(null);

//   useEffect(() => {
//     const stored = sessionStorage.getItem("analysisData");
//     if (stored) setAnalysis(JSON.parse(stored));
//   }, []);

//   if (!analysis)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-gray-400">
//         No analysis data found. Please analyze an idea first.
//       </div>
//     );

//   const sections = [
//     { title: "Summary", id: "result", icon: <FileText size={17} /> },
//     { title: "Market ", id: "problems", icon: <LineChart size={17} /> },
//     { title: "Resources", id: "Resources", icon: <BookOpen size={16} /> },
//     // { title: "Pricing", id: "pricing" },
//     // { title: "Moats / Risks", id: "moats" },
//   ];

//   return (
//     <div className="min-h-screen pt-[3rem] grid-background flex bg-[#0a0e1a] text-white">
//       <div className="gradient-orb-1 top-0 left-0" />
//       <div className="gradient-orb-2 bottom-0 right-0" />
//       {/* Sidebar */}
//       <div className="w-[15rem] bg-[#0c1224]/70 border-r border-[#1b2540] px-4  pt-[3rem]">
//         <h1 className="text-xl font-bold text-sky-400  mb-2">
//           Analysis Section
//         </h1>
//         <h3 className="text-sm  text-sky-300 mb-6">
//           Navigate through your insights
//         </h3>

//         <div className="space-y-3">
//           {sections.map((s) => (
//             <div className="py-2 " key={s.id}>
//               <div className="flex items-center  gap-3   text-white-300 hover:text-sky-400 transition-colors">
//                 <span className="text-sky-400">{s.icon}</span>
//                 <span className=" text-lg">{s.title}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 p-8 overflow-y-auto space-y-12">
//         {/* Result */}
//         <section id="result">
//           <h3 className="text-2xl font-semibold text-sky-400 mb-4">Summary</h3>
//           <p className="text-gray-300 mb-6">
//             {analysis.result?.summary || "No summary available."}
//           </p>

//           <h4 className="text-xl font-semibold text-sky-300 mb-2">Facts</h4>
//           <ul className="list-disc list-inside text-gray-300 mb-6">
//             {analysis.result?.facts?.map((f, i) => <li key={i}>{f}</li>) || (
//               <li>No facts available.</li>
//             )}
//           </ul>

//           <h4 className="text-xl font-semibold text-sky-300 mb-2">
//             Competitors
//           </h4>
//           <ul className="list-disc list-inside text-gray-300">
//             {analysis.result?.competitors?.map((c, i) => (
//               <li key={i}>{c}</li>
//             )) || <li>No competitors available.</li>}
//           </ul>
//         </section>

//         {/* Problems */}
//         {/* <section id="problems">
//           <h3 className="text-2xl font-semibold text-sky-400 mb-4">
//             Problems / Target Segments
//           </h3>
//           <ul className="list-disc list-inside text-gray-300">
//             {analysis.result?.problems?.map((p, i) => <li key={i}>{p}</li>) || (
//               <li>No problems listed.</li>
//             )}
//           </ul>
//         </section> */}

//         {/* Pricing */}
//         {/* <section id="pricing">
//           <h3 className="text-2xl font-semibold text-sky-400 mb-4">Pricing</h3>
//           <ul className="list-disc list-inside text-gray-300">
//             {analysis.result?.pricing?.map((p, i) => <li key={i}>{p}</li>) || (
//               <li>No pricing data available.</li>
//             )}
//           </ul>
//         </section> */}

//         {/* Moats / Risks */}
//         {/* <section id="moats">
//           <h3 className="text-2xl font-semibold text-sky-400 mb-4">
//             Moats / Risks
//           </h3>
//           <ul className="list-disc list-inside text-gray-300">
//             {analysis.result?.moats?.map((m, i) => <li key={i}>{m}</li>) || (
//               <li>No moats/risks data available.</li>
//             )}
//           </ul>
//         </section> */}
//       </main>
//     </div>
//   );
// };

// export default FullAnalysisPage;

"use client";
import React, { useEffect, useState } from "react";
import { FileText, LineChart, BookOpen } from "lucide-react";

const FullAnalysisPage = () => {
  const [analysis, setAnalysis] = useState(null);
  const [activeSection, setActiveSection] = useState("summary");

  useEffect(() => {
    const stored = sessionStorage.getItem("analysisData");
    if (stored) setAnalysis(JSON.parse(stored));
  }, []);

  if (!analysis)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        No analysis data found. Please analyze an idea first.
      </div>
    );

  const sections = [
    { title: "Summary", id: "summary", icon: <FileText size={17} /> },
    { title: "Market", id: "market", icon: <LineChart size={17} /> },
    { title: "Resources", id: "resources", icon: <BookOpen size={17} /> },
  ];

  return (
    <div className="min-h-screen pt-[3rem] grid-background flex bg-[#0a0e1a] text-white relative z-10">
      {/* BACKGROUND ORBS — now NON-INTERACTIVE */}
      <div className="gradient-orb-1 top-0 left-0 pointer-events-none z-0" />
      <div className="gradient-orb-2 bottom-0 right-0 pointer-events-none z-0" />

      {/* MAIN WRAPPER ENSURING CLICKABILITY */}
      <div className="flex w-full relative z-20">
        {/* SIDEBAR */}
        <div className="w-[15rem] bg-[#0c1224]/70 border-r border-[#1b2540] px-4 pt-[3rem]">
          <h1 className="text-xl font-bold text-sky-400 mb-2">
            Analysis Section
          </h1>
          <h3 className="text-sm text-sky-300 mb-6">
            Navigate through your insights
          </h3>

          <div className="space-y-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`w-full flex items-center gap-3 py-2 px-2 rounded-lg transition 
                ${
                  activeSection === s.id
                    ? "bg-sky-900/40 text-sky-400"
                    : "text-gray-300 hover:text-sky-400"
                }`}
              >
                <span>{s.icon}</span>
                <span className="text-lg">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto space-y-12">
          {/* SUMMARY SECTION */}
          {activeSection === "summary" && (
            <section>
              <h3 className="text-2xl font-semibold text-sky-400 mb-4">
                Summary
              </h3>

              <p className="text-gray-300 mb-6">
                {analysis.result?.summary || "No summary available."}
              </p>

              {/* Facts */}
              <h4 className="text-xl font-semibold text-sky-300 mb-2">Facts</h4>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                {analysis.result?.facts?.length > 0 ? (
                  analysis.result.facts.map((f, i) => <li key={i}>{f}</li>)
                ) : (
                  <li>No facts available.</li>
                )}
              </ul>

              {/* Competitors */}
              <h4 className="text-xl font-semibold text-sky-300 mb-2">
                Competitors
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                {analysis.result?.competitors?.length > 0 ? (
                  analysis.result.competitors.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))
                ) : (
                  <li>No competitors available.</li>
                )}
              </ul>
            </section>
          )}

          {/* MARKET SECTION */}
          {activeSection === "market" && (
            <section>
              <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                Market Analysis
              </h3>

              {/* Problems */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-sky-300 mb-2">
                  Problems
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {analysis.result?.market?.problem?.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* Target Segments */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-sky-300 mb-2">
                  Target Segments
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {analysis.result?.market?.target_segments?.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* Pricing Signals */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-sky-300 mb-2">
                  Pricing Signals
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {analysis.result?.market?.pricing_signals?.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* Moats */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold text-sky-300 mb-2">
                  Moats
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {analysis.result?.market?.moats?.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Risks */}
              <div>
                <h4 className="text-xl font-semibold text-sky-300 mb-2">
                  Risks
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {analysis.result?.market?.risks?.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* RESOURCES SECTION */}
          {activeSection === "resources" && (
            <section>
              <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                Resources & References
              </h3>

              <div className="space-y-6">
                {analysis.sources?.map((src, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#0f172a]/60 border border-[#1b2540]"
                  >
                    <h4 className="text-lg font-semibold text-sky-300">
                      {src.title}
                    </h4>
                    <p className="text-gray-300 mt-2">{src.snippet}</p>

                    <a
                      href={src.url}
                      target="_blank"
                      className="text-sky-400 underline mt-2 inline-block"
                    >
                      Visit Source →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default FullAnalysisPage;
