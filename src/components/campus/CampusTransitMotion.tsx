"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bus, Navigation, ArrowRight } from "lucide-react";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { TRANSPORT_OVERVIEW } from "@/lib/data/school-data";
import { luxuryEasing } from "@/lib/animations";

const TRANSIT_SECTORS = [
  "Saveena",
  "Sector 14",
  "Sector 11",
  "Hiran Magri",
  "Goverdhan Vilas",
  "Central Udaipur Corridors",
];

export const CampusTransitMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 32,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: luxuryEasing,
      },
    },
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const badgeItemVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
      scale: shouldReduceMotion ? 1 : 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: luxuryEasing,
      },
    },
  };

  return (
    <section className="py-20 bg-navy-900 text-white border-t border-gold-500/20 relative overflow-hidden">
      <div
        className="absolute -top-24 right-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-4xl mx-auto bg-navy-950/80 rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-card text-center space-y-6 overflow-hidden"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/25 text-xs font-semibold uppercase tracking-wider">
              <Bus className="w-3.5 h-3.5 text-gold-400" />
              <span>Transit Network: {TRANSPORT_OVERVIEW.status}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800 text-slate-300 border border-slate-700 text-xs">
              <Navigation className="w-3.5 h-3.5 text-gold-400" />
              <span>Udaipur Citywide Coverage</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            {TRANSPORT_OVERVIEW.headline}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
            {TRANSPORT_OVERVIEW.description}
          </p>

          {/* Coverage Sector Badges with 0.08s Stagger */}
          <motion.div
            variants={badgeContainerVariants}
            className="pt-2 flex flex-wrap items-center justify-center gap-2"
          >
            {TRANSIT_SECTORS.map((sector, sIdx) => (
              <motion.span
                key={sIdx}
                variants={badgeItemVariants}
                className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-500/40 text-xs text-slate-300 hover:text-gold-300 font-medium transition-all duration-200"
              >
                {sector}
              </motion.span>
            ))}
          </motion.div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AdmissionsTriggerButton
              variant="primary-gold"
              size="md"
              className="shadow-gold-glow"
            >
              Inquire About Transit Route for Your Area
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </AdmissionsTriggerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
