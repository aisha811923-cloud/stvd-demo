"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar as CalendarIcon } from "lucide-react";
import { CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import { fadeRise, staggerFast } from "@/lib/animations";

export const EventsHeroMotion: React.FC = () => {
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
      animate="visible"
      className="max-w-4xl mx-auto text-center space-y-6 relative z-10 overflow-hidden"
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm"
      >
        <CalendarIcon className="w-3.5 h-3.5 text-gold-400" />
        <span>Campus Life & Institutional Calendar • Session {CURRENT_ACADEMIC_SESSION}</span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight"
      >
        Events & <span className="gold-gradient-text">Celebrations</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans"
      >
        Experience the vibrant life at St. Teresa Vidya Deep. From intense athletic championships and scientific expos to moral conclaves and cultural galas in Udaipur.
      </motion.p>
    </motion.div>
  );
};
