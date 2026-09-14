import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary-gold" | "outline-navy" | "outline-gold" | "ghost" | "crimson";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary-gold",
      size = "md",
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:scale-100 select-none cursor-pointer";

    const variantStyles = {
      "primary-gold":
        "bg-gold-gradient text-navy-950 font-semibold shadow-md hover:shadow-gold-glow hover:brightness-105 border border-gold-400/40",
      "outline-navy":
        "bg-transparent text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white shadow-sm",
      "outline-gold":
        "bg-transparent text-gold-400 border border-gold-500/60 hover:bg-gold-500/10 hover:border-gold-400",
      ghost:
        "bg-transparent text-navy-900 hover:bg-navy-900/5 hover:text-navy-950",
      crimson:
        "bg-crimson-gradient text-white font-semibold shadow-md hover:brightness-110 border border-crimson-800",
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-md gap-1.5 tracking-wide",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2 tracking-wide",
      lg: "text-base px-7 py-3 rounded-xl gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
