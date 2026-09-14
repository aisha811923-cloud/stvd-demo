
# Motion & Micro-Interaction Specifications

## 1. Global Motion Curves
* **Primary Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Custom Apple/Editorial fluid out-curve).
* **Hover Easing:** `easeOut` over `150ms`.
* **Modal Spring:** `{ type: "spring", stiffness: 350, damping: 25 }`.

## 2. Lenis Smooth Scroll Configuration
```typescript
const lenisOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
  touchMultiplier: 1.5,
};
3. Standard Scroll-Reveal Variants
TypeScript
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};
4. Accessibility Fallback
Wrap animated wrappers with useReducedMotion() from Framer Motion. If true, set transitions to duration: 0 and opacity fade only.