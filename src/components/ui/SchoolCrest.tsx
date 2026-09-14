import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SchoolCrestProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  variant?: "light" | "dark";
}

export const SchoolCrest: React.FC<SchoolCrestProps> = ({
  className,
  size = "md",
  showText = true,
  variant = "light",
}) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const dimensionMap = {
    sm: 32,
    md: 44,
    lg: 64,
    xl: 96,
  };

  const isDark = variant === "dark";

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      {/* Official Transparent Crest Image */}
      <div className={cn("relative shrink-0", sizeMap[size])}>
        <Image
          src="/images/brand/crest.png"
          alt="St. Teresa Vidya Deep Official Crest"
          width={dimensionMap[size]}
          height={dimensionMap[size]}
          className="object-contain h-full w-full drop-shadow-md"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-serif font-bold tracking-tight leading-tight",
              size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base",
              isDark ? "text-white" : "text-navy-950"
            )}
          >
            St. Teresa Vidya Deep
          </span>
          <span
            className={cn(
              "text-[10px] font-medium tracking-widest uppercase",
              isDark ? "text-gold-400" : "text-gold-600"
            )}
          >
            Sr. Sec. School • Udaipur
          </span>
        </div>
      )}
    </div>
  );
};
