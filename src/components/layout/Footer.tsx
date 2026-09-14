import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SCHOOL_INFO, NAV_ITEMS, ACADEMIC_WINGS } from "@/lib/data/school-data";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-gold-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background decorative radial glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-crimson-800/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: School Identity & Heritage (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden">
                <Image
                  src="/images/brand/crest.png"
                  alt="St. Teresa Vidya Deep Official Crest"
                  width={56}
                  height={56}
                  className="object-contain h-full w-full drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold tracking-tight text-white text-lg leading-tight">
                  St. Teresa Vidya Deep
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-gold-400">
                  Sr. Sec. School • Udaipur
                </span>
              </div>
            </div>
            <p className="text-xs tracking-widest text-gold-400 font-serif italic uppercase pt-0.5">
              &ldquo;{SCHOOL_INFO.motto}&rdquo;
            </p>
            <p className="text-sm leading-relaxed text-slate-400 pt-2">
              Established in {SCHOOL_INFO.establishedYear} and managed by the{" "}
              <span className="text-slate-200 font-medium">{SCHOOL_INFO.managingSociety}</span>.
              Nurturing intellectual clarity, ethical character, and holistic leadership under CBSE standards in Udaipur.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold-400/90 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>{SCHOOL_INFO.affiliationNumber}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-serif border-b border-gold-500/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors duration-150"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#principal"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Principal&apos;s Desk</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Admissions 2026–27</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mandatory-disclosure"
                  className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-medium transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>CBSE Compliance Vault</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors duration-150"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Wings (Col 7-9) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-serif border-b border-gold-500/30 pb-2 inline-block">
              Curriculum Wings
            </h3>
            <ul className="space-y-2.5 text-sm">
              {ACADEMIC_WINGS.map((wing) => (
                <li key={wing.id} className="text-slate-400">
                  <span className="text-slate-200 font-medium">{wing.title}:</span>{" "}
                  <span className="text-xs text-slate-400">{wing.classes}</span>
                </li>
              ))}
              <li className="pt-1">
                <span className="text-xs text-gold-400 font-medium block">
                  Senior Secondary Streams:
                </span>
                <span className="text-xs text-slate-400">
                  Science (Medical/Non-Med) • Commerce • Humanities
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Udaipur Location (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white font-serif border-b border-gold-500/30 pb-2 inline-block">
              Campus Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs leading-relaxed">
                  Sector 12, Saveena Township, NH 8 Bypass, Udaipur, Rajasthan – 313002
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <div className="text-xs">
                  <a
                    href={`tel:${SCHOOL_INFO.phones[0]}`}
                    className="hover:text-gold-400 transition-colors block text-slate-300 font-medium"
                  >
                    {SCHOOL_INFO.phones[0]}
                  </a>
                  {SCHOOL_INFO.phones[1] && (
                    <a
                      href={`tel:${SCHOOL_INFO.phones[1]}`}
                      className="hover:text-gold-400 transition-colors block text-slate-400"
                    >
                      {SCHOOL_INFO.phones[1]}
                    </a>
                  )}
                </div>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.emails[0]}`}
                  className="text-xs text-slate-300 hover:text-gold-400 transition-colors break-all"
                >
                  {SCHOOL_INFO.emails[0]}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed">
                  Mon–Sat: 8:30 AM – 10:00 AM | Saturday PTM: 12:30 PM – 1:15 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SCHOOL_INFO.legalName}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Managed with dedication by the</span>
            <span className="text-slate-300 font-medium">Prabhudasi Sisters</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-gold-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/mandatory-disclosure" className="hover:text-gold-400 transition-colors">
              CBSE Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
