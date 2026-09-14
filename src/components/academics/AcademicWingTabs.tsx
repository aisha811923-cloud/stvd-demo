"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Compass,
  ShieldCheck,
  Target,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { primaryEasing } from "@/lib/animations";

export const AcademicWingTabs: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("senior-secondary");

  const wingsData = [
    {
      id: "foundational",
      title: "Foundational Wing",
      classes: "Nursery, LKG & UKG",
      ageRange: "3 – 5 Years",
      icon: Sparkles,
      pedagogy: "Play-Way & Sensory Discovery",
      overview:
        "Designed to inspire natural curiosity and joyful socialization. Early learners engage with sensory manipulatives, phonetic foundational reading, and structured play that cultivates confidence without premature academic anxiety.",
      subjects: ["Phonics & Early Reading", "Number Play & Spatial Reasoning", "Expressive Arts & Music", "Motor Skills & Physical Movement"],
      highlights: [
        "Montessori-inspired learning corners",
        "Activity arenas calibrated for child safety",
        "Teacher-to-student attention ensuring emotional comfort",
        "Bilingual conversational development (English & Hindi)",
      ],
      defaultGrade: "Nursery",
    },
    {
      id: "primary",
      title: "Primary Wing",
      classes: "Classes I to V",
      ageRange: "6 – 10 Years",
      icon: BookOpen,
      pedagogy: "Experiential & Conceptual Building",
      overview:
        "Transitions pupils from informal discovery into structured conceptual numeracy, literacy, and environmental consciousness. Interactive digital aids and group projects ensure fundamentals are permanently grasped.",
      subjects: ["English Language & Literature", "Mathematics & Mental Math", "Environmental Studies (EVS)", "Hindi Language", "Foundational Computer Literacy"],
      highlights: [
        "Hands-on science kits and model building",
        "Smart interactive classroom visual demonstrations",
        "Weekly public speaking and moral value story sessions",
        "Guided reading hours in the junior library section",
      ],
      defaultGrade: "Classes 1–5",
    },
    {
      id: "middle",
      title: "Middle Wing",
      classes: "Classes VI to VIII",
      ageRange: "11 – 13 Years",
      icon: Compass,
      pedagogy: "Inquiry-Driven & Analytical Thinking",
      overview:
        "Fosters disciplined intellectual curiosity and logical questioning. Students transition to dedicated science laboratories, advance in mathematics, and begin structured debates and sports competitions.",
      subjects: ["Science (Physics, Chemistry, Biology)", "Mathematics & Geometry", "Social Sciences (History, Civics, Geography)", "Languages (English, Hindi, Sanskrit)", "Information & Communication Technology"],
      highlights: [
        "Hands-on experiment sessions in physical STEM labs",
        "Inter-house quizzes, speech competitions, and exhibitions",
        "Physical training in athletics, volleyball, and yoga",
        "Diagnostic periodic unit tests for continuous tracking",
      ],
      defaultGrade: "Classes 6–8",
    },
    {
      id: "secondary",
      title: "Secondary Wing",
      classes: "Classes IX & X",
      ageRange: "14 – 15 Years",
      icon: ShieldCheck,
      pedagogy: "CBSE AISSE Board Preparation",
      overview:
        "A focused academic regime preparing students for the CBSE All India Secondary School Examination (AISSE). Emphasizes syllabus mastery, rigorous mock evaluations, and career guidance.",
      subjects: ["Science (Integrated Lab Practicals)", "Mathematics (Standard / Basic)", "Social Science", "English Language & Literature", "Hindi Course-A / Sanskrit", "Information Technology (Vocational)"],
      highlights: [
        "Structured pre-board mock examinations mirroring CBSE pattern",
        "Specialized lab practical assessments and viva practice",
        "Personalized doubt-clearing clinics before final boards",
        "Career and stream selection counseling for Class XI",
      ],
      defaultGrade: "Classes 9–10",
    },
    {
      id: "senior-secondary",
      title: "Senior Secondary Wing",
      classes: "Classes XI & XII",
      ageRange: "16 – 17 Years",
      icon: Target,
      pedagogy: "Specialized Tri-Stream Excellence",
      overview:
        "Comprehensive, high-rigor education across three dedicated academic streams preparing students for CBSE AISSCE board exams and competitive national entrance tests (NEET, JEE, CUET, CA Foundation).",
      streams: [
        {
          name: "Science Stream (Medical & Non-Medical)",
          subjects: ["Physics", "Chemistry", "Biology / Mathematics", "Physical Education / Computer Science", "English Core"],
          focus: "Deep practical laboratory work, problem-solving speed, and entrance test orientation.",
        },
        {
          name: "Commerce Stream",
          subjects: ["Accountancy", "Business Studies", "Economics", "Applied Mathematics / Informatics", "English Core"],
          focus: "Financial acumen, accounting principles, business case studies, and corporate analysis.",
        },
        {
          name: "Humanities / Arts Stream",
          subjects: ["History", "Political Science", "Economics / Geography", "Psychology / Sociology", "English Core"],
          focus: "Critical social inquiry, essay mastery, civil services orientation, and policy studies.",
        },
      ],
      highlights: [
        "Dedicated senior Physics, Chemistry & Biology laboratories",
        "Rigorous question bank drills and previous-year board paper reviews",
        "Faculty mentors providing individual guidance for board distinctions",
      ],
      defaultGrade: "Class 11–12 Science",
    },
  ];

  const currentWing = wingsData.find((w) => w.id === activeTab) || wingsData[0];

  return (
    <div className="space-y-10">
      {/* Wing Switcher Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {wingsData.map((wing) => {
          const isActive = activeTab === wing.id;
          const IconComponent = wing.icon;
          return (
            <button
              key={wing.id}
              onClick={() => setActiveTab(wing.id)}
              className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
                isActive
                  ? "bg-navy-900 text-gold-400 border-gold-500/50 shadow-card scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:border-gold-500/30 hover:bg-slate-50"
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isActive ? "text-gold-400" : "text-slate-500"}`} />
              <span>{wing.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Wing Content Card */}
      <motion.div
        key={activeTab}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: primaryEasing }}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-card space-y-8"
      >
        {/* Header Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {currentWing.classes}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                Age: {currentWing.ageRange}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
              {currentWing.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pedagogical Focus: <strong className="text-navy-950 font-medium">{currentWing.pedagogy}</strong>
            </p>
          </div>

          <AdmissionsTriggerButton
            defaultGrade={currentWing.defaultGrade}
            variant="primary-gold"
            size="md"
            className="self-start md:self-auto shadow-gold-glow"
          >
            Inquire for {currentWing.title}
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </AdmissionsTriggerButton>
        </div>

        {/* Overview Narrative */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
          {currentWing.overview}
        </p>

        {/* Stream Breakdown (If Senior Secondary) or Subjects List */}
        {currentWing.streams ? (
          <div className="space-y-4">
            <h4 className="text-base font-serif font-bold text-navy-900 border-l-4 border-gold-500 pl-3">
              Senior Secondary Streams (Classes XI & XII)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentWing.streams.map((stream, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-parchment border border-slate-200/80 shadow-subtle flex flex-col justify-between space-y-3"
                >
                  <div>
                    <h5 className="text-base font-serif font-bold text-navy-900">
                      {stream.name}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {stream.focus}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[11px] font-semibold text-navy-950 uppercase tracking-wider block mb-1">
                      Curriculum Core:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {stream.subjects.map((sub, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-gold-500" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <h4 className="text-base font-serif font-bold text-navy-900 border-l-4 border-gold-500 pl-3">
              Curriculum Core Subjects
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentWing.subjects?.map((sub, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-navy-900/5 text-navy-900 text-xs sm:text-sm font-medium border border-navy-900/10"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Pedagogical Highlights Grid */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <h4 className="text-sm font-semibold text-navy-900 uppercase tracking-wider">
            Pedagogical Highlights & Facilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentWing.highlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
