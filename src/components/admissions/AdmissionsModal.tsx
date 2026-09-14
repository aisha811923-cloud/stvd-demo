"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  X,
  Phone,
  User,
  GraduationCap,
  Mail,
  CheckCircle2,
  MessageCircle,
  AlertCircle,
  Sparkles,
  FileText,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { useAdmissionsModal } from "@/context/AdmissionsModalContext";
import { Button } from "@/components/ui/Button";
import { SCHOOL_INFO, ADMISSION_ELIGIBILITY, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import { SchoolCrest } from "@/components/ui/SchoolCrest";

const GRADE_OPTIONS = [
  { value: "Nursery", label: "Nursery (Age 3+)" },
  { value: "LKG & UKG", label: "Kindergarten (LKG / UKG)" },
  { value: "Classes 1–5", label: "Primary Wing (Classes 1 to 5)" },
  { value: "Classes 6–8", label: "Middle Wing (Classes 6 to 8)" },
  { value: "Classes 9–10", label: "Secondary Wing (Classes 9 & 10)" },
  { value: "Class 11–12 Science", label: "Senior Secondary — Science (Med / Non-Med)" },
  { value: "Class 11–12 Commerce", label: "Senior Secondary — Commerce" },
  { value: "Class 11–12 Humanities", label: "Senior Secondary — Humanities / Arts" },
];

type ModalState = "IDLE" | "SUBMITTING" | "SUCCESS";

interface FieldErrors {
  studentName?: string;
  parentName?: string;
  phone?: string;
  email?: string;
  consent?: string;
}

export const AdmissionsModal: React.FC = () => {
  const { isOpen, closeModal, selectedGrade } = useAdmissionsModal();
  const shouldReduceMotion = useReducedMotion();

  // 3 Clean UI States
  const [modalState, setModalState] = useState<ModalState>("IDLE");

  // Form Fields
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("Nursery");
  const [notes, setNotes] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  // Field validation and server error states
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [confirmedInquiryId, setConfirmedInquiryId] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync default grade from context
  useEffect(() => {
    if (selectedGrade) {
      setGrade(selectedGrade);
    }
  }, [selectedGrade]);

  // Handle ESC key press, Lenis scroll pause & body scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleResetAndClose();
      }
    };

    if (isOpen) {
      if (typeof window !== "undefined") {
        window.__lenis?.stop();
        document.body.style.overflow = "hidden";
      }
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      if (typeof window !== "undefined") {
        window.__lenis?.start();
        document.body.style.overflow = "unset";
      }
      // Reset form on close after animation finishes
      setTimeout(() => {
        setModalState("IDLE");
        setGeneralError(null);
        setFieldErrors({});
      }, 300);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.__lenis?.start();
        document.body.style.overflow = "unset";
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const errors: FieldErrors = {};

    if (!parentName.trim() || parentName.trim().length < 2) {
      errors.parentName = "Please enter parent/guardian name (min 2 characters).";
    }

    if (!studentName.trim() || studentName.trim().length < 2) {
      errors.studentName = "Please enter student full name (min 2 characters).";
    }

    const cleanDigits = phone.replace(/\D/g, "");
    // Valid if standard 10-digit Indian number or 10-15 digit international format
    const isValidPhone = cleanDigits.length >= 10 && cleanDigits.length <= 15 && !/[^\d\s+-]/.test(phone);
    if (!isValidPhone) {
      errors.phone = "Please enter a valid contact number (at least 10 digits).";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!consentGiven) {
      errors.consent = "Please authorize contact consent to proceed.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);

    if (!validateForm()) {
      return;
    }

    setModalState("SUBMITTING");

    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          studentName: studentName.trim(),
          parentName: parentName.trim(),
          phone: phone.trim(),
          gradeApplying: grade,
          email: email.trim() || undefined,
          notes: notes.trim() || undefined,
          website: honeypot || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to transmit admissions inquiry.");
      }

      setConfirmedInquiryId(data.inquiryId || null);
      setModalState("SUCCESS");
    } catch (err: any) {
      console.error("Admissions inquiry submission error:", err);
      setGeneralError(err.message || "Something went wrong. Please try again or call our desk.");
      setModalState("IDLE");
    }
  };

  const handleResetAndClose = () => {
    setParentName("");
    setStudentName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setConsentGiven(false);
    setHoneypot("");
    setFieldErrors({});
    setGeneralError(null);
    setConfirmedInquiryId(null);
    setModalState("IDLE");
    closeModal();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello St. Teresa Vidya Deep Admissions Office, I have submitted an online callback inquiry for my child ${studentName || "Student"} for admission into ${grade} (Ref: ${confirmedInquiryId || "Website Inquirer"}).`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto overscroll-contain"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-navy-950/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Panel */}
          <motion.div
            ref={modalRef}
            data-lenis-prevent
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admissions-modal-title"
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-gold-500/30 overflow-hidden z-10 max-h-[85vh] flex flex-col overscroll-contain touch-pan-y"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 bg-gradient-to-b from-navy-900 to-navy-950 text-white flex items-center justify-between border-b border-gold-500/20 shrink-0">
              <div className="flex items-center gap-3">
                <SchoolCrest size="sm" showText={false} variant="dark" />
                <div>
                  <h3 id="admissions-modal-title" className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                    Admissions Callback Desk
                  </h3>
                  <p className="text-[11px] text-gold-400 font-sans tracking-wide">
                    Session {CURRENT_ACADEMIC_SESSION} • STVDS Udaipur
                  </p>
                </div>
              </div>

              <button
                onClick={handleResetAndClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-gold-500"
                aria-label="Close admissions modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div
              data-lenis-prevent
              className="p-6 sm:p-8 overflow-y-auto overscroll-contain touch-pan-y scrollbar-thin scrollbar-thumb-gold-500/30 flex-1 max-h-[calc(85vh-85px)]"
            >
              {modalState === "SUCCESS" ? (
                /* Luxury Editorial Success State */
                <div className="text-center py-4 space-y-6">
                  {/* Centered Gold Seal Icon */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500/20 via-gold-500/10 to-transparent border-2 border-gold-500/50 mx-auto flex items-center justify-center shadow-gold-glow">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 flex items-center justify-center text-navy-950 shadow-md">
                      <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-navy-950 leading-tight">
                      Admissions Inquiry Received
                    </h4>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you for your interest in St. Teresa Vidya Deep. Our admissions desk will review your details and contact you within 1 business day.
                    </p>
                  </div>

                  {/* Inquiry Reference Summary Card */}
                  <div className="p-4 rounded-2xl bg-parchment border border-gold-500/20 text-xs text-slate-600 space-y-2 text-left">
                    {confirmedInquiryId && (
                      <div className="flex justify-between items-center pb-1.5 border-b border-slate-200">
                        <span className="text-slate-500 font-medium">Tracking Reference:</span>
                        <span className="font-mono font-bold text-gold-700 bg-gold-500/10 px-2 py-0.5 rounded">
                          {confirmedInquiryId}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">Student:</span>
                      <span className="font-semibold text-navy-900">{studentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Parent / Guardian:</span>
                      <span className="font-semibold text-navy-900">{parentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Grade Applying For:</span>
                      <span className="font-semibold text-navy-900">{grade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Campus:</span>
                      <span className="font-semibold text-navy-900">Sector 12, Saveena, Udaipur</span>
                    </div>
                  </div>

                  {/* Actions: WhatsApp & Done Button */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/${SCHOOL_INFO.whatsapp.replace(/\D/g, "")}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium text-sm transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message Counselor on WhatsApp</span>
                    </a>

                    <Button
                      variant="outline-navy"
                      size="lg"
                      className="w-full font-semibold"
                      onClick={handleResetAndClose}
                    >
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form (IDLE & SUBMITTING states) */
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Bot Honeypot: invisible to human users, traps automated form fillers */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {generalError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                      <span>{generalError}</span>
                    </div>
                  )}

                  {/* Parent Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
                      Parent / Guardian Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        ref={firstInputRef}
                        type="text"
                        disabled={modalState === "SUBMITTING"}
                        placeholder="e.g. Rajesh Sharma"
                        value={parentName}
                        onChange={(e) => {
                          setParentName(e.target.value);
                          if (fieldErrors.parentName) {
                            setFieldErrors((prev) => ({ ...prev, parentName: undefined }));
                          }
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none text-navy-950 transition-all bg-white ${
                          fieldErrors.parentName
                            ? "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                            : "border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                        }`}
                      />
                    </div>
                    {fieldErrors.parentName && (
                      <p className="text-rose-400 text-xs mt-1">{fieldErrors.parentName}</p>
                    )}
                  </div>

                  {/* Student Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
                      Student / Child Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        type="text"
                        disabled={modalState === "SUBMITTING"}
                        placeholder="e.g. Aarav Sharma"
                        value={studentName}
                        onChange={(e) => {
                          setStudentName(e.target.value);
                          if (fieldErrors.studentName) {
                            setFieldErrors((prev) => ({ ...prev, studentName: undefined }));
                          }
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none text-navy-950 transition-all bg-white ${
                          fieldErrors.studentName
                            ? "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                            : "border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                        }`}
                      />
                    </div>
                    {fieldErrors.studentName && (
                      <p className="text-rose-400 text-xs mt-1">{fieldErrors.studentName}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
                      WhatsApp / Calling Mobile <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        type="tel"
                        disabled={modalState === "SUBMITTING"}
                        maxLength={25}
                        placeholder="e.g. +91 98290 12345 or 9829012345"
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^\d\s+-]/g, "");
                          setPhone(val);
                          if (fieldErrors.phone) {
                            setFieldErrors((prev) => ({ ...prev, phone: undefined }));
                          }
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none text-navy-950 transition-all bg-white ${
                          fieldErrors.phone
                            ? "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                            : "border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                        }`}
                      />
                    </div>
                    {fieldErrors.phone ? (
                      <p className="text-rose-400 text-xs mt-1">{fieldErrors.phone}</p>
                    ) : (
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Enter your mobile or WhatsApp number with optional country code.
                      </span>
                    )}
                  </div>

                  {/* Email Field (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                      <input
                        type="email"
                        disabled={modalState === "SUBMITTING"}
                        placeholder="e.g. rajesh.sharma@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (fieldErrors.email) {
                            setFieldErrors((prev) => ({ ...prev, email: undefined }));
                          }
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none text-navy-950 transition-all bg-white ${
                          fieldErrors.email
                            ? "border-rose-400 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/20"
                            : "border-slate-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20"
                        }`}
                      />
                    </div>
                    {fieldErrors.email && (
                      <p className="text-rose-400 text-xs mt-1">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* Grade Applying Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
                      Grade Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={grade}
                      disabled={modalState === "SUBMITTING"}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-navy-950 transition-all bg-white"
                    >
                      {GRADE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    {/* Nursery Age Limit Callout */}
                    {grade.toLowerCase().includes("nursery") && (
                      <div className="mt-2 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/25 text-xs text-navy-950 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>
                          <strong>Nursery Eligibility:</strong> {ADMISSION_ELIGIBILITY.nurseryAgeLimit.range}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 4 Required Admission Documents Checklist */}
                  <div className="p-3.5 rounded-2xl bg-parchment border border-slate-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-serif font-bold text-navy-950 uppercase tracking-wide">
                      <FileText className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>Required Documents (Session {ADMISSION_ELIGIBILITY.session}):</span>
                    </div>
                    <ul className="space-y-1 text-[11px] text-slate-700">
                      {ADMISSION_ELIGIBILITY.requiredDocuments.map((doc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-gold-600 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1.5">
                      Specific Inquiries / Questions (Optional)
                    </label>
                    <textarea
                      rows={2}
                      disabled={modalState === "SUBMITTING"}
                      placeholder="e.g. Inquiring about bus routes from Sector 14, or laboratory facilities."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-navy-950 transition-all bg-white resize-none"
                    />
                  </div>

                  {/* Explicit Contact Consent Checkbox (DPDP Compliance) */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                      <input
                        type="checkbox"
                        disabled={modalState === "SUBMITTING"}
                        checked={consentGiven}
                        onChange={(e) => {
                          setConsentGiven(e.target.checked);
                          if (fieldErrors.consent) {
                            setFieldErrors((prev) => ({ ...prev, consent: undefined }));
                          }
                        }}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-gold-600 focus:ring-2 focus:ring-gold-500/20 cursor-pointer accent-gold-600 shrink-0"
                      />
                      <span className="text-xs text-slate-700 leading-snug group-hover:text-navy-950 transition-colors">
                        I authorize St. Teresa Vidya Deep to contact me via Call or WhatsApp regarding admission for the {ADMISSION_ELIGIBILITY.session} session. View our{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy-900 font-semibold underline decoration-gold-500 hover:text-gold-600 transition-colors"
                        >
                          Privacy Policy
                        </a>
                        . <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {fieldErrors.consent && (
                      <p className="text-rose-400 text-xs mt-1">{fieldErrors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button with Loading State */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={modalState === "SUBMITTING" || !consentGiven}
                      className="w-full py-3 px-6 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:to-gold-500 text-navy-950 shadow-gold-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                      {modalState === "SUBMITTING" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-navy-950" />
                          <span>Transmitting Inquiry...</span>
                        </>
                      ) : (
                        <span>Request Callback from Admissions Desk</span>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-500 leading-tight">
                    By submitting, you agree to receive a callback or WhatsApp communication from St. Teresa Vidya Deep Senior Secondary School, Saveena, Udaipur.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
