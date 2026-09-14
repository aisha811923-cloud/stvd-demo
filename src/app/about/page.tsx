import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MilestonesTimeline } from "@/components/about/MilestonesTimeline";
import { PrincipalPortrait } from "@/components/about/PrincipalPortrait";
import { AboutHeroMotion } from "@/components/about/AboutHeroMotion";
import { AboutPrincipalMotion } from "@/components/about/AboutPrincipalMotion";
import { AboutGovernanceMotion } from "@/components/about/AboutGovernanceMotion";
import { AboutAnthemCard } from "@/components/about/AboutAnthemCard";
import { AboutPillarsMotion } from "@/components/about/AboutPillarsMotion";
import { SCHOOL_INFO, SCHOOL_ANTHEM, CURRENT_ACADEMIC_SESSION } from "@/lib/data/school-data";
import { Quote, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Legacy & Leadership",
  description:
    "Explore the 30-year CBSE legacy of St. Teresa Vidya Deep Senior Secondary School, Saveena, Udaipur. Read the formal message from Principal Sr. Ranjana and learn our history under the Prabhudasi Sisters.",
  keywords: [
    "About St Teresa Vidya Deep Udaipur",
    "Principal Sr Ranjana Message",
    "Prabhudasi Sisters School Udaipur",
    "School History Savina Udaipur",
    "Best CBSE School Administration Udaipur",
  ],
  openGraph: {
    title: "About St. Teresa Vidya Deep Sr. Sec. School | Legacy & Leadership",
    description:
      "Nurturing intellect, moral integrity, and holistic leadership in Udaipur since 1996. Managed by the Prabhudasi Sisters Educational Society.",
    url: "https://stteresavidyadeep.org/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-navy-950">
      {/* SECTION 1: Hero Banner */}
      <section className="bg-navy-gradient text-white pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-gold-500/20">
        <div
          className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <AboutHeroMotion />
      </section>

      {/* Editorial Parchment Content Surface */}
      <div className="bg-parchment text-navy-950 flex-1">
        {/* SECTION 2: From the Principal's Desk (Sr. Ranjana) */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership & Vision"
            title="From the Principal's Desk"
            description="An address to our parents, guardians, and students on holistic character formation, academic rigor, and our shared covenant."
            align="center"
          />

          <AboutPrincipalMotion>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Portrait & Credentials Sidebar */}
              <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                <PrincipalPortrait />

                {/* Direct Office Lines Card */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 font-serif border-b border-slate-100 pb-2">
                    Admissions & Office Contact
                  </h4>
                  <div className="space-y-2 text-xs">
                    <a
                      href={`tel:${SCHOOL_INFO.phones[0]}`}
                      className="flex items-center gap-2 text-slate-700 hover:text-gold-600 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{SCHOOL_INFO.phones[0]}</span>
                    </a>
                    <a
                      href={`mailto:${SCHOOL_INFO.emails[0]}`}
                      className="flex items-center gap-2 text-slate-700 hover:text-gold-600 transition-colors break-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                      <span>{SCHOOL_INFO.emails[0]}</span>
                    </a>
                  </div>
                </div>
              </aside>

              {/* Right Column: Formal Letter Article */}
              <article className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md relative overflow-hidden space-y-6">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-navy-950 via-gold-500 to-crimson-800" />

                {/* Letter Heading Meta */}
                <div className="border-b border-slate-200 pb-6 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                  <div>
                    <p className="font-serif text-sm font-bold text-navy-950 uppercase tracking-wider">
                      Official Institutional Address
                    </p>
                    <p className="mt-0.5">{SCHOOL_INFO.address.line1}, {SCHOOL_INFO.address.line2}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-navy-900">Academic Session {CURRENT_ACADEMIC_SESSION}</p>
                    <p className="text-gold-600 font-serif italic">Motto: &ldquo;{SCHOOL_INFO.motto}&rdquo;</p>
                  </div>
                </div>

                {/* Salutation & Body */}
                <div className="space-y-6 text-slate-800 font-sans leading-relaxed text-base sm:text-lg">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                    Dear Parents, Guardians, and Beloved Students,
                  </p>

                  {/* Drop Cap First Paragraph */}
                  <p className="text-slate-700 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-gold-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                    It is with profound gratitude and a deep sense of stewardship that I welcome you to St. Teresa Vidya Deep Senior Secondary School. Since our founding in 1996 under the spiritual guidance of the Prabhudasi Sisters Educational Society, our mission in Udaipur has remained clear and unwavering: to illuminate young minds with the sacred gift of wisdom, foster unshakeable integrity, and inspire every child to lead a life of purposeful contribution.
                  </p>

                  <p className="text-slate-700">
                    Education at St. Teresa Vidya Deep transcends the mere accumulation of facts and syllabus completion. While our classrooms maintain the highest benchmarks of the Central Board of Secondary Education (CBSE) curriculum, our true endeavor is the comprehensive formation of the human soul. In a world marked by rapid technological transformations and complex choices, it is the anchor of moral character, empathy, and intellectual discipline that enables our children to navigate life with distinction.
                  </p>

                  {/* Pull Quote */}
                  <div className="my-8 p-6 rounded-2xl bg-navy-950 text-white relative border-l-4 border-gold-500 shadow-lg">
                    <Quote className="w-8 h-8 text-gold-500/40 absolute top-4 right-4" />
                    <blockquote className="font-serif italic text-base sm:text-xl text-gold-400 leading-snug">
                      &ldquo;We do not merely prepare students for examinations; we prepare them to stand tall as moral compasses, scientific pioneers, and compassionate leaders in our nation.&rdquo;
                    </blockquote>
                    <p className="text-xs text-slate-400 mt-3 uppercase tracking-wider font-sans">
                      — Sr. Ranjana, Principal
                    </p>
                  </div>

                  <p className="text-slate-700">
                    Our dedicated faculty members do not view teaching as a transaction, but as a sacred calling. Whether guiding our youngest learners in the Pre-Primary Wing through play-way foundational discoveries, challenging Middle School scholars in experiential science, or preparing Senior Secondary students for competitive medical, engineering, and commerce careers, our educators walk beside each student with patience, rigor, and love.
                  </p>

                  <p className="text-slate-700">
                    To our prospective parents seeking admission for the {CURRENT_ACADEMIC_SESSION} session: we consider the education of your child a collaborative covenant. The strongest education occurs when the school and the home share the same aspirations of truth, humility, and diligent effort. We invite you to visit our Saveena campus, walk through our laboratories, and witness the joy of discovery that animates our community every day.
                  </p>
                </div>

                {/* Sign-Off Block */}
                <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs text-slate-500 italic mb-1">In Truth and Service,</p>
                    <h4 className="text-xl font-serif font-bold text-navy-950">
                      Sr. Ranjana
                    </h4>
                    <p className="text-xs font-semibold text-gold-600 uppercase tracking-widest mt-0.5">
                      Principal, St. Teresa Vidya Deep Sr. Sec. School
                    </p>
                    <p className="text-xs text-slate-500">
                      Prabhudasi Sisters Educational Society, Udaipur
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-parchment border border-gold-500/20 text-center sm:text-right">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block">
                      Institutional Motto
                    </span>
                    <span className="text-sm font-serif font-bold text-navy-950 gold-gradient-text">
                      &ldquo;SEEK YE WISDOM&rdquo;
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </AboutPrincipalMotion>
        </section>

        {/* SECTION 3: Institutional Legacy & The Prabhudasi Sisters */}
        <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/70">
          <AboutGovernanceMotion />

          {/* Interactive Milestone Timeline */}
          <div className="mt-16 pt-16 border-t border-slate-200/70">
            <SectionHeading
              eyebrow="Three Decades of Growth"
              title="Milestones in Our Journey"
              description="Trace the historical evolution of St. Teresa Vidya Deep from its foundational inception in 1996 to today's modernized campus."
              align="center"
            />
            <div className="mt-8">
              <MilestonesTimeline />
            </div>
          </div>

          {/* School Anthem Editorial Lyric Card */}
          <div className="mt-20 pt-16 border-t border-slate-200/70">
            <SectionHeading
              eyebrow="Choral Tradition & Identity"
              title={SCHOOL_ANTHEM.title}
              description={`Official anthem of St. Teresa Vidya Deep Senior Secondary School, recited across three decades of morning assemblies.`}
              align="center"
            />

            <AboutAnthemCard />
          </div>
        </section>
      </div>

      {/* SECTION 4: Core Pillars */}
      <section className="py-20 bg-navy-900 text-white border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ethical Foundations"
            title="Our Four Pillars of Character"
            description="The guiding principles that shape daily student life, classroom conduct, and our institutional stewardship."
            align="center"
            dark={true}
          />

          <AboutPillarsMotion />
        </div>
      </section>
    </div>
  );
}
