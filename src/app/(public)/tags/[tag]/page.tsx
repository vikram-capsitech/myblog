"use client";

import Link from "next/link";

const POSTS = [
  { slug: "edge-ai-whats-next", title: "Edge AI: What’s Next", tags: ["ai","edge"] },
  { slug: "webgpu-for-ml", title: "WebGPU for ML", tags: ["ml","webgpu"] },
  { slug: "rag-patterns", title: "RAG Patterns in Prod", tags: ["ai","rag"] },
];

export default function TagPage({ params }: { params: { tag: string } }) {
  const list = POSTS.filter(p => p.tags.includes(params.tag));
  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">#{params.tag}</h1>
        <ul className="mt-6 space-y-2">
          {list.map(p => (
            <li key={p.slug} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3">
              <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
            </li>
          ))}
          {list.length === 0 && <li className="text-sm text-zinc-400">No posts for this tag yet.</li>}
        </ul>
      </div>
    </main>
  );
}
