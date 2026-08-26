"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { personal } from "@/data/personal";
import { AppImage } from "@/components/app-image";
import { GithubIcon, LinkedInIcon } from "@/components/social-icons";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI & ML Explorer",
  "Open Source Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2800
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[360px] w-[480px] translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div className="flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{personal.name}.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 flex h-10 items-center gap-2 font-display text-2xl font-semibold text-muted sm:text-3xl"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="text-gradient"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects">
              <span className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-500/45 hover:brightness-110">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-700 dark:hover:text-violet-200"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="text-xs font-medium uppercase tracking-widest text-muted/60">
              Find me on
            </span>
            <span className="h-px w-8 bg-border" />
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-border p-2.5 text-muted transition-all hover:border-violet-500/40 hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-border p-2.5 text-muted transition-all hover:border-violet-500/40 hover:text-foreground"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mx-auto hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/30 via-indigo-500/20 to-cyan-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2.5 shadow-2xl shadow-black/50">
              <AppImage
                src={personal.avatar}
                alt="Profile picture of Harshavardhan"
                width={420}
                height={470}
                className="aspect-[3/3.4] w-full rounded-[1.6rem] object-cover"
                priority
              />
            </div>

            <div className="glass absolute -bottom-5 -right-4 hidden rounded-2xl px-4 py-3 sm:block">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <p className="text-xs font-semibold text-foreground">Available for work</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-foreground md:block"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
