/**
 * Centralized Application Constants & Helpers
 * St. Teresa Vidya Deep Senior Secondary School (STVDS)
 */

export const getBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export const SITE_NAME = "St. Teresa Vidya Deep Senior Secondary School";
export const SITE_SHORT_NAME = "STVDS Udaipur";
export const DEFAULT_LOCALE = "en_IN";
