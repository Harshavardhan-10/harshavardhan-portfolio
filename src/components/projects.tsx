"use client";

import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute right-0 top-0 h-[360px] w-[360px] translate-x-1/3 rounded-full bg-indigo-600/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="Selected work from full-stack platforms to machine-learning experiments. Click any project for the full story."
          />
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
