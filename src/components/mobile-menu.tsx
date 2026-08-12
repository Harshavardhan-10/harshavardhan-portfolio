"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, personal } from "@/data/personal";
import { GithubIcon, LinkedInIcon } from "@/components/social-icons";
import { ThemeToggle } from "@/components/theme-toggle";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="font-display text-lg font-semibold">{personal.name}</span>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg font-medium text-muted transition-all hover:bg-foreground/5 hover:text-foreground",
                open && "animate-[fadeIn_0.3s_ease_both]"
              )}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
              <span className="text-xs text-violet-600 dark:text-violet-400/60">â†’</span>
            </a>
          ))}
        </nav>

        <div className="border-t border-border px-6 py-6">
          <a href="#contact" onClick={onClose}>
            <span className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-violet-600/25">
              Let&apos;s Talk
            </span>
          </a>
          <div className="mt-5 flex items-center justify-center gap-4">
            <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="h-5 w-5 text-muted transition-colors hover:text-foreground" />
            </a>
            <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="h-5 w-5 text-muted transition-colors hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
