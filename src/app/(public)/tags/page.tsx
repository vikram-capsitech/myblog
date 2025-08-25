import Link from "next/link";

const TAGS = [
  { tag: "ai", count: 34 },
  { tag: "webgpu", count: 12 },
  { tag: "serverless", count: 18 },
  { tag: "rag", count: 9 },
  { tag: "cloud", count: 22 },
  { tag: "edge", count: 11 },
];

export default function TagsIndex() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Tags</h1>
        <div className="mt-6 flex flex-wrap gap-3">
          {TAGS.map(t => (
            <Link key={t.tag} href={`/tags/${t.tag}`}
              className="rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm hover:bg-zinc-800/60">
              #{t.tag} <span className="text-zinc-400">({t.count})</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
