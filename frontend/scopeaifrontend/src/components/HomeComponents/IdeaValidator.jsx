// "use client";

// import { motion } from "framer-motion";
// import { Brain, Users, LineChart } from "lucide-react";
// import React from "react";

// const IdeaValidator = () => {
//   return (
//     <section className="relative py-24 bg-[#0a0e1a] text-white overflow-hidden">
//       {/* Gradient orbs for background depth */}
//       <div className="gradient-orb-1 top-0 left-0" />
//       <div className="gradient-orb-2 bottom-0 right-0" />

//       <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-bold mb-6"
//         >
//           <span className="text-gradient">Is My Idea Any Good?</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mb-12"
//         >
//           Wondering if your business idea is worth pursuing?{" "}
//           <span className="text-white font-medium">Eva</span> helps you figure
//           it out in minutes — analyzing your market, audience, and competition
//           using AI. Get clarity, personalized feedback, and next steps to make
//           your idea market-ready — fast, focused, and free.
//         </motion.p>

//         {/* Info cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="glass p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-lg"
//           >
//             <div className="flex justify-center mb-4">
//               <LineChart className="w-10 h-10 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Market Analysis with AI
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Identify competitors, understand your audience, and discover your
//               idea’s market fit in real time — powered by AI and real market
//               data.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="glass p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-lg"
//           >
//             <div className="flex justify-center mb-4">
//               <Brain className="w-10 h-10 text-cyan-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Personalized Value Proposition
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Eva crafts a unique value proposition tailored to your business
//               idea, helping you stand out from the competition.
//             </p>
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="glass p-6 rounded-2xl shadow-lg border border-white/10 backdrop-blur-lg"
//           >
//             <div className="flex justify-center mb-4">
//               <Users className="w-10 h-10 text-teal-400" />
//             </div>
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Join 200,000+ Startup Explorers
//             </h3>
//             <p className="text-gray-400 text-sm leading-relaxed">
//               Be part of our AI-driven startup community. Share insights, test
//               ideas, and get early feedback — no pressure, just pure
//               exploration.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Subtle radial background */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,#020617_80%)]" />
//     </section>
//   );
// };

// export default IdeaValidator;

"use client";

import { motion } from "framer-motion";
import { LineChart, Users } from "lucide-react";
import React from "react";

const IdeaValidator = () => {
  return (
    <section className="relative grid-background bg-[#0a0e1a] text-white py-4 px-[4rem] overflow-hidden">
      {/* Gradient orbs */}
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />

      <div className=" px-14  w-full ">
        {/* Small tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block glass px-4 py-1.5 rounded-full text-sm text-gray-300 mb-6"
        >
          How Do I Launch a Startup?
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Is My Idea <span className="text-gradient">Any Good?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" text-gray-400 text-xl leading-relaxed mb-16"
        >
          We all want to know if our business ides is worth purusing, and how to
          get it moving. Eva helps you figure it out in just a few minutes. Eva
          is trained on real market data and startup launch patterns. She’ll
          perform AI based competitive analysis, customer analysis and she will
          find your unique value proposition. You’ll get clarity, personalized
          feedback, and suggestions to make your idea more “market ready.” Eva
          even gives you assets to move forward - if you want to launch. It’s
          fast, focused, and free
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 px-10">
        {/* Left Card */}
        <motion.div className=" p-8 rounded-2xl  hover:border-blue-500/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <LineChart className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Market Analysis with AI
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Eva is the startup advisor we all wish we had at the beginning —
            fast, grounded in real market data, and honest. Identify
            competitors, define your audience, and discover how your idea fits
            the market. Get a clear{" "}
            <span className="text-white font-medium">value proposition</span>{" "}
            and practical launch steps personalized to your idea.
          </p>
        </motion.div>

        {/* Right Card */}
        <motion.div
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" p-8 rounded-2xl hover:border-teal-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-teal-400" />
            <h3 className="text-xl font-semibold text-white">
              Join 200,000+ Startup Explorers
            </h3>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Be part of the world’s largest startup explorer community. Test your
            ideas, get feedback, and share insights from{" "}
            <span className="text-white font-medium">Eva</span>, startup trends,
            and real founders. No pressure — just exploration and early
            traction.
          </p>
        </motion.div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,#020617_85%)]" />
    </section>
  );
};

export default IdeaValidator;
