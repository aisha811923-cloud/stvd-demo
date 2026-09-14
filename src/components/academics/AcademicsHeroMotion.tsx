"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeRise, staggerFast } from "@/lib/animations";

export const AcademicsHeroMotion: React.FC = () => {
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
      className="max-w-7xl mx-auto text-center space-y-6 relative z-10 overflow-hidden"
    >
      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        <span>CBSE Affiliated Curriculum • Nursery to Class XII</span>
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
        Scholastic Rigor Across{" "}
        <span className="gold-gradient-text">Every Developmental Stage.</span>
      </motion.h1>

      <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
        From playful sensory exploration in early childhood to focused board examination preparation in our senior science, commerce, and humanities wings.
      </motion.p>
    </motion.div>
  );
};
