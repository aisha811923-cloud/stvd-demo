import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { AdmissionsModalProvider } from "@/context/AdmissionsModalContext";
import { AdmissionsModal } from "@/components/admissions/AdmissionsModal";
import { FloatingAdmissionsBadge } from "@/components/admissions/FloatingAdmissionsBadge";
import SchoolSchema from "@/components/seo/SchoolSchema";
import { getBaseUrl } from "@/lib/constants";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F1E36",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "St. Teresa Vidya Deep Senior Secondary School | CBSE Udaipur",
    template: "%s | St. Teresa Vidya Deep Sr. Sec. School, Udaipur",
  },
  description:
    "Official website and admissions portal for St. Teresa Vidya Deep Sr. Sec. School (STVDS), Saveena, Udaipur. CBSE affiliated co-educational convent education managed by Prabhudasi Sisters of Ajmer.",
  keywords: [
    "St. Teresa Vidya Deep",
    "STVDS Udaipur",
    "CBSE schools in Udaipur",
    "best convent schools Udaipur",
    "Saveena schools Udaipur",
    "St Teresa Saveena",
    "admissions 2026-27 Udaipur",
  ],
  authors: [{ name: "Prabhudasi Sisters of Ajmer" }],
  creator: "St. Teresa Vidya Deep Senior Secondary School",
  icons: {
    icon: [
      { url: "/images/brand/crest.png", sizes: "32x32", type: "image/png" },
      { url: "/images/brand/crest.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/brand/crest.png",
    apple: [
      { url: "/images/brand/crest.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "St. Teresa Vidya Deep Senior Secondary School | CBSE Udaipur",
    description:
      "Official admissions and academic portal for St. Teresa Vidya Deep Sr. Sec. School, Saveena, Udaipur. CBSE affiliated convent education.",
    url: getBaseUrl(),
    siteName: "St. Teresa Vidya Deep",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Teresa Vidya Deep Sr. Sec. School, Udaipur",
    description:
      "Official admissions and academic portal for St. Teresa Vidya Deep Sr. Sec. School, Saveena, Udaipur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable}`}>
      <head>
        <SchoolSchema />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-navy-950 text-white overflow-x-hidden selection:bg-gold-500 selection:text-navy-950">
        {/* Skip to Content Accessible Link */}
        <SkipToContent />

        <AdmissionsModalProvider>
          <SmoothScroll>
            <Navbar />
            <main id="main-content" tabIndex={-1} className="flex-1 outline-none bg-navy-950">
              {children}
            </main>
            <Footer />
            <AdmissionsModal />
            <FloatingAdmissionsBadge />
          </SmoothScroll>
        </AdmissionsModalProvider>
      </body>
    </html>
  );
}
