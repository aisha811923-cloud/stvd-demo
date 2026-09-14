"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchoolCrest } from "@/components/ui/SchoolCrest";
import { SCHOOL_INFO, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import { useAdmissionsModal } from "@/context/AdmissionsModalContext";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { openModal } = useAdmissionsModal();

  const activeVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
      }
    : fadeInUp;

  const containerVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : staggerContainer;

  return (
    <section className="relative overflow-hidden bg-navy-gradient text-white pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 border-b border-gold-500/20">
      {/* Ambient Lighting Spheres */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-24 w-96 h-96 bg-crimson-800/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-800/40 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Subtle Geometric Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-7"
        >
          {/* 1. Pill Badge */}
          <motion.div variants={activeVariants} className="flex justify-center">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md shadow-sm transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span>Admissions Open for Academic Year {CURRENT_ACADEMIC_SESSION} | Nursery to Class XII</span>
            </button>
          </motion.div>

          {/* 2. School Heraldic Crest Icon */}
          <motion.div variants={activeVariants} className="flex justify-center">
            <SchoolCrest size="xl" showText={false} variant="dark" />
          </motion.div>

          {/* 3. Editorial Headline */}
          <motion.h1
            variants={activeVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.15]"
          >
            Where Character Meets{" "}
            <span className="gold-gradient-text block sm:inline">
              Intellectual Distinction.
            </span>
          </motion.h1>

          {/* 4. Subtitle & Context */}
          <motion.p
            variants={activeVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto font-normal"
          >
            Rooted in the timeless conviction{" "}
            <span className="text-gold-400 font-serif italic">
              &ldquo;{SCHOOL_INFO.motto}&rdquo;
            </span>{" "}
            and stewarded by the Prabhudasi Sisters Educational Society, St. Teresa Vidya Deep has shaped ethical leaders, scientific minds, and compassionate citizens in Udaipur for three decades.
          </motion.p>

          {/* 5. Dual CTAs */}
          <motion.div
            variants={activeVariants}
            className="pt-3 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
          >
            <Button
              variant="primary-gold"
              size="lg"
              onClick={() => openModal()}
              className="shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              Apply for Admission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <Link href="/campus">
              <Button
                variant="outline-gold"
                size="lg"
                className="backdrop-blur-md bg-white/5 hover:bg-white/10"
              >
                <Compass className="w-4 h-4 mr-2 text-gold-400" />
                Explore Campus & Virtual Tour
              </Button>
            </Link>
          </motion.div>

          {/* 6. Quick Institutional Highlights Bar */}
          <motion.div
            variants={activeVariants}
            className="pt-10 sm:pt-14 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300"
          >
            <div className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Affiliated to CBSE, New Delhi</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <Sparkles className="w-4 h-4 text-gold-500 shrink-0" />
              <span>English Medium & Co-Educational</span>
            </div>

            <div className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Sector 12, Saveena, Udaipur</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
