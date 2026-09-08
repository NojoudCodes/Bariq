# ✨ Bariq (بريق لطب الأسنان) — Dental Clinic Website

A modern, multi-page dental clinic website built as a portfolio project — presenting services, doctors, FAQs, and a real, validated appointment-booking form for a fictional clinic in Jeddah.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat&logo=reacthookform&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat&logo=framer&logoColor=0055FF)

<!-- Optional: add a real screenshot once deployed -->
<!-- ![Bariq preview](./preview.png) -->

## 🌐 Overview

Bariq presents a professional dental clinic experience across five dedicated pages — home, services, doctors, FAQ, and contact/booking. The visual direction uses a warm cream/terracotta palette with IBM Plex Sans Arabic, aiming for a calm, trustworthy clinical feel rather than a clinical-cold one.

## ✨ Features

- 🏠 **Home** — hero, "why choose us," and a services preview
- 🦷 **Services** — 8 treatments with pricing, pulled from a shared data source
- 👨‍⚕️ **Doctors** — 6 specialists with credentials and license numbers
- ❓ **FAQ** — an accordion where only one answer is open at a time
- 📞 **Contact / Booking** — a fully validated appointment form with an animated confirmation
- 💬 A floating WhatsApp contact button on every page
- 📱 Fully responsive, with a working mobile nav menu (closes on link click)

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling
- **React Router** — client-side routing across 5 pages
- **React Hook Form** — typed form state and validation
- **Framer Motion** — animated booking-confirmation screen
- **React Icons** — iconography
- **react-floating-whatsapp** — floating WhatsApp contact widget

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/NojoudCodes/Bariq.git
cd Bariq
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## 🧭 Application Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Dental Services |
| `/doctors` | Doctors |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact & Booking |

## 📁 Project Structure

```
Bariq/
├── src/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Navbar.tsx
│   │   │   ├── TopNav.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Why.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Cta.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Titles.tsx
│   ├── data/
│   │   └── clinicInfo.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── OurServices.tsx
│   │   ├── Doctors.tsx
│   │   ├── Faq.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

## 🧩 Architecture Notes

- **A single centralized data file (`src/data/clinicInfo.ts`)** holds every piece of repeated content — clinic contact info, working hours, services, doctors, and FAQs. Every page imports from this one source, so content can never drift out of sync between pages.
- **The contact/booking form is fully typed and validated** with `react-hook-form`: a typed `Inputs` interface, per-field required validation, inline Arabic error messages, and a `<select>` populated dynamically from the services data.
- **The FAQ accordion tracks a single open item** via `useState<number | null>`, swapping between add/minus icons and ensuring only one answer is visible at a time.
- **The mobile nav is a single `links` array** rendered in both the desktop menu and the mobile dropdown, with the menu closing automatically when a link is tapped.

## 🎨 Design Tokens

| Token | Value | Use |
|---|---|---|
| Cream primary | `#FAF7F2` | Main background |
| Cream secondary | `#F1EAE0` | Alternate section background |
| Ink | `#242028` | Primary text |
| Ink soft | `#615C68` | Secondary text |
| Terracotta | `#B96A4C` | Primary accent |
| Terracotta dark | `#9C5539` | Hover/accent variant |
| Sage | `#6E8570` | Secondary accent |
| Gold | `#B08D57` | Highlight accent |

**Font:** IBM Plex Sans Arabic.

## 📝 Notes

All clinic details, doctors, pricing, and reviews are fictional — created for portfolio/demo purposes only.

## 📄 License

MIT — feel free to fork and adapt.
