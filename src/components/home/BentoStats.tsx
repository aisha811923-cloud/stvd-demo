"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Users,
  FlaskConical,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { primaryEasing } from "@/lib/animations";

export const BentoStats: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: primaryEasing,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-parchment relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Institutional Track Record"
          title="Distinction in Numbers & Heritage"
          description="A data-driven snapshot of three decades of consistent pedagogical rigor, moral discipline, and infrastructural growth in Udaipur."
          align="center"
        />

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* CARD 1: Large Academic Legacy (7 Cols) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-card hover:shadow-navy-depth transition-all duration-300 relative overflow-hidden border border-gold-500/20 flex flex-col justify-between"
          >
            {/* Ambient Gold Glow Inside Card */}
            <div
              className="absolute -top-16 -right-16 w-56 h-56 bg-gold-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30 text-xs font-semibold tracking-wider uppercase">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  Founded 1996
                </span>
                <span className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-gold-400">
                  <Award className="w-6 h-6" />
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-4xl sm:text-6xl font-serif font-bold gold-gradient-text tracking-tight block">
                  30+ Years
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-white">
                  Of Academic Stewardship & Value-Based Pedagogy
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Administered with steadfast dedication by the Prabhudasi Sisters Educational Society. Since 1996, the institution has nurtured thousands of Udaipur scholars with uncompromised moral integrity and CBSE scholastic excellence.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gold-400/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold-500" />
                <span>Nursery through Senior Secondary Class XII</span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-white hover:text-gold-400 transition-colors"
              >
                Read School History
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: CBSE Academic Distinction (5 Cols) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-card hover:shadow-gold-glow transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="p-3 rounded-2xl bg-gold-500/10 text-gold-600 border border-gold-500/20">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  CBSE Affiliated
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-navy-950 tracking-tight block">
                  100%
                </span>
                <h3 className="text-xl font-serif font-semibold text-navy-900">
                  Board Examination Pass Rate
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consistent first-division accomplishments across Class X & XII board exams, propelled by disciplined revision cycles and regular diagnostic assessments.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-navy-900/5 text-navy-900 border border-navy-900/10">
                  Science (Med/Non-Med)
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-navy-900/5 text-navy-900 border border-navy-900/10">
                  Commerce
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-navy-900/5 text-navy-900 border border-navy-900/10">
                  Humanities / Arts
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <Link
                href="/academics"
                className="inline-flex items-center text-xs sm:text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
              >
                Explore Senior Secondary Streams
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 3: Focus & Attention (4 Cols) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 shadow-card hover:shadow-gold-glow transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 rounded-2xl bg-navy-900/5 text-navy-900">
                  <Users className="w-5 h-5 text-navy-900" />
                </span>
                <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">
                  Attentive Mentoring
                </span>
              </div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 block mb-1">
                1:25
              </span>
              <h3 className="text-lg font-serif font-semibold text-navy-900 mb-2">
                Student-Teacher Ratio
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Intimate classroom environments guarantee that every pupil receives individualized pedagogical attention, emotional encouragement, and prompt academic intervention.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Mandatory monthly PTM reviews</span>
            </div>
          </motion.div>

          {/* CARD 4: Infrastructure & Labs (4 Cols) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 shadow-card hover:shadow-gold-glow transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 rounded-2xl bg-gold-500/10 text-gold-600">
                  <FlaskConical className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">
                  STEM Infrastructure
                </span>
              </div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 block mb-1">
                5+
              </span>
              <h3 className="text-lg font-serif font-semibold text-navy-900 mb-2">
                Specialized Laboratories
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated scientific arenas for Physics, Chemistry, Biology, Mathematics, and a modern digital IT Computer Suite with 1:1 terminal access.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <Link
                href="/campus"
                className="inline-flex items-center text-xs font-semibold text-navy-900 hover:text-gold-600 transition-colors"
              >
                Inspect Lab Specifications
                <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </motion.div>

          {/* CARD 5: Holistic Co-Curriculars (4 Cols) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-4 bg-white rounded-3xl p-7 sm:p-8 shadow-card hover:shadow-gold-glow transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="p-3 rounded-2xl bg-crimson-800/10 text-crimson-800">
                  <Trophy className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-semibold text-crimson-800 uppercase tracking-wider">
                  Beyond Academics
                </span>
              </div>
              <span className="text-3xl sm:text-4xl font-serif font-bold text-navy-950 block mb-1">
                10+
              </span>
              <h3 className="text-lg font-serif font-semibold text-navy-900 mb-2">
                Co-Curricular Clubs & Sports
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Volleyball, athletics, football, debates, environmental awareness drives, and seasonal art exhibitions instilling lifelong teamwork and leadership.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Annual sports meet & cultural days</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
