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
      "AI-powered website intelligence and improvement platform with deep automated scans.",
    category: "Full-Stack",
    description:
      "A website audit platform that crawls any site, scores health across nine categories and generates prioritized AI recommendations.",
    year: "2026",
    status: "Open Source",
    images: {
      primary: "/projects/wiseweb-ai/dashboard.png",
      architecture: "/projects/wiseweb-ai/architecture.png",
    },
    overview: [
      "Wiseweb-AI is an end-to-end website intelligence platform. Point it at any URL and it crawls the site, analyzes security, performance, accessibility, privacy, SEO, content and UX, then produces a single health score with concrete, prioritized fixes.",
      "The stack is deliberately decoupled: a FastAPI backend, a Celery worker for long-running scans and a React SPA that polls scan progress in real time. Every category has its own analyzer, and an AI layer correlates findings into root-cause explanations so users see why something matters, not just what failed.",
    ],
    problem:
      "Website audits are either shallow single-page checkers or expensive consultant reports. Owners need deep, repeatable analysis that explains what to fix, in what order, and why.",
    solution:
      "I built a multi-stage scan pipeline (crawl, nine analyzer categories, AI correlation and recommendations) with a resilience-first design: a failing analyzer never aborts the whole scan, and categories with zero findings stay unmeasured instead of falsely scoring 100.",
    features: [
      {
        title: "Deep Automated Scans",
        description:
          "Crawls the site and analyzes security, performance, SEO, UX, accessibility, privacy, content and more.",
        icon: "gauge",
      },
      {
        title: "AI Recommendations",
        description:
          "Root-cause correlation ranks fixes P0 to P3 with evidence-backed explanations.",
        icon: "brain",
      },
      {
        title: "Health Scoring",
        description:
          "Category scores, progress tracking and trends across re-scans of the same site.",
        icon: "chart",
      },
      {
        title: "Competitive Analysis",
        description:
          "Compare your site against competitors to find gaps and opportunities.",
        icon: "users",
      },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "Celery",
      "Redis",
      "Playwright",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/wiseweb-ai",
      demo: "https://wiseweb-ai.vercel.app",
    },
  },
  {
    slug: "smart-expense-manager",
    title: "Smart Expense Manager",
    tagline:
      "Track, categorise and visualise daily spending with intelligent insights.",
    category: "Full-Stack",
    description:
      "A complete expense tracking platform with dashboards, budgets and AI-powered spending insights.",
    year: "2025",
    status: "Open Source",
    images: {
      primary: "/projects/smart-expense-manager/dashboard.png",
      architecture: "/projects/smart-expense-manager/architecture.png",
    },
    overview: [
      "Smart Expense Manager is a full-stack finance app that helps users log transactions, set monthly budgets and discover spending patterns through interactive dashboards. Built with a modern monorepo architecture, it keeps the UI snappy and the data consistent in real time.",
      "The project demonstrates production-grade patterns: server-side rendering, API routes with validation, database transactions and chart-driven analytics. It was designed with performance budgets in mind  the main dashboard hydrates in under two seconds on a mid-range phone.",
    ],
    problem:
      "Most expense trackers are either overly complex or have poor UX. Users wanted a tool that is quick to log, delightful to explore and smart enough to surface useful insights like unusual spending or budget burn rate.",
    solution:
      "I designed a minimal logging flow (add an expense in under 5 seconds), category auto-detection, monthly budgets with progress rings, and a spending analytics dashboard with trend charts, top merchants and anomaly alerts.",
    features: [
      {
        title: "Instant Expense Logging",
        description:
          "Quick-add modal with smart category prediction and recurring transaction support.",
        icon: "wallet",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Interactive charts for spending trends, category breakdown and budget health.",
        icon: "chart",
      },
      {
        title: "Smart Alerts",
        description:
          "Anomaly and budget-limit notifications delivered via email and in-app.",
        icon: "bell",
      },
      {
        title: "Secure & Private",
        description:
          "JWT-based auth, encrypted data at rest and granular user permissions.",
        icon: "shield",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "Recharts",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/smart-expense-manager",
      demo: "https://smart-expense-manager.vercel.app",
    },
  },
  {
    slug: "drowsiness-detection",
    title: "Drowsiness Detection System",
    tagline:
      "Real-time driver drowsiness detection powered by computer vision.",
    category: "AI / ML",
    description:
      "A real-time system that detects driver fatigue using facial landmarks and alerts instantly.",
    year: "2024",
    status: "Research",
    images: {
      primary: "/projects/drowsiness-detection/application.png",
      architecture: "/projects/drowsiness-detection/detection.png",
    },
    overview: [
      "This project tackles road safety with computer vision: it analyses webcam video frames to estimate eye-aspect-ratio and head posture in real time, detecting micro-sleep moments before they become dangerous. Built with OpenCV and MediaPipe, it runs at 30 FPS on a standard laptop.",
      "The application includes a live preview, configurable sensitivity, and an audible + visual alarm. A Flask API wrapper also exposes detection results for integration with vehicle telematics systems.",
    ],
    problem:
      "Driver fatigue causes thousands of accidents every year. Existing detection hardware is expensive, while software solutions were often too slow or too inaccurate for real-time use.",
    solution:
      "I implemented a lightweight pipeline using MediaPipe facial landmarks to compute EAR (eye aspect ratio) and MAR (mouth aspect ratio), with an adaptive threshold and a scoring mechanism that filters false positives.",
    features: [
      {
        title: "Real-time Detection",
        description:
          "30 FPS landmark tracking with instant drowsiness scoring per frame.",
        icon: "eye",
      },
      {
        title: "Adaptive Thresholds",
        description:
          "Self-calibrating baselines that adapt to lighting and camera distance.",
        icon: "gauge",
      },
      {
        title: "Instant Alerts",
        description:
          "Loud audible alarm and blinking visual overlay the moment fatigue is flagged.",
        icon: "bell",
      },
      {
        title: "Head Posture Analysis",
        description:
          "Tracks head tilt and nodding to strengthen the drowsiness signal.",
        icon: "brain",
      },
    ],
    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Flask",
      "Scipy",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/drowsiness-detection",
    },
  },
  {
    slug: "user-management",
    title: "User Management System",
    tagline:
      "Production-ready authentication, profiles and role-based access control.",
    category: "Full-Stack",
    description:
      "A complete auth & user management system with roles, sessions and audit logs.",
    year: "2023",
    status: "Open Source",
    images: {
      primary: "/projects/user-management/application.png",
    },
    overview: [
      "A battle-tested user management system covering the full lifecycle: registration, email verification, login, password reset, profile management, admin dashboards and role-based access control. It is built to be dropped into any product that needs secure accounts fast.",
      "Security is the star: hashed passwords with bcrypt, httpOnly cookies for sessions, CSRF protection, rate limiting and a full audit log of administrative actions.",
    ],
    problem:
      "Rolling your own auth is error-prone teams repeatedly struggle with session security, token handling and role hierarchies, and boilerplate code slows down every new product.",
    solution:
      "I built a reusable system with pluggable strategies (JWT + refresh tokens or cookie sessions), a permission engine that supports roles and granular scopes, and ready-to-use React screens for every flow.",
    features: [
      {
        title: "Complete Auth Flows",
        description:
          "Signup, login, email verification, password reset and social OAuth.",
        icon: "key",
      },
      {
        title: "Role-Based Access",
        description:
          "Hierarchical roles with granular permission scopes for admins.",
        icon: "users",
      },
      {
        title: "Admin Dashboard",
        description:
          "User listing, search, ban/unban, role assignment and activity audit.",
        icon: "settings",
      },
      {
        title: "Security First",
        description:
          "bcrypt hashing, httpOnly sessions, CSRF protection and rate limits.",
        icon: "shield",
      },
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Tailwind CSS",
    ],
    links: {
      github: "https://github.com/Harshavardhan-10/user-management",
    },
  },
];
