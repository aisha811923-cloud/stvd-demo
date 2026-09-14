# Quality Assurance & Testing Suite

## 1. Playwright End-to-End Test Matrix
* **Lead Submission Test:** Fill out the Admissions modal form, submit valid 10-digit number, verify `201 Created` network response and confirmation modal render.
* **Navigation Test:** Validate desktop sticky menu and mobile drawer open/close cycles without hydration errors.

## 2. Core Assertions
* No layout shift on header sticky transition (`CLS < 0.05`).
* Form prevents submission with less than 10 digits or empty names.