"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Code2, GitFork, Star } from "lucide-react";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon } from "@/components/social-icons";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
};

export default function GithubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = personal.githubUsername;
    if (!username) return;

    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error("failed"))))
      .then((data: Repo[]) => {
        const filtered = data.filter((r) => !r.fork);
        const wiseweb = filtered.find((r) => r.name === "Wiseweb-AI");
        const spendrax = filtered.find((r) => r.name === "Spentrax");
        const rest = filtered
          .filter((r) => r.name !== "Wiseweb-AI" && r.name !== "Spentrax")
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        const top = [wiseweb, spendrax, ...rest].filter((r): r is Repo => !!r).slice(0, 3);
        setRepos(top);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/3 h-[320px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Open Source"
            title="Latest on GitHub"
            description="Here are a few repositories I'm actively working on."
          />
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {repos === null && !error ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-52 animate-pulse rounded-2xl border border-border bg-card"
              />
            ))
          ) : repos && repos.length > 0 ? (
            repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/30"
              >
                <div className="flex items-start justify-between">
                  <Code2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  <ArrowUpRight className="h-4.5 w-4.5 text-muted transition-colors group-hover:text-foreground" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight group-hover:text-violet-700 dark:group-hover:text-violet-300">
                  {repo.name}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted line-clamp-2">
                  {repo.description ?? "No description provided yet."}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                  {repo.language ? (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background:
                            languageColors[repo.language] ?? "#8b8b9e",
                        }}
                      />
                      {repo.language}
                    </span>
                  ) : null}
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3.5 w-3.5" />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-border bg-card/50 p-10 text-center">
              <p className="text-sm text-muted">
                {error
                  ? "Couldn't load repositories right now."
                  : "No repositories to show yet."}
              </p>
              <p className="mt-2 text-xs text-muted/70">
                Head over to GitHub to explore my latest work.
              </p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2.5 rounded-xl border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-700 dark:hover:text-violet-200"
          >
            <GithubIcon className="h-4.5 w-4.5" />
            View GitHub Profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
