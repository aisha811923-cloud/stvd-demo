"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FlaskConical,
  Laptop,
  BookOpen,
  Trophy,
  Bus,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { TRANSPORT_OVERVIEW } from "@/lib/data/school-data";
import { luxuryEasing } from "@/lib/animations";

interface Facility {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
  description: string;
  specs: string[];
}

const FACILITIES: Facility[] = [
  {
    id: "physics-lab",
    title: "Advanced Physics Laboratory",
    category: "STEM Laboratories",
    icon: FlaskConical,
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Engineered for optical, electrical, and mechanical experimentations under CBSE Senior Secondary standards. Features dedicated optical benches, dark-room partitions, precision galvanometers, and regulated DC power supplies.",
    specs: [
      "Individual experiment stations for senior students",
      "Dark-room optical ray demonstration zone",
      "Comprehensive circuit boards and digital multimeters",
      "Full fire safety and electrical surge protection",
    ],
  },
  {
    id: "chemistry-lab",
    title: "Modern Chemistry Laboratory",
    category: "STEM Laboratories",
    icon: FlaskConical,
    imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80",
    description:
      "Fume-hood ventilated experimental sanctuary enabling safe chemical titration, salt analysis, and organic reaction studies with certified borosilicate glassware and eye-wash safety points.",
    specs: [
      "Continuous fume exhaust ventilation and acid-resistant tiles",
      "Digital pH meters, analytical balances, and hot plates",
      "Dedicated reagent store under strict faculty supervision",
      "Emergency eye-wash stations and fire safety extinguishers",
    ],
  },
  {
    id: "computer-lab",
    title: "Digital IT & Coding Center",
    category: "Digital Technology",
    icon: Laptop,
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    description:
      "High-speed networked computing facility equipped with modern desktop workstations. Students explore coding in Python, Scratch, web development tools, and office productivity suites with secure, child-safe broadband.",
    specs: [
      "1:1 student-to-PC terminal allocation during sessions",
      "Fiber-optic internet with firewall web safety filters",
      "Interactive multimedia projection for coding lectures",
      "Full air-conditioning and central power backup (UPS)",
    ],
  },
  {
    id: "library",
    title: "Central Academic Library",
    category: "Knowledge Center",
    icon: BookOpen,
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    description:
      "Quiet sanctuary housing over 8,000 academic titles, encyclopedia volumes, competitive exam references (NEET, JEE, NDA, CUET), national journals, and daily newspapers. Features reading areas for junior and senior scholars.",
    specs: [
      "Extensive reference section for CBSE board exams",
      "Age-appropriate reading bays for foundational classes",
      "Daily Hindi and English national newspapers & periodicals",
      "Automated digital cataloging and book issuing system",
    ],
  },
  {
    id: "sports-arena",
    title: "Athletics & Sports Grounds",
    category: "Physical Education",
    icon: Trophy,
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    description:
      "Expansive outdoor fields designed for athletics drills, football, volleyball, badminton, and running track events, alongside dedicated indoor arenas for chess, carrom, and table tennis.",
    specs: [
      "Regulation volleyball courts and sprint track lanes",
      "Football field with goal setups and spectator boundary",
      "Certified Physical Education instructors conducting daily drills",
      "Annual sports festival showcasing inter-house tournaments",
    ],
  },
  {
    id: "transport-safety",
    title: TRANSPORT_OVERVIEW.headline,
    category: "Safe Campus Transit",
    icon: Bus,
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    description: TRANSPORT_OVERVIEW.description,
    specs: [
      "Regulated school bus and van transit across Udaipur corridors",
      "Key residential connectivity: Saveena, Sector 14, Sector 11, Hiran Magri & Goverdhan Vilas",
      "Verified drivers and attentive female support staff on junior routes",
      "GPS-monitored fleet adhering to strict safety and punctual arrival protocols",
    ],
  },
];

export const CampusFacilitiesMotion: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: luxuryEasing,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Interactive Walkthrough"
        title="Campus Facilities & STEM Infrastructure"
        description="Every facility at St. Teresa Vidya Deep is purpose-built to adhere to strict CBSE safety, practical apparatus, and sanitary standards."
        align="center"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {FACILITIES.map((facility) => {
          const IconComponent = facility.icon;
          return (
            <motion.article
              key={facility.id}
              variants={cardVariants}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-gold-glow hover:border-gold-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Facility Image with Category Badge */}
                <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={facility.imageUrl}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-md text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30 flex items-center gap-1.5 shadow-sm">
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{facility.category}</span>
                  </span>
                </div>

                {/* Facility Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {facility.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-navy-950 uppercase tracking-wider block">
                      Facility Highlights:
                    </span>
                    {facility.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 pt-0">
                <AdmissionsTriggerButton
                  variant="outline-navy"
                  size="sm"
                  className="w-full"
                >
                  Schedule Inspection Visit
                </AdmissionsTriggerButton>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};
