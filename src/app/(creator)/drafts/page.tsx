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
      <div className="rounded-2xl border border-border bg-card p-6">
        <h1 className="text-xl font-bold">Drafts</h1>

        <div className="mt-4 divide-y divide-border">
          {drafts.map((d) => (
            <div key={d.id} className="py-3 flex items-center justify-between">
              <div>
                <div className="font-medium">{d.title}</div>
                <div className="text-xs text-muted-foreground">
                  {d.updated} · {d.words} words
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/edit/${d.id}`}
                  className="inline-flex items-center gap-1 rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80"
                >
                  <Pencil className="h-4 w-4" /> Edit
                </Link>

                <button
                  className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  <Upload className="h-4 w-4" /> Publish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
