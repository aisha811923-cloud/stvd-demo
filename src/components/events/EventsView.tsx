"use client";

import React, { useState } from "react";
import Link from "next/link";
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
} from "lucide-react";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
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
  icon: any;
  badgeColor: string;
}

const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: "sports-meet-2026",
    title: "Annual Sports Meet & Athletic Championship",
    category: "Sports & Drill",
    month: "NOV",
    day: "14",
    year: "2026",
    time: "8:00 AM – 2:00 PM",
    venue: "Main Athletic Complex & 2.5-Acre Sports Grounds",
    description:
      "The flagship athletic showcase of STVDS featuring spirited inter-house track events, martial drills, synchronized march past, and trophy ceremonies across primary and senior wings.",
    highlights: ["Inter-House Relay & Sprint Heats", "March Past Inspection by Chief Guests", "Overall House Championship Trophy Presentation"],
    icon: Trophy,
    badgeColor: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  },
  {
    id: "ptm-quarterly-review",
    title: "Mandatory Second Saturday Parent-Teacher Conclave (PTM)",
    category: "Academic & PTM",
    month: "OCT",
    day: "10",
    year: "2026",
    time: "8:30 AM – 1:00 PM",
    venue: "Designated Classrooms & Primary Wing Hall",
    description:
      "A dedicated, one-on-one progress consultation where parents meet class educators and subject faculty to review CBSE scholastic progress, attendance, and moral development.",
    highlights: ["Individual Student Report Card Handover", "Board Examination Readiness Strategy (Classes X & XII)", "Counselor Consultations & Special Assistance"],
    icon: Users,
    badgeColor: "bg-blue-500/15 text-blue-700 border-blue-500/30",
  },
  {
    id: "science-robotics-expo",
    title: "Science & Robotics Innovation Exhibition",
    category: "Academic & PTM",
    month: "DEC",
    day: "05",
    year: "2026",
    time: "9:00 AM – 1:30 PM",
    venue: "Composite Science & Computer Laboratories",
    description:
      "A celebration of student curiosity and STEM mastery. Young scientists present working physics apparatus, chemical demonstrations, biology specimens, and automated robotics prototypes.",
    highlights: ["Live Chemistry & Physics Experiments", "Student Working Robotics & Coding Stalls", "Peer Judged Science Excellence Awards"],
    icon: FlaskConical,
    badgeColor: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  },
  {
    id: "cultural-gala-independence",
    title: "Independence Day & Annual Cultural Gala",
    category: "Cultural & Assemblies",
    month: "AUG",
    day: "15",
    year: "2026",
    time: "7:45 AM – 11:30 AM",
    venue: "Central Amphitheatre & Main Auditorium",
    description:
      "A vibrant patriotic showcase marked by ceremonial tricolour flag hoisting, classical dance recitals, student orchestra choir, and dramatic theatrical tributes to national heroes.",
    highlights: ["Ceremonial Flag Hoisting by Principal Sr. Ranjana", "Patriotic Symphony by School Brass Band", "Inter-Wing Theatrical Drama & Dance Performances"],
    icon: Music,
    badgeColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
  },
  {
    id: "investiture-ceremony",
    title: "Student Council Investiture & Oath-Taking Ceremony",
    category: "Cultural & Assemblies",
    month: "JUL",
    day: "18",
    year: "2026",
    time: "8:30 AM – 11:00 AM",
    venue: "School Auditorium & Central Assembly",
    description:
      "Formal conferral of student leadership badges and sashes upon Head Boy, Head Girl, House Captains, and Prefects, swearing allegiance to the motto 'Seek Ye Wisdom'.",
    highlights: ["Conferring of Leadership Sashes", "Pledge of Honor & Responsibility", "Principal's Commissioning Charge"],
    icon: Sparkles,
    badgeColor: "bg-gold-500/15 text-gold-700 border-gold-500/30",
  },
  {
    id: "winter-carnival-christmas",
    title: "Christmas Joy & Winter Tableau Gala",
    category: "Cultural & Assemblies",
    month: "DEC",
    day: "22",
    year: "2026",
    time: "9:30 AM – 1:00 PM",
    venue: "Central Courtyard & Assembly Lawn",
    description:
      "A joyful celebration featuring carol harmonies, theatrical nativity tableau, festive charity collection for underprivileged families in Udaipur, and community carols.",
    highlights: ["Carol Singing by Senior Choir", "Nativity Tableau Presentation", "Student Social Outreach Drive"],
    icon: Sparkles,
    badgeColor: "bg-rose-500/15 text-rose-700 border-rose-500/30",
  },
];

export const EventsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<EventCategory>("All Events");
  const [savedEvents, setSavedEvents] = useState<Record<string, boolean>>({});

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

  return (
    <>
      {/* Interactive Category Filter Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                  isSelected
                    ? "bg-navy-900 text-white shadow-md shadow-navy-950/20 border border-navy-900"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-navy-950 border border-slate-200"
                )}
              >
                {cat}
                <span
                  className={cn(
                    "ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-bold",
                    isSelected ? "bg-gold-500 text-navy-950" : "bg-slate-200 text-slate-600"
                  )}
                >
                  {cat === "All Events"
                    ? SCHOOL_EVENTS.length
                    : SCHOOL_EVENTS.filter((e) => e.category === cat).length}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => {
            const isSaved = !!savedEvents[event.id];

            return (
              <article
                key={event.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)] hover:border-gold-500/40 transition-all duration-500 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Decorative Top Gradient Stripe on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-950 via-gold-500 to-crimson-800 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Top Meta: Date Badge & Category Tag */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Date Block */}
                    <div className="w-16 h-16 rounded-2xl bg-navy-950 text-white flex flex-col items-center justify-center border border-gold-500/30 shadow-md shrink-0">
                      <span className="text-[10px] font-bold tracking-widest text-gold-400 uppercase">
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
                          "px-2.5 py-1 rounded-full text-[11px] font-semibold border",
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
              </article>
            );
          })}
        </div>

        {/* Bottom Information Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-navy-gradient text-white border border-gold-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-[11px] font-semibold uppercase tracking-wider">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Full Academic Calendar Available</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Planning Your Child&apos;s Academic Year?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
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
        </div>
      </section>
    </>
  );
};
