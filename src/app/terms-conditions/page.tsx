import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Scale,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SCHOOL_INFO, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Institutional Regulations",
  description:
    "Institutional Terms and Conditions for St. Teresa Vidya Deep Senior Secondary School, Udaipur. Admissions verification, fee rules, intellectual property, and Udaipur jurisdiction.",
  keywords: [
    "St Teresa Vidya Deep Terms and Conditions",
    "School Admission Rules Udaipur",
    "CBSE School Regulations Udaipur",
    "STVDS Institutional Policies",
  ],
  openGraph: {
    title: "Terms & Conditions | St. Teresa Vidya Deep Sr. Sec. School, Udaipur",
    description:
      "Institutional governance, admissions verification, code of conduct, and legal framework of St. Teresa Vidya Deep Senior Secondary School.",
    url: "https://stteresavidyadeep.org/terms-conditions",
    siteName: "St. Teresa Vidya Deep Sr. Sec. School",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsConditionsPage() {
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
              <Scale className="w-3.5 h-3.5 text-gold-400" />
              <span>Institutional Governance & Admissions Contract</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Terms & <span className="gold-gradient-text">Conditions</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Institutional terms, code of conduct, admissions verification guidelines, and statutory regulations governing St. Teresa Vidya Deep Senior Secondary School, Saveena, Udaipur.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4 text-xs text-slate-400">
            <span>Effective Date: Academic Session {CURRENT_ACADEMIC_SESSION}</span>
            <span>•</span>
            <span>Last Reviewed: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* 2. Main Terms Content */}
      <div className="bg-parchment text-navy-950 flex-1">
        <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Core Institutional Framework */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gold-500/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-navy-900" />
          <div className="flex items-start gap-4">
            <Building2 className="w-6 h-6 text-gold-600 shrink-0 mt-1" />
            <div className="space-y-2">
              <h2 className="text-lg font-serif font-bold text-navy-900">
                Institutional Administration
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                St. Teresa Vidya Deep Senior Secondary School, Saveena, Udaipur is an English Medium Co-Educational institution affiliated with the <strong>Central Board of Secondary Education (CBSE), New Delhi</strong> and managed by the registered <strong>Prabhudasi Sisters Educational Society (Ajmer)</strong>. By accessing this website or submitting an admission inquiry, you agree to comply with the terms set forth below.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Admissions Verification & Document Authenticity */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              01
            </span>
            <span>Admissions Verification & Mandatory Documentation</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              Submission of an online callback inquiry or registration does not guarantee admission. Final admission is granted solely at the discretion of the Admission Committee after rigorous document verification and seat availability:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Document Authenticity:</strong> Parents must present original and self-attested copies of the candidate&apos;s Municipal Birth Certificate, Transfer Certificate (TC) from the previous recognized school (duly counter-signed where required by CBSE/State education department), previous class report card, and caste/category certificates (if applicable).
              </li>
              <li>
                <strong>Zero Tolerance for Falsification:</strong> If any certificate, age declaration, or academic credential is found to be forged, inaccurate, or misrepresented at any stage, the student&apos;s admission shall be summarily revoked, all submitted fees forfeited, and administrative action initiated under applicable law.
              </li>
              <li>
                <strong>Stream Allocation (Classes XI & XII):</strong> Allocation of Senior Secondary academic streams (Science, Commerce, Humanities) is governed by minimum qualifying percentage criteria set by the Academic Council based on Class X Board examinations.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Fee Regulations & Non-Refundable Policy */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              02
            </span>
            <span>Fee Structure, Timelines & Non-Refundable Policy</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900">
                <strong>Important Notice:</strong> Registration fees, prospectus charges, and processing fees are <strong>strictly non-refundable</strong> once paid, regardless of whether the applicant proceeds with admission.
              </p>
            </div>
            <p>
              Tuition and institutional fees are structured in accordance with the Rajasthan Schools (Regulation of Fee) Act and CBSE regulatory norms as approved by the School Management Committee (SMC):
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Fees must be remitted by the designated quarterly deadlines. Late remittances incur nominal late administrative fees as specified in the student diary.</li>
              <li>Optional facility fees (such as school transport / bus service) are payable per term and cannot be canceled mid-term without written advance notice.</li>
              <li>Transfer Certificates (TC) and final marksheets will only be released upon settlement of all outstanding institutional dues.</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Student Conduct & Campus Discipline */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              03
            </span>
            <span>Institutional Code of Conduct & Campus Discipline</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              St. Teresa Vidya Deep cultivates an environment of dignity, reverence, and high scholarly pursuit:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Punctuality & Attendance:</strong> Classes commence strictly at <strong>7:45 AM</strong>. Minimum 75% attendance is a mandatory statutory requirement per CBSE bylaws to qualify for annual and board examinations.
              </li>
              <li>
                <strong>Anti-Bullying & Anti-Ragging:</strong> The school enforces a strict zero-tolerance policy against any form of bullying, harassment, discrimination, or physical intimidation. Infractions warrant immediate suspension or rustication.
              </li>
              <li>
                <strong>Digital Devices:</strong> Unauthorized possession of mobile phones, smartwatches, or personal digital devices on campus is prohibited unless explicitly authorized for supervised educational activities.
              </li>
              <li>
                <strong>Campus Property:</strong> Damage to laboratory equipment, library volumes, sports infrastructure, or campus grounds must be made good by the parent/guardian responsible.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Intellectual Property */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              04
            </span>
            <span>Intellectual Property & Website Media</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              All materials published on this website, including but not limited to the institutional name &ldquo;St. Teresa Vidya Deep Senior Secondary School&rdquo;, the heraldic crest, emblem, educational curriculum syllabi, photographic media, and design layout, are the exclusive intellectual property of the institution and the Prabhudasi Sisters Educational Society.
            </p>
            <p>
              Reproduction, duplication, scraping, or commercial exploitation of any site content without prior written permission from the Principal is strictly prohibited under Indian Copyright and Trademark laws.
            </p>
          </div>
        </div>

        {/* Section 5: Parental Partnership & Communication */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              05
            </span>
            <span>Parent-School Partnership Protocol</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              The moral and intellectual formation of every child relies on mutual respect between parents and educators:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Parents are expected to attend scheduled Parent-Teacher Meetings (PTMs) to track scholastic and behavioral progress.</li>
              <li>Any changes to emergency telephone numbers, residential address, or medical conditions must be communicated to the school office within 48 hours.</li>
              <li>Constructive feedback or grievances should follow the formal administrative channel through the Principal&apos;s Office.</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Disclaimer & Limitation of Liability */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              06
            </span>
            <span>Website Disclaimer & Limitation of Liability</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              While reasonable efforts are made to ensure that information, circulars, and schedules published on this portal are accurate and current, the school accepts no liability for unintentional errors, typographical inaccuracies, or server downtime. Official notices displayed on the physical institutional bulletin board and printed circulars take precedence.
            </p>
          </div>
        </div>

        {/* Section 7: Governing Law & Exclusive Jurisdiction */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              07
            </span>
            <span>Governing Law & Legal Jurisdiction</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>
              These Terms and Conditions and any legal dispute or claim arising out of school admissions, student enrollment, fee transactions, or website usage shall be governed by and construed in accordance with the laws of India.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="text-xs sm:text-sm font-semibold text-navy-900">
                Exclusive Jurisdiction Clause:
              </p>
              <p className="text-xs sm:text-sm text-slate-700 mt-1">
                Any legal proceeding, dispute, arbitration, or action shall be subject to the exclusive jurisdiction of the competent courts and tribunals located in <strong>Udaipur, Rajasthan, India</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Contact Office */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 text-sm font-bold flex items-center justify-center">
              08
            </span>
            <span>Institutional Inquiries & Office of the Principal</span>
          </h2>
          <div className="prose prose-slate text-sm leading-relaxed space-y-3 pl-11">
            <p>For administrative clarification regarding institutional rules or admission terms, please contact:</p>
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2 text-xs sm:text-sm text-slate-700">
              <p className="font-semibold text-navy-900">{SCHOOL_INFO.legalName}</p>
              <p>Office of the Principal, {SCHOOL_INFO.address.line1}, {SCHOOL_INFO.address.line2}</p>
              <p>{SCHOOL_INFO.address.city}, {SCHOOL_INFO.address.state} – {SCHOOL_INFO.address.pincode}</p>
              <p className="pt-1">
                Telephone:{" "}
                <a href="tel:+919667881122" className="text-navy-900 hover:text-gold-600 font-medium">
                  +91 9667881122
                </a>{" "}
                | Email:{" "}
                <a href="mailto:stteresavidyadeep@gmail.com" className="text-navy-900 hover:text-gold-600 font-medium">
                  stteresavidyadeep@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Back navigation & links */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/privacy-policy"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-gold-600 transition-colors"
          >
            <span>Review DPDP Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/mandatory-disclosure"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            <span>View CBSE Mandatory Disclosures (SARAS)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      </div>
    </div>
  );
}
