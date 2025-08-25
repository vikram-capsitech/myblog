"use client";

import Link from "next/link";
import { Calendar, Clock, Tag, Share2 } from "lucide-react";

const POST = {
  title: "Edge AI: What’s Next",
  date: "Jul 21, 2025",
  read: "6 min read",
  tags: ["ai","edge","hardware"],
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
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/blog" className="text-sm text-zinc-300 hover:text-white">← Back to all posts</Link>

        <header className="mt-4">
          <h1 className="text-3xl font-extrabold">{POST.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {POST.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {POST.read}</span>
            <div className="flex items-center gap-2">
              {POST.tags.map(t => (
                <Link key={t} href={`/tags/${t}`} className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[11px] text-zinc-300 hover:bg-zinc-800/60">
                  <Tag className="h-3 w-3" /> {t}
                </Link>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-6 aspect-[16/7] w-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900" />

        {/* content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
          <div className="prose prose-invert prose-zinc max-w-none">
            {POST.content.split("\n").map((line, i) => (
              <p key={i} className="leading-7 text-zinc-200">
                {line.startsWith("## ") ? <span className="block text-2xl font-bold mt-6">{line.replace("## ", "")}</span> : line.trim()}
              </p>
            ))}
          </div>

          {/* side card */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <div className="text-sm font-semibold">Share</div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["LinkedIn","X","Copy"].map(lbl => (
                  <button key={lbl} className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm hover:bg-zinc-800/60 flex items-center justify-center gap-1">
                    <Share2 className="h-4 w-4" /> {lbl}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
              <div className="text-sm font-semibold">More like this</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link className="text-indigo-300 hover:text-indigo-200" href="/blog/webgpu-for-ml">WebGPU for ML</Link></li>
                <li><Link className="text-indigo-300 hover:text-indigo-200" href="/blog/rag-patterns">RAG Patterns in Prod</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
