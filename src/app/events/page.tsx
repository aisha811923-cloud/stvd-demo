import type { Metadata } from "next";
import { EventsView } from "@/components/events/EventsView";
import { EventsHeroMotion } from "@/components/events/EventsHeroMotion";

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
      {/* 1. Seamless Hero Header with Motion Reveal */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-80 h-80 bg-crimson-800/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <EventsHeroMotion />
      </section>

      {/* 2. Interactive Events & Filterable View */}
      <div className="bg-parchment text-navy-950 flex-1">
        <EventsView />
      </div>
    </div>
  );
}
