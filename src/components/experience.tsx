"use client";

import { motion } from "motion/react";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Experience"
            title="My professional journey"
            description="The roles, projects and teams that shaped how I build software."
          />
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/60 via-border to-transparent sm:left-[15px]" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-violet-500/40 bg-background sm:h-8 sm:w-8">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                </span>

                <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-900/20 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-lg bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                      {exp.period}
                    </span>
                    {exp.current ? <Badge variant="success">Current</Badge> : null}
                    {exp.location ? (
                      <span className="ml-auto flex items-center gap-1.5 text-xs text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.company}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400/80" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-[11px] font-medium text-muted transition-colors group-hover:border-violet-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
