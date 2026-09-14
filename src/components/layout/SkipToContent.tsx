import React from "react";

export const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-gold-500 focus:text-navy-950 focus:font-bold focus:text-sm focus:rounded-xl focus:shadow-2xl focus:ring-2 focus:ring-offset-2 focus:ring-navy-900 transition-transform duration-150"
    >
      Skip to main content
    </a>
  );
};
