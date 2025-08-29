"use client";

import DashboardLayout from "../_components/DashboardLayout";
import { useState } from "react";
import { Hash, Save, Eye } from "lucide-react";

export default function WritePage() {
  const [content, setContent] = useState("");

  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Write a new post</h1>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80"
            >
              <Eye className="h-4 w-4" /> Preview
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Save className="h-4 w-4" /> Save draft
            </button>
          </div>
        </div>

        {/* Title */}
        <input
          placeholder="Post title"
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Hash className="h-4 w-4" /> Tags
          </span>
          <input
            placeholder="ai, react, devops"
            className="rounded-xl border border-border bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Content */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content in Markdown…"
          rows={14}
          className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </DashboardLayout>
  );
}
