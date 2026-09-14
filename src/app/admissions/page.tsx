import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { SCHOOL_INFO, ADMISSION_ELIGIBILITY, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import {
  FileText,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions 2027–2028 | Criteria & Process",
  description:
    "Admissions open for 2027–2028 at St. Teresa Vidya Deep, Udaipur. CBSE affiliated, Nursery to Class XII. Age criteria, documentation guidelines, and callback request.",
  keywords: [
    "School Admission Udaipur 2027-28",
    "School Admission Udaipur 2027–2028",
    "CBSE School Admission Saveena",
    "Age Criteria Nursery Udaipur CBSE",
    "Class 11 Admission Science Commerce Udaipur",
    "St Teresa Vidya Deep Admissions",
  ],
  openGraph: {
    title: "Admissions Open 2027–2028 | St. Teresa Vidya Deep Sr. Sec. School",
    description:
      "Step-by-step enrollment roadmap, NEP age eligibility criteria, and quick callback request for Nursery through Class XII.",
    url: "https://stteresavidyadeep.org/admissions",
  },
};

export default function AdmissionsPage() {
  const roadmapSteps = [
    {
      step: "01",
      title: "Inquiry & Quick Callback",
      description:
        "Submit our quick callback inquiry online or call the school office directly. Our admissions coordinator contacts you within 24 hours to address questions regarding seats and fees.",
      tag: "Online or Phone",
    },
    {
      step: "02",
      title: "Campus Interaction & Orientation",
      description:
        "Parents and prospective students visit our Saveena campus, meet the academic coordinators, explore the science and computing laboratories, and discuss curriculum options.",
      tag: "In-Person Visit",
    },
    {
      step: "03",
      title: "Document Verification",
      description:
        "Submit statutory identity and academic paperwork, including municipal birth certificate, passport photographs, and transfer certificate (TC) with previous report cards.",
      tag: "Verification Desk",
    },
    {
      step: "04",
      title: "Formal Enrollment & Welcome Kit",
      description:
        "Upon verification, complete the official CBSE admission registry, remit the term fee, and receive student identity credentials, syllabus handbook, and uniform guides.",
      tag: "Final Allotment",
    },
  ];

  const ageMatrix = [
    {
      grade: "Nursery",
      minAge: "2 Years 8 Months to 3 Years 8 Months (Base: 3 Years)",
      asOf: "As of session commencement (March 31, 2027)",
      wing: "Foundational Wing",
    },
    { grade: "LKG (Lower Kindergarten)", minAge: "4 Years Complete", asOf: "As of March 31, 2027", wing: "Foundational Wing" },
    { grade: "UKG (Upper Kindergarten)", minAge: "5 Years Complete", asOf: "As of March 31, 2027", wing: "Foundational Wing" },
    { grade: "Class I", minAge: "6 Years Complete", asOf: "As of March 31, 2027 (NEP 2020)", wing: "Primary Wing" },
    { grade: "Classes II to X", minAge: "Progressive Age Criteria", asOf: "Based on previous school TC", wing: "Primary / Middle / Secondary" },
    { grade: "Class XI (Science / Comm / Arts)", minAge: "Class X Board Clearance", asOf: "AISSE / Board Marksheet", wing: "Senior Secondary" },
  ];

  const requiredDocuments = ADMISSION_ELIGIBILITY.requiredDocuments;

  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* 1. Hero Banner */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-crimson-800/80 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span>Academic Session {CURRENT_ACADEMIC_SESSION} Open • Saveena, Udaipur</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Admissions Roadmap &{" "}
            <span className="gold-gradient-text">Enrollment Guidelines.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Clear, transparent guidance for prospective parents seeking quality English-medium CBSE schooling from Nursery through Class XII.
          </p>

          <div className="pt-2 flex justify-center">
            <AdmissionsTriggerButton
              variant="primary-gold"
              size="lg"
              className="shadow-gold-glow"
            >
              Request Quick Admissions Callback
              <ArrowRight className="w-4 h-4 ml-2" />
            </AdmissionsTriggerButton>
          </div>
        </div>
      </section>

      {/* Admissions Guidelines & Form Reading Surface */}
      <div className="bg-parchment text-navy-950 flex-1">
        {/* 2. Step-by-Step Admissions Roadmap */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple 4-Step Journey"
          title="The Admissions Pathway"
          description="We make the enrollment experience transparent, responsive, and welcoming for families."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold gold-gradient-text">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-navy-900/5 text-navy-900 border border-navy-900/10">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-navy-900">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standardized CBSE Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEP Age Eligibility Matrix */}
      <section className="py-20 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Statutory Criteria"
            title="Age Eligibility Guidelines (NEP 2020 & CBSE)"
            description="Minimum age requirements calculated as of March 31, 2027 for the incoming academic year."
            align="center"
          />

          <div className="max-w-5xl mx-auto bg-parchment rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy-900 text-white text-xs font-serif uppercase tracking-wider">
                    <th className="py-4 px-6">Class / Grade</th>
                    <th className="py-4 px-6">Minimum Age Criterion</th>
                    <th className="py-4 px-6">Calculation Baseline</th>
                    <th className="py-4 px-6">Academic Wing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 text-xs sm:text-sm text-slate-700">
                  {ageMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-navy-950">
                        {row.grade}
                      </td>
                      <td className="py-4 px-6 font-medium text-gold-700">
                        {row.minAge}
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        {row.asOf}
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full bg-navy-900/5 text-navy-900 text-[11px] font-semibold">
                          {row.wing}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
              <span>
                Compliance Note: In accordance with National Education Policy (NEP 2020), admission to Class I requires completion of 6 years of age as of March 31st of the academic year.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Required Documentation & Helpdesk */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Documentation Checklist (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-card space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <FileText className="w-6 h-6 text-gold-600" />
              <div>
                <h3 className="text-xl font-serif font-bold text-navy-900">
                  Required Documentation Checklist
                </h3>
                <p className="text-xs text-slate-500">
                  Please bring self-attested photocopies alongside original documents for verification.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {requiredDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <AdmissionsTriggerButton
                variant="primary-gold"
                size="md"
                className="w-full sm:w-auto shadow-gold-glow"
              >
                Inquire About Document Verification
                <ArrowRight className="w-4 h-4 ml-2" />
              </AdmissionsTriggerButton>
            </div>
          </div>

          {/* Admissions Helpdesk & Direct Contact Card (5 Cols) */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 shadow-card border-2 border-gold-500/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 block">
                Official Admissions Desk
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Contact Our Counselors
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have questions regarding syllabus, bus stops in Sector 14, or fee schedules? Our desk is open throughout working hours.
              </p>

              <div className="space-y-3 pt-3 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  <div>
                    <span className="block text-[11px] text-slate-400">Primary Calling Line</span>
                    <a href={`tel:${SCHOOL_INFO.phones[0]}`} className="hover:text-gold-400 font-semibold text-white">
                      {SCHOOL_INFO.phones[0]}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                  <div>
                    <span className="block text-[11px] text-slate-400">Official Admissions Email</span>
                    <a href={`mailto:${SCHOOL_INFO.emails[0]}`} className="hover:text-gold-400 text-slate-200 break-all">
                      {SCHOOL_INFO.emails[0]}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                  <div>
                    <span className="block text-[11px] text-slate-400">Working Office Hours</span>
                    <span className="text-xs text-slate-300">{SCHOOL_INFO.timings}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <AdmissionsTriggerButton
                variant="primary-gold"
                size="lg"
                className="w-full shadow-gold-glow"
              >
                Submit Quick Callback Request
              </AdmissionsTriggerButton>

              <a
                href={`https://wa.me/${SCHOOL_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                  `Hello St. Teresa Vidya Deep Admissions Office, I would like to inquire regarding ${CURRENT_ACADEMIC_SESSION} admission criteria and fees.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-green-600/20 hover:bg-green-600/30 text-green-300 text-sm font-medium border border-green-500/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span>Chat with Counselor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
