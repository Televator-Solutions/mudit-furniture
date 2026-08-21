# Mudit Furnitures (मुदित फर्नीचर्स) — Official Website

A **premium digital furniture showroom website** built for **Mudit Furnitures, Agra**.

---

## 🌟 Business Overview

- **Name**: Mudit Furnitures (मुदित फर्नीचर्स)
- **Business Type**: Premium Furniture Store & Custom Manufacturing
- **Rating**: 4.6/5 from 93+ Verified Customer Reviews
- **Showroom Address**: 13/A, Gwalior Rd, Naulakha, Agra Cantt, Idgah Colony, Agra, Uttar Pradesh 282001
- **Phone**: 096397 53121 (`+91 96397 53121`)
- **Website**: [muditfurnitures.in](https://muditfurnitures.in)
- **Services**: In-Store Pickup, Doorstep Delivery, Custom Furniture Fabrication, Office Setup

---

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS & Modern CSS with custom warm luxury palette (Sand, Warm Wood, Deep Charcoal, Subtle Gold)
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form + Zod (Indian mobile number validation, anti-spam honeypot)
- **Routing**: React Router DOM (v6) with code-splitting (`React.lazy` + `Suspense`)
- **SEO**: Dynamic title/meta tags, Geo tags for Agra Cantt, and Schema.org `FurnitureStore` / `LocalBusiness` JSON-LD markup
- **Image Optimization**: Responsive aspect-ratio wrappers, WebP imagery, native lazy loading & eager priority loading for hero

---

## 🧭 Routes & Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero, Trust Bar, Category Showcase, Featured Products, Custom Banner, Why Choose Us, Reviews, Store Location, CTAs |
| `/about` | About Us | Agra heritage story, 3 pillars of craftsmanship, material integrity, showroom details |
| `/collections` | Collections | Full filterable product catalog with category pills & real-time search |
| `/home-furniture` | Home Furniture | Dedicated section for Sofas, Beds, Sofa Cum Beds, Mattresses, Dining & Steel Almirahs |
| `/office-furniture` | Office Furniture | Executive Chairs, Director Desks, Modular Workstations, Steel Filing Cabinets & Commercial Quotes |
| `/custom-furniture` | Custom Furniture | Bespoke made-to-order furniture, 4-step workflow, direct blueprint quote form |
| `/gallery` | Photo Gallery | High-resolution showroom gallery with accessible keyboard-navigable Lightbox (Esc, Left/Right arrows, Swipe) |
| `/reviews` | Customer Reviews | 4.6★ rating breakdown, 93+ verified customer reviews, Google Maps links |
| `/contact` | Contact & Showroom | Interactive quote form, direct calling, WhatsApp trigger, live map preview & FAQs |
| `*` | 404 Not Found | Luxury 404 page with navigation fallbacks |

---

## 📱 Mobile-First Features

- **Fixed Bottom Action Bar**: Instant access to **Call Now** (`096397 53121`), **WhatsApp Store**, and **Google Maps Directions**.
- **Smooth Drawer Navigation**: Slide-in mobile menu with store hours, verified rating, and all navigation routes.
- **Contextual Enquiry Modal**: Allows visitors to request the best price for any specific piece with 1 tap.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
mudit-furnitures/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/        # Button, Container, SectionHeading, OptimizedImage, TrustBadge, SEO, Modal
│   │   ├── layout/        # Header, MobileMenu, Footer, MobileBottomBar, Layout
│   │   ├── home/          # Hero, TrustBar, Categories, FeaturedProducts, WhyChooseUs, CTASection
│   │   ├── products/      # ProductCard, CategoryCard, ProductFilter
│   │   ├── gallery/       # GalleryGrid, Lightbox
│   │   ├── reviews/       # ReviewCard, ReviewStats
│   │   └── contact/       # ContactForm, ContactInfo, MapPreview
│   ├── data/              # business.ts, categories.ts, products.ts, gallery.ts, reviews.ts, faqs.ts
│   ├── hooks/             # useScrollPosition, useMediaQuery, useLightbox, usePrefersReducedMotion
│   ├── lib/               # contact.ts (WhatsApp message generator), seo.ts, utils.ts
│   ├── pages/             # 9 dedicated pages + 404
│   ├── routes/            # AppRoutes.tsx
│   ├── types/             # product.ts, category.ts, review.ts, gallery.ts, contact.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```
