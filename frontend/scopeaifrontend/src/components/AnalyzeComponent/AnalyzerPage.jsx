// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Loader2, ExternalLink } from "lucide-react";

// const AnalyzerPage = () => {
//   const [idea, setIdea] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [analysis, setAnalysis] = useState(null);

//   const handleAnalyze = async () => {
//     if (!idea.trim()) return alert("Please describe your startup idea first!");
//     setLoading(true);
//     setAnalysis(null);
//     try {
//       const res = await fetch("http://localhost:8000/api/startup-analysis", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt: idea }),
//       });
//       const data = await res.json();
//       console.log(data);
//       setAnalysis(data);
//     } catch (error) {
//       console.error("Error fetching analysis:", error);
//       alert("Something went wrong while analyzing your idea.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0e1a] grid-background text-white flex flex-col items-center justify-center px-3 py-[8rem]">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-5xl md:text-7xl font-bold mb-3 text-center"
//       >
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
//           AI-Powered
//         </span>{" "}
//         Startup Analyzer
//       </motion.h1>

//       <p className="text-gray-400 text-center max-w-2xl mb-10">
//         Describe your startup idea and let our AI analyze its potential in
//         seconds
//       </p>

//       {/* Input Card */}
//       {!analysis && !loading && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="bg-[#0c1224]/60 border border-[#1b2540] rounded-2xl p-6 w-full max-w-4xl shadow-lg backdrop-blur-md"
//         >
//           <h2 className="text-lg font-semibold mb-3">
//             Describe Your Startup Idea
//           </h2>

//           <textarea
//             value={idea}
//             onChange={(e) => setIdea(e.target.value)}
//             placeholder="Example: A mobile app that uses AI to help people plan their meals..."
//             className="w-full h-40 bg-[#0a1020] border border-[#1f2b4a] rounded-xl p-4 text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
//           />

//           <button
//             onClick={handleAnalyze}
//             className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 font-semibold flex items-center justify-center gap-2 transition-all duration-300"
//           >
//             <Sparkles size={18} /> Analyze My Idea
//           </button>
//         </motion.div>
//       )}

//       {/* Loader */}
//       {loading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="flex flex-col items-center justify-center mt-20"
//         >
//           <Loader2 size={60} className="animate-spin text-sky-400 mb-6" />
//           <p className="text-lg text-gray-300 font-medium">
//             Our AI is analyzing your startup idea…
//           </p>
//           <p className="text-sm text-gray-500 mt-1">
//             This usually takes 2–3 seconds
//           </p>
//         </motion.div>
//       )}

//       {/* Analysis Result */}
//       {analysis && !loading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-full max-w-6xl mt-10 px-4"
//         >
//           <h2 className="text-3xl font-bold text-sky-400 mb-6 text-center">
//             Analysis Complete
//           </h2>

//           {/* Summary */}
//           <div className="bg-[#0c1224]/70 border border-[#1b2540] rounded-2xl p-6 mb-8 shadow-lg">
//             <h3 className="text-xl font-semibold mb-2 text-sky-300">Summary</h3>
//             <p className="text-gray-300 leading-relaxed">
//               {analysis.result?.summary || "No summary available."}
//             </p>
//           </div>

//           {/* Facts & Competitors */}
//           <div className="grid md:grid-cols-2 gap-6 mb-8">
//             {/* Facts */}
//             <div className="bg-[#0c1224]/70 border border-[#1b2540] rounded-2xl p-5 shadow-md">
//               <h4 className="text-lg font-semibold text-sky-300 mb-3">Facts</h4>
//               {analysis.result?.facts?.length > 0 ? (
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {analysis.result.facts.map((fact, i) => (
//                     <li key={i}>{fact}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 italic">
//                   No specific facts available.
//                 </p>
//               )}
//             </div>

//             {/* Competitors */}
//             <div className="bg-[#0c1224]/70 border border-[#1b2540] rounded-2xl p-5 shadow-md">
//               <h4 className="text-lg font-semibold text-sky-300 mb-3">
//                 Competitors
//               </h4>
//               {analysis.result?.competitors?.length > 0 ? (
//                 <ul className="list-disc list-inside text-gray-300 space-y-2">
//                   {analysis.result.competitors.map((comp, i) => (
//                     <li key={i}>{comp}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500 italic">
//                   No competitors identified.
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Market Details */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {Object.entries(analysis.result?.market || {}).map(
//               ([key, values]) => (
//                 <div
//                   key={key}
//                   className="bg-[#0c1224]/70 border border-[#1b2540] rounded-2xl p-5 shadow-md"
//                 >
//                   <h4 className="text-lg font-semibold capitalize text-sky-300 mb-3">
//                     {key.replaceAll("_", " ")}
//                   </h4>
//                   <ul className="list-disc list-inside text-gray-300 space-y-2">
//                     {Array.isArray(values) && values.length > 0 ? (
//                       values.map((v, i) => <li key={i}>{v}</li>)
//                     ) : (
//                       <li>No data available.</li>
//                     )}
//                   </ul>
//                 </div>
//               )
//             )}
//           </div>

//           {/* Sources */}
//           {analysis.sources?.length > 0 && (
//             <div className="mt-10 bg-[#0c1224]/70 border border-[#1b2540] rounded-2xl p-6 shadow-lg">
//               <h3 className="text-xl font-semibold mb-3 text-sky-300">
//                 Sources
//               </h3>
//               <div className="space-y-3">
//                 {analysis.sources.map((src, i) => (
//                   <a
//                     key={i}
//                     href={src.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block p-3 bg-[#0a1020] rounded-xl border border-[#1f2b4a] hover:bg-[#111a30] transition-all"
//                   >
//                     <div className="flex items-center justify-between">
//                       <span className="text-sky-400 font-medium">
//                         {src.title}
//                       </span>
//                       <ExternalLink size={16} className="text-gray-400" />
//                     </div>
//                     <p className="text-sm text-gray-400 mt-1">{src.snippet}</p>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default AnalyzerPage;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const AnalyzerPage = () => {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const router = useRouter();

  const handleAnalyze = async () => {
    if (!idea.trim()) return alert("Please describe your startup idea first!");
    setLoading(true);
    setAnalysis(null);
    try {
      const res = await fetch("http://localhost:8000/api/startup-analysis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: idea }),
      });
      const data = await res.json();
      setAnalysis(data);
    } catch (error) {
      console.error("Error fetching analysis:", error);
      alert("Something went wrong while analyzing your idea.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewFull = () => {
    // Pass analysis data to another route via sessionStorage
    sessionStorage.setItem("analysisData", JSON.stringify(analysis));
    router.push("/full-analysis");
  };

  return (
    <div className="min-h-screen grid-background bg-[#0a0e1a] text-white flex flex-col items-center justify-center px-3 py-[8rem]">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-3 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
          AI-Powered
        </span>{" "}
        Startup Analyzer
      </motion.h1>

      <p className="text-gray-400 text-center max-w-2xl mb-10">
        Describe your startup idea and let our AI analyze its potential in
        seconds
      </p>

      {/* Input Card */}
      {!analysis && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0c1224]/60 border border-[#1b2540] rounded-2xl p-6 w-full max-w-4xl shadow-lg backdrop-blur-md"
        >
          <h2 className="text-lg font-semibold mb-3">
            Describe Your Startup Idea
          </h2>

          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Example: A mobile app that uses AI to help people plan their meals..."
            className="w-full h-40 bg-[#0a1020] border border-[#1f2b4a] rounded-xl p-4 text-gray-300 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <button
            onClick={handleAnalyze}
            className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 font-semibold flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Sparkles size={18} /> Analyze My Idea
          </button>
        </motion.div>
      )}

      {/* Loader */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center mt-20"
        >
          <Loader2 size={60} className="animate-spin text-sky-400 mb-6" />
          <p className="text-lg text-gray-300 font-medium">
            Our AI is analyzing your startup idea…
          </p>
          <p className="text-sm text-gray-500 mt-1">
            This usually takes 2–3 seconds
          </p>
        </motion.div>
      )}

      {/* Summary Result */}
      {analysis && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mt-10 px-4"
        >
          <h2 className="text-3xl font-bold text-sky-400 mb-4 text-center">
            Summary
          </h2>
          <div className="bg-[#0c1224]/70 border border-[#1b2540] rounded-2xl p-6 mb-8 shadow-lg">
            <p className="text-gray-300 leading-relaxed">
              {analysis.result?.summary || "No summary available."}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleViewFull}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300"
            >
              View Complete Analysis
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AnalyzerPage;
