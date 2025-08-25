"use client";

import DashboardLayout from "../_components/DashboardLayout";
import Link from "next/link";
import { Pencil, Upload } from "lucide-react";

const drafts = [
  { id: "p2", title: "WebGPU for ML", updated: "2h ago", words: 860 },
  { id: "p4", title: "RAG Patterns", updated: "yesterday", words: 1240 },
];

export default function DraftsPage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <h1 className="text-xl font-bold">Drafts</h1>
        <div className="mt-4 divide-y divide-zinc-800">
          {drafts.map(d => (
            <div key={d.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{d.title}</div>
                <div className="text-xs text-zinc-400">{d.updated} · {d.words} words</div>
              </div>
              <div className="flex items-center gap-2">
                <Link href={`/edit/${d.id}`} className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm flex items-center gap-1"><Pencil className="h-4 w-4"/> Edit</Link>
                <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 text-sm font-semibold flex items-center gap-1"><Upload className="h-4 w-4"/> Publish</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
