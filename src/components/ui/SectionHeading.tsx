import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-3",
            dark
              ? "bg-gold-500/10 text-gold-400 border border-gold-500/30"
              : "bg-navy-900/5 text-gold-600 border border-gold-500/20"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          {eyebrow}
        </div>
      )}

      <h2
        className={cn(
          "text-2xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4",
          dark ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed font-sans",
            dark ? "text-slate-300" : "text-slate-600",
            isCenter && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}

      <div
        className={cn(
          "w-16 h-1 bg-gold-gradient rounded-full mt-5",
          isCenter ? "mx-auto" : "ml-0"
        )}
      />
    </div>
  );
};
