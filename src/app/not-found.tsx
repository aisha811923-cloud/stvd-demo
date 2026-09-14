import React from "react";
import Link from "next/link";
import { Compass, Home, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SchoolCrest } from "@/components/ui/SchoolCrest";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-navy-gradient text-white px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background Ambient Lighting Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-crimson-800/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Floating Crest Centerpiece */}
        <div className="flex justify-center">
          <div className="p-4 rounded-3xl bg-white/5 border border-gold-500/30 shadow-gold-glow backdrop-blur-md">
            <SchoolCrest size="xl" showText={false} variant="dark" />
          </div>
        </div>

        {/* 404 Status Code Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Error 404 • Destination Uncharted</span>
        </div>

        {/* Main Headline in Cinzel */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Page Uncharted.{" "}
            <span className="gold-gradient-text block sm:inline">
              Seek Ye Wisdom Elsewhere.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-lg mx-auto">
            The page or document you requested may have been archived or relocated during our recent digital portal modernization. We invite you to return to our main campus sections.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary-gold" size="lg" className="shadow-gold-glow">
              <Home className="w-4 h-4 mr-2" />
              Return to Campus Home
            </Button>
          </Link>

          <Link href="/admissions">
            <Button variant="outline-gold" size="lg">
              Explore Admissions 2026–27
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
        </div>

        {/* Institutional Subtext */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-gold-500" />
          <span>St. Teresa Vidya Deep Sr. Sec. School • Saveena, Udaipur</span>
        </div>
      </div>
    </div>
  );
}
