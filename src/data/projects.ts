export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  year: string;
  status: string;
  images: {
    primary: string;
    architecture?: string;
  };
  overview: string[];
  problem: string;
  solution: string;
  features: { title: string; description: string; icon: string }[];
  techStack: string[];
  links: {
    github: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "wiseweb-ai",
    title: "Wiseweb-AI",
    tagline:
      "AI-powered website intelligence platform with deep automated scans and explainable health scores.",
    category: "Full-Stack",
    description:
      "A website audit platform that crawls any site, analyzes it across eight categories and turns evidence-backed findings into prioritized AI recommendations.",
    year: "2026",
    status: "Open Source",
    images: {
      primary: "/projects/wiseweb-ai/application.png",
      architecture: "/projects/wiseweb-ai/architecture-flow.svg",
    },
    overview: [
      "Wiseweb-AI is an end-to-end website intelligence platform built as a React SPA backed by a FastAPI API, a Celery worker and PostgreSQL. Point it at any URL and a passive crawler collects pages, resources and technologies while honoring robots.txt, with SSRF validation on every request and redirect hop.",
      "Eight analyzers - security, performance, accessibility, privacy, SEO, content, UX and architecture - produce findings backed by stored evidence such as HTTP headers, cookies and DNS records. A scoring engine converts severity-weighted deductions into explainable scores, and an AI pipeline correlates root causes into P0-P3 ranked fixes with deterministic fallbacks whenever no AI provider key is configured.",
    ],
    problem:
      "Website audits are either shallow single-page checkers or expensive consultant reports. Owners need deep, repeatable analysis that explains what to fix, in what order, and why.",
    solution:
      "I built a multi-stage scan pipeline - crawl, eight analyzer categories, weighted scoring and AI correlation - with a resilience-first design: a failing analyzer never aborts the scan, unmeasured categories stay unscored instead of falsely showing 100, and every AI output has a grounded rule-based fallback.",
    features: [
      {
        title: "Deep Automated Scans",
        description:
          "Robots-aware crawler records pages, resources and detected technologies with SSRF guards on every fetch.",
        icon: "gauge",
      },
      {
        title: "Evidence-Based Findings",
        description:
          "Each issue stores typed evidence - headers, cookies, DNS, HTML elements - behind filterable API endpoints.",
        icon: "search",
      },
      {
        title: "Explainable Scoring",
        description:
          "Severity deductions with industry-specific weights produce transparent per-category and overall health scores.",
        icon: "chart",
      },
      {
        title: "AI Fixes & Competitors",
        description:
          "Root-cause correlation ranks fixes P0-P3 and score-gap comparison benchmarks saved competitor sites.",
        icon: "brain",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
      "FastAPI",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "PostgreSQL",
      "Playwright",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/Wiseweb-AI",
      demo: "https://wiseweb-ai.vercel.app",
    },
  },
  {
    slug: "smart-expense-manager",
    title: "Smart Expense Manager",
    tagline:
      "Track expenses, set monthly budgets and get statistical plus AI spending insights.",
    category: "Full-Stack",
    description:
      "A full-stack expense tracker - React SPA with Chart.js dashboards over a FastAPI + SQLAlchemy backend featuring recurring-payment detection, anomaly insights and CSV import/export.",
    year: "2025",
    status: "Open Source",
    images: {
      primary: "/projects/smart-expense-manager/dashboard.png",
      architecture: "/projects/smart-expense-manager/architecture-flow.svg",
    },
    overview: [
      "Spentrax is a two-app finance platform: a React single-page app (Vite, Chart.js) talking to a FastAPI server through JWT-authenticated REST endpoints. Data lives in SQLAlchemy models migrated by Alembic - SQLite in development, PostgreSQL in production on Render.",
      "Beyond plain CRUD, detection is statistical rather than hand-waved: recurring payments require three or more similar charges on matching intervals, anomalies are z-score outliers per category, and optional OpenAI-compatible calls only categorize or explain - never detect - falling back to deterministic keyword rules when no provider is configured.",
    ],
    problem:
      "Most expense trackers stop at storage. Useful patterns - subscriptions quietly renewing, unusual spending spikes, budget burn rate - stay hidden, and importing years of bank history is usually painful or impossible.",
    solution:
      "I built automatic post-save checks that flag recurring candidates and z-score anomalies into an insight feed, per-category monthly budgets with spent/remaining/status math, one-call dashboard aggregates and round-trip CSV import/export with duplicate detection.",
    features: [
      {
        title: "Instant Expense Logging",
        description:
          "Validated CRUD with filters, search, sort and pagination, plus AI category suggestions while you type.",
        icon: "wallet",
      },
      {
        title: "Statistical Detection",
        description:
          "Recurring subscriptions (three-plus matches) and z-score anomalies become insight rows automatically after each save.",
        icon: "gauge",
      },
      {
        title: "Budgets & Analytics",
        description:
          "Monthly category budgets with status thresholds and Chart.js trend, breakdown and month-over-month views.",
        icon: "chart",
      },
      {
        title: "CSV Round-Trip",
        description:
          "Import statements with duplicate checks or export everything; AI insights degrade gracefully to rules offline.",
        icon: "zap",
      },
    ],
    techStack: [
      "React",
      "Vite",
      "Chart.js",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "JWT",
      "Pydantic",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/Spentrax",
    },
  },
  {
    slug: "drowsiness-detection",
    title: "Drowsiness Detection System",
    tagline: "Real-time driver fatigue detection streamed from your browser webcam.",
    category: "AI / ML",
    description:
      "A browser-and-server system: React captures webcam frames while a FastAPI WebSocket service scores EAR/MAR face landmarks via MediaPipe and triggers audio-visual alerts.",
    year: "2024",
    status: "Research",
    images: {
      primary: "/projects/drowsiness-detection/application.png",
      architecture: "/projects/drowsiness-detection/architecture-flow.svg",
    },
    overview: [
      "The app pairs a React dashboard with a FastAPI WebSocket engine. The browser grabs JPEG frames roughly ten times a second and streams them to /ws/detect; MediaPipe Face Mesh locates 468 landmarks, from which eye (EAR) and mouth (MAR) aspect ratios are computed for every frame.",
      "A state machine counts consecutive closed-eye frames and deduplicated yawns into a monotonic 0-100 drowsiness score with NORMAL, WARNING and DROWSY bands. Alarms live entirely client-side: looping alarm audio, an animated dismissible modal and a canvas overlay drawing the exact landmark polygons state-colored.",
    ],
    problem:
      "Driver fatigue causes thousands of crashes every year, but most software detectors are desktop-only scripts that are slow, inaccurate or impossible to try without installing anything.",
    solution:
      "I split capture and inference: the browser handles video, UI and alarms while a lightweight FastAPI service does pure geometry - fixed EAR below 0.25 and MAR above 0.75 thresholds, ratchet scoring that never decreases, a dismiss grace window and REST reset and dismiss controls.",
    features: [
      {
        title: "Live Frame Streaming",
        description:
          "react-webcam pushes base64 JPEG frames over an auto-reconnecting WebSocket at ~10 FPS.",
        icon: "eye",
      },
      {
        title: "Face Mesh Metrics",
        description:
          "468-point MediaPipe mesh yields averaged left/right EAR plus yawn-aware MAR with NO_FACE handling.",
        icon: "gauge",
      },
      {
        title: "Ratchet Scoring",
        description:
          "Consecutive-frame counting builds a capped 0-100 score across NORMAL, WARNING and DROWSY bands.",
        icon: "brain",
      },
      {
        title: "Browser Alarms",
        description:
          "Looping siren, animated alert modal and colored landmark overlay, dismissible with a grace period.",
        icon: "bell",
      },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "WebSockets",
      "MediaPipe",
      "OpenCV",
      "NumPy",
      "React",
      "Vite",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/Driver-Drowsiness-Detection-System",
    },
  },
  {
    slug: "user-management",
    title: "User Management System",
    tagline: "Django authentication, rich profiles and a staff-only admin panel.",
    category: "Full-Stack",
    description:
      "A classic Django monolith covering registration, session auth, password reset, media-rich profiles and a staff-gated admin panel for managing users.",
    year: "2023",
    status: "Open Source",
    images: {
      primary: "/projects/user-management/application.png",
      architecture: "/projects/user-management/architecture-flow.svg",
    },
    overview: [
      "Built on Django 4.2 with server-rendered Bootstrap templates, this project covers the full account lifecycle: registration with auto-login, session-cookie authentication, password change and email-based reset using Django's signed tokens, profile pages with avatar uploads and social links, and self-service account deletion.",
      "Administration is role-flagged rather than table-driven: a custom staff-only panel supports user search, creation, editing, deletion and ban/unban, layered with guards so staff cannot touch superusers and nobody can lock themselves out. A post-save signal automatically creates a Profile for every new User row.",
    ],
    problem:
      "Products need dependable account management without pulling in heavyweight identity providers - including safe password resets, media-rich profiles and simple staff tooling for moderating users.",
    solution:
      "I leaned on Django's batteries: PBKDF2 password hashing, CSRF-protected forms, signed-timestamped reset tokens and database-backed sessions, then added a custom admin_required decorator, superuser protection rules and validated profile fields that block javascript-style URLs.",
    features: [
      {
        title: "Complete Auth Flows",
        description:
          "Signup with auto-login, logout, password change and signed-token password reset emails.",
        icon: "key",
      },
      {
        title: "Rich Profiles",
        description:
          "Avatar uploads via Pillow plus bio, phone and social links, auto-created by a post-save signal.",
        icon: "users",
      },
      {
        title: "Staff Admin Panel",
        description:
          "Searchable user list with create, edit, delete, deactivate and activate actions behind admin_required.",
        icon: "settings",
      },
      {
        title: "Session-Hardened",
        description:
          "HttpOnly session cookie, CSRF tokens on every form, sliding expiry and never-cache view headers.",
        icon: "shield",
      },
    ],
    techStack: ["Django", "Python", "SQLite", "Django ORM", "Bootstrap 5", "Pillow"],
    links: {
      github: "https://github.com/Harshavardhan-10/User_Management_System",
    },
  },
];
