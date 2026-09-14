"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sun, Snowflake, Calendar, Users, ArrowRight } from "lucide-react";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { OPERATIONAL_HOURS, SCHOOL_IDENTITY } from "@/lib/data/school-data";
import { fadeRise, staggerFast, horizontalAccentVariants } from "@/lib/animations";

export const DailyScheduleMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerFast;

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeRise;

  const accentVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : horizontalAccentVariants;

  return (
    <div className="space-y-8 overflow-hidden">
      {/* Dual Session Schedule Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Summer Session Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:border-amber-500/40 hover:shadow-[0_12px_35px_rgba(245,158,11,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-6 will-change-transform group"
        >
          {/* Animated Horizontal Top Accent Line */}
          <motion.div
            variants={accentVariants}
            className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-gold-500 origin-left"
          />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 text-xs font-bold uppercase tracking-wider group-hover:bg-amber-500/15 transition-colors">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>{OPERATIONAL_HOURS.summer.season}</span>
              </span>
              <span className="text-xs text-slate-400 font-sans font-medium">April – October</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-parchment border border-slate-200/60 group-hover:border-amber-500/20 transition-colors">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Morning Assembly
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mt-0.5 block">
                  {OPERATIONAL_HOURS.summer.assembly}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-parchment border border-slate-200/60 group-hover:border-amber-500/20 transition-colors">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Weekday Dismissal
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mt-0.5 block">
                  {OPERATIONAL_HOURS.summer.dismissalWeekday}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs text-slate-700">
              <span className="font-medium">Saturday Working Hours:</span>
              <span className="font-semibold text-navy-900">
                {OPERATIONAL_HOURS.summer.assembly} – {OPERATIONAL_HOURS.summer.dismissalSaturday}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200/60 text-xs text-rose-800 flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>
              <strong>Nursery Holiday Notice:</strong> {OPERATIONAL_HOURS.summer.notes}.
            </span>
          </div>
        </motion.div>

        {/* Winter Session Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:border-blue-500/40 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-6 will-change-transform group"
        >
          {/* Animated Horizontal Top Accent Line */}
          <motion.div
            variants={accentVariants}
            className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 origin-left"
          />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 border border-blue-500/20 text-xs font-bold uppercase tracking-wider group-hover:bg-blue-500/15 transition-colors">
                <Snowflake className="w-3.5 h-3.5 text-blue-600" />
                <span>{OPERATIONAL_HOURS.winter.season}</span>
              </span>
              <span className="text-xs text-slate-400 font-sans font-medium">November – March</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-parchment border border-slate-200/60 group-hover:border-blue-500/20 transition-colors">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Morning Assembly
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mt-0.5 block">
                  {OPERATIONAL_HOURS.winter.assembly}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-parchment border border-slate-200/60 group-hover:border-blue-500/20 transition-colors">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Weekday Dismissal
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-navy-950 mt-0.5 block">
                  {OPERATIONAL_HOURS.winter.dismissalWeekday}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-between text-xs text-slate-700">
              <span className="font-medium">Saturday Working Hours:</span>
              <span className="font-semibold text-navy-900">
                {OPERATIONAL_HOURS.winter.assembly} – {OPERATIONAL_HOURS.winter.dismissalSaturday}
              </span>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200/60 text-xs text-rose-800 flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <span>
              <strong>Nursery Holiday Notice:</strong> {OPERATIONAL_HOURS.winter.notes}.
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Saturday PTM Window Callout */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="p-6 sm:p-8 rounded-3xl bg-navy-900 text-white border border-gold-500/25 shadow-card hover:border-gold-500/45 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
      >
        <motion.div
          variants={accentVariants}
          className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 origin-left"
        />

        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/20 shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
              Parent-Teacher Consultation Window
            </span>
            <h4 className="text-lg font-serif font-bold text-white mt-0.5">
              {SCHOOL_IDENTITY.contact.parentTeacherMeet}
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Office Visiting Hours: {SCHOOL_IDENTITY.contact.visitingHours}
            </p>
          </div>
        </div>

        <AdmissionsTriggerButton
          variant="outline-gold"
          size="md"
          className="shrink-0"
        >
          Schedule Office Visit
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </AdmissionsTriggerButton>
      </motion.div>
    </div>
  );
};
