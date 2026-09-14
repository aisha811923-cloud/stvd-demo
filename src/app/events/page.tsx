import type { Metadata } from "next";
import { Calendar as CalendarIcon } from "lucide-react";
import { EventsView } from "@/components/events/EventsView";
import { CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";

export const metadata: Metadata = {
  title: "Campus Events & Academic Calendar",
  description:
    "Discover upcoming CBSE academic events, sports championships, and cultural galas at St. Teresa Vidya Deep, Udaipur. Download Session 2027–2028 calendar.",
  keywords: [
    "School Events Udaipur",
    "St Teresa Vidya Deep Calendar 2027-28",
    "CBSE Annual Sports Meet Udaipur",
    "Science Exhibition Saveena School",
    "School PTM Schedule Udaipur",
  ],
  openGraph: {
    title: "Campus Life & Upcoming Events | St. Teresa Vidya Deep Sr. Sec. School",
    description:
      "Annual sports championships, science exhibitions, parent-teacher conclaves, and cultural celebrations at St. Teresa Vidya Deep Senior Secondary School, Udaipur.",
    url: "https://stteresavidyadeep.org/events",
    siteName: "St. Teresa Vidya Deep Sr. Sec. School",
    locale: "en_IN",
    type: "website",
  },
};

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* 1. Seamless Hero Header */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-crimson-800/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <CalendarIcon className="w-3.5 h-3.5 text-gold-400" />
            <span>Campus Life & Institutional Calendar • Session {CURRENT_ACADEMIC_SESSION}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Events & <span className="gold-gradient-text">Celebrations</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Experience the vibrant life at St. Teresa Vidya Deep. From intense athletic championships and scientific expos to moral conclaves and cultural galas in Udaipur.
          </p>
        </div>
      </section>

      {/* 2. Interactive Events & Filterable View */}
      <div className="bg-parchment text-navy-950 flex-1">
        <EventsView />
      </div>
    </div>
  );
}
