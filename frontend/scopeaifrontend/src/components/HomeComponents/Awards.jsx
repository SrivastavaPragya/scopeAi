// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Sophia Patel",
//     title: "Founder, GrowthWave",
//     image: "/user1.jpg",
//     text: "This platform revolutionized our product validation process. The AI insights saved us months of guesswork!",
//   },
//   {
//     name: "James Carter",
//     title: "Head of Product, NovaTech",
//     image: "/user2.jpg",
//     text: "Incredible accuracy and speed. The automation workflow felt like having an extra analyst on our team.",
//   },
//   {
//     name: "Emily Zhang",
//     title: "CEO, DataForge AI",
//     image: "/user3.jpg",
//     text: "A perfect blend of design, intelligence, and usability. It’s now an essential part of our product pipeline.",
//   },
//   {
//     name: "Liam Walker",
//     title: "Growth Lead, PixelEdge",
//     image: "/user4.jpg",
//     text: "Every detail of this AI experience feels polished. The glow theme and responsiveness are top-notch.",
//   },
//   {
//     name: "Ava Rodriguez",
//     title: "COO, SynthMind Labs",
//     image: "/user5.jpg",
//     text: "An AI platform that actually delivers value. The 3D tilt visuals and precision analytics impressed our entire team.",
//   },
//   {
//     name: "Daniel Kim",
//     title: "VP Marketing, CloudAxis",
//     image: "/user6.jpg",
//     text: "This tool is futuristic yet intuitive. It made data-driven decision-making seamless and efficient.",
//   },
// ];

// const tiltVariants = {
//   initial: { rotateX: 0, rotateY: 0, scale: 1 },
//   hover: { scale: 1.05, rotateX: 5, rotateY: -5 },
// };

// const Testimonials = () => {
//   return (
//     <section
//       id="Testimonials"
//       className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0a0e1a] text-white overflow-hidden"
//     >
//       {/* Background Effects */}
//       <div className="gradient-orb-1 top-0 left-0 opacity-30" />
//       <div className="gradient-orb-2 bottom-0 right-0 opacity-30" />
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,15,30,0.6)_0%,#030712_80%)]" />

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <div className="inline-flex items-center space-x-3 glass px-6 py-2 rounded-full border border-white/10 shadow-md mb-6">
//           <Quote className="h-5 w-5 text-cyan-400" />
//           <span className="text-sm text-gray-300 font-medium">
//             Real Stories, Real Impact
//           </span>
//         </div>

//         <h2 className="text-4xl md:text-5xl font-bold">
//           <span className="text-gradient from-blue-500 to-teal-400 bg-clip-text text-transparent">
//             Testimonials
//           </span>
//         </h2>

//         <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
//           Hear from the innovators, founders, and creators who’ve used our AI
//           platform to accelerate their growth and ideas.
//         </p>
//       </motion.div>

//       {/* Grid Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
//         {testimonials.map((t, i) => (
//           <motion.div
//             key={i}
//             variants={tiltVariants}
//             initial="initial"
//             whileHover="hover"
//             transition={{ type: "spring", stiffness: 200, damping: 10 }}
//             className="relative glass bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_#00e0ff40] transition-all duration-500 cursor-pointer"
//           >
//             <Quote className="absolute top-6 left-6 w-6 h-6 text-cyan-400/40" />
//             <p className="text-gray-200 mt-8 mb-6 text-sm leading-relaxed">
//               “{t.text}”
//             </p>
//             <div className="flex items-center mt-auto space-x-3">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[2px]">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <div className="text-left">
//                 <h4 className="font-semibold text-white">{t.name}</h4>
//                 <p className="text-sm text-gray-400">{t.title}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Patel",
    title: "Founder, GrowthWave",
    image: "/user1.jpg",
    text: "This platform revolutionized our product validation process. The AI insights saved us months of guesswork!",
  },
  {
    name: "James Carter",
    title: "Head of Product, NovaTech",
    image: "/user2.jpg",
    text: "Incredible accuracy and speed. The automation workflow felt like having an extra analyst on our team.",
  },
  {
    name: "Emily Zhang",
    title: "CEO, DataForge AI",
    image: "/user3.jpg",
    text: "A perfect blend of design, intelligence, and usability. It’s now an essential part of our product pipeline.",
  },
  {
    name: "Liam Walker",
    title: "Growth Lead, PixelEdge",
    image: "/user4.jpg",
    text: "Every detail of this AI experience feels polished. The glow theme and responsiveness are top-notch.",
  },
  {
    name: "Ava Rodriguez",
    title: "COO, SynthMind Labs",
    image: "/user5.jpg",
    text: "An AI platform that actually delivers value. The 3D tilt visuals and precision analytics impressed our entire team.",
  },
  {
    name: "Daniel Kim",
    title: "VP Marketing, CloudAxis",
    image: "/user6.jpg",
    text: "This tool is futuristic yet intuitive. It made data-driven decision-making seamless and efficient.",
  },
];

const tiltVariants = {
  initial: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { scale: 1.05, rotateX: 5, rotateY: -5 },
};

const Testimonials = () => {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section
      id="Testimonials"
      className="relative py-24 px-6 md:px-12 lg:px-20 bg-[#0a0e1a] text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="gradient-orb-1 top-0 left-0 opacity-30" />
      <div className="gradient-orb-2 bottom-0 right-0 opacity-30" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(10,15,30,0.6)_0%,#030712_80%)]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-3 glass px-6 py-2 rounded-full border border-white/10 shadow-md mb-6">
          <Quote className="h-5 w-5 text-cyan-400" />
          <span className="text-sm text-gray-300 font-medium">
            Real Stories, Real Impact
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-gradient from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Hear from the innovators, founders, and creators who’ve used our AI
          platform to accelerate their growth and ideas.
        </p>
      </motion.div>

      {/* Moving Grid Section */}
      <div className="space-y-12">
        {/* Row 1 - moves right → left */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...row1, ...row1].map((t, i) => (
            <motion.div
              key={`r1-${i}`}
              variants={tiltVariants}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="min-w-[320px] max-w-[340px] flex-shrink-0 relative glass bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_#00e0ff40] transition-all duration-500 cursor-pointer"
            >
              <Quote className="absolute top-6 left-6 w-6 h-6 text-cyan-400/40" />
              <p className="text-gray-200 mt-8 mb-6 text-sm leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center mt-auto space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[2px]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 - moves left → right */}
        <motion.div
          className="flex space-x-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...row2, ...row2].map((t, i) => (
            <motion.div
              key={`r2-${i}`}
              variants={tiltVariants}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="min-w-[320px] max-w-[340px] flex-shrink-0 relative glass bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_#00e0ff40] transition-all duration-500 cursor-pointer"
            >
              <Quote className="absolute top-6 left-6 w-6 h-6 text-cyan-400/40" />
              <p className="text-gray-200 mt-8 mb-6 text-sm leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center mt-auto space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[2px]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
