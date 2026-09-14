import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AdmissionsTriggerButton } from "@/components/ui/AdmissionsTriggerButton";
import { TRANSPORT_OVERVIEW } from "@/lib/data/school-data";
import {
  FlaskConical,
  Laptop,
  BookOpen,
  Trophy,
  ShieldCheck,
  Bus,
  CheckCircle2,
  ArrowRight,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Campus Infrastructure & STEM Labs",
  description:
    "Explore the CBSE-compliant campus of St. Teresa Vidya Deep in Saveena, Udaipur. Advanced science laboratories, computer centers, and athletic grounds.",
  keywords: [
    "School Labs in Udaipur",
    "Physics Chemistry Biology Labs Savina",
    "Computer Lab School Udaipur",
    "School Bus Facility Sector 14 Udaipur",
    "St Teresa Vidya Deep Campus",
  ],
  openGraph: {
    title: "World-Class Laboratories & Campus Facilities | St. Teresa Vidya Deep",
    description:
      "Modern STEM laboratories, central library, sports grounds, and school-supervised transportation across Udaipur.",
    url: "https://stteresavidyadeep.org/campus",
  },
};

export default function CampusPage() {
  const facilities = [
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
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span>Modern Learning Infrastructure • Saveena, Udaipur</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Spaces Designed for{" "}
            <span className="gold-gradient-text">Discovery & Excellence.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Tour our specialized science and computing laboratories, peaceful central library, expansive athletics arenas, and verified Udaipur transit network.
          </p>

          <div className="pt-2 flex justify-center">
            <AdmissionsTriggerButton
              variant="primary-gold"
              size="lg"
              className="shadow-gold-glow"
            >
              Book a Campus Tour
              <ArrowRight className="w-4 h-4 ml-2" />
            </AdmissionsTriggerButton>
          </div>
        </div>
      </section>

      {/* Facilities & Athletics Reading Surface */}
      <div className="bg-parchment text-navy-950 flex-1">
        {/* 2. Bento Facilities Grid */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Walkthrough"
          title="Campus Facilities & STEM Infrastructure"
          description="Every facility at St. Teresa Vidya Deep is purpose-built to adhere to strict CBSE safety, practical apparatus, and sanitary standards."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-gold-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Facility Image with Category Badge */}
                  <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={facility.imageUrl}
                      alt={facility.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-md text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30 flex items-center gap-1.5 shadow-sm">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{facility.category}</span>
                    </span>
                  </div>

                  {/* Facility Details */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="text-xl font-serif font-bold text-navy-900">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              </div>
            );
          })}
        </div>
      </section>
      </div>

      {/* 3. Safe Campus Transit Feature Card (TRANSPORT_OVERVIEW) */}
      <section className="py-20 bg-navy-900 text-white border-t border-gold-500/20 relative overflow-hidden">
        <div
          className="absolute -top-24 right-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-navy-950/80 rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-card text-center space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/25 text-xs font-semibold uppercase tracking-wider">
                <Bus className="w-3.5 h-3.5 text-gold-400" />
                <span>Transit Network: {TRANSPORT_OVERVIEW.status}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-800 text-slate-300 border border-slate-700 text-xs">
                <Navigation className="w-3.5 h-3.5 text-gold-400" />
                <span>Udaipur Citywide Coverage</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              {TRANSPORT_OVERVIEW.headline}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {TRANSPORT_OVERVIEW.description}
            </p>

            {/* Coverage Sector Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              {["Saveena", "Sector 14", "Sector 11", "Hiran Magri", "Goverdhan Vilas", "Central Udaipur Corridors"].map((sector, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <AdmissionsTriggerButton
                variant="primary-gold"
                size="md"
                className="shadow-gold-glow"
              >
                Inquire About Transit Route for Your Area
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </AdmissionsTriggerButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
