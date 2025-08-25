"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Tag, Calendar, Clock } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  tags: string[];
  cover?: string;
};

const ALL_POSTS: Post[] = [
  { slug: "edge-ai-whats-next", title: "Edge AI: What’s Next", excerpt: "On‑device models, privacy, and cost curves.", date: "Jul 21, 2025", read: "6 min", tags: ["ai","edge","hardware"] },
  { slug: "webgpu-for-ml", title: "WebGPU for ML", excerpt: "Running inference in the browser just got real.", date: "Jul 18, 2025", read: "8 min", tags: ["ml","webgpu","javascript"] },
  { slug: "rag-patterns", title: "RAG Patterns in Prod", excerpt: "Citations, chunking, and cache strategy.", date: "Jul 13, 2025", read: "9 min", tags: ["ai","rag","architecture"] },
  { slug: "serverless-for-startups", title: "Serverless for Startups", excerpt: "Scale without the ops bloat.", date: "Jul 10, 2025", read: "7 min", tags: ["serverless","cloud","startup"] },
];

const TAGS = ["ai","edge","hardware","ml","webgpu","javascript","rag","architecture","serverless","cloud","startup"];

export default function BlogListPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = ALL_POSTS.filter(p =>
    (!tag || p.tags.includes(tag)) &&
    (q.trim().length === 0 ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">All posts</h1>
            <p className="mt-1 text-sm text-zinc-400">Read public tech posts from the community and our daily AI brief.</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-3">
              <Search className="h-4 w-4 text-zinc-500" />
              <input
                value={q}
                onChange={(e)=>setQ(e.target.value)}
                placeholder="Search posts…"
                className="bg-transparent py-2 text-sm focus:outline-none"
              />
            </div>
          </div>
        </header>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button onClick={()=>setTag(null)} className={`rounded-xl px-3 py-1.5 text-sm border ${tag===null ? "bg-zinc-800 text-white border-zinc-700" : "border-zinc-800 hover:bg-zinc-800/60 text-zinc-300"}`}>All</button>
          {TAGS.map(t => (
            <button key={t} onClick={()=>setTag(t)}
              className={`rounded-xl px-3 py-1.5 text-sm border ${tag===t ? "bg-gradient-to-r from-indigo-500/70 to-fuchsia-500/70 border-transparent" : "border-zinc-800 hover:bg-zinc-800/60 text-zinc-300"}`}>
              #{t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          {filtered.map(p => <PostCard key={p.slug} post={p} />)}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-zinc-300">
              No posts match your filters.
            </div>
          )}
        </section>

        {/* Pagination mock */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm hover:bg-zinc-800/60">Previous</button>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-sm">Page 1 of 5</div>
          <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm hover:bg-zinc-800/60">Next</button>
        </div>
      </div>
    </main>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition-shadow hover:shadow-[0_0_0_1px_rgba(99,102,241,0.25)]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900" />
        <h2 className="mt-3 text-xl font-bold group-hover:underline">{post.title}</h2>
        <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.read}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t)=>(
            <Link key={t} href={`/tags/${t}`} className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-[11px] text-zinc-300 hover:bg-zinc-800/60">
              <Tag className="h-3 w-3" /> {t}
            </Link>
          ))}
        </div>
      </Link>
    </article>
  );
}
