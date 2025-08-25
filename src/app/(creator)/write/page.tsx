"use client";

import DashboardLayout from "../_components/DashboardLayout";
import { useState } from "react";
import { Hash, Save, Eye } from "lucide-react";

export default function WritePage() {
  const [content, setContent] = useState("");

  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Write a new post</h1>
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm flex items-center gap-1"><Eye className="h-4 w-4"/> Preview</button>
            <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 text-sm font-semibold flex items-center gap-1"><Save className="h-4 w-4"/> Save draft</button>
          </div>
        </div>

        <input placeholder="Post title" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-lg" />

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-zinc-400 flex items-center gap-1"><Hash className="h-4 w-4"/> Tags</span>
          <input placeholder="ai, react, devops" className="bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-sm" />
        </div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content in Markdown…"
          rows={14}
          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm"
        />
      </div>
    </DashboardLayout>
  );
}
