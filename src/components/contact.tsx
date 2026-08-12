"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { personal } from "@/data/personal";
import { SectionHeading } from "@/components/section-heading";
import { GithubIcon, LinkedInIcon } from "@/components/social-icons";

const linkedinUrl = personal.socials.linkedin;
const linkedinUsername =
  linkedinUrl.split("/in/")[1]?.replace(/\/$/, "") ?? linkedinUrl;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: linkedinUsername,
    href: linkedinUrl,
  },
  { icon: MapPin, label: "Location", value: personal.location },
];

const socialLinks = [
  { icon: GithubIcon, href: personal.socials.github, label: "GitHub" },
  { icon: LinkedInIcon, href: personal.socials.linkedin, label: "LinkedIn" },
];

const inputClasses =
  "w-full rounded-xl border border-border bg-foreground/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-violet-500/60 focus:outline-none focus:ring-2 focus:ring-violet-500/20";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together"
            description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
          />
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 text-violet-700 dark:text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted/70">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium">{value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-[11px] uppercase tracking-widest text-muted/70">
                Socials
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-xl border border-border p-3 text-muted transition-all hover:border-violet-500/40 hover:text-foreground"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            {sent ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </span>
                <h3 className="font-display text-xl font-semibold">
                  Thanks for reaching out!
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted">
                  Your email client should have opened with the message
                  pre-filled. If not, email me directly at{" "}
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-violet-700 dark:text-violet-300 underline-offset-4 hover:underline"
                  >
                    {personal.email}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-medium text-violet-700 dark:text-violet-300 transition-colors hover:text-violet-700 dark:hover:text-violet-200"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      suppressHydrationWarning
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:shadow-violet-500/45 hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
