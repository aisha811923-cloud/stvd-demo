# Production Deployment & Hosting Setup

## 1. Hosting Architecture
* **Platform:** Vercel Pro with automatic branch previews.
* **Edge Network:** Global CDN caching for assets and SSG pages.
* **Custom Domain:** Primary `stteresavidyadeep.org` mapped via Route 53 / Cloudflare DNS (CNAME flattening enabled, strict SSL).

## 2. Progressive Web App (PWA) Manifest
```json
{
  "name": "St. Teresa Vidya Deep Sr. Sec. School",
  "short_name": "STVDS Udaipur",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#080F1D",
  "theme_color": "#0F1E36",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}