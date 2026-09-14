# Technical Requirements Document (TRD)
**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis + Supabase

## 1. Core Architecture
* **Framework:** Next.js 15 with React Server Components (RSC) for maximum Core Web Vitals performance.
* **Rendering Strategy:** 
  * Static Site Generation (SSG) with Incremental Static Regeneration (ISR) at `revalidate: 3600` for public pages (About, Academics, Facilities).
  * Client Components (`"use client"`) isolated strictly to interactive islands: animations, lead capture modal, filterable galleries.
* **Database & BaaS:** Supabase (PostgreSQL) for lead ingestion, announcements, and asset metadata.
* **Motion Engine:** Lenis Smooth Scroll paired with Framer Motion scroll triggers and hardware-accelerated transforms (`transform: translate3d`).

## 2. API Routes
* `POST /api/admissions`: Rate-limited endpoint validating inquiry schemas via Zod and committing records to Supabase with instant webhook dispatch.
* `GET /api/disclosures`: Edge-cached delivery of regulatory compliance document links.

## 3. Environment Architecture
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
NEXT_PUBLIC_SCHOOL_PHONE="+919667881122"
NEXT_PUBLIC_SCHOOL_WHATSAPP="+919667881122"
```
