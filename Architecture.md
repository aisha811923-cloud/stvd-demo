# Codebase Architecture & File Tree

├── .cursorrules
├── AGENT.md
├── ANIMATIONS.md
├── ARCHIBILITY.md
├── DESIGN.md
├── PRD.md
├── TRD.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── src/
├── app/
│   ├── api/
│   │   └── admissions/route.ts
│   ├── about/page.tsx
│   ├── academics/page.tsx
│   ├── campus/page.tsx
│   ├── admissions/page.tsx
│   ├── mandatory-disclosure/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── admissions/
│   │   └── AdmissionsModal.tsx
│   ├── home/
│   │   ├── BentoStats.tsx
│   │   ├── Hero.tsx
│   │   ├── InteractiveTour.tsx
│   │   └── PhilosophyPillars.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionHeading.tsx
├── lib/
│   ├── data/
│   │   └── school-data.ts
│   ├── supabase.ts
│   └── utils.ts
└── types/
└── index.ts