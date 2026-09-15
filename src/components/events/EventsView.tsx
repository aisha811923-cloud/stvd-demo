"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  CheckCircle2,
  Bell,
  Sparkles,
  Trophy,
  Users,
  FlaskConical,
  Music,
  ArrowRight,
  CalendarCheck,
  Phone,
} from "lucide-react";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { CURRENT_ACADEMIC_SESSION, SCHOOL_INFO } from "@/lib/data/school-data";
import { luxuryEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

type EventCategory = "All Events" | "Academic & PTM" | "Sports & Drill" | "Cultural & Assemblies";

interface SchoolEvent {
  id: string;
  title: string;
  category: "Academic & PTM" | "Sports & Drill" | "Cultural & Assemblies";
  month: string;
  day: string;
  year: string;
  time: string;
  venue: string;
  description: string;
  highlights: string[];
  icon: React.ComponentType<{ className?: string }>;
  badgeColor: string;
}

const SCHOOL_EVENTS: SchoolEvent[] = [];

export const EventsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventCategory>("All Events");
  const [savedEvents, setSavedEvents] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  const categories: EventCategory[] = [
    "All Events",
    "Academic & PTM",
    "Sports & Drill",
    "Cultural & Assemblies",
  ];

  const filteredEvents =
    activeTab === "All Events"
      ? SCHOOL_EVENTS
      : SCHOOL_EVENTS.filter((e) => e.category === activeTab);

  const handleToggleEvent = (eventId: string) => {
    setSavedEvents((prev) => {
      const newState = !prev[eventId];
      return { ...prev, [eventId]: newState };
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: luxuryEasing,
      },
    },
  };

  return (
    <>
      {/* Interactive Category Filter Bar with Smooth Spring Indicator - Only when events are present */}
      {SCHOOL_EVENTS.length > 0 && (
        <section className="sticky top-16 md:top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isSelected = activeTab === cat;
              const count =
                cat === "All Events"
                  ? SCHOOL_EVENTS.length
                  : SCHOOL_EVENTS.filter((e) => e.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className="relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none group"
                >
                  {isSelected ? (
                    <motion.div
                      layoutId="activeEventTab"
                      className="absolute inset-0 bg-navy-900 rounded-xl shadow-md shadow-navy-950/20 border border-navy-900"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-100 group-hover:bg-slate-200/80 rounded-xl border border-slate-200 transition-colors" />
                  )}

                  <span
                    className={cn(
                      "relative z-10 flex items-center transition-colors duration-200",
                      isSelected ? "text-white" : "text-slate-700 group-hover:text-navy-950"
                    )}
                  >
                    {cat}
                    <span
                      className={cn(
                        "ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold transition-colors duration-200",
                        isSelected ? "bg-gold-500 text-navy-950" : "bg-slate-200 text-slate-600"
                      )}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Event Cards Grid or Editorial Empty State */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        {SCHOOL_EVENTS.length === 0 ? (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: luxuryEasing }}
            className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-card text-center relative overflow-hidden"
          >
            {/* Top decorative accent line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-navy-950 via-gold-500 to-crimson-800" />

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Educational Calendar Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-navy-900/5 text-navy-900 border border-gold-500/30 mx-auto flex items-center justify-center shadow-sm">
                <CalendarCheck className="w-8 h-8 sm:w-10 sm:h-10 text-gold-600" />
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 text-gold-700 border border-gold-500/25 text-xs font-semibold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-gold-600" />
                <span>Session 2027–2028 Upcoming</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-navy-950 tracking-tight">
                Academic & Activity Calendar 2027–2028
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                The institutional event roster, examination schedules, and cultural celebrations for the upcoming academic session will be notified here shortly. For immediate inquiries, please contact the administrative office.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
                <AdmissionsTriggerButton
                  variant="primary-gold"
                  size="md"
                  className="shadow-gold-glow"
                >
                  Contact Administrative Office
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </AdmissionsTriggerButton>
                <a
                  href={`tel:${SCHOOL_INFO.phones[0]}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-navy-900 hover:border-gold-500 hover:text-gold-700 bg-white font-semibold text-sm transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call {SCHOOL_INFO.phones[0]}</span>
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => {
                const isSaved = !!savedEvents[event.id];

                return (
                  <motion.article
                    layout
                    key={event.id}
                    variants={cardVariants}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -20 }}
                    transition={{ duration: 0.35, ease: luxuryEasing }}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card hover:shadow-gold-glow hover:-translate-y-1.5 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                  >
                    {/* Decorative Top Gradient Stripe on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-950 via-gold-500 to-crimson-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="space-y-5">
                      {/* Top Meta: Date Badge & Category Tag */}
                      <div className="flex items-start justify-between gap-4">
                        {/* Date Block */}
                        <div className="w-16 h-16 rounded-2xl bg-navy-950 text-white flex flex-col items-center justify-center border border-gold-500/30 shadow-md shrink-0 group-hover:border-gold-500/60 transition-colors">
                          <span className="text-[10px] font-bold tracking-widest text-gold-400 uppercase font-mono">
                            {event.month}
                          </span>
                          <span className="text-xl sm:text-2xl font-serif font-bold text-white leading-none">
                            {event.day}
                          </span>
                          <span className="text-[9px] text-slate-400 font-mono">
                            {event.year}
                          </span>
                        </div>

                        {/* Category Badge & Icon */}
                        <div className="flex flex-col items-end gap-2">
                          <span
                            className={cn(
                              "px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-colors",
                              event.badgeColor
                            )}
                          >
                            {event.category}
                          </span>
                          <span className="text-[11px] text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-gold-600" />
                            <span>{event.time}</span>
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h2 className="text-lg sm:text-xl font-serif font-bold text-navy-950 group-hover:text-gold-600 transition-colors leading-snug">
                          {event.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {event.description}
                        </p>
                      </div>

                      {/* Venue Block */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center gap-2 text-xs text-slate-700">
                        <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                        <span className="font-medium text-navy-900">{event.venue}</span>
                      </div>

                      {/* Highlights Bullet List */}
                      <div className="space-y-1.5 pt-1">
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Event Highlights
                        </p>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {event.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        onClick={() => handleToggleEvent(event.id)}
                        className={cn(
                          "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none active:scale-95",
                          isSaved
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-gold-500/10 hover:bg-gold-500/20 text-navy-900 border border-gold-500/30"
                        )}
                        aria-label={`Set reminder for ${event.title}`}
                      >
                        {isSaved ? (
                          <>
                            <CalendarCheck className="w-3.5 h-3.5 text-green-700" />
                            <span>Reminder Saved</span>
                          </>
                        ) : (
                          <>
                            <Bell className="w-3.5 h-3.5 text-gold-600" />
                            <span>Notify Me / Add to Calendar</span>
                          </>
                        )}
                      </button>

                      <AdmissionsTriggerButton
                        variant="outline-navy"
                        size="sm"
                        className="text-xs shrink-0"
                      >
                        Inquire
                      </AdmissionsTriggerButton>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Information Callout */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: luxuryEasing }}
          className="mt-16 p-8 rounded-3xl bg-navy-gradient text-white border border-gold-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-[11px] font-semibold uppercase tracking-wider">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Full Academic Calendar Available</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Planning Your Child&apos;s Academic Year?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-sans">
              Parents may obtain the detailed day-by-day institutional diary and examination calendar from the administrative office in Saveena, Udaipur.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-navy-950 font-semibold text-sm shadow-gold-glow hover:brightness-105 transition-all active:scale-95"
            >
              <span>Admissions {CURRENT_ACADEMIC_SESSION}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};
