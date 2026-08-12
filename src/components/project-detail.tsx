import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  Brain,
  ChartColumn,
  Eye,
  Gauge,
  KeyRound,
  Lock,
  Search,
  Settings,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";
import { AppImage } from "@/components/app-image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const featureIcons = {
  wallet: Wallet,
  chart: ChartColumn,
  bell: BellRing,
  shield: ShieldCheck,
  eye: Eye,
  gauge: Gauge,
  brain: Brain,
  search: Search,
  zap: Zap,
  lock: Lock,
  users: Users,
  key: KeyRound,
  settings: Settings,
} as const;

export function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <Badge variant="default">{project.category}</Badge>
          <Badge variant="outline">{project.year}</Badge>
          <Badge variant="success">{project.status}</Badge>
        </div>

        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-500/45 hover:brightness-110"
          >
            Source Code
            <ArrowUpRight className="h-4 w-4" />
          </a>
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-700 dark:hover:text-violet-200"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <div className="relative mt-12">
          <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-400/30 blur-lg" />
          <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-card">
            <AppImage
              src={project.images.primary}
              alt={`${project.title} â€” main view`}
              width={1280}
              height={720}
              className="aspect-[16/9] w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Overview
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {project.overview.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="leading-relaxed text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">
              The problem
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              {project.problem}
            </p>

            <h3 className="mt-8 font-display text-xl font-semibold tracking-tight">
              The solution
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              {project.solution}
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-24">
            <h3 className="font-display text-lg font-semibold tracking-tight">
              Tech Stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-foreground/[0.04] px-3.5 py-1.5 text-xs font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Separator className="my-6" />

            <dl className="flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted">Category</dt>
                <dd className="font-medium">{project.category}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted">Year</dt>
                <dd className="font-medium">{project.year}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted">Status</dt>
                <dd className="font-medium">{project.status}</dd>
              </div>
            </dl>

            <Separator className="my-6" />

            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border text-sm font-medium text-foreground transition-colors hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-700 dark:hover:text-violet-200"
            >
              View on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </aside>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Key features
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {project.features.map((feature) => {
              const Icon = featureIcons[feature.icon as keyof typeof featureIcons] ?? Zap;
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-violet-700 dark:text-violet-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {project.images.architecture ? (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Architecture
            </h2>
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-card">
              <AppImage
                src={project.images.architecture}
                alt={`${project.title} â€” architecture diagram`}
                width={1280}
                height={720}
                className="aspect-[16/9] w-full object-contain"
              />
            </div>
          </div>
        ) : null}

        <div className="mt-20">
          <div className="flex items-center gap-4">
            <Separator className="flex-1" />
            <h2 className="font-display text-lg font-semibold tracking-tight">
              More projects
            </h2>
            <Separator className="flex-1" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
              >
                <p className="text-[11px] font-medium uppercase tracking-widest text-muted">
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold tracking-tight transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-300">
                  {p.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-violet-700 dark:text-violet-300">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
