"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FlaskConical,
  Monitor,
  Trophy,
  Users,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SchoolCrest } from "@/components/ui/SchoolCrest";
import { primaryEasing } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface GalleryCardData {
  id: string;
  title: string;
  tag: string;
  description: string;
  desktopSpan: string;
  imagePath: string;
  icon: React.ElementType;
}

const GALLERY_ITEMS: GalleryCardData[] = [
  {
    id: "science",
    title: "Advanced Science & STEM Laboratories",
    tag: "Practical Learning",
    description:
      "Fully equipped Physics, Chemistry, and Biology research laboratories compliant with CBSE experiential learning mandates.",
    desktopSpan: "col-span-1 md:col-span-2 aspect-[16/10]",
    imagePath: "/images/campus/physics-lab.webp",
    icon: FlaskConical,
  },
  {
    id: "computer",
    title: "Digital Learning & IT Labs",
    tag: "Modern Tech",
    description:
      "High-speed networked computing lab with Python coding suites and modern digital literacy tools.",
    desktopSpan: "aspect-[4/3]",
    imagePath: "/images/campus/computer-lab.webp",
    icon: Monitor,
  },
  {
    id: "sports",
    title: "Sports Complex & Track Arenas",
    tag: "Physical Fitness",
    description:
      "Expansive athletic facilities with multi-sport playfields, basketball courts, and structured fitness regimens.",
    desktopSpan: "aspect-[4/3]",
    imagePath: "/images/campus/sports-ground.webp",
    icon: Trophy,
  },
  {
    id: "assembly",
    title: "Morning Assembly & Community Life",
    tag: "Campus Culture",
    description:
      "Daily gathering fostering moral discipline, spiritual reflection, public speaking, and communal pride.",
    desktopSpan: "aspect-[4/3]",
    imagePath: "/images/campus/assembly.webp",
    icon: Users,
  },
  {
    id: "library",
    title: "Central Reading & Reference Library",
    tag: "Curated Archives",
    description:
      "Comprehensive repository of academic literature, periodicals, encyclopedias, and quiet scholarly study zones.",
    desktopSpan: "col-span-1 md:col-span-2 aspect-[16/9]",
    imagePath: "/images/campus/library.webp",
    icon: BookOpen,
  },
];

interface GalleryCardProps {
  item: GalleryCardData;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, index }) => {
  const [imgError, setImgError] = useState(false);
  const Icon = item.icon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: primaryEasing,
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gold-500/20 bg-navy-950/90 shadow-card hover:border-gold-500/40 transition-all duration-300",
        item.desktopSpan
      )}
    >
      {/* Background Image or Resilient Geometric Fallback */}
      {!imgError ? (
        <Image
          src={item.imagePath}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        /* Dark geometric fallback card */
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Subtle Grid / Radial lines */}
          <div
            className="absolute inset-0 opacity-15 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px]"
            aria-hidden="true"
          />
          <div className="relative z-10 w-16 h-16 rounded-2xl bg-navy-800/80 border border-gold-500/30 flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8 text-gold-400" />
          </div>
          <div className="relative z-10 mt-3 flex items-center gap-1.5 opacity-40">
            <SchoolCrest size="sm" showText={false} variant="dark" className="w-4 h-4" />
            <span className="text-[10px] uppercase font-serif tracking-widest text-gold-400">
              STVDS Campus
            </span>
          </div>
        </div>
      )}

      {/* Gradient Vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Category Badge (Top-Left Pill) */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 bg-navy-950/80 backdrop-blur-md border border-gold-500/30 text-gold-400 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-md">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>{item.tag}</span>
        </span>
      </div>

      {/* Card Content (Pinned Bottom-Left) */}
      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-col justify-end text-left z-10 pointer-events-none">
        <h3 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors leading-snug drop-shadow-sm">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 sm:line-clamp-2 mt-1 font-sans leading-relaxed drop-shadow-xs">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const CampusGallery: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden border-t border-gold-500/15">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-navy-800/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Campus Life & Infrastructure"
          title="Designed for Inquisitive Minds"
          description="Explore our purpose-built spaces in Saveena, Udaipur — uniting state-of-the-art scientific laboratories, digital hubs, expansive playfields, and quiet archives."
          align="center"
          dark={true}
        />

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Section Footer Link */}
        <div className="mt-12 text-center">
          <Link
            href="/campus"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-900/80 hover:bg-navy-900 text-gold-400 hover:text-gold-300 border border-gold-500/30 hover:border-gold-500/50 text-sm font-semibold tracking-wide transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-gold-glow group active:scale-95 cursor-pointer"
          >
            <span>Explore Full Campus Facilities &amp; Labs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
