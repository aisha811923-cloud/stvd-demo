import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { SCHOOL_INFO, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy | Institutional Data Protection",
  description:
    "Official Privacy Policy of St. Teresa Vidya Deep Senior Secondary School, Udaipur. Fully compliant with India's DPDP Act. Transparent student inquiry and data handling.",
  keywords: [
    "St Teresa Vidya Deep Privacy Policy",
    "School Data Protection Udaipur",
    "DPDP Act Compliance School",
    "CBSE School Udaipur Privacy",
  ],
  openGraph: {
    title: "Privacy Policy | St. Teresa Vidya Deep Senior Secondary School, Udaipur",
    description:
      "Our institutional commitment to prospective student privacy, parental consent, and DPDP compliance in Udaipur.",
    url: "https://stteresavidyadeep.org/privacy-policy",
    siteName: "St. Teresa Vidya Deep Sr. Sec. School",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="bg-navy-950 text-navy-950 min-h-screen flex flex-col">
      {/* 1. Editorial Hero Header */}
      <section className="relative overflow-hidden bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 border-b border-gold-500/20">
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -right-20 w-80 h-80 bg-crimson-800/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>DPDP Act Compliance & Trust Guarantee</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Institutional <span className="gold-gradient-text">Privacy Policy</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            St. Teresa Vidya Deep Senior Secondary School, managed by the Prabhudasi Sisters Educational Society, is dedicated to upholding the utmost standards of confidentiality, parental consent, and data integrity in Udaipur.
          </p>

          <div className="text-xs text-gold-400/80 font-mono pt-1">
            Last Updated: {lastUpdated} • Savina Campus, Udaipur
          </div>
        </div>
      </section>

      {/* 2. Main Policy Content */}
      <div className="bg-parchment text-navy-950 flex-1">
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Institutional Commitment Notice */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gold-500/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gold-500" />
          <div className="flex items-start gap-4">
            <Lock className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy-900">
                Summary of Our Data Guarantee
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                We collect personal information solely to process prospective student admissions inquiries, arrange campus walkthroughs, and provide guidance for the {CURRENT_ACADEMIC_SESSION} academic session. <strong className="text-navy-950 font-semibold">We never sell, rent, commercialize, or share parental or student data with third-party marketers or commercial advertisers.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Scope & Statutory Basis */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              01
            </span>
            <span>Scope & Statutory Framework (DPDP Act, 2023)</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              This Privacy Policy governs the collection, processing, storage, and erasure of personal data through the official digital portal of <strong>St. Teresa Vidya Deep Senior Secondary School</strong> (accessible at <code className="text-xs bg-slate-100 text-navy-900 px-1.5 py-0.5 rounded">https://stteresavidyadeep.org</code>) and associated administrative callback channels.
            </p>
            <p>
              Our practices comply with India&apos;s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the Information Technology Act, 2000, and guidelines issued by the Central Board of Secondary Education (CBSE) regarding the safeguarding of minor students&apos; identifiable data.
            </p>
          </div>
        </div>

        {/* Section 2: Information We Collect */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              02
            </span>
            <span>Information We Collect & Collection Methods</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              When a parent or legal guardian interacts with our admissions callback portal, we collect only minimal, necessary information (data minimization principle):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Parent / Guardian Name:</strong> To address communications respectfully and authenticate the applicant&apos;s legal guardian.
              </li>
              <li>
                <strong>Mobile Telephone & WhatsApp Number:</strong> For our admissions desk to return your requested phone call, coordinate campus counseling sessions, or send syllabus brochures upon request.
              </li>
              <li>
                <strong>Prospective Student Name:</strong> To create an initial inquiry record in our verified admissions ledger.
              </li>
              <li>
                <strong>Grade / Wing of Interest:</strong> From Nursery, Kindergarten, Primary, Middle, Secondary to Senior Secondary Streams (Science, Commerce, Humanities).
              </li>
              <li>
                <strong>Inquiry Notes & Questions (Optional):</strong> Any specific queries regarding transport routes, laboratory facilities, or hostel/boarding arrangements.
              </li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Note: We do not collect credit card numbers, payment instruments, biometric identifiers, or sensitive financial data through our public inquiry form.
            </p>
          </div>
        </div>

        {/* Section 3: Purpose of Processing */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              03
            </span>
            <span>Purpose of Data Processing</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>We process collected inquiry information strictly for legitimate educational administration purposes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                { title: "Direct Callback Execution", desc: "Returning requested telephone inquiries regarding syllabus, seats, and fee structure." },
                { title: "Campus Tour Scheduling", desc: "Coordinating in-person guided inspections of our Saveena laboratories, library, and sports grounds." },
                { title: "Document Verification Advisory", desc: "Notifying parents about required verification paperwork for shortlisted candidates." },
                { title: "Safety & Security Audits", desc: "Maintaining tamper-proof visitor and inquiry records within institutional security guidelines." },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                  <h3 className="text-xs font-semibold text-navy-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Absolute Prohibition on Third-Party Data Selling */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              04
            </span>
            <span>Zero Third-Party Data Monetization Guarantee</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              St. Teresa Vidya Deep Senior Secondary School maintains an inviolable standard of non-commercialization:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>We <strong>do not sell, barter, lease, or distribute</strong> phone numbers, parent names, or student data to external marketing agencies, private ed-tech vendors, or coaching institutes.</li>
              <li>Data is accessible only to authorized institutional personnel under strict non-disclosure obligations (the Admissions Office and the Office of the Principal).</li>
              <li>Information is transferred securely to official institutional data tables (encrypted at rest and in transit) solely to fulfill your requested advisory service.</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Data Retention & Security */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              05
            </span>
            <span>Data Retention, Encryption & Storage Security</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              All digital communications are transmitted over modern Transport Layer Security (TLS 1.3) with HTTPS encryption. Admissions database entries are protected by industry-standard Row-Level Security (RLS) policies and encrypted server storage.
            </p>
            <p>
              Admissions inquiries that do not result in student enrollment are retained for a maximum of 18 months for audit and record verification, after which records are permanently purged from active systems.
            </p>
          </div>
        </div>

        {/* Section 6: Parental Rights under the DPDP Act */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              06
            </span>
            <span>Parent & Guardian Rights (Access, Rectification & Erasure)</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>Under the DPDP Act, parents and legal guardians possess enforceable rights regarding their personal data:</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li><strong>Right to Access:</strong> You may request a summary of the inquiry information held about you or your ward.</li>
              <li><strong>Right to Rectification:</strong> You may correct inaccurate or outdated contact numbers, student names, or grades.</li>
              <li><strong>Right to Erasure / Consent Withdrawal:</strong> You may withdraw your callback consent at any point. Upon receiving your written notice, our administrative desk will delete your phone number from inquiry follow-up lists within 7 business days.</li>
              <li><strong>Right to Grievance Redressal:</strong> Inquiries or grievances may be lodged directly with our Grievance Officer at the school address or via email.</li>
            </ul>
          </div>
        </div>

        {/* Section 7: Grievance Officer & Institutional Contact */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              07
            </span>
            <span>Data Grievance Officer & Institutional Contact</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              For any questions regarding this Privacy Policy, consent withdrawal, or to exercise your DPDP rights, please direct your communication to our administrative office:
            </p>

            <div className="bg-white rounded-xl border border-slate-200 p-5 mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-navy-900">{SCHOOL_INFO.legalName}</p>
                  <p>{SCHOOL_INFO.address.line1}, {SCHOOL_INFO.address.line2}</p>
                  <p>{SCHOOL_INFO.address.city}, {SCHOOL_INFO.address.state} – {SCHOOL_INFO.address.pincode}, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <a
                    href="tel:+919667881122"
                    className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
                  >
                    +91 9667881122
                  </a>
                  <span className="text-slate-400 mx-2">|</span>
                  <a
                    href="tel:+912942483011"
                    className="text-slate-600 hover:text-gold-600 transition-colors"
                  >
                    +91 294 2483011
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <a
                    href="mailto:stteresavidyadeep@gmail.com"
                    className="text-navy-900 hover:text-gold-600 font-medium transition-colors"
                  >
                    stteresavidyadeep@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-600">
                  Office Hours: {SCHOOL_INFO.timings}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back navigation & links */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/terms-conditions"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors"
          >
            <span>Review Institutional Terms & Conditions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            <span>Return to Admissions Portal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}
