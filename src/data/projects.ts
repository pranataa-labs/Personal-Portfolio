export type ProjectCategory = "Web App" | "SaaS" | "ML & Data" | "Tooling"

export type Project = {
  slug: string
  title: string
  tagline: string
  category: ProjectCategory
  year: string
  stack: string[]
  summary: string
  highlights: string[]
  image?: string
  gallery?: string[]
  repo?: string
  /** Short mono label shown on cards without a screenshot. */
  mark?: string
}

const GH = "https://github.com/pranataa-labs"

export const projects: Project[] = [
  {
    slug: "fleetpulse",
    title: "FleetPulse",
    tagline: "Multi-tenant delivery SaaS with live fleet tracking",
    category: "SaaS",
    year: "2026",
    stack: ["Laravel", "Laravel Reverb", "WebSockets", "REST API", "MySQL"],
    summary:
      "A logistics platform for couriers and last-mile distributors. Customers track parcels on a public portal, dispatchers run operations from an internal desk, and field couriers work through a REST API built for an Android app.",
    highlights: [
      "Tenant isolation through a BelongsToTenant trait with global query scopes",
      "Tenant resolved from subdomain, custom headers or the signed-in user",
      "Live courier telemetry over Laravel Reverb WebSockets",
      "Public tracking by waybill number or UUIDv4 token, with 1-tap WhatsApp to the courier",
    ],
    image: "/projects/fleetpulse.webp",
    repo: `${GH}/FleetPulse`,
  },
  {
    slug: "echomind",
    title: "EchoMind",
    tagline: "Meeting and audio intelligence platform",
    category: "ML & Data",
    year: "2026",
    stack: ["Python", "faster-whisper", "Gemini 2.5 Flash", "Streamlit"],
    summary:
      "Turns meeting recordings into transcripts, summaries and action items. Speech-to-text runs on CPU with faster-whisper int8, and Gemini handles the reasoning, with an offline heuristic mode when there is no API key.",
    highlights: [
      "Speaker turns with second-level timestamps",
      "Action items with owner, deadline and urgency",
      "Ask-your-meeting Q&A that cites timestamps",
      "Sentiment timeline for how the conversation went",
    ],
    mark: "STT / LLM",
  },
  {
    slug: "clinic-queue",
    title: "Clinic Queue",
    tagline: "Polyclinic queue calling with audio and a TV display",
    category: "Web App",
    year: "2026",
    stack: ["Laravel", "Real-time", "Web Speech", "Tailwind CSS"],
    summary:
      "A queue system for polyclinics. Doctors call the next patient from a console, the waiting-room TV updates instantly and a voice announcement reads the number aloud.",
    highlights: [
      "Doctor console for calling, recalling and skipping patients",
      "Full-screen TV display built for a waiting room",
      "Audio announcements for every call",
    ],
    image: "/projects/clinic-queue.webp",
    gallery: ["/projects/clinic-queue.webp", "/projects/clinic-console.webp"],
    repo: `${GH}/Clinic-Queue-Management-System`,
  },
  {
    slug: "cellar-door",
    title: "Cellar Door",
    tagline: "Bookstore and small press with a two-sided app",
    category: "Web App",
    year: "2026",
    stack: ["React 19", "Vite 6", "Tailwind CSS v4", "TypeScript", "Vitest"],
    summary:
      "A bookstore with a public storefront and an admin backoffice in one React app. Checkout fills in the address from a postal code to cut down on typing.",
    highlights: [
      "Storefront catalog with filters and a member-only cart",
      "Admin backoffice for titles, stock and orders",
      "Postal-code autofill at checkout",
    ],
    image: "/projects/cellar-door.webp",
    repo: `${GH}/cellar-door-bookstore`,
  },
  {
    slug: "emeraude",
    title: "Émeraude Botanica",
    tagline: "Luxury skincare boutique and maison backoffice",
    category: "Web App",
    year: "2026",
    stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Vitest"],
    summary:
      "An e-commerce boutique for botanical skincare. State-driven routing keeps page changes instant, and strict types cover every product, cart and order model.",
    highlights: [
      "Product formulas and flacon variants modelled end to end",
      "Unit tests for catalog integrity and order totals",
      "Separate maison admin for the catalog and orders",
    ],
    image: "/projects/emeraude.webp",
    repo: `${GH}/Emeraude-Botanica`,
  },
  {
    slug: "fleure",
    title: "Fleure Flower",
    tagline: "Boutique florist store with a full admin suite",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "Tailwind CSS v4", "MySQL", "Blade"],
    summary:
      "A florist shop for bouquets, arrangements and greeting cards. The admin side follows the shadcn-admin look with light, dark and system themes.",
    highlights: [
      "Catalog for bouquets, fresh arrangements and cards",
      "Admin portal behind an obfuscated route",
      "Light, dark and system theme support",
    ],
    image: "/projects/fleure.webp",
    gallery: ["/projects/fleure.webp", "/projects/fleure-admin.webp"],
    repo: `${GH}/Fleure-Flower`,
  },
  {
    slug: "cakeluv",
    title: "CakeLuv",
    tagline: "Patisserie e-commerce with Midtrans checkout",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "Tailwind CSS v4", "Midtrans Snap", "Google OAuth"],
    summary:
      "An online store for an artisan bakery. Customers sign in with Google and pay through Midtrans Snap, and the owner watches 12 months of revenue in the dashboard.",
    highlights: [
      "Midtrans Snap payments with automatic order updates",
      "Google OAuth sign-in",
      "Revenue analytics and live order tracking",
    ],
    image: "/projects/cakeluv.webp",
    gallery: ["/projects/cakeluv.webp", "/projects/cakeluv-admin.webp"],
    repo: `${GH}/Cake-Luv`,
  },
  {
    slug: "eventix",
    title: "Eventix Theatre",
    tagline: "Event management and ticketing",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "FilamentPHP", "Midtrans", "MySQL"],
    summary:
      "Organizers create events, set ticket quotas and take payments through Midtrans. Every change lands in an audit log.",
    highlights: [
      "Dynamic ticket quotas per event",
      "Midtrans payment gateway",
      "Audit log for every admin action",
    ],
    image: "/projects/eventix.webp",
    repo: "https://github.com/PranataGM/Eventix-THEATRE",
  },
  {
    slug: "inventory",
    title: "Inventory System",
    tagline: "Multi-warehouse stock control",
    category: "SaaS",
    year: "2026",
    stack: ["Laravel 13", "Filament v3", "Tailwind CSS v4", "MySQL"],
    summary:
      "Tracks stock movement across warehouses, handles vendor returns and forecasts turnover. The interface uses the shadcn-admin design system on top of Filament.",
    highlights: [
      "Stock movements and availability audits",
      "Vendor return processing",
      "Inventory turnover forecasting",
    ],
    image: "/projects/inventory.webp",
    repo: `${GH}/Inventory-Management-System`,
  },
  {
    slug: "simasjid",
    title: "SIMasjid",
    tagline: "Mosque management information system",
    category: "Web App",
    year: "2025",
    stack: ["Laravel 12", "Tailwind CSS", "MySQL"],
    summary:
      "Helps a mosque committee announce lectures and events and publish its cash flow so the congregation can see where donations go.",
    highlights: [
      "Lecture and community agenda publishing",
      "Transparent cash-flow reports",
      "Admin tools for the committee",
    ],
    image: "/projects/simasjid.webp",
    repo: `${GH}/Mosque-Management-System`,
  },
  {
    slug: "village",
    title: "Village Portal",
    tagline: "Public e-services for village administration",
    category: "SaaS",
    year: "2026",
    stack: ["Next.js 16", "TypeScript", "Prisma", "Tailwind CSS v4"],
    summary:
      "Citizens apply for letters like domicile and business certificates online, and village officials process them from a backoffice.",
    highlights: [
      "Self-service letter applications",
      "Backoffice queue for officials",
      "App Router with Prisma ORM",
    ],
    repo: `${GH}/Village-Information-System`,
    mark: "SID / NEXT",
  },
  {
    slug: "stego",
    title: "Stego WhatsApp",
    tagline: "AES-256-GCM + LSB steganography research",
    category: "ML & Data",
    year: "2026",
    stack: ["Python", "Cryptography", "Pillow", "Jupyter"],
    summary:
      "Encrypts a message with AES-256-GCM, hides it in the least significant bits of a PNG, then measures what WhatsApp compression does to it.",
    highlights: [
      "PSNR above 79 dB and SSIM above 0.9999",
      "Bit error rate above 40% even at JPEG quality 95",
      "Residual maps amplified 30× to show where pixels changed",
    ],
    image: "/projects/stego.webp",
    repo: `${GH}/Steganografi-Whatsapp`,
  },
  {
    slug: "the-boss",
    title: "The Boss Lounge",
    tagline: "Hookah lounge site with a Turkish admin panel",
    category: "Web App",
    year: "2025",
    stack: ["Laravel", "Filament", "Tailwind CSS"],
    summary:
      "A dark, menu-first site for a lounge in Bornova, Izmir. Staff update the menu, gallery and contact details from a fully Turkish admin panel.",
    highlights: ["Categorized menu with prices", "Gallery grid in 4:5", "Settings editable without a developer"],
    repo: `${GH}/The-Boss-Izmir`,
    mark: "IZMIR / TR",
  },
  {
    slug: "workflow-master",
    title: "Workflow Master",
    tagline: "Engineering rules for AI coding assistants",
    category: "Tooling",
    year: "2026",
    stack: ["AGENTS.md", "commitlint", "husky", "git-cliff", "PowerShell"],
    summary:
      "The rulebook behind every project here: a 9-stage workflow, 19 rule sets, commit tooling and a one-command installer for AGENTS.md.",
    highlights: [
      "9-stage workflow from triage to report",
      "Conventional Commits with commitlint and git-cliff changelogs",
      "Anti-slop UI and mobile ergonomics rules",
    ],
    repo: `${GH}/Workflow-Master`,
    mark: "AGENTS.MD",
  },
  {
    slug: "data-labs",
    title: "Data Labs",
    tagline: "NumPy, Pandas and OpenCV masterclasses",
    category: "ML & Data",
    year: "2026",
    stack: ["NumPy", "Pandas", "OpenCV", "Jupyter", "Colab"],
    summary:
      "Three notebook courses, 75 topics each for NumPy and Pandas plus a computer-vision playground, runnable in Colab with one click.",
    highlights: ["75-topic NumPy notebook", "75-topic Pandas notebook", "OpenCV playground"],
    repo: `${GH}/NumPy-Lab`,
    mark: "75 × 3",
  },
]

export const categories = ["All", "Web App", "SaaS", "ML & Data", "Tooling"] as const
export type CategoryFilter = (typeof categories)[number]

export const stack = [
  "Laravel",
  "React 19",
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS v4",
  "Filament",
  "MySQL",
  "Prisma",
  "Laravel Reverb",
  "Midtrans",
  "Python",
  "Pandas",
  "NumPy",
  "OpenCV",
  "faster-whisper",
  "Gemini API",
  "Streamlit",
  "Vite",
]

export const workflow = [
  { title: "Triage", body: "Name the goal, the task type and the risk before touching code." },
  { title: "Discover", body: "Read the manifests, schema and contracts that the change will touch." },
  { title: "Design", body: "Write acceptance criteria, data flow and how errors should fail." },
  { title: "Plan", body: "Pick the smallest set of files and the order to change them." },
  { title: "Implement", body: "Type-safe code that follows the conventions already in the repo." },
  { title: "Verify", body: "Run the tests, linter and type checker, and keep the output." },
  { title: "Review", body: "Read the diff for auth gaps, leaked keys and personal data." },
  { title: "Release", body: "Check that the build is healthy before it ships." },
  { title: "Report", body: "Say what changed and what was verified, plainly." },
]

export const contact = {
  email: "hello@ariasastra.com",
  instagram: "https://instagram.com/aria.sastra",
  instagramHandle: "@aria.sastra",
  github: GH,
  githubPersonal: "https://github.com/ariasastra-dev",
  location: "Yogyakarta, Indonesia",
  coords: "7.7956° S, 110.3695° E",
}
