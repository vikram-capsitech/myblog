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
        {/* Main editor */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={16}
            className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-1 rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80">
              <Save className="h-4 w-4" /> Save
            </button>
            <button className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <Upload className="h-4 w-4" /> Publish
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="rounded-2xl border border-border bg-card p-6 space-y-4">
          <div>
            <div className="text-sm font-semibold">Metadata</div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> Scheduled: not set
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Tag className="h-4 w-4" /> Tags:{" "}
              <span className="text-foreground">ai, edge</span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Cover</div>
            <div className="mt-2 h-28 rounded-xl bg-muted" />
          </div>

          <div>
            <div className="text-sm font-semibold">Visibility</div>
            <div className="mt-2 flex items-center gap-2">
              <button className="rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80">
                Public
              </button>
              <button className="rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80">
                Private
              </button>
            </div>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
