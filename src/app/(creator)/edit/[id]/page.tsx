"use client";

import DashboardLayout from "../../_components/DashboardLayout";
import { useState } from "react";
import { Save, Upload, Calendar, Tag } from "lucide-react";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState("Edge AI: What’s Next");
  const [content, setContent] = useState("## Intro\n…");

  return (
    <DashboardLayout>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-3">
          <input value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-lg" />
          <textarea value={content} onChange={(e)=>setContent(e.target.value)} rows={16} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm" />
          <div className="flex gap-2">
            <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm flex items-center gap-1"><Save className="h-4 w-4"/> Save</button>
            <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 text-sm font-semibold flex items-center gap-1"><Upload className="h-4 w-4"/> Publish</button>
          </div>
        </div>
        <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-4">
          <div>
            <div className="text-sm font-semibold">Metadata</div>
            <div className="mt-2 text-sm text-zinc-400 flex items-center gap-2"><Calendar className="h-4 w-4"/> Scheduled: not set</div>
            <div className="mt-2 text-sm text-zinc-400 flex items-center gap-2"><Tag className="h-4 w-4"/> Tags: <span className="text-zinc-300">ai, edge</span></div>
          </div>
          <div>
            <div className="text-sm font-semibold">Cover</div>
            <div className="mt-2 h-28 rounded-xl bg-zinc-800" />
          </div>
          <div>
            <div className="text-sm font-semibold">Visibility</div>
            <div className="mt-2 flex items-center gap-2">
              <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm">Public</button>
              <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm">Private</button>
            </div>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
