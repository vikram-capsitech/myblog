"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, Share2 } from "lucide-react";

const POST = {
  title: "Edge AI: What’s Next",
  date: "Jul 21, 2025",
  read: "6 min read",
  tags: ["ai", "edge", "hardware"],
  cover: "",
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
};

export default function BlogReaderPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to all posts
        </Link>

        <header className="mt-4">
          <h1 className="text-3xl font-extrabold">{POST.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {POST.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {POST.read}
            </span>
            <div className="flex items-center gap-2">
              {POST.tags.map((t) => (
                <Link
                  key={t}
                  href={`/tags/${t}`}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] text-foreground/80 hover:bg-muted/80"
                >
                  <Tag className="h-3 w-3" /> {t}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* cover */}
        <div className="mt-6 aspect-[16/7] w-full rounded-2xl border border-border bg-muted" />

        {/* content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="max-w-none">
            {POST.content.split("\n").map((line, i) => {
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

          {/* side card */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="text-sm font-semibold">Share</div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["LinkedIn", "X", "Copy"].map((lbl) => (
                  <button
                    key={lbl}
                    className="flex items-center justify-center gap-1 rounded-xl border border-border bg-muted px-3 py-2 text-sm hover:bg-muted/80"
                  >
                    <Share2 className="h-4 w-4" /> {lbl}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="text-sm font-semibold">More like this</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link className="font-semibold text-primary hover:text-primary/80" href="/blog/webgpu-for-ml">
                    WebGPU for ML
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold text-primary hover:text-primary/80" href="/blog/rag-patterns">
                    RAG Patterns in Prod
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
