# Performance Budget & Core Web Vitals Targets

| Metric | Target | Optimization Technique |
|---|---|---|
| **LCP (Largest Contentful Paint)** | `< 1.8s` | Next.js `next/font` local subsetting, preloaded WebP hero banners |
| **INP (Interaction to Next Paint)** | `< 100ms` | Keep main thread idle; offload heavy scroll logic to Lenis RAF loop |
| **CLS (Cumulative Layout Shift)** | `0.00` | Hardcoded aspect ratios on all image containers and skeleton loaders |

* **Bundle Hygiene:** Dynamic import `next/dynamic` for heavy components (`AdmissionsModal`, `InteractiveTour`).