"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const price = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const plans = [
    {
      name: "Free",
      icon: Sparkles,
      price: "$0",
      period: "forever",
      description: "Perfect for testing the waters",
      features: [
        "3 analyses per day",
        "Basic insights on moat & competitors",
        "Community support",
        "Standard response time",
      ],
      cta: "Get Started",
      popular: false,
      gradient: "from-gray-500 to-gray-600",
    },
    {
      name: "Pro",
      icon: Zap,
      price: "$29",
      period: "per month",
      description: "For serious founders",
      features: [
        "Unlimited analyses",
        "Advanced insights & recommendations",
        "Priority support",
        "Export reports (PDF/CSV)",
        "API access",
        "Custom analysis parameters",
      ],
      cta: "Start Pro Trial",
      popular: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "contact us",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
    },
  ];
  return (
    <div className="bg-[#0a0e1a] grid-background px-6 md:px-20 overflow-hidden">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <div className=" mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl text-white font-bold mb-6">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass rounded-3xl p-8 ${
                plan.popular ? "ring-2 ring-blue-500 glow-border scale-105" : ""
              } glass-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} bg-opacity-20 flex items-center justify-center mx-auto mb-4`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 py-3 rounded-md to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30"
                    : "bg-white/10 hover:bg-white/20"
                } text-white py-3 rounded-md font-semibold`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-400 mb-6">
              We offer flexible pricing for teams, educational institutions, and
              non-profits. Get in touch to discuss your specific needs.
            </p>
            <button className="border-2 bg-black py-1 px-4 border-blue-500/30 rounded-lg hover:border-blue-500/60 text-white">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default price;
