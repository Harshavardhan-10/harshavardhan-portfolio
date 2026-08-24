"use client";

import { motion } from "motion/react";
import { CodeXml, Cpu, Database, Languages, Server, Cloud } from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";

const iconMap = {
  code: CodeXml,
  server: Server,
  database: Database,
  brain: Cpu,
  cloud: Cloud,
  languages: Languages,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 rotate-180 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,black_40%,transparent_100%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A curated toolkit I use to design, build and ship products end to end."
          />
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category: SkillCategory, i) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-900/20"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-violet-700 dark:text-violet-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-muted">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
