"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, Eye } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MOCK: Record<string, any> = {
  "edge-ai-whats-next": {
    title: "Preview · Edge AI: What’s Next",
    date: "Draft • not published",
    read: "~6 min",
    tags: ["ai","edge","hardware"],
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
    content: "## Your draft preview\n\nThis is a placeholder. Wire your data later.",
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="border-b border-amber-400/20 bg-amber-500/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-sm text-amber-200">
          You’re viewing a <strong>preview</strong>. This link isn’t indexed and may show draft content.
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/blog" className="text-sm text-zinc-300 hover:text-white">← Back</Link>

        <header className="mt-4">
          <h1 className="text-3xl font-extrabold">{post.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.read}</span>
            <div className="flex items-center gap-2">
              {post.tags.map((t: string) => (
                <span key={t} className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[11px] text-zinc-300">
                  <Tag className="h-3 w-3" /> {t}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-6 aspect-[16/7] w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="prose prose-invert prose-zinc max-w-none">
            {post.content.split("\n").map((line: string, i: number) => (
              <p key={i} className="leading-7 text-zinc-200">
                {line.startsWith("## ") ? <span className="block text-2xl font-bold mt-6">{line.replace("## ", "")}</span> : line.trim()}
              </p>
            ))}
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <div className="text-sm font-semibold">Visibility</div>
              <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                <Eye className="h-3.5 w-3.5" /> Only people with this link can view.
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <div className="text-sm font-semibold">Next steps</div>
              <ul className="mt-2 text-sm text-zinc-300 list-disc pl-5">
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
