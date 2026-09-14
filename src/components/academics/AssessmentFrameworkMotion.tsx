"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ClipboardCheck, Award, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { fadeRise, staggerFast } from "@/lib/animations";

export const AssessmentFrameworkMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : staggerFast;

  const itemVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : fadeRise;

  const assessmentPillars = [
    {
      title: "Diagnostic Unit Tests",
      cadence: "Monthly Cycles",
      description:
        "Periodic assessments designed to identify conceptual learning gaps early, allowing targeted remedial coaching before term examinations.",
      icon: ClipboardCheck,
    },
    {
      title: "Terminal Examinations",
      cadence: "Bi-Annual Milestones",
      description:
        "Comprehensive summative evaluations conducted in September (Half-Yearly) and March (Annual) mirroring CBSE board marking standards.",
      icon: Award,
    },
    {
      title: "Mandatory Second Saturday PTMs",
      cadence: "Monthly Collaboration",
      description:
        "Structured parent-educator conferences to review academic progress cards, attendance metrics, and behavioral development.",
      icon: Users,
    },
    {
      title: "AISSE / AISSCE Board Prep",
      cadence: "Classes X & XII",
      description:
        "Pre-board test series, previous-year question bank analysis, and dedicated laboratory viva simulations ensuring distinction grades.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-12 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {assessmentPillars.map((p, idx) => {
          const IconComponent = p.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-parchment rounded-3xl p-7 border border-slate-200/80 shadow-subtle hover:border-gold-500/35 hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between will-change-transform group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="p-3 rounded-2xl bg-navy-900/5 text-navy-900 group-hover:bg-gold-500/10 group-hover:text-gold-700 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">
                    {p.cadence}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-gold-600" />
                <span>CBSE Compliant Model</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Academic Calendar Callout */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 border border-gold-500/20 shadow-card flex flex-col md:flex-row items-center justify-between gap-6 hover:border-gold-500/40 transition-all duration-300"
      >
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400">
            Academic Cycle
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Academic Year Runs April to March
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Divided into two balanced terms separated by a winter break. Admissions inquiries for the upcoming 2026–27 academic session are currently active.
          </p>
        </div>

        <AdmissionsTriggerButton
          variant="primary-gold"
          size="lg"
          className="shrink-0 shadow-gold-glow"
        >
          Apply for 2026-27 Session
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </AdmissionsTriggerButton>
      </motion.div>
    </div>
  );
};
