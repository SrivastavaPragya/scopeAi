"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  User,
  Send,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";

const GetInTouch = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[#0a0e1a] pt-[8rem]  grid-background  md:px-20 overflow-hidden">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-gradient">Get in Touch</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {[
          {
            icon: Mail,
            title: "Email Us",
            content: "support@startupanalyzer.ai",
            description: "Send us an email anytime",
          },
          {
            icon: MapPin,
            title: "Visit Us",
            content: "San Francisco, CA",
            description: "Come say hello at our office",
          },
          {
            icon: Phone,
            title: "Call Us",
            content: "+1 (555) 123-4567",
            description: "Mon-Fri from 9am to 6pm PST",
          },
        ].map((contact, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass glass-hover rounded-2xl p-8 text-center group"
          >
            <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <contact.icon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {contact.title}
            </h3>
            <p className="text-cyan-400 font-semibold mb-2">
              {contact.content}
            </p>
            <p className="text-gray-400 text-sm">{contact.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GetInTouch;
