# UI Component Registry & Contracts

### 1. `SectionHeading.tsx`
* **Props:** `eyebrow?: string`, `title: string`, `description?: string`, `align?: 'left' | 'center'`
* **Responsibility:** Standardized typography lockup using Cinzel and gold accent tags.

### 2. `BentoStats.tsx`
* **Props:** `metrics: { label: string; value: string; subtext: string }[]`
* **Responsibility:** Multi-column responsive grid featuring count-up numbers and soft glow shadows on hover.

### 3. `AdmissionsModal.tsx`
* **Props:** `isOpen: boolean`, `onClose: () => void`
* **Responsibility:** Trap focus, handle phone regex `[0-9]{10}`, execute optimistic UI submission, and display confirmation screen.