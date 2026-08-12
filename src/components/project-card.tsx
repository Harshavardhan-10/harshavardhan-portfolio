import Link from "next/link";
import { ArrowUpRight, FolderGit2, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { AppImage } from "@/components/app-image";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/40"
    >
      <div className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <AppImage
          src={project.images.primary}
          alt={`${project.title} preview`}
          width={640}
          height={400}
          className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-4 top-4">
          <Badge variant="default" className="backdrop-blur-md">
            {project.category}
          </Badge>
        </div>
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/80 text-muted opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:text-foreground">
          <ArrowUpRight className="h-4.5 w-4.5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-muted">
          <FolderGit2 className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
          {project.year}
          <span className="text-border">•••</span>
          {project.status}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-violet-700 dark:group-hover:text-violet-300">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-[11px] font-medium text-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 ? (
            <span className="rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-[11px] font-medium text-muted">
              +{project.techStack.length - 4}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <Star className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400/80" />
            Case study
          </span>
          <span className="flex items-center gap-1.5 text-sm font-medium text-violet-700 dark:text-violet-300 transition-all duration-300 group-hover:gap-2.5">
            View project
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
