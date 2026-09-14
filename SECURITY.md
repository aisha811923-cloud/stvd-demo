# Security Protocols & Data Protection

## 1. Input Sanitization & Anti-Abuse
* **Rate Limiting:** Protect `/api/admissions` with Upstash Redis or In-Memory IP rate limiter (maximum 5 requests per IP every 15 minutes).
* **Zod Schema Validation:** Strictly validate input strings; reject HTML/SQL injection vectors.
* **Payload Size Limits:** Max JSON body size enforced at `100kb`.

## 2. Database Protection
* **Row Level Security (RLS):** Strictly enforced on all Supabase tables. The public anonymous key has `INSERT` access only; reading inquiries requires verified service-role or authenticated staff JWT.
* **CORS Policy:** Strict domain restrictions in `next.config.js` allowing only production school domains.