"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";
import { useAdmissionsModal } from "@/context/AdmissionsModalContext";
import { CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";

export const FloatingAdmissionsBadge: React.FC = () => {
  const { openModal } = useAdmissionsModal();
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal badge after 300px scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.9 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-5 right-5 z-40"
        >
          <button
            onClick={() => openModal()}
            className="group relative inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-navy-950 text-white border-2 border-gold-500/50 shadow-gold-glow hover:shadow-gold-glow-lg hover:border-gold-400 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2"
            aria-label={`Open Admissions ${CURRENT_ACADEMIC_SESSION} Callback Request`}
          >
            {/* Live Green Pulsing Indicator */}
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>

            {/* Icon */}
            <PhoneCall className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform duration-200 shrink-0" />

            {/* Text Label */}
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold tracking-wider uppercase text-gold-400 font-sans">
                Admissions {CURRENT_ACADEMIC_SESSION}
              </span>
              <span className="hidden sm:inline text-[10px] text-slate-300 font-medium leading-none">
                Request Quick Callback
              </span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
