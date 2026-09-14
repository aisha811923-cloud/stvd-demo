"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Phone, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SCHOOL_INFO } from "@/lib/data/school-data";
import { SchoolCrest } from "@/components/ui/SchoolCrest";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error securely to console without exposing stack trace to UI
    console.error("Application runtime error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-navy-950 text-navy-950 px-4 sm:px-6 lg:px-8 py-28">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-card text-center space-y-6">
        {/* Heraldic Crest Icon */}
        <div className="flex justify-center">
          <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600">
            <AlertTriangle className="w-8 h-8" />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block">
            System Notice
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy-900">
            An Unexpected Interruption Occurred
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-md mx-auto">
            Our portal encountered an unexpected temporary error while loading this resource. Please attempt to reload the view, or contact our campus desk directly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="primary-gold"
            size="md"
            onClick={() => reset()}
            className="shadow-sm"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh & Try Again
          </Button>

          <Link href="/">
            <Button variant="outline-navy" size="md">
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Urgent Admissions Contact Link */}
        <div className="pt-6 border-t border-slate-100 space-y-2">
          <p className="text-xs text-slate-500">
            Need immediate assistance regarding admissions or campus verification?
          </p>
          <a
            href={`tel:${SCHOOL_INFO.phones[0]}`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-600" />
            <span>Call Admissions Office: {SCHOOL_INFO.phones[0]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
