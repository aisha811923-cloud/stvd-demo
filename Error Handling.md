# System Error Handling & Resilience Architecture

## 1. Boundary Strategy
* Implement root-level `app/error.tsx` for unhandled runtime crashes with clean fallback UI and "Try Again" triggers.
* Implement nested error boundaries for interactive widgets (`AdmissionsModal`, `Tour`).

## 2. Client-Side Resilience
* Fallback UI for missing media/images using geometric gold monogram placeholders.
* Form network failure: Store unsent submissions in `localStorage` under `st_pending_inquiry` so users don't lose data on connection drop.