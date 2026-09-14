import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AcademicWingTabs } from "@/components/academics/AcademicWingTabs";
import { AcademicsHeroMotion } from "@/components/academics/AcademicsHeroMotion";
import { AssessmentFrameworkMotion } from "@/components/academics/AssessmentFrameworkMotion";
import { DailyScheduleMotion } from "@/components/academics/DailyScheduleMotion";
import { UniformShowcaseMotion } from "@/components/academics/UniformShowcaseMotion";

export const metadata: Metadata = {
  title: "Academic Curriculum & Wings",
  description:
    "Explore the CBSE curriculum from Nursery to Class XII at St. Teresa Vidya Deep, Udaipur. Specialized Senior Secondary streams in Science, Commerce, and Arts with modern practical laboratories.",
  keywords: [
    "CBSE Curriculum Udaipur",
    "Class 11 Science Commerce school Udaipur",
    "Best Academic Schools Savina Udaipur",
    "Nursery to Class 12 CBSE Syllabus",
    "St Teresa Vidya Deep Academics",
  ],
  openGraph: {
    title: "CBSE Curriculum & Senior Secondary Streams | St. Teresa Vidya Deep",
    description:
      "Nursery to Class XII academic excellence. Comprehensive Science, Commerce, and Humanities streams with modern laboratory infrastructure in Udaipur.",
    url: "https://stteresavidyadeep.org/academics",
  },
};

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* 1. Academics Hero Banner */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <AcademicsHeroMotion />
      </section>

      {/* Curriculum & Framework Reading Surface */}
      <div className="bg-parchment text-navy-950 flex-1">
        {/* 2. Interactive Wing Switcher */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pedagogical Architecture"
            title="Curriculum Wings & Pathways"
            description="Explore class divisions, subjects, pedagogical focus, and senior secondary specialized streams."
            align="center"
          />

          <AcademicWingTabs />
        </section>

        {/* 3. Assessment & Evaluation Framework */}
        <section className="py-20 bg-white border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Evaluation Strategy"
              title="Continuous & Comprehensive Assessment"
              description="Our evaluation model combines regular formative feedback with rigorous summative testing to ensure true subject mastery."
              align="center"
            />

            <AssessmentFrameworkMotion />
          </div>
        </section>

        {/* 4. Daily Timings & Operational Schedule */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Institutional Rhythm"
            title="Daily Timings & Operational Schedule"
            description="Calibrated seasonal schedules prioritizing student alertness, academic curriculum quotas, and parent consultation windows."
            align="center"
          />

          <DailyScheduleMotion />
        </section>

        {/* 5. Prescribed Dress Code Section */}
        <section className="py-20 bg-white border-t border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Student Deportment"
              title="Prescribed Institutional Dress Code"
              description="Our structured uniform embodies equality, personal discipline, and collegiate dignity across all developmental divisions."
              align="center"
            />

            <UniformShowcaseMotion />
          </div>
        </section>
      </div>
    </div>
  );
}
