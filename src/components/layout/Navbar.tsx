"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useAdmissionsModal } from "@/context/AdmissionsModalContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Campus", href: "/campus" },
  { label: "Events", href: "/events" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useAdmissionsModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Outer Positioning: Floating centered capsule suspended from top */}
      <header className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 pointer-events-none">
        <nav
          className={cn(
            "pointer-events-auto w-full max-w-6xl rounded-full bg-[#080F1D] border border-gold-500/25 shadow-[0_12px_40px_rgba(0,0,0,0.45)] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300",
            scrolled && "border-gold-500/35 shadow-[0_16px_45px_rgba(0,0,0,0.65)]"
          )}
          role="navigation"
          aria-label="Primary Navigation"
        >
          {/* Brand Lockup (Left) */}
          <Link className="flex items-center gap-3 group shrink-0" href="/" aria-label="St. Teresa Vidya Deep Senior Secondary School - Home">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden">
              <Image
                alt="St. Teresa Vidya Deep Official Crest"
                className="object-contain h-full w-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                height={44}
                priority
                src="/images/brand/crest.png"
                width={44}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold tracking-tight text-white text-base leading-tight group-hover:text-amber-400 transition-colors">
                St. Teresa Vidya Deep
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                Senior Secondary • Udaipur
              </span>
            </div>
          </Link>

          {/* Top Navigation Links (Center) - Exactly 5 Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-slate-200 hover:text-gold-400 text-sm font-medium transition-colors px-3 py-1.5 rounded-full",
                    isActive && "text-gold-400 font-semibold bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Admissions CTA (Right) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => openModal()}
              className="rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider px-5 py-2 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95 flex items-center gap-1.5 cursor-pointer"
              aria-label="Open Admissions Inquiry Form"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions: Quick Apply + Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openModal()}
              className="rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 transition-all shadow-[0_0_10px_rgba(212,175,55,0.25)] active:scale-95 cursor-pointer"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-gold-500 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gold-400" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer: Opaque dark navy with strictly 5 links + Apply Now */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto w-full max-w-6xl mt-3 rounded-2xl bg-[#080F1D] border border-gold-500/30 text-white p-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-2 lg:hidden max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[11px] font-semibold text-gold-400 uppercase tracking-widest">
                  Navigation
                </span>
                <span className="text-xs text-slate-400">CBSE Affiliated • Saveena</span>
              </div>

              {/* 5 Core Navigation Links */}
              <div className="flex flex-col space-y-1.5">
                {NAV_LINKS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-gold-500/20 text-gold-400 font-semibold border border-gold-500/30"
                          : "text-white hover:text-gold-400 hover:bg-white/5"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400/60" />
                    </Link>
                  );
                })}
              </div>

              {/* Admissions CTA */}
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openModal();
                  }}
                  className="rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-wider px-5 py-3 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95 w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply Now &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-xs transition-opacity duration-300 lg:hidden pointer-events-auto"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
