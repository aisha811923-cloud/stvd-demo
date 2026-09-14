import type { Metadata } from "next";
import { CampusHeroMotion } from "@/components/campus/CampusHeroMotion";
import { CampusFacilitiesMotion } from "@/components/campus/CampusFacilitiesMotion";
import { CampusTransitMotion } from "@/components/campus/CampusTransitMotion";

export const metadata: Metadata = {
  title: "Campus Infrastructure & STEM Labs",
  description:
    "Explore the CBSE-compliant campus of St. Teresa Vidya Deep in Saveena, Udaipur. Advanced science laboratories, computer centers, and athletic grounds.",
  keywords: [
    "School Labs in Udaipur",
    "Physics Chemistry Biology Labs Savina",
    "Computer Lab School Udaipur",
    "School Bus Facility Sector 14 Udaipur",
    "St Teresa Vidya Deep Campus",
  ],
  openGraph: {
    title: "World-Class Laboratories & Campus Facilities | St. Teresa Vidya Deep",
    description:
      "Modern STEM laboratories, central library, sports grounds, and school-supervised transportation across Udaipur.",
    url: "https://stteresavidyadeep.org/campus",
  },
};

export default function CampusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* 1. Hero Banner with Motion Entrance */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <CampusHeroMotion />
      </section>

      {/* Facilities & Athletics Reading Surface */}
      <div className="bg-parchment text-navy-950 flex-1">
        {/* 2. Staggered Bento Facilities Grid */}
        <CampusFacilitiesMotion />
      </div>

      {/* 3. Safe Campus Transit Feature Card */}
      <CampusTransitMotion />
    </div>
  );
}
