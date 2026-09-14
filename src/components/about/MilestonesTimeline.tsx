"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, CheckCircle2, Award, Sparkles, Building, Landmark } from "lucide-react";
import { primaryEasing } from "@/lib/animations";

export const MilestonesTimeline: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: "1996",
      title: "Foundation & Foundational Classes",
      subtitle: "Inception by the Prabhudasi Sisters",
      icon: Landmark,
      description:
        "St. Teresa Vidya Deep was consecrated with a mission to bring high-standard English-medium education rooted in Christian values and universal moral stewardship to Saveena and southern Udaipur.",
      achievements: [
        "Initial intake of foundational primary scholars",
        "Pioneering values-based English medium education in Sector 14",
        "Dedication under the school motto 'SEEK YE WISDOM'",
      ],
    },
    {
      year: "2005",
      title: "CBSE Affiliation & Secondary Wing",
      subtitle: "Academic Rigor & Campus Expansion",
      icon: Building,
      description:
        "Achieved formal affiliation with the Central Board of Secondary Education (CBSE), New Delhi. Built dedicated secondary classrooms and established foundational science and computing laboratories.",
      achievements: [
        "Inauguration of Class X All India Secondary School Examination (AISSE) center",
        "First batch of board candidates achieving 100% pass distinction",
        "Establishment of inter-school athletics and cultural leagues",
      ],
    },
    {
      year: "2014",
      title: "Senior Secondary Upgradation",
      subtitle: "Tri-Stream Specialization (Science, Commerce & Arts)",
      icon: Award,
      description:
        "CBSE granted senior secondary status for Classes XI and XII. Expanded specialized Physics, Chemistry, Biology laboratories and launched comprehensive Commerce and Humanities departments.",
      achievements: [
        "Three distinct streams: Science (Med/Non-Med), Commerce & Humanities",
        "Advanced high-precision laboratory infrastructure",
        "Graduates qualifying for competitive national exams (NEET, JEE, CUET)",
      ],
    },
    {
      year: "2026",
      title: "Campus Modernization & Digital Horizon",
      subtitle: "30 Years of Moral & Scholastic Stewardship",
      icon: Sparkles,
      description:
        "Celebrating three decades of excellence. Implemented smart interactive classroom projection, unified high-speed IT coding suites, automated admissions desk, and reinforced safety transit networks across Udaipur.",
      achievements: [
        "100% digital IT computing facility with high-speed fiber connectivity",
        "Streamlined online parent callback portal & WhatsApp inquiry desk",
        "Expanded physical education track and eco-conscious green campus",
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {/* Year Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
        {milestones.map((m, index) => {
          const isActive = activeMilestone === index;
          return (
            <button
              key={m.year}
              onClick={() => setActiveMilestone(index)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-navy-900 text-gold-400 border-gold-500/50 shadow-md scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-gold-500/30 hover:text-navy-900"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{m.year}</span>
            </button>
          );
        })}
      </div>

      {/* Active Milestone Card */}
      <motion.div
        key={activeMilestone}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: primaryEasing }}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-4 bg-navy-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-gold-500/20">
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold gold-gradient-text block mb-1">
                {milestones[activeMilestone].year}
              </span>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
                {milestones[activeMilestone].subtitle}
              </span>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 block">Milestone Impact</span>
              <span className="text-sm font-serif font-semibold text-white">
                {milestones[activeMilestone].title}
              </span>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-8 space-y-5">
            <h3 className="text-2xl font-serif font-bold text-navy-900">
              {milestones[activeMilestone].title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {milestones[activeMilestone].description}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-navy-900 uppercase tracking-wider block">
                Key Developments Achieved:
              </span>
              {milestones[activeMilestone].achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
