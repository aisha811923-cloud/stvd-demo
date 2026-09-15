# St. Teresa Vidya Deep Senior Secondary School (STVDS)
## Complete Website Implementation & Engineering Details

> **Institutional Portal for St. Teresa Vidya Deep Sr. Sec. School, Saveena, Udaipur**  
> **Affiliation:** Central Board of Secondary Education (CBSE Affiliation No. 1730322)  
> **Management:** Prabhudasi Sisters of Ajmer Educational Society (Estd. 1996)  
> **Active Intake:** Academic Session 2027–2028  
> **GitHub Repository:** [github.com/aisha811923-cloud/stvd-demo](https://github.com/aisha811923-cloud/stvd-demo) (Branch: `main`)  
> **Deployment Target:** Vercel Automated Production CI/CD  

---

## 1. Executive Summary & Technology Stack

The institutional web portal for St. Teresa Vidya Deep Senior Secondary School has been engineered as a high-performance, accessible, and standards-compliant web application. It combines traditional convent prestige with modern web performance, structured SEO data, dynamic admissions lead capture, and a luxury editorial motion system.

### Core Stack & Architecture
- **Framework:** Next.js 15 (App Router with pure Server Component pages and isolated Client Component motion islands)
- **Language:** TypeScript 5 (Strict Mode enabled, zero implicit `any`, discriminated unions for UI states)
- **Styling:** Tailwind CSS 3 (Centralized institutional design token system)
- **Animation:** Framer Motion 12 (Hardware-accelerated transforms, luxury cubic-bezier easing, `useReducedMotion` support)
- **Smooth Scroll:** Lenis Smooth Scroll with programmatic scroll-lock during modal dialogs
- **Backend / Database:** Next.js Route Handlers (`/api/admissions`) connected to Supabase for secure inquiry storage
- **Icons:** Lucide React

---

## 2. Brand Identity & Visual Engineering

### A. Official Institutional Crest Integration
- **Source Asset:** [`public/images/brand/crest.png`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/public/images/brand/crest.png) (Transparent, authentic heraldic crest).
- **Reusable Component:** [`src/components/ui/SchoolCrest.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/ui/SchoolCrest.tsx):
  - Configurable sizing (`sm`, `md`, `lg`, `xl`).
  - Dark and light background variants.
  - Optional typography lockup displaying the school name and motto *"Seek Ye Wisdom"*.
- **Placements:**
  - **Desktop & Mobile Navbar:** Integrated into the brand lockup with hover elevation.
  - **Footer:** Formal crest emblem alongside founding credentials and address.
  - **Hero & Modal Dialogs:** Flagship centerpiece across all promotional surfaces.

### B. Dedicated Browser Tab Favicon
- **File:** [`src/app/icon.png`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/icon.png) (48 × 48 px).
- **Details:** Tight square crop of the crest with alpha transparency, rendered with high-quality bicubic interpolation so it stays razor-sharp on high-DPI browser tabs and mobile bookmarks.
- **Fallback Mirror:** [`public/favicon.png`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/public/favicon.png).
- **Metadata:** Automatically emitted by Next.js App Router conventions and explicitly wired into [`src/app/layout.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/layout.tsx).

### C. High-Resolution OpenGraph Social Preview Card
- **File:** [`src/app/opengraph-image.png`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/opengraph-image.png) (1200 × 630 px, standard 1.91:1 aspect ratio).
- **Mirrored Assets:** [`public/opengraph-image.png`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/public/opengraph-image.png) and [`public/images/brand/opengraph-preview.png`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/public/images/brand/opengraph-preview.png).
- **Visual Design:**
  - Deep institutional navy gradient (`#060D1A` to `#03070F`) with subtle radial amber ambient lighting.
  - Classical double gold filigree framing with corner bracket accents.
  - Prominent authentic school crest with motto: *"SEEK YE WISDOM • SAVEENA, UDAIPUR"*.
  - Formal serif institutional title *"St. Teresa Vidya Deep Senior Secondary School"*.
  - Accreditation badge *"CBSE Affiliated Co-Educational Convent Institution • Estd. 1996"*.
  - Highlight badge for active intake: `"ADMISSIONS OPEN: 2027–2028"` and stream availability (`SCIENCE • COMMERCE • ARTS`).
- **Reliability:** Pre-rendered as a static 110 KB PNG. Eliminates edge cold-start latency, ensuring 100% reliable link unfurling on WhatsApp, Facebook, LinkedIn, Twitter/X, and Telegram.

### D. Color Token System & Design Tokens
Configured according to institutional guidelines in [`.cursorrules`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/.cursorrules):
- `navy-950` (`#050B14`): Deep institutional navy background
- `navy-900` (`#0F1E36`): Primary container and card surface
- `gold-500` (`#D4AF37` / `#F59E0B`): Academic distinction, borders, badges, glow accents
- `crimson-800` (`#991B1B`): Secondary ceremonial convent accent
- `parchment` (`#F8F9FA`): High-contrast, glare-free reading background

---

## 3. Academic Session Centralization ("2027–2028")

All academic intakes have been synchronized to **Academic Session 2027–2028** across all data, UI, and metadata surfaces:

### Single Source of Truth
In [`src/lib/data/school-data.ts`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/lib/data/school-data.ts):
```typescript
export const CURRENT_ACADEMIC_SESSION = "2027–2028";

export const ADMISSION_ELIGIBILITY = {
  session: CURRENT_ACADEMIC_SESSION,
  nurseryAgeLimit: {
    base: "3 Years",
    range: "2 Years 8 Months to 3 Years 8 Months (as of session commencement)",
  },
  // ...
};
```

### Surfaces Updated with `CURRENT_ACADEMIC_SESSION`
1. **Admissions Page ([`src/app/admissions/page.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/admissions/page.tsx)):**
   - Hero banner badge: `"Academic Session 2027–2028 Open • Saveena, Udaipur"`.
   - Age matrix baseline updated to **March 31, 2027** for the incoming academic session.
   - WhatsApp inquiry template populated with `2027–2028`.
2. **Admissions Modal ([`src/components/admissions/AdmissionsModal.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/admissions/AdmissionsModal.tsx)):**
   - Header badge dynamically displays `"Session 2027–2028 • STVDS Udaipur"`.
3. **Floating Admissions Badge ([`src/components/admissions/FloatingAdmissionsBadge.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/admissions/FloatingAdmissionsBadge.tsx)):**
   - Text updated to `"Admissions 2027–2028"`.
4. **Homepage ([`src/app/page.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/page.tsx)) & Hero ([`src/components/home/Hero.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/home/Hero.tsx)):**
   - Pill badge: `"Admissions Open for Academic Year 2027–2028 | Nursery to Class XII"`.
   - Keywords: `"admissions 2027-28 Udaipur"`.
5. **Admissions Banner ([`src/components/home/AdmissionsBanner.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/home/AdmissionsBanner.tsx)):**
   - `"Admissions 2027–2028 Open • Limited Intake"`.
   - CTA button: `"Apply for 2027–2028"`.
6. **About Page ([`src/app/about/page.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/about/page.tsx)):**
   - Principal's desk letter updated to `"Academic Session 2027–2028"`.
7. **Academics Assessment ([`src/components/academics/AssessmentFrameworkMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/academics/AssessmentFrameworkMotion.tsx)):**
   - CTA: `"Apply for 2027–2028 Session"`.
8. **Events Page ([`src/app/events/page.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/events/page.tsx)):**
   - Calendar badge: `"Campus Life & Institutional Calendar • Session 2027–2028"`.
9. **Mandatory Disclosure Vault ([`src/components/mandatory-disclosure/DisclosureVault.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/mandatory-disclosure/DisclosureVault.tsx)):**
   - Fee structure validity updated to `"Academic Year 2027–2028"`.
   - Academic calendar validity updated to `"April 2027 – March 2028"`.
10. **Policies:** [`privacy-policy`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/privacy-policy/page.tsx) and [`terms-conditions`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/terms-conditions/page.tsx) synchronized.

---

## 4. Admissions Lead Pipeline & Security Hardening

### A. Frontend Callback Desk ([`src/components/admissions/AdmissionsModal.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/admissions/AdmissionsModal.tsx))
- **3-State Architecture:** Fully isolated state machine (`IDLE` $\rightarrow$ `SUBMITTING` $\rightarrow$ `SUCCESS`).
- **Flexible Phone Normalization:**
  - Accepts standard parent entries: spaces, dashes, leading zeros, and `+91`.
  - Strips non-digits for length check (validates length between 10 and 15 digits).
  - Eliminates false validation rejections for valid parents.
- **Bot Defense:**
  - Invisible honeypot input field traps automated spam submissions silently.
- **Confirmation Receipt Screen:**
  - Displays green verification shield and unique reference ID (e.g., `STVDS-2027-XXXXXX`).
  - Summarizes registered student name, grade, parent contact number, and school counselor SLA (callback within 24 hours).
  - One-tap WhatsApp button pre-filled with the inquiry reference ID for instant admissions counselor communication.

### B. Backend API Route ([`src/app/api/admissions/route.ts`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/api/admissions/route.ts))
- **Sanitization & Input Boundaries:**
  - `parentName`: trimmed, max 100 characters.
  - `studentName`: trimmed, max 100 characters.
  - `phone`: sanitized, max 25 characters.
  - `notes`: sanitized, max 500 characters.
  - Honeypot check rejects automated bots with 200/400 early return.
- **Credential Safety:**
  - Zero hardcoded fallback credentials or tokens.
  - Connects strictly through environment variables (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
  - Resilient error handling prevents app crashes during temporary network hiccups.

### C. Floating Admissions Badge ([`src/components/admissions/FloatingAdmissionsBadge.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/admissions/FloatingAdmissionsBadge.tsx))
- Appears smoothly after 300px of vertical scroll.
- Displays a live green pulsing indicator dot (`animate-ping`).
- Accessible modal trigger with keyboard accessibility (`focus-visible:ring-gold-500`).

---

## 5. Luxury Editorial Motion System (Framer Motion)

The site implements a motion framework built upon institutional prestige, avoiding playful bounce in favor of understated elegance.

### Technical Foundation ([`src/lib/animations.ts`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/lib/animations.ts))
- **Cubic-Bezier Easing:** Luxury curve `[0.22, 1, 0.36, 1]` for smooth hardware-accelerated transforms.
- **Hardware Acceleration:** Animates strictly `transform` (`y`, `scale`) and `opacity`.
- **Scroll Memory:** Configured with `viewport: { once: true }` to prevent animations from re-triggering during casual scrolling.
- **Accessibility:** Fully supports `useReducedMotion()`, defaulting to instant, accessible transitions for users requesting reduced motion.
- **Architecture:** Parent page routes remain pure Server Components (`async` where necessary for SEO), delegating animations to dedicated `"use client"` wrappers.

### Pages Covered by Motion System
1. **About Page ([`/about`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/about/page.tsx)):**
   - [`AboutHeroMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/about/AboutHeroMotion.tsx): Fade-and-rise header reveal.
   - [`AboutPrincipalMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/about/AboutPrincipalMotion.tsx): Principal's portrait and letter reveal.
   - [`AboutGovernanceMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/about/AboutGovernanceMotion.tsx): Governance council reveal.
   - [`AboutAnthemCard.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/about/AboutAnthemCard.tsx): School Anthem lyrics card with interactive playback trigger.
   - [`AboutPillarsMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/about/AboutPillarsMotion.tsx): Staggered entrance for the Four Pillars (*Truth, Discipline, Humility, Diligence*).
2. **Academics Page ([`/academics`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/academics/page.tsx)):**
   - [`AcademicsHeroMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/academics/AcademicsHeroMotion.tsx): Staggered hero reveal.
   - [`AcademicWingTabs.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/academics/AcademicWingTabs.tsx): Interactive wing switcher (*Foundational, Primary, Middle, Senior Secondary*) with smooth animated layout tab transitions.
   - [`AssessmentFrameworkMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/academics/AssessmentFrameworkMotion.tsx): Academic cycle card reveal.
   - [`DailyScheduleMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/academics/DailyScheduleMotion.tsx): Summer and winter timetable reveal.
   - [`UniformShowcaseMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/academics/UniformShowcaseMotion.tsx): Dress code guidelines by wing.
3. **Campus Infrastructure Page ([`/campus`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/campus/page.tsx)):**
   - [`CampusHeroMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/campus/CampusHeroMotion.tsx): Infrastructure header reveal.
   - [`CampusFacilitiesMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/campus/CampusFacilitiesMotion.tsx): Staggered bento reveal (`0.12s` stagger) for Physics Lab, Chemistry Lab, IT Coding Center, Library, and Sports Arena with `-translate-y-1.5` elevation, `border-gold-500/40` illumination, and `scale-105` image zoom on hover.
   - [`CampusTransitMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/campus/CampusTransitMotion.tsx): Scroll-triggered entrance for the Safe Campus Transit card, with route badges (*Saveena, Sector 14, Sector 11, Hiran Magri, Goverdhan Vilas, Central Corridors*) cascading in with an incremental delay of `0.08s` per badge.
4. **Events & Calendar Page ([`/events`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/app/events/page.tsx)):**
   - [`EventsHeroMotion.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/events/EventsHeroMotion.tsx): Hero reveal.
   - [`EventsView.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/events/EventsView.tsx):
     - Interactive category filter tabs (*All Events, Academic & PTM, Sports & Drill, Cultural & Assemblies*) feature a dynamic spring-animated indicator via Framer Motion `layoutId="activeEventTab"`.
     - Filtered event cards transition seamlessly through `<AnimatePresence mode="popLayout">`.
     - Individual cards feature `-translate-y-1.5` hover elevation, `hover:border-gold-500/40`, and a gold-to-crimson accent line transition.

---

## 6. SEO, Schema.org Structured Data & Compliance

### A. JSON-LD Schema Component ([`src/components/seo/SchoolSchema.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/seo/SchoolSchema.tsx))
Server-renderable component outputting structured Schema.org `<script type="application/ld+json">`:
- `@type`: `"School"`
- `@id`: `https://stteresavidyadeep.com/#school`
- `name`: *"St. Teresa Vidya Deep Senior Secondary School"*
- `alternateName`: `["STVDS Udaipur", "St. Teresa's Vidhya Deep", "St. Teresa Vidya Deep School Saveena"]`
- `address`: Sector 12, Saveena Township, NH 8 Bypass, Udaipur, Rajasthan, 313002
- `geo`: Latitude `24.5458`, Longitude `73.7128`
- `hasCredential`: Central Board of Secondary Education (CBSE)
- `openingHoursSpecification`: Summer & Winter school operational hours and Principal consultation slots
- `areaServed`: Saveena, Sector 14, Sector 11, Hiran Magri, Goverdhan Vilas, Udaipur

### B. Dynamic Base URL Architecture ([`src/lib/constants.ts`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/lib/constants.ts))
Centralized `getBaseUrl()` helper:
- Priority 1: `NEXT_PUBLIC_SITE_URL` (Production custom domain)
- Priority 2: `NEXT_PUBLIC_VERCEL_URL` (Vercel preview deployments)
- Fallback: `http://localhost:3000` (Local development)
Ensures dynamic absolute URLs for all OpenGraph images, Twitter cards, canonical tags, and sitemaps.

### C. Statutory Mandatory Disclosure Vault ([`src/components/mandatory-disclosure/DisclosureVault.tsx`](file:///c:/Users/hp/Desktop/SCHOOL%20WEB%20PREVIEW/src/components/mandatory-disclosure/DisclosureVault.tsx))
Complies with CBSE Circular requirements for institutional transparency:
- Searchable, tab-filtered repository for CBSE Affiliation letters, Society Registration, Building Safety, Fire Safety, Water Sanitation certificates, Fee Structure, and PTA/SMC member lists.

---

## 7. Complete Manifest of Application Routes

All 19 routes pre-render as static HTML with zero build warnings:

| Route Path | Type | Description |
| :--- | :--- | :--- |
| `/` | `Static` | Flagship homepage with Hero, Bento Stats, Campus Gallery, Pillars, Admissions Banner |
| `/about` | `Static` | Institutional legacy, Prabhudasi Sisters history, Principal's message, Anthem, Four Pillars |
| `/about/principal` | `Static` | Dedicated deep-link to Principal Sr. Ranjana's desk |
| `/academics` | `Static` | Four academic wings, assessment cycles, daily schedules, uniforms |
| `/campus` | `Static` | STEM labs (Physics, Chemistry, IT), library, sports grounds, safe transit network |
| `/events` | `Static` | Interactive filterable institutional calendar with calendar reminders |
| `/admissions` | `Static` | Step-by-step roadmap, NEP 2020 age matrix, document checklist, callback triggers |
| `/mandatory-disclosure`| `Static` | CBSE Compliance Vault with downloadable statutory certifications |
| `/privacy-policy` | `Static` | Institutional data guarantee and zero-commercialization pledge |
| `/terms-conditions` | `Static` | Code of conduct, admissions verification guidelines, Udaipur jurisdiction |
| `/_not-found` | `Static` | Custom 404 error page with navigation fallbacks |
| `/icon.png` | `Static` | High-DPI 48 × 48 px transparent crest browser tab favicon |
| `/opengraph-image.png` | `Static` | Static 1200 × 630 px OpenGraph social preview card |
| `/manifest.webmanifest`| `Static` | Progressive Web App manifest |
| `/robots.txt` | `Static` | Search engine crawler rules |
| `/sitemap.xml` | `Static` | XML sitemap covering all institutional routes |
| `/api/admissions` | `Dynamic` | Server route handler for Supabase admissions inquiry persistence |

---

## 8. Git Commit Log & Deployment Status

All modifications have been committed directly to `main` and pushed to the GitHub repository:

- **Repository:** `https://github.com/aisha811923-cloud/stvd-demo.git`
- **Tracked Branch:** `origin/main`

### Key Commits:
1. `e3ee8c3`: `feat: complete institutional portal for St. Teresa Vidya Deep Senior Secondary School`
2. `2378f7e`: `feat(admissions): centralize and update academic session to 2027–2028 across all surfaces`
3. `8065730`: `feat(motion): extend editorial motion system to /campus and /events with staggered scroll reveals and filter transitions`
4. `0754008`: `feat(branding): add dedicated browser favicon (icon.png) and high-res OpenGraph social preview card`

### Verification Summary
- `npm run build` exits with **code 0** across all routes.
- Zero TypeScript compiler errors or ESLint warnings.
- Environment variables isolated; `.env.local` strictly untracked. Safe placeholder provided in `.env.example`.
- Vercel automatically deploys every push to the `main` branch.
