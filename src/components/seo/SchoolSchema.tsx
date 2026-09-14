import React from "react";
import { getBaseUrl } from "@/lib/constants";

export default function SchoolSchema() {
  const siteUrl = getBaseUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${siteUrl}/#school`,
    name: "St. Teresa Vidya Deep Senior Secondary School",
    alternateName: [
      "STVDS Udaipur",
      "St. Teresa's Vidhya Deep",
      "St. Teresa Vidya Deep School Saveena",
    ],
    url: siteUrl,
    logo: `${siteUrl}/images/brand/crest.png`,
    image: [
      `${siteUrl}/images/campus/facade.webp`,
      `${siteUrl}/images/campus/physics-lab.webp`,
    ],
    description:
      "Leading CBSE-affiliated co-educational senior secondary convent institution in Udaipur, managed by the Prabhudasi Sisters of Ajmer since 1996. Dedicated to scholastic excellence, moral discipline, and STEM innovation.",
    slogan: "SEEK YE WISDOM",
    foundingDate: "1996",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 12, Saveena Township, NH 8 Bypass",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      postalCode: "313002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.5458,
      longitude: 73.7128,
    },
    telephone: "+91-9667881122",
    email: "stteresavidyadeep@gmail.com",
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "Prabhudasi Sisters of Ajmer",
      location: "Ajmer, Rajasthan, India",
    },
    knowsLanguage: ["English", "Hindi"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Affiliation",
        recognizedBy: {
          "@type": "Organization",
          name: "Central Board of Secondary Education (CBSE)",
        },
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:50",
        closes: "14:20",
        description: "Academic Sessions (Summer & Winter operational hours)",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "10:00",
        description: "Principal Office Consultation Hours",
      },
    ],
    areaServed: [
      "Saveena",
      "Sector 14",
      "Sector 11",
      "Hiran Magri",
      "Goverdhan Vilas",
      "Udaipur",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
