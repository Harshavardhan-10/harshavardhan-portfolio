"use client";

import { motion } from "motion/react";
import { Download, Mail, MapPin, User } from "lucide-react";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/section-heading";
import { AppImage } from "@/components/app-image";
import { Badge } from "@/components/ui/badge";

const infoItems = [
  { icon: User, label: "Name", value: personal.name },
  { icon: Mail, label: "Email", value: personal.email },
  { icon: MapPin, label: "Location", value: personal.location },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <SectionHeading
            eyebrow="About Me"
            title="Turning ideas into digital products"
            description="A quick look at who I am, what I value and how I work."
          />
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl border-2 border-dashed border-violet-500/30" />
            <div className="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl border-2 border-dashed border-cyan-500/30" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2.5">
              <AppImage
                src={personal.avatar}
                alt="Portrait of Harshavardhan"
                width={440}
                height={500}
                className="aspect-[4/4.6] w-full rounded-[1.4rem] object-cover"
                priority
              />
              <div className="glass absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl px-5 py-4">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {personal.name}
                  </p>
                  <p className="text-xs text-foreground/70">{personal.role}</p>
                </div>
                <Badge variant="success">Open to work</Badge>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg leading-relaxed text-muted">
              {personal.bio[0]}
            </p>
            <p className="leading-relaxed text-muted">{personal.bio[1]}</p>

            <div className="mt-2 grid gap-3 sm:grid-cols-3">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-4"
                >
                  <Icon className="h-4.5 w-4.5 text-violet-700 dark:text-violet-300" />
                  <p className="mt-2.5 text-[11px] uppercase tracking-widest text-muted/70">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {personal.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={personal.resumeUrl}
              download
              className="mt-3 inline-flex h-12 w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-500/45 hover:brightness-110"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
