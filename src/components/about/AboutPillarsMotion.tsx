"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, GraduationCap, Cpu, Globe } from "lucide-react";
import { fadeRise, staggerFast } from "@/lib/animations";

export const AboutPillarsMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerFast;

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeRise;

  const corePillars = [
    {
      title: "Moral Character",
      subtitle: "Foundational Motto",
      description:
        "Rooted in 'Seek Ye Wisdom' — cultivating honesty, ethical courage, humility, and compassionate conscience in every student.",
      icon: Heart,
      iconBg: "bg-crimson-800/10 text-crimson-800",
    },
    {
      title: "Scholastic Rigor",
      subtitle: "CBSE Mastery",
      description:
        "Fostering deep analytical inquiry, conceptual mastery, and disciplined preparation across foundational to senior secondary board levels.",
      icon: GraduationCap,
      iconBg: "bg-gold-500/15 text-gold-600",
    },
    {
      title: "Technological Literacy",
      subtitle: "Modern Readiness",
      description:
        "Equipping pupils with practical computer coding, modern science laboratories, and digital problem-solving skills for 21st-century leadership.",
      icon: Cpu,
      iconBg: "bg-blue-600/10 text-blue-700",
    },
    {
      title: "Service to Society",
      subtitle: "Prabhudasi Ethos",
      description:
        "Inspiring pupils to place community stewardship and humanitarian service above self, following the compassionate example of St. Teresa.",
      icon: Globe,
      iconBg: "bg-emerald-600/10 text-emerald-700",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 overflow-hidden"
    >
      {corePillars.map((val, idx) => {
        const IconComponent = val.icon;
        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-navy-950/80 rounded-2xl p-7 border border-gold-500/20 shadow-card hover:border-gold-500/50 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-300 space-y-4 will-change-transform"
          >
            <div className={`p-3.5 rounded-xl ${val.iconBg} w-fit transition-transform duration-300 group-hover:scale-105`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400 block">
              {val.subtitle}
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              {val.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {val.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
