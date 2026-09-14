"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, CheckCircle, Shield } from "lucide-react";
import { SchoolCrest } from "@/components/ui/SchoolCrest";
import { fadeRise, staggerFast } from "@/lib/animations";

export const AboutGovernanceMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerFast;

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeRise;

  const institutionalVirtues = [
    { name: "Courage", desc: "Moral fortitude in the pursuit of truth" },
    { name: "Truth", desc: "Uncompromising integrity in word and deed" },
    { name: "Sincerity", desc: "Genuine humility and devotion to purpose" },
    { name: "Loyalty", desc: "Faithful commitment to alma mater and nation" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center overflow-hidden"
    >
      {/* Left Text Narrative */}
      <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-600 uppercase tracking-widest">
          <Compass className="w-4 h-4 text-gold-500" />
          <span>Institutional Genesis</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-navy-900 leading-tight">
          A Noble Mission in Southern Udaipur
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          In 1996, the <strong className="text-navy-950">Prabhudasi Sisters of Ajmer (Est. 1996)</strong> laid the foundation of St. Teresa Vidya Deep Senior Secondary School along the Saveena-Jogi Talaab Road. Recognizing that southern Udaipur needed an accessible, uncompromising center for quality English-medium education, the sisters consecrated this campus to the patroness St. Teresa.
        </p>

        <p className="text-base text-slate-700 leading-relaxed">
          What began with foundational primary classrooms has matured into a premier Senior Secondary institution affiliated with the Central Board of Secondary Education (CBSE), New Delhi, nurturing over a thousand young minds across Foundational, Primary, Middle, Secondary, and Senior Secondary (Science, Commerce, and Humanities) streams.
        </p>

        {/* 4 Core Institutional Virtues from Handbook */}
        <div className="pt-2">
          <span className="text-xs uppercase tracking-widest text-gold-600 font-serif font-bold block mb-3">
            Core Institutional Virtues
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {institutionalVirtues.map((v, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-gold-500/40 hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <span className="font-serif font-bold text-navy-950 text-sm block">
                  {v.name}
                </span>
                <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                  {v.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Co-Educational & English Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
            <span>CBSE Affiliation Nursery – Class XII</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Governing Body: Prabhudasi Sisters of Ajmer</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-gold-600 shrink-0" />
            <span>Inclusive to all communities & backgrounds</span>
          </div>
        </div>
      </motion.div>

      {/* Right Emblem & Seal Card */}
      <motion.div
        variants={itemVariants}
        className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-card border-2 border-gold-500/30 text-center space-y-6 relative overflow-hidden transition-all duration-300 hover:shadow-gold-glow/20"
      >
        <div
          className="absolute -top-16 -right-16 w-56 h-56 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="flex justify-center relative z-10">
          <SchoolCrest size="xl" showText={false} variant="dark" />
        </div>

        <div className="space-y-2 relative z-10">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-serif italic block">
            Official Institutional Seal
          </span>
          <h3 className="text-2xl font-serif font-bold text-white">
            &ldquo;SEEK YE WISDOM&rdquo;
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
            The shield carries the radiant cross of divine inspiration, the open book of academic knowledge, and the burning lamp of moral conscience.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1 relative z-10">
          <div><strong>Governing Society:</strong> Prabhudasi Sisters of Ajmer (Est. 1996)</div>
          <div><strong>Institutional Motto:</strong> &ldquo;SEEK YE WISDOM&rdquo;</div>
          <div><strong>Location:</strong> Sector 12, Saveena Township, NH 8 Bypass, Udaipur</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
