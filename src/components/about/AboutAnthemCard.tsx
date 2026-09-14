"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Music } from "lucide-react";
import { SchoolCrest } from "@/components/ui/SchoolCrest";
import { SCHOOL_ANTHEM } from "@/lib/data/school-data";
import { anthemCardVariants, anthemItemVariants } from "@/lib/animations";

export const AboutAnthemCard: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : anthemCardVariants;

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : anthemItemVariants;

  return (
    <div className="mt-10 max-w-2xl mx-auto overflow-hidden">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-white rounded-3xl p-6 sm:p-12 border border-gold-500/30 shadow-card relative overflow-hidden transition-all duration-300 hover:shadow-gold-glow/20"
      >
        {/* Gold Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-navy-950 via-gold-500 to-crimson-800" />

        {/* Heraldic Watermark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.03] pointer-events-none"
          aria-hidden="true"
        >
          <SchoolCrest size="xl" showText={false} variant="dark" className="w-full h-full" />
        </div>

        <div className="relative z-10 space-y-6">
          {/* Header Badge Lockup */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/25 text-xs font-serif uppercase tracking-widest">
              <Music className="w-3.5 h-3.5 text-gold-600" />
              <span>3. School Anthem</span>
            </div>
            <span className="text-[11px] text-slate-400 font-sans tracking-wide">
              Official Student Handbook • Page 28
            </span>
          </motion.div>

          {/* Lyrics Formatted in Authentic Stanzas & Choruses */}
          <div className="space-y-6 text-slate-800 font-serif italic text-base sm:text-lg leading-relaxed pt-2">
            {SCHOOL_ANTHEM.sections.map((section, sIdx) => {
              const isChorus = section.type === "chorus";
              return (
                <motion.div
                  key={sIdx}
                  variants={itemVariants}
                  className={
                    isChorus
                      ? "pl-6 sm:pl-10 pr-4 py-3 border-l-2 border-gold-500/50 bg-gold-500/[0.04] rounded-r-2xl space-y-1.5 text-navy-950"
                      : "space-y-1.5 pl-2 sm:pl-4"
                  }
                >
                  {section.lines.map((line, lIdx) => {
                    const hasRepetition = line.includes("(2)");
                    const cleanText = line.replace(/\s*\(2\)\s*/, "");
                    return (
                      <p key={lIdx} className="flex items-center justify-between gap-4">
                        <span>{cleanText}</span>
                        {hasRepetition && (
                          <span className="not-italic font-sans text-[11px] font-semibold tracking-wider text-gold-700 bg-gold-500/15 border border-gold-500/30 px-2 py-0.5 rounded-full shrink-0">
                            ×2
                          </span>
                        )}
                      </p>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>

          {/* Footer Tag with Seal */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-sans"
          >
            <span className="text-gold-600 font-serif font-bold uppercase tracking-widest">
              &ldquo;SEEK YE WISDOM&rdquo;
            </span>
            <span className="text-slate-400 text-[11px]">
              Patron: St. Teresa of Lisieux • STVDS Udaipur
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
