"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="min-h-screen   grid-background bg-[#0a0e1a] flex  flex-col items-center justify-center ">
      <div className="gradient-orb-1 top-0 left-0" />
      <div className="gradient-orb-2 bottom-0 right-0" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[55rem] w-full bg-[#0f1629] glass rounded-2xl shadow-2xl py-10 px-[3rem] text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Send us a <span className="text-cyan-400">Message</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Fill out the form below and we'll get back to you shortly
        </p>

        <form className="space-y-6   text-left">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Your Name
              </label>
              <div className="flex items-center bg-[#10192f] border border-gray-700 rounded-xl px-3">
                <User className="text-gray-500 mr-2" size={18} />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent py-3 outline-none text-gray-200 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm mb-2 block">
                Email Address
              </label>
              <div className="flex items-center bg-[#10192f] border border-gray-700 rounded-xl px-3">
                <Mail className="text-gray-500 mr-2" size={18} />
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent py-3 outline-none text-gray-200 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Subject</label>
            <div className="flex items-center bg-[#10192f] border border-gray-700 rounded-xl px-3">
              <MessageSquare className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full bg-transparent py-3 outline-none text-gray-200 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-gray-300 text-sm mb-2 block">Message</label>
            <textarea
              placeholder="Tell us more about your inquiry..."
              rows="5"
              className="w-full bg-[#10192f] border border-gray-700 rounded-xl p-3 outline-none text-gray-200 placeholder-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all"
          >
            <Send className="mr-2" size={18} />
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
