"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SchoolCrest } from "@/components/ui/SchoolCrest";
import { ShieldCheck, GraduationCap, Award } from "lucide-react";

export const PrincipalPortrait: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-4 border-2 border-gold-500/30 shadow-xl overflow-hidden relative group">
      <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden border border-gold-500/20">
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image
              src="/images/leadership/principal.webp"
              alt="Sr. Ranjana — Principal & Educational Director, St. Teresa Vidya Deep"
              fill
              className="object-cover rounded-xl"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, 350px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent rounded-xl flex flex-col justify-end p-4 text-left">
              <h3 className="text-lg font-serif font-bold text-white leading-tight">
                Sr. Ranjana
              </h3>
              <p className="text-xs text-gold-400 font-sans tracking-widest uppercase mt-0.5">
                Principal & Educational Director
              </p>
            </div>
          </div>
        ) : (
          /* Geometric Fallback Card */
          <>
            {/* Decorative subtle pattern */}
            <div
              className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]"
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-navy-800/80 border-2 border-gold-400/60 p-2 mx-auto flex items-center justify-center shadow-gold-glow">
                <SchoolCrest size="lg" showText={false} variant="dark" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                  Sr. Ranjana
                </h3>
                <p className="text-xs text-gold-400 font-sans tracking-widest uppercase mt-1">
                  Principal & Educational Director
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Prabhudasi Sisters Educational Society
                </p>
              </div>
            </div>

            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-[10px] text-slate-400 tracking-wider font-serif uppercase">
                St. Teresa Vidya Deep • Udaipur
              </span>
            </div>
          </>
        )}
      </div>

      {/* Quick Institutional Badges */}
      <div className="pt-4 px-2 space-y-2 text-xs text-slate-600">
        <div className="flex items-center gap-2 py-1.5 border-b border-slate-100">
          <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
          <span className="font-medium text-navy-900">CBSE Affiliated Senior Secondary</span>
        </div>
        <div className="flex items-center gap-2 py-1.5 border-b border-slate-100">
          <GraduationCap className="w-4 h-4 text-gold-600 shrink-0" />
          <span>Nursery to Class XII (Sci, Comm, Arts)</span>
        </div>
        <div className="flex items-center gap-2 py-1.5">
          <Award className="w-4 h-4 text-gold-600 shrink-0" />
          <span>28+ Years of Educational Stewardship</span>
        </div>
      </div>
    </div>
  );
};
