"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, BookOpenCheck, Cpu, Activity, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { primaryEasing } from "@/lib/animations";

export const PhilosophyPillars: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      id: "moral-discipline",
      title: "Moral Discipline & Faith",
      tagline: "Character Before Credentials",
      description:
        "Cultivating spiritual humility, empathy for society, and uncompromising personal honesty. Students learn to navigate modern life anchored in ethical resilience and communal harmony.",
      icon: HeartHandshake,
      accent: "from-crimson-800/10 to-transparent",
      iconBg: "bg-crimson-800/10 text-crimson-800",
    },
    {
      id: "scholastic-rigor",
      title: "Scholastic Rigor",
      tagline: "Mastery of Fundamentals",
      description:
        "Rigorous CBSE-aligned pedagogy from foundational numeracy to Class XII board syllabus. Emphasizing conceptual clarity, regular revision drills, and analytical reasoning.",
      icon: BookOpenCheck,
      accent: "from-navy-900/10 to-transparent",
      iconBg: "bg-navy-900/10 text-navy-900",
    },
    {
      id: "technological-readiness",
      title: "Technological Readiness",
      tagline: "Equipping Future Innovators",
      description:
        "Modern IT computer suites, interactive digital projection in classrooms, and hands-on laboratory experiments fostering inquiry-driven problem solvers ready for tomorrow.",
      icon: Cpu,
      accent: "from-gold-500/15 to-transparent",
      iconBg: "bg-gold-500/15 text-gold-600",
    },
    {
      id: "holistic-physical-growth",
      title: "Holistic Physical Growth",
      tagline: "Vigor, Teamwork & Sportsmanship",
      description:
        "Structured physical training drills, athletics tracks, volleyball leagues, and yoga sessions instilling healthy discipline, competitive grace, and enduring vitality.",
      icon: Activity,
      accent: "from-green-600/10 to-transparent",
      iconBg: "bg-green-600/10 text-green-700",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: primaryEasing,
      },
    }),
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Our Foundational Ethos"
          title="The Four Pillars of Vidya Deep"
          description="Rooted in the eternal motto 'SEEK YE WISDOM', our educational ecosystem balances spiritual depth, intellectual brilliance, and active citizenship."
          align="center"
        />

        {/* Guiding Scripture Block */}
        <div className="max-w-3xl mx-auto mb-14 p-6 rounded-2xl bg-parchment border border-gold-500/30 text-center relative shadow-subtle">
          <Quote className="w-8 h-8 text-gold-500/30 mx-auto mb-2" />
          <p className="font-serif italic text-navy-900 text-sm sm:text-base leading-relaxed">
            &ldquo;Fear of God is the beginning of Wisdom and love of God is manifested through loving our neighbour irrespective of caste, creed and religion.&rdquo;
          </p>
          <span className="block mt-2 text-[11px] font-semibold text-gold-600 uppercase tracking-widest">
            Prabhudasi Sisters Institutional Guiding Principle
          </span>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { y: -6, transition: { duration: 0.2 } }
                }
                className="group relative rounded-3xl p-7 bg-white border border-slate-200/80 shadow-card hover:shadow-gold-glow hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3.5 rounded-2xl ${pillar.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-serif font-bold text-slate-300 group-hover:text-gold-500 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block mb-1">
                    {pillar.tagline}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-navy-950 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Core Pillar</span>
                  <div className="w-8 h-1 rounded-full bg-slate-200 group-hover:w-14 group-hover:bg-gold-500 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
