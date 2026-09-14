# Local SEO, Schema Markup & Social Metadata Strategy
**Focus:** Udaipur local search dominance (Savina, Sector 14, Hiran Magri) and high-prestige WhatsApp link previews.

---

## 1. Global JSON-LD Structured Data
Place inside the root `layout.tsx` or a dedicated `<head>` component.

```typescript
export const schoolJsonLd = {
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "School",
  "name": "St. Teresa Vidya Deep Senior Secondary School",
  "alternateName": ["STVDS", "St. Teresa Vidya Deep Udaipur"],
  "url": "[https://stteresavidyadeep.org](https://stteresavidyadeep.org)",
  "logo": "[https://stteresavidyadeep.org/images/brand/crest.png](https://stteresavidyadeep.org/images/brand/crest.png)",
  "image": "[https://stteresavidyadeep.org/images/campus/hero-campus.webp](https://stteresavidyadeep.org/images/campus/hero-campus.webp)",
  "description": "Leading CBSE affiliated senior secondary school in Udaipur, managed by the Prabhudasi Sisters. Providing education from Nursery to Class XII (Science, Commerce, Arts).",
  "foundingDate": "1996",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Savina-Jogi Talaab Road, NH 8 Bypass, Sector 14",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "313002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.5511,
    "longitude": 73.7122
  },
  "telephone": "+91-9667881122",
  "email": "stteresavidyadeep@gmail.com",
  "alumni": {
    "@type": "EducationalOrganization",
    "name": "Central Board of Secondary Education (CBSE)"
  },
  "priceRange": "INR"
};
2. Next.js App Router Root Metadata (src/app/layout.tsx)TypeScriptimport type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("[https://stteresavidyadeep.org](https://stteresavidyadeep.org)"),
  title: {
    default: "St. Teresa Vidya Deep Sr. Sec. School | Udaipur",
    template: "%s | St. Teresa Vidya Deep Udaipur",
  },
  description: "Official portal of St. Teresa Vidya Deep Senior Secondary School, Udaipur (CBSE Affiliated). Admissions open for Nursery to Class XII.",
  keywords: [
    "St Teresa Vidya Deep Udaipur",
    "CBSE School Savina Udaipur",
    "Best Schools in Udaipur",
    "Top English Medium School Sector 14 Udaipur",
    "School Admission Udaipur 2026-27",
    "Senior Secondary School Savina"
  ],
  authors: [{ name: "Prabhudasi Sisters Educational Society" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "[https://stteresavidyadeep.org](https://stteresavidyadeep.org)",
    siteName: "St. Teresa Vidya Deep Sr. Sec. School",
    title: "St. Teresa Vidya Deep Sr. Sec. School | Seek Ye Wisdom",
    description: "Nurturing values, academic excellence, and holistic leadership in Udaipur since 1996. Admissions Open for 2026-27.",
    images: [
      {
        url: "/images/brand/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "St. Teresa Vidya Deep School Campus and Crest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Teresa Vidya Deep Sr. Sec. School",
    description: "Nurturing intellect and character. CBSE Affiliated, Udaipur.",
    images: ["/images/brand/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
3. High-Priority Keyword TargetsKeyword CategoryTarget Search QueryPlacement TargetLocal Direct"St Teresa Vidya Deep school Udaipur"Home Title, H1, FooterLocality Specific"Best CBSE school near Savina / Sector 14"About Page, Campus OverviewAdmissions High-Intent"School admissions 2026-27 Udaipur"Hero Banner, Admissions PageStreams Focus"Class 11 Science Commerce school Udaipur"Academics Page stream cards