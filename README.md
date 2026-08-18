# Harshavardhan — Portfolio

A modern, responsive portfolio built to showcase my **projects, technical skills, professional experience, and software development journey**.

### Built With
`Next.js` · `TypeScript` · `Tailwind CSS` · `Motion`

### Live Website

**[harshavardhan-portfolio](https://harshavardhan-portfolio-dev.vercel.app/)**


## Features

- **Dark/Light mode** toggle with `local Storage` persistence
- **One-page portfolio** — Navbar, Hero, About, Experience, Skills, Projects, GitHub, Contact, Footer
- **Live GitHub section** — fetches and displays your top repositories from the GitHub API
- **Project detail pages** — case studies with overview, problem/solution, key features, tech stack and architecture images
- **Animated UI** — scroll-reveal and progress-bar animations powered by Motion
- **Accessible contact form** — composes an email via `mailto:` with a success state

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) for animations
- [lucide-react](https://lucide.dev) for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start the development server       |
| `npm run build`  | Create an optimized production build |
| `npm run start`  | Run the production build           |
| `npm run lint`   | Run ESLint                         |

## Customizing Content

Personal details, experience, skills and projects are all data-driven — edit the files under `src/data/`:

- `src/data/personal.ts` — name, bio, contact info, socials, GitHub username
- `src/data/experience.ts` — work history and highlights
- `src/data/skills.ts` — skill categories and proficiency levels
- `src/data/projects.ts` — project metadata for cards and case-study pages

Place your images in `public/`:

- `public/profile/profile.jpg` — profile picture
- `public/projects/<project-slug>/` — project preview images
- `public/resume.pdf` — downloadable resume

## Deploy

Deploy to [Vercel](https://vercel.com/new) (recommended) or your preferred platform.
