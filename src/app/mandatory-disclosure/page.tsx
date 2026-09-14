import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DisclosureVault } from "@/components/mandatory-disclosure/DisclosureVault";
import { SCHOOL_INFO } from "@/lib/data/school-data";
import { ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "CBSE Mandatory Public Disclosure (SARAS)",
  description:
    "CBSE Appendix IX Mandatory Public Disclosure for St. Teresa Vidya Deep, Udaipur. Statutory affiliation, fire safety, building safety, and fee regulations.",
  keywords: [
    "CBSE Mandatory Disclosure St Teresa Vidya Deep",
    "SARAS Appendix IX Udaipur",
    "Fire Safety NOC St Teresa Udaipur",
    "Building Safety Certificate Saveena School",
    "CBSE Affiliation Extension Udaipur",
  ],
  openGraph: {
    title: "CBSE Appendix IX Mandatory Disclosures | St. Teresa Vidya Deep",
    description:
      "Statutory public disclosure of affiliation, building safety, fire safety, and water hygiene certificates under CBSE New Delhi regulations.",
    url: "https://stteresavidyadeep.org/mandatory-disclosure",
  },
};

export default function MandatoryDisclosurePage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* 1. Hero Banner */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>Statutory Appendix IX Compliance • CBSE, New Delhi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Mandatory Public{" "}
            <span className="gold-gradient-text">Disclosures (SARAS).</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            In compliance with Central Board of Secondary Education guidelines, St. Teresa Vidya Deep publishes all affiliation certificates, safety affidavits, and institutional disclosures.
          </p>
        </div>
      </section>

      {/* 2. Main Disclosure Content & Tables */}
      <div className="bg-parchment text-navy-950 flex-1">
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Regulatory Transparency"
            title="Affiliation & Inspection Records"
            description="Verified documentation accessible for inspection by the CBSE inspection board, district educational authorities, and parent community."
            align="center"
          />

          <DisclosureVault />
        </section>
      </div>
    </div>
  );
}
