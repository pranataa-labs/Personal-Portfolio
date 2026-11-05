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
    image: "./projects/fleetpulse.webp",
    repo: `${GH}/FleetPulse`,
  },

  {
    slug: "clinic-queue-management-system",
    title: "Clinic Queue Management System",
    tagline: "Polyclinic queue calling with audio synthesis and real-time TV display",
    category: "Web App",
    year: "2026",
    stack: ["Laravel", "Real-time", "Web Speech", "Tailwind CSS"],
    summary:
      "An integrated queue platform for polyclinics. Doctors call the next patient from an isolated examination console, waiting-room TV displays update instantly, and an audio engine announces ticket numbers aloud.",
    highlights: [
      "Doctor console for calling, recalling and skipping patients",
      "Full-screen TV display optimized for healthcare waiting areas",
      "Indonesian voice synthesis and WebRTC live intercom engine",
    ],
    image: "./projects/clinic-queue.webp",
    gallery: ["./projects/clinic-queue.webp", "./projects/clinic-console.webp"],
    repo: `${GH}/Clinic-Queue-Management-System`,
  },

  {
    slug: "village-information-system",
    title: "Village Information System",
    tagline: "Modern village administration and public citizen e-service portal",
    category: "Web App",
    year: "2026",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Prisma ORM", "MySQL"],
    summary:
      "A village e-service portal (SID) connecting citizens with municipal administration. Citizens request official permits online, track submission status in real time, and inspect village budget infographics.",
    highlights: [
      "Self-service citizen letter applications with NIK autofill",
      "Real-time ticket tracking from validation to approved status",
      "Municipal budget transparency ledger and demographic charts with Recharts",
      "Staff administration backoffice with document verification desk",
    ],
    image: "./projects/village.webp",
    repo: `${GH}/Village-Information-System`,
  },

  {
    slug: "ohio-caffe-table-menu",
    title: "Ohio Caffe Table Menu",
    tagline: "Real-time QR table menu & cashier POS with pay-on-delivery flow",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "React 19", "Tailwind CSS v4", "MySQL", "QR Menu"],
    summary:
      "Real-time QR table ordering and cashier POS system designed for dine-in cafes with pay-on-delivery at the table, instant kitchen tickets, and live sales reporting.",
    highlights: [
      "Dynamic table QR code generator for direct mobile ordering",
      "Instant kitchen order dispatching and ticket lifecycle",
      "Cashier POS desk with pay-on-delivery flow",
    ],
    image: "./projects/ohio.webp",
    gallery: ["./projects/ohio.webp", "./projects/ohio-pos.webp"],
    repo: `${GH}/Ohio-Caffe-Table-Menu`,
  },

  {
    slug: "cellar-door-bookstore",
    title: "Cellar Door Bookstore",
    tagline: "Dual-sided independent bookstore and press application",
    category: "Web App",
    year: "2026",
    stack: ["React 19", "Vite 6", "Tailwind CSS v4", "TypeScript", "Vitest"],
    summary:
      "A bookstore with a public storefront and an admin backoffice in one React app. Checkout auto-resolves addresses from postal codes to cut down on typing friction.",
    highlights: [
      "Storefront catalog with multi-facet filters and member cart",
      "Admin backoffice for titles, inventory replenishment and orders",
      "Postal-code autofill at checkout with strict validation",
    ],
    image: "./projects/cellar-door.webp",
    repo: `${GH}/Cellar-Door-Bookstore`,
  },

  {
    slug: "emeraude-botanica",
    title: "Emeraude Botanica",
    tagline: "Luxury skincare boutique and maison backoffice e-commerce",
    category: "Web App",
    year: "2026",
    stack: ["React 19", "TypeScript", "Vite 6", "Tailwind CSS v4", "Vitest"],
    summary:
      "An e-commerce boutique for botanical skincare. State-driven routing keeps page transitions instant, and strict TypeScript types cover every product formula, cart and order entity.",
    highlights: [
      "Product formulas and flacon variants modelled end-to-end",
      "Unit test suite verifying catalog integrity and order totals",
      "Protected maison admin backoffice for catalog and fulfillment",
    ],
    image: "./projects/emeraude.webp",
    repo: `${GH}/Emeraude-Botanica`,
  },

  {
    slug: "fleure-flower",
    title: "Fleure Flower",
    tagline: "Boutique florist store with an obfuscated admin suite",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "Tailwind CSS v4", "MySQL", "Blade"],
    summary:
      "A florist shop for bouquets, arrangements and greeting cards. The admin side follows the shadcn-admin look with light, dark and system themes.",
    highlights: [
      "Catalog for bouquets, fresh arrangements and custom greeting cards",
      "Admin portal secured behind an obfuscated route",
      "Light, dark and system theme support with OKLCH tokens",
    ],
    image: "./projects/fleure.webp",
    gallery: ["./projects/fleure.webp", "./projects/fleure-admin.webp"],
    repo: `${GH}/Fleure-Flower`,
  },

  {
    slug: "cake-luv",
    title: "Cake Luv",
    tagline: "Patisserie e-commerce with Midtrans Snap checkout & Google OAuth",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "Tailwind CSS v4", "Midtrans Snap", "Google OAuth"],
    summary:
      "An online store for an artisan bakery. Customers sign in with Google and pay through Midtrans Snap, while the owner monitors revenue trends and live orders in the dashboard.",
    highlights: [
      "Midtrans Snap payment gateway with automated status webhooks",
      "Google OAuth 2.0 social sign-in integration",
      "Revenue analytics with monthly breakdown and live order tracking",
    ],
    image: "./projects/cakeluv.webp",
    gallery: ["./projects/cakeluv.webp", "./projects/cakeluv-admin.webp"],
    repo: `${GH}/Cake-Luv`,
  },

  {
    slug: "eventix-theatre",
    title: "Eventix Theatre",
    tagline: "Event management and ticket booking with PDF QR codes",
    category: "Web App",
    year: "2026",
    stack: ["Laravel 13", "FilamentPHP", "Midtrans", "MySQL"],
    summary:
      "Organizers create events, configure ticket quotas and process payments through Midtrans. Every operational change is captured in a tamper-evident audit log.",
    highlights: [
      "Dynamic ticket quotas and pricing tiers per event",
      "Midtrans payment gateway integration with instant receipt",
      "Audit log for administrative and ticketing actions",
    ],
    image: "./projects/eventix.webp",
    repo: `${GH}/Eventix-Theatre`,
  },

  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    tagline: "Multi-warehouse stock control, QR scanning & forecasting",
    category: "SaaS",
    year: "2026",
    stack: ["Laravel 13", "Filament v3", "Tailwind CSS v4", "MySQL"],
    summary:
      "Tracks inventory movement across multiple warehouses, handles vendor returns, and forecasts turnover. The UI leverages the shadcn-admin design system on Filament.",
    highlights: [
      "Stock movements, transfer receipts and availability audits",
      "Vendor return processing and supplier tracking",
      "Inventory turnover forecasting with visual analytics",
    ],
    image: "./projects/inventory.webp",
    repo: `${GH}/Inventory-Management-System`,
  },

  {
    slug: "mosque-management-system",
    title: "Mosque Management System",
    tagline: "Mosque community agenda and transparent financial information system",
    category: "Web App",
    year: "2025",
    stack: ["Laravel 12", "Tailwind CSS", "MySQL"],
    summary:
      "Enables mosque committees to publish community lectures, prayer schedules and transparent financial cash flow reports so congregants can track donations.",
    highlights: [
      "Lecture, prayer timetable and community agenda publishing",
      "Transparent financial cash flow ledgers with visual breakdown",
      "Committee admin workspace for donations and announcements",
    ],
    image: "./projects/simasjid.webp",
    repo: `${GH}/Mosque-Management-System`,
  },

  {
    slug: "the-boss-izmir",
    title: "The Boss Izmir",
    tagline: "Cafe and lounge web application with Turkish administrative panel",
    category: "Web App",
    year: "2025",
    stack: ["Laravel", "Filament", "Tailwind CSS"],
    summary:
      "A dark-themed, menu-first web platform for a premier lounge in Bornova, Izmir. Staff update dynamic menus, food categories, photo galleries and contact channels from a fully Turkish admin panel.",
    highlights: [
      "Categorized dining and beverage menu with live pricing",
      "High-resolution 4:5 visual gallery grid",
      "Content and branding settings manageable without code modification",
    ],
    image: "./projects/the-boss.webp",
    repo: `${GH}/The-Boss-Izmir`,
  },

  {
    slug: "indonesia-mutual-fund-analytics",
    title: "Indonesia Mutual Fund Analytics",
    tagline: "Quantitative analytics & multi-criteria scoring for 146 mutual funds",
    category: "ML & Data",
    year: "2026",
    stack: ["Python", "JavaScript", "Tailwind CSS", "Chart.js", "Quantitative Finance"],
    summary:
      "Interactive quantitative analytics evaluating and ranking 146 active Indonesian mutual funds across IDR 206.4T in assets. Implements peer-group segmentation, Calmar ratio, Max Drawdown risk penalties, and multi-period asset growth simulations.",
    highlights: [
      "Peer-group segmentation eliminating asset-class comparison bias",
      "Calmar ratio & Max Drawdown penalty scoring model",
      "Multi-period NAV CAGR tracking (1Y, 3Y, 5Y) with Top 5 portfolio holdings breakdown",
      "Interactive investment capital simulator and financial education glossary",
    ],
    image: "./projects/mutual-fund.webp",
    gallery: ["./projects/mutual-fund.webp", "./projects/mutual-fund-detail.webp"],
    repo: `${GH}/Indonesia-Mutual-Fund-Analytics`,
  },

  {
    slug: "steganografi-encryption",
    title: "Steganografi Encryption",
    tagline: "AES-256-GCM + LSB digital steganography and WhatsApp transmission study",
    category: "ML & Data",
    year: "2026",
    stack: ["Python", "Cryptography", "Pillow", "Jupyter"],
    summary:
      "Encrypts sensitive payloads with authenticated AES-256-GCM, hides them in PNG least significant bits (LSB), and measures compression impacts across WhatsApp document vs photo channels.",
    highlights: [
      "Peak signal-to-noise ratio (PSNR) above 79 dB and SSIM above 0.9999",
      "Empirical bit error rate measurement under lossy JPEG compression",
      "Residual difference maps amplified 30x to visualize pixel mutations",
    ],
    image: "./projects/stego.webp",
    repo: `${GH}/Steganografi-Encryption`,
  },

  {
    slug: "workflow-master",
    title: "Workflow Master",
    tagline: "Software engineering operating system and AI assistant governance",
    category: "Tooling",
    year: "2026",
    stack: ["AGENTS.md", "commitlint", "husky", "git-cliff", "PowerShell"],
    summary:
      "The engineering governance engine behind all repositories: 9-stage disciplined workflow, 20 engineering rules, 16 agent skills, commit linter tooling and automated AGENTS.md installers.",
    highlights: [
      "9-stage engineering workflow from Triage to Reporting",
      "16 specialized agent skills (ML, Data Analysis, Stats, Distinctive UI, Security)",
      "Strict Conventional Commits enforcement and Rule 12.1 pairing co-authorship",
    ],
    image: "./projects/workflow-master.webp",
    repo: `${GH}/Workflow-Master`,
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
  instagram: "https://www.instagram.com/pranata_yz/",
  instagramHandle: "@pranata_yz",
  github: GH,
  githubPersonal: "https://github.com/ariasastra-dev",
  location: "Yogyakarta, Indonesia",
  coords: "7.7956° S, 110.3695° E",
}

export type Certificate = {
  id: string
  title: string
  courseCode: string
  issuer: string
  organization: string
  issueDate: string
  verificationUrl: string
  image: string
  imagePng: string
  skills: string[]
  description: string
  highlights: string[]
}

export const certificates: Certificate[] = [
  {
    id: "ibm-da0101en",
    title: "Data Analysis with Python",
    courseCode: "DA0101EN",
    issuer: "Cognitive Class",
    organization: "Powered by IBM Developer Skills Network",
    issueDate: "December 17, 2024",
    verificationUrl: "https://courses.cognitiveclass.ai/certificates/7b6659f456ca4e94b877d13de70161e5",
    image: "./certificates/ibm-data-analysis-python.webp",
    imagePng: "./certificates/ibm-data-analysis-python.png",
    skills: ["Python", "Pandas", "NumPy", "Data Wrangling", "EDA", "Scikit-learn"],
    description:
      "Official certificate of completion and passing grade in Data Analysis with Python (DA0101EN), provided by IBM via Cognitive Class. Validates practical capabilities in exploratory data analysis, regression modeling, and machine learning pipelines.",
    highlights: [
      "Data wrangling: handling missing values, data formatting, normalization and binning with Pandas",
      "Exploratory Data Analysis (EDA): descriptive statistics, groupby, ANOVA, correlation and heatmaps",
      "Model development: Simple & Multiple Linear Regression, Polynomial Regression, and Pipelines",
      "Model evaluation: Mean Squared Error (MSE), R² metrics, overfitting diagnosis, and Ridge Regression",
    ],
  },
]
