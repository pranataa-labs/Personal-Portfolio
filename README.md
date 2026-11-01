# Personal Engineering Portfolio

An interactive, monochrome full-stack engineering portfolio for **Muhammad Aria Sastra**, showcasing production applications, multi-tenant SaaS architectures, audio intelligence platforms, and machine learning research developed under **pranataa-labs**.

Built with **React 19**, **TypeScript**, **Vite 6**, **Tailwind CSS v4**, and **shadcn-ui**, featuring smooth monochrome animations powered by **21st DEV** and **Framer Motion**.

---

## Key Features

- **21st DEV Ink Orbit Features:** Standalone interactive bento featuring live diagrams: team edits flowing through an engineering hub, active tool integration synchronization, and scrubbable predictive velocity charts.
- **21st DEV Animated Hero:** Dynamic spring-motion text cycling with responsive typography and quick-action callouts.
- **Pure Monochrome Design System:** Slate/neutral OKLCH color palette with zero AI color slop, custom trailing cursor with spring physics, tactile film grain, and circular view-transition dark/light mode toggle.
- **Curated Production Showcase:** Interactive gallery covering 15+ real repositories from the `pranataa-lab` workspace (FleetPulse, EchoMind, Clinic Queue, Cellar Door, Émeraude Botanica, Fleure Flower, CakeLuv, Eventix Theatre, and more) with category filters, modal architecture deep dives, and live GitHub repo links.
- **9-Stage Engineering Standard:** Interactive lifecycle protocol visualizer based on the Workflow Master operating system.
- **Touch Ergonomics & Accessibility:** Compliant with Apple HIG / Material Design 3 touch targets (>= 44x44px), thumb zone layout, `overflow-x: clip`, and reduced motion support.

---

## Technology Stack

- **Framework:** React 19 (with strict TypeScript)
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`), tw-animate-css
- **Components & UI:** shadcn-ui pattern (`/components/ui`), Radix UI Slot & Dialog, Lucide Icons
- **Animation & Physics:** 21st DEV components (`ink-orbit-features`, `animated-hero`), Framer Motion 12, Lenis smooth scrolling
- **Type Checking & Testing:** TypeScript 5.7, Vitest 3

---

## Project Structure

```text
portfolio-design/
├── public/                     # Optimized WebP project captures and favicon
│   ├── projects/               # High-resolution screenshots of actual repos
│   ├── favicon.svg             # Monogram favicon
│   └── pranataa.webp           # Optimized portrait asset
├── src/
│   ├── components/             # Page sections and features
│   │   ├── ui/                 # 21st DEV & shadcn atomic components
│   │   │   ├── animated-hero.tsx
│   │   │   ├── button.tsx
│   │   │   └── ink-orbit-features.tsx
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── custom-cursor.tsx
│   │   ├── hero.tsx
│   │   ├── ink-orbit-section.tsx
│   │   ├── motion.tsx
│   │   ├── navbar.tsx
│   │   ├── process-section.tsx
│   │   ├── project-card.tsx
│   │   ├── project-modal.tsx
│   │   └── projects-section.tsx
│   ├── data/
│   │   └── projects.ts         # Verified project catalog metadata
│   ├── hooks/
│   │   ├── use-lenis.ts        # Smooth inertial scrolling
│   │   └── use-theme.ts        # Circular view transition theme hook
│   ├── lib/
│   │   └── utils.ts            # ClassNames merger (clsx + tailwind-merge)
│   ├── App.tsx
│   ├── index.css               # OKLCH tokens and base layer
│   └── main.tsx
├── components.json             # shadcn project configuration
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## Git Discipline & Co-Authorship

All commits follow Conventional Commits and include pairing co-authorship:
```text
Co-authored-by: aria sastra <192975116+ariasastra-dev@users.noreply.github.com>
```

---

## License

Open-sourced under the [MIT License](LICENSE).
