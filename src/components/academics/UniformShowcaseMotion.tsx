"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Snowflake, ShieldCheck } from "lucide-react";
import { UNIFORM_SPECS } from "@/lib/data/school-data";
import { fadeRise, staggerFast } from "@/lib/animations";

export const UniformShowcaseMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerFast;

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeRise;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 overflow-hidden"
    >
      {UNIFORM_SPECS.map((spec, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          className="bg-parchment rounded-3xl p-7 border border-slate-200/80 shadow-subtle hover:border-gold-500/40 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 will-change-transform group"
        >
          <div className="space-y-4">
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${spec.tagColor} transition-transform duration-200 group-hover:scale-105 origin-left`}
            >
              {spec.wing}
            </span>

            {/* Summer Uniform */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wide">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>Summer Attire</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {spec.summer}
              </p>
            </div>

            <div className="h-px bg-slate-200" />

            {/* Winter Uniform */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800 uppercase tracking-wide">
                <Snowflake className="w-3.5 h-3.5 text-blue-600" />
                <span>Winter Attire</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {spec.winter}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Standard Institutional Spec</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
