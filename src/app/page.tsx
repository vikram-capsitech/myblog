"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Newspaper,
  Paintbrush,
  Share2,
  Hash,
  ShieldCheck,
  Cog,
  PenTool,
  LayoutDashboard,
  Stars,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Page() {
  const { isSignedIn, user } = useUser();

  if(isSignedIn && user){
    redirect("/dashboard");
  }
  
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AmbientGlow />
      <SiteNav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <TrustBar />
        <QuickProof />
        <PersonalizationPreview />
        <Features />
        <HowItWorks />
        <AIFlow />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

function AmbientGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-primary), transparent)",
        }}
      />
      <div
        className="absolute right-[-8rem] bottom-[-8rem] h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-secondary), transparent)",
        }}
      />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="sr-only">TechVerse Blog Home</span>
            <span aria-hidden className="tracking-tight">
              TechVerse Blog
            </span>
          </Link>
          <nav
            aria-label="Primary"
            className="hidden gap-6 md:flex text-sm text-muted-foreground"
          >
            <Link className="hover:text-foreground" href="/blog">
              Explore
            </Link>
            <Link className="hover:text-foreground" href="/search">
              Search
            </Link>
            <a className="hover:text-foreground" href="#features">
              Features
            </a>
            <a className="hover:text-foreground" href="#how">
              How it works
            </a>
            <a className="hover:text-foreground" href="#ai">
              AI
            </a>
            <a className="hover:text-foreground" href="#security">
              Security
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/write"
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
            >
              Write
            </Link>
            <Link
              href="/login"
              className="rounded-xl bg-primary text-primary-foreground px-3 py-2 text-sm font-semibold hover:opacity-90"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative py-16 sm:py-20">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-4xl font-extrabold tracking-tight sm:text-6xl"
      >
        Your Tech Blog,{" "}
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Supercharged by AI
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 max-w-2xl text-lg text-muted-foreground"
      >
        Read anyone’s tech posts, publish your own, and auto-share to social.
        Daily AI briefings keep you current—without the doomscroll.
      </motion.p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-primary-foreground font-semibold shadow hover:opacity-95"
        >
          Explore Blogs <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/write"
          className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 font-medium text-foreground hover:bg-muted"
        >
          Start Writing
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Writers" value="2,400+" />
        <StatCard label="Monthly Reads" value="1.2M" />
        <StatCard label="Daily AI Briefings" value="365/yr" />
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
    </div>
  );
}

function TrustBar() {
  return (
    <section aria-label="Trusted by" className="py-6">
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 text-muted-foreground">
        {["Vercel", "OpenAI", "HuggingFace", "Supabase", "Next.js"].map(
          (name) => (
            <div key={name} className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-muted" aria-hidden />
              <span className="text-xs">{name}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}

function QuickProof() {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-3">
        <KPICard
          icon={<Newspaper className="h-5 w-5 text-accent" />}
          title="Public by default"
          desc="Anyone can read posts. Open knowledge, open discussion."
        />
        <KPICard
          icon={<Sparkles className="h-5 w-5 text-secondary" />}
          title="Daily AI tech blog"
          desc="Auto-generated updates summarizing the day’s tech news."
        />
        <KPICard
          icon={<Paintbrush className="h-5 w-5 text-primary" />}
          title="Personal sites"
          desc="Add your logo & theme to turn your profile into a personal blog."
        />
      </div>
    </section>
  );
}

function KPICard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}


function PersonalizationPreview() {
  const [theme, setTheme] = useState<"midnight" | "emerald" | "purple">(
    "midnight"
  );
  const [layout, setLayout] = useState<"magazine" | "list">("magazine");

  const themeName = {
    midnight: {
      label: "Midnight",
      ring: "focus:ring-primary",
      card: "bg-card border-border",
      chip: "bg-primary/20 text-primary",
    },
    emerald: {
      label: "Emerald",
      ring: "focus:ring-emerald-400",
      card: "bg-emerald-950/40 border-emerald-900/60",
      chip: "bg-emerald-500/20 text-emerald-200",
    },
    purple: {
      label: "Purple",
      ring: "focus:ring-fuchsia-400",
      card: "bg-fuchsia-950/40 border-fuchsia-900/60",
      chip: "bg-fuchsia-500/20 text-fuchsia-200",
    },
  }[theme];

  return (
    <section className="py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-3xl font-bold">Make it yours in minutes</h2>
          <p className="mt-2 text-muted-foreground">
            Upload a logo, choose a theme, and switch layouts—no code needed.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="inline-flex rounded-xl border border-border p-1 text-sm"
            role="tablist"
            aria-label="Layout selector"
          >
            <button
              role="tab"
              aria-selected={layout === "magazine"}
              onClick={() => setLayout("magazine")}
              className={`rounded-lg px-3 py-1 ${
                layout === "magazine"
                  ? "bg-muted text-foreground"
                  : "hover:bg-muted"
              }`}
            >
              Magazine
            </button>
            <button
              role="tab"
              aria-selected={layout === "list"}
              onClick={() => setLayout("list")}
              className={`rounded-lg px-3 py-1 ${
                layout === "list"
                  ? "bg-muted text-foreground"
                  : "hover:bg-muted"
              }`}
            >
              List
            </button>
          </div>
          <div
            className="inline-flex rounded-xl border border-border p-1 text-sm"
            role="radiogroup"
            aria-label="Theme selector"
          >
            {(["midnight", "emerald", "purple"] as const).map((t) => (
              <button
                key={t}
                role="radio"
                aria-checked={theme === t}
                onClick={() => setTheme(t)}
                className={`rounded-lg px-3 py-1 capitalize ${
                  theme === t
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`rounded-2xl border p-6 ${themeName.card}`}>
        <div className="mb-4 text-sm font-semibold">
          Live preview: {themeName.label} theme · {layout} layout
        </div>
        {layout === "magazine" ? (
          <MagazineMock chipClass={themeName.chip} />
        ) : (
          <ListMock chipClass={themeName.chip} />
        )}
      </div>
    </section>
  );
}

function MagazineMock({ chipClass = "" }: { chipClass?: string }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-xl border border-border p-3"
        >
          <div className="aspect-[16/10] rounded-lg bg-muted" />
          <div className="mt-2 h-4 w-2/3 rounded bg-muted" />
          <div className="mt-2 flex items-center gap-2">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] ${chipClass}`}
            >
              AI
            </span>
            <span className="h-3 w-20 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ListMock({ chipClass = "" }: { chipClass?: string }) {
  return (
    <div className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
        >
          <div className="h-16 w-24 rounded bg-muted" />
          <div className="flex-1">
            <div className="h-4 w-3/5 rounded bg-muted" />
            <div className="mt-2 flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] ${chipClass}`}
              >
                #tech
              </span>
              <span className="h-3 w-28 rounded bg-muted" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Everything you need to blog about tech
        </h2>
        <p className="mt-2 text-muted-foreground">
          Public reading, creator tools, AI suggestions, and a customizable home
          for your writing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          icon={<PenTool className="h-5 w-5 text-primary" />}
          title="Write in Markdown/MDX"
          desc="Focus on content; code blocks and embeds supported."
          action="Write now"
          href="/write"
        />
        <FeatureCard
          icon={<LayoutDashboard className="h-5 w-5 text-secondary" />}
          title="Customizable blog"
          desc="Upload your logo, choose a theme, and pick your layout."
          action="See themes"
          href="/settings"
        />
        <FeatureCard
          icon={<Share2 className="h-5 w-5 text-accent" />}
          title="One-click social sharing"
          desc="Post to LinkedIn, X, and Instagram after publishing."
          action="Connect social"
          href="/settings/social"
        />
        <FeatureCard
          icon={<Hash className="h-5 w-5 text-primary" />}
          title="AI hashtags & tone"
          desc="Get platform-specific hashtags and wording."
          action="Try AI"
          href="#ai"
        />
        <FeatureCard
          icon={<Newspaper className="h-5 w-5 text-secondary" />}
          title="Daily AI tech brief"
          desc="An auto-published post summarizing daily tech news."
          action="Read today’s"
          href="/blog/ai-daily"
        />
        <FeatureCard
          icon={<Cog className="h-5 w-5 text-accent" />}
          title="Analytics for admins"
          desc="Traffic, reads, sources, top tags—available in /admin."
          action="View analytics"
          href="/admin/analytics"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  action,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  action: string;
  href: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[0_0_0_1px_var(--color-primary)]">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
      >
        {action} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}


function HowItWorks() {
  const steps = [
    {
      title: "Explore",
      desc: "Browse public tech posts and the AI daily brief.",
      href: "/blog",
    },
    {
      title: "Write",
      desc: "Draft in Markdown/MDX. Add tags and cover.",
      href: "/write",
    },
    {
      title: "Customize",
      desc: "Upload logo, pick a theme and layout.",
      href: "/settings",
    },
    {
      title: "Publish & Share",
      desc: "One-click syndication to LinkedIn, X, Instagram.",
      href: "/settings/social",
    },
  ];
  return (
    <section id="how" className="py-16">
      <h2 className="text-3xl font-bold">How it works</h2>
      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="text-xs font-semibold text-muted-foreground">
              Step {i + 1}
            </div>
            <div className="mt-1 text-lg font-semibold">{s.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            <Link
              href={s.href}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Go <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

function AIFlow() {
  return (
    <section
      id="ai"
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold">
            AI that adapts your content per platform
          </h2>
          <p className="mt-2 text-muted-foreground">
            Convert a single blog post into tailored social posts. Get hashtag
            suggestions for Instagram, a concise hook for X, and a professional
            rewrite for LinkedIn.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground">
            <li>Auto-generate daily tech update posts</li>
            <li>Hashtag recommendations by topic and platform</li>
            <li>Headline and excerpt A/B suggestions</li>
            <li>Link previews with Open Graph images</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Link
              href="/write"
              className="rounded-2xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-primary-foreground font-semibold"
            >
              Try the AI editor
            </Link>
            <Link
              href="/blog/ai-daily"
              className="rounded-2xl border border-border bg-card px-4 py-3 font-medium text-foreground hover:bg-muted"
            >
              Read AI daily
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className="text-sm font-semibold">AI Output Preview</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Share2 className="h-4 w-4 text-secondary" /> Instagram
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Cutting-edge AI chips are reshaping on-device ML. Here are 3
                  takeaways from today’s update.{" "}
                  <span className="opacity-70">#EdgeAI</span>{" "}
                  <span className="opacity-70">#ChipDesign</span>{" "}
                  <span className="opacity-70">#OnDevice</span>
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Share2 className="h-4 w-4 text-accent" /> LinkedIn
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  We broke down today’s AI hardware news for builders:
                  perf/watt, memory bandwidth, and model support—plus migration
                  tips for teams.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Share2 className="h-4 w-4 text-primary" /> X (Twitter)
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  AI on the edge is leveling up. Faster inference, lower cost,
                  better privacy. 3 charts you’ll want to see.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Share2 className="h-4 w-4 text-secondary" /> Cross-post
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Schedule posts and track clicks—all tied to your original
                  blog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="py-16">
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Built-in privacy & moderation</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Admin analytics are auth-gated. You control post visibility and
              social connections. OAuth for contributors, role-based access for
              admins.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-semibold">
            <ShieldCheck className="h-4 w-4 text-accent" /> OAuth + RBAC enabled
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">Loved by builders</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            q: "Publishing and syndicating in one click is a game-changer.",
            a: "DevRel @ SaaS",
          },
          {
            q: "Daily AI brief keeps our team aligned without doomscrolling.",
            a: "Lead Engineer",
          },
          {
            q: "Customization took 2 minutes—now it looks like our brand.",
            a: "Indie Hacker",
          },
        ].map((t, i) => (
          <blockquote
            key={i}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <Stars className="h-4 w-4 text-accent" />
            <p className="mt-3 text-sm text-foreground">“{t.q}”</p>
            <footer className="mt-2 text-xs text-muted-foreground">— {t.a}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}


function FAQ() {
  const items = [
    {
      q: "Is the blog public?",
      a: "Yes. All published posts are public. You can still keep drafts private until ready.",
    },
    {
      q: "How do AI daily posts work?",
      a: "Each day we generate a concise tech update post. You can edit before publishing or let it auto-publish.",
    },
    {
      q: "Can I make a personal site?",
      a: "Upload a logo, pick a theme and layout, and your public profile becomes a personal blog URL.",
    },
    {
      q: "Which socials are supported?",
      a: "LinkedIn, X (Twitter), and Instagram at launch. More via webhooks soon.",
    },
  ];
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-border bg-card p-4 open:shadow-[0_0_0_1px_var(--color-secondary)]"
          >
            <summary className="cursor-pointer list-none font-semibold">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
        <h2 className="text-3xl font-bold">Start your tech blog today</h2>
        <p className="mt-2 max-w-xl opacity-90">
          Publish publicly, get AI-generated daily updates, and auto-share to
          your social channels. Your logo. Your theme. Your audience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="rounded-2xl bg-card px-4 py-3 font-semibold text-foreground"
          >
            Create free account
          </Link>
          <Link
            href="/blog"
            className="rounded-2xl border border-border px-4 py-3 font-semibold"
          >
            Browse posts
          </Link>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-muted blur-3xl" />
      </div>
    </section>
  );
}

function Newsletter() {
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [msg, setMsg] = React.useState<string>("");

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");

    const form = e.currentTarget;
    const email = (
      form.querySelector("#email") as HTMLInputElement
    ).value.trim();
    const nameInput = form.querySelector("#name") as HTMLInputElement | null;
    const name = nameInput?.value?.trim();

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("error");
      setMsg("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to subscribe");
      }

      setStatus("success");
      setMsg("Subscribed! Check your inbox for a welcome email.");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setMsg(err.message || "Something went wrong. Try again.");
      } else {
        setMsg("Something went wrong. Try again.");
      }
    } finally {
      setStatus((s) => (s === "loading" ? "idle" : s));
    }
  }

  return (
    <section className="py-16">
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
        <h2 className="text-2xl font-bold">Stay in the loop</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Weekly roundup of the best tech posts and AI highlights. No spam,
          unsubscribe anytime.
        </p>

        <form
          className="mt-4 flex max-w-md flex-col gap-2"
          onSubmit={handleSubscribe}
        >
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="flex items-center gap-2">
            <input
              id="email"
              type="email"
              required
              placeholder="you@domain.com"
              className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </div>

          {msg && (
            <p
              className={`text-sm ${
                status === "error" ? "text-red-500" : "text-accent"
              }`}
            >
              {msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TechVerse Blog. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link className="hover:text-foreground text-muted-foreground" href="/about">
              About
            </Link>
            <Link className="hover:text-foreground text-muted-foreground" href="/contact">
              Contact
            </Link>
            <Link className="hover:text-foreground text-muted-foreground" href="/privacy">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

