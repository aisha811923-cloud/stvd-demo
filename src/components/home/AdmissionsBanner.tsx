"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SCHOOL_INFO, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import { useAdmissionsModal } from "@/context/AdmissionsModalContext";
import { fadeInUp } from "@/lib/animations";

export const AdmissionsBanner: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const { openModal } = useAdmissionsModal();

  return (
    <section className="py-16 md:py-24 bg-parchment relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-3xl bg-navy-950 text-white p-8 sm:p-12 lg:p-16 border-2 border-gold-500/30 shadow-2xl overflow-hidden"
        >
          {/* Ambient Lighting Accents */}
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-crimson-800/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Area (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-crimson-800/80 text-gold-400 border border-gold-500/30 text-xs font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                <span>Admissions {CURRENT_ACADEMIC_SESSION} Open • Limited Intake</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                Give Your Child the Foundation of{" "}
                <span className="gold-gradient-text">Wisdom & Character.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Seats are now open for enrollment across <strong className="text-white">Nursery to Class XI</strong> (Science, Commerce, and Arts streams). Experience our dedicated faculty, secure Saveena campus, and 30-year legacy in Udaipur.
              </p>

              {/* Assurances List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Prompt counselor callback within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Personalized campus tour & lab inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Transparent CBSE fee structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Dedicated bus transit across Udaipur</span>
                </div>
              </div>
            </div>

            {/* Right Action Card (5 Cols) */}
            <div className="lg:col-span-5 bg-navy-900/90 rounded-2xl p-6 sm:p-8 border border-gold-500/30 shadow-card backdrop-blur-md flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                  Quick Admissions Action
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Request an Instant Callback
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Submit a quick inquiry online, or connect directly with our admissions desk right now.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  variant="primary-gold"
                  size="lg"
                  className="w-full shadow-gold-glow"
                  onClick={() => openModal()}
                >
                  Apply for {CURRENT_ACADEMIC_SESSION}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${SCHOOL_INFO.phones[0]}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>Call Office</span>
                  </a>

                  <a
                    href={`https://wa.me/${SCHOOL_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Hello St. Teresa Vidya Deep Admissions Office, I would like to inquire about admission for the ${CURRENT_ACADEMIC_SESSION} session.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-green-600/20 hover:bg-green-600/30 text-green-300 text-xs font-medium border border-green-500/30 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-green-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold-500" />
                  Office: 7:45 AM – 1:45 PM
                </span>
                <span className="text-gold-400 font-medium">Saveena, Udaipur</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
