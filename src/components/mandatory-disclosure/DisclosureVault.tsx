"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Search,
  ShieldCheck,
  Building,
  Calendar,
  ExternalLink,
  Award,
} from "lucide-react";
import { SCHOOL_INFO, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";

export const DisclosureVault: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const generalInfo = [
    { label: "Name of the School", value: SCHOOL_INFO.legalName },
    { label: "Affiliation Status", value: "Senior Secondary (Class Nursery to XII)" },
    { label: "Affiliation Board", value: "Central Board of Secondary Education (CBSE), New Delhi" },
    { label: "School Affiliation Type", value: "Co-Educational, English Medium Day School" },
    { label: "Managing Society", value: SCHOOL_INFO.managingSociety },
    { label: "Complete Address", value: `${SCHOOL_INFO.address.line1}, ${SCHOOL_INFO.address.line2}, ${SCHOOL_INFO.address.city}, ${SCHOOL_INFO.address.state} – ${SCHOOL_INFO.address.pincode}` },
    { label: "Principal Name & Qualification", value: `${SCHOOL_INFO.principalName} (M.A., B.Ed.)` },
    { label: "Official Contact Email", value: SCHOOL_INFO.emails[0] },
    { label: "Official Contact Telephone", value: SCHOOL_INFO.phones[0] },
  ];

  const complianceDocuments = [
    {
      id: "doc-1",
      title: "Copies of Affiliation / Upgradation Letter & Recent Extension of Affiliation",
      category: "Statutory",
      issuingAuthority: "CBSE, New Delhi",
      validity: "Active / Current Session",
      fileName: "cbse_affiliation_extension.pdf",
    },
    {
      id: "doc-2",
      title: "Copies of Societies Registration / Trust Certificate",
      category: "Statutory",
      issuingAuthority: "Registrar of Societies, Rajasthan",
      validity: "Permanent Registration",
      fileName: "prabhudasi_society_registration.pdf",
    },
    {
      id: "doc-3",
      title: "Copy of No Objection Certificate (NOC) Issued by the State Government",
      category: "Statutory",
      issuingAuthority: "Department of Education, Rajasthan",
      validity: "Unconditional Permanent NOC",
      fileName: "state_govt_noc.pdf",
    },
    {
      id: "doc-4",
      title: "Copies of Recognition Certificate Under RTE Act, 2009",
      category: "Statutory",
      issuingAuthority: "District Education Officer (DEO), Udaipur",
      validity: "Valid & Current",
      fileName: "rte_recognition_certificate.pdf",
    },
    {
      id: "doc-5",
      title: "Copy of Valid Building Safety Certificate as per National Building Code",
      category: "Safety",
      issuingAuthority: "Public Works Department (PWD), Udaipur",
      validity: "Inspected & Certified",
      fileName: "building_safety_certificate.pdf",
    },
    {
      id: "doc-6",
      title: "Copy of Valid Fire Safety Certificate Issued by the Competent Authority",
      category: "Safety",
      issuingAuthority: "Chief Fire Officer, Municipal Corporation Udaipur",
      validity: "Inspected & Certified",
      fileName: "fire_safety_noc.pdf",
    },
    {
      id: "doc-7",
      title: "Copy of Safe Drinking Water & Sanitary Condition Hygiene Certificate",
      category: "Safety",
      issuingAuthority: "Public Health Engineering Department (PHED), Udaipur",
      validity: "Laboratory Tested & Certified",
      fileName: "safe_drinking_water_sanitation.pdf",
    },
    {
      id: "doc-8",
      title: `Fee Structure of the School (Session ${CURRENT_ACADEMIC_SESSION})`,
      category: "Academic",
      issuingAuthority: "School Management Committee (SMC)",
      validity: `Academic Year ${CURRENT_ACADEMIC_SESSION}`,
      fileName: "fee_structure_2027_28.pdf",
    },
    {
      id: "doc-9",
      title: "Annual Academic Calendar & Examination Schedule",
      category: "Academic",
      issuingAuthority: "Academic Directorate, STVDS",
      validity: "April 2027 – March 2028",
      fileName: "academic_calendar_2027_28.pdf",
    },
    {
      id: "doc-10",
      title: "List of School Management Committee (SMC) Members",
      category: "Governance",
      issuingAuthority: "Prabhudasi Sisters Educational Society",
      validity: "Current Governing Council",
      fileName: "smc_members_list.pdf",
    },
    {
      id: "doc-11",
      title: "List of Parents-Teachers Association (PTA) Members",
      category: "Governance",
      issuingAuthority: "PTA Executive Council, STVDS",
      validity: `Session ${CURRENT_ACADEMIC_SESSION}`,
      fileName: "pta_members_list.pdf",
    },
    {
      id: "doc-12",
      title: "Three-Year Academic Result Track Record (AISSE Class X & AISSCE Class XII)",
      category: "Academic",
      issuingAuthority: "Examination Board Cell",
      validity: "100% Board Pass Record",
      fileName: "board_results_three_years.pdf",
    },
  ];

  const filteredDocs = complianceDocuments.filter((doc) => {
    const matchesCategory =
      activeTab === "all" ||
      (activeTab === "statutory" && (doc.category === "Statutory" || doc.category === "Safety")) ||
      (activeTab === "academic" && doc.category === "Academic") ||
      (activeTab === "governance" && doc.category === "Governance");

    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.issuingAuthority.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* 1. General Institutional Information Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <ShieldCheck className="w-6 h-6 text-gold-600 shrink-0" />
          <div>
            <h3 className="text-xl font-serif font-bold text-navy-900">
              General Institutional Profile (Part A)
            </h3>
            <p className="text-xs text-slate-500">
              Statutory disclosure as mandated under CBSE SARAS Appendix IX standards.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <tbody className="divide-y divide-slate-100">
              {generalInfo.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-navy-900 w-1/3 sm:w-2/5 bg-slate-50/50">
                    {item.label}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 font-medium">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Searchable Compliance Document Vault */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-gold-600 shrink-0" />
            <div>
              <h3 className="text-xl font-serif font-bold text-navy-900">
                Documents & Information Vault (Part B & C)
              </h3>
              <p className="text-xs text-slate-500">
                Downloadable verified certificates, safety affidavits, and governance records.
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none"
            />
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Disclosures" },
            { id: "statutory", label: "Statutory & Safety" },
            { id: "academic", label: "Academic & Fee" },
            { id: "governance", label: "Governance & SMC" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                activeTab === tab.id
                  ? "bg-navy-900 text-gold-400 border-gold-500/40"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Documents Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-navy-900 text-white text-[11px] font-serif uppercase tracking-wider">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Document / Certificate Name</th>
                <th className="py-3 px-4">Issuing Authority</th>
                <th className="py-3 px-4">Status / Validity</th>
                <th className="py-3 px-4 text-right">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredDocs.map((doc, idx) => (
                <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-mono text-slate-400">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-navy-950">
                    {doc.title}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {doc.issuingAuthority}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-green-50 text-green-700 border border-green-200">
                      <CheckCircle2 className="w-3 h-3 text-green-600" />
                      <span>{doc.validity}</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setSelectedDoc(doc.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-navy-900 bg-navy-900/5 hover:bg-gold-500 hover:text-navy-950 transition-colors border border-navy-900/10"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-10 text-slate-400 text-sm">
            No compliance certificates match your search query.
          </div>
        )}
      </div>

      {/* Verification Modal Dialog */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-2 border-gold-500/30 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-semibold text-gold-600 uppercase tracking-widest">
                CBSE Appendix IX Verification
              </span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-slate-400 hover:text-navy-900 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-serif font-bold text-navy-900">
                {selectedDoc}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                This document is verified and officially filed with the Central Board of Secondary Education (CBSE) and State Education Authorities.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <div><strong>Institution:</strong> {SCHOOL_INFO.legalName}</div>
                <div><strong>Location:</strong> Saveena, Sector 14, Udaipur</div>
                <div><strong>Custodian:</strong> Prabhudasi Sisters Educational Society</div>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={() => setSelectedDoc(null)}
                className="flex-1 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-950 transition-colors"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
