import { ArrowUp } from "lucide-react";
import { navLinks, personal } from "@/data/personal";
import { GithubIcon, LinkedInIcon } from "@/components/social-icons";

const socialLinks = [
  { icon: GithubIcon, href: personal.socials.github, label: "GitHub" },
  { icon: LinkedInIcon, href: personal.socials.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 font-display text-sm font-bold text-white">
                HR
              </span>
              <span className="font-display text-base font-semibold">
                {personal.name}
              </span>
            </a>
            <p className="mt-1 text-xs text-muted">
              Building the web, one pixel at a time.
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg border border-border p-2.5 text-muted transition-all hover:border-violet-500/40 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 rounded-lg border border-border p-2.5 text-muted transition-all hover:border-violet-500/40 hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted/70">
            @{year} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">
            Built with Next.js, Tailwind CSS & Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
