"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const POSTS = [
  { slug: "edge-ai-whats-next", title: "Edge AI: What’s Next" },
  { slug: "webgpu-for-ml", title: "WebGPU for ML" },
  { slug: "rag-patterns", title: "RAG Patterns in Prod" },
  { slug: "serverless-for-startups", title: "Serverless for Startups" },
];

export default function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(
    () => POSTS.filter(p => p.title.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Search</h1>
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-3">
          <Search className="h-4 w-4 text-zinc-500" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search articles…" className="bg-transparent py-2 text-sm focus:outline-none w-full" />
        </div>

        <ul className="mt-6 space-y-2">
          {results.map(r => (
            <li key={r.slug} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
              <Link href={`/blog/${r.slug}`} className="hover:underline">{r.title}</Link>
            </li>
          ))}
          {q && results.length === 0 && (
            <li className="text-sm text-zinc-400">No results for “{q}”.</li>
          )}
        </ul>
      </div>
    </main>
  );
}
