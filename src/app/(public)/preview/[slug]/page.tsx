"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, Eye } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MOCK: Record<string, any> = {
  "edge-ai-whats-next": {
    title: "Preview · Edge AI: What’s Next",
    date: "Draft • not published",
    read: "~6 min",
    tags: ["ai", "edge", "hardware"],
    content: `
## Why edge?
Lower latency, better privacy, and reduced cost.

## Chips & frameworks
NPUs on devices plus libraries like Core ML / NNAPI.

## Developer takeaways
- pick smaller models
- quantize aggressively
- cache smartly
`,
  },
};

export default function PreviewPage({ params }: { params: { slug: string } }) {
  const post = MOCK[params.slug] ?? {
    title: `Preview · ${params.slug}`,
    date: "Draft • not published",
    read: "~5 min",
    tags: ["tech"],
    content:
      "## Your draft preview\n\nThis is a placeholder. Wire your data later.",
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Preview banner */}
      <div className="border-b border-amber-400/30 bg-amber-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-sm text-amber-300">
          You’re viewing a <strong>preview</strong>. This link isn’t indexed and
          may show draft content.
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back
        </Link>

        <header className="mt-4">
          <h1 className="text-3xl font-extrabold">{post.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.read}
            </span>
            <div className="flex items-center gap-2">
              {post.tags.map((t: string) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] text-foreground/80"
                >
                  <Tag className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* cover */}
        <div className="mt-6 aspect-[16/7] w-full rounded-2xl border border-border bg-muted" />

        {/* content + side */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* simple markdown-ish render */}
          <div className="max-w-none">
            {post.content.split("\n").map((line: string, i: number) => {
              const trimmed = line.trim();
              if (!trimmed) return <p key={i} className="h-3" />;
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-6 text-2xl font-bold">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="leading-7 text-foreground/90">
                  {trimmed}
                </p>
              );
            })}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="text-sm font-semibold">Visibility</div>
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Eye className="h-3.5 w-3.5" /> Only people with this link can
                view.
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="text-sm font-semibold">Next steps</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-foreground/80">
                <li>Review content & cover</li>
                <li>Add tags & SEO metadata</li>
                <li>Publish from your dashboard</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
