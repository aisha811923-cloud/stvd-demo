import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BentoStats } from "@/components/home/BentoStats";
import { CampusGallery } from "@/components/home/CampusGallery";
import { PhilosophyPillars } from "@/components/home/PhilosophyPillars";
import { AdmissionsBanner } from "@/components/home/AdmissionsBanner";
import { CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";

export const metadata: Metadata = {
  title: "St. Teresa Vidya Deep Senior Secondary School | CBSE Udaipur",
  description:
    "Official website and admissions portal for St. Teresa Vidya Deep Sr. Sec. School (STVDS), Saveena, Udaipur. CBSE affiliated co-educational convent education managed by Prabhudasi Sisters of Ajmer.",
  keywords: [
    "St. Teresa Vidya Deep",
    "STVDS Udaipur",
    "CBSE schools in Udaipur",
    "best convent schools Udaipur",
    "Saveena schools Udaipur",
    "St Teresa Saveena",
    "admissions 2027-28 Udaipur",
    `admissions ${CURRENT_ACADEMIC_SESSION} Udaipur`,
  ],
  openGraph: {
    title: "St. Teresa Vidya Deep Senior Secondary School | CBSE Udaipur",
    description:
      "Official website and admissions portal for St. Teresa Vidya Deep Sr. Sec. School (STVDS), Saveena, Udaipur. CBSE affiliated co-educational convent education managed by Prabhudasi Sisters of Ajmer.",
    url: "https://stteresavidyadeep.com",
    siteName: "St. Teresa Vidya Deep Sr. Sec. School",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Flagship Hero Section */}
      <Hero />

      {/* 2. Bento Grid Track Record & Statistics */}
      <BentoStats />

      {/* 3. Modular 5-Card Bento Campus Life Gallery */}
      <CampusGallery />

      {/* 4. Four Core Philosophy Pillars */}
      <PhilosophyPillars />

      {/* 5. High-Conversion Admissions Action Banner */}
      <AdmissionsBanner />
    </div>
  );
}

