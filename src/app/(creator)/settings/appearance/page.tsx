"use client";

import DashboardLayout from "../../_components/DashboardLayout";
import { useState } from "react";

export default function AppearancePage() {
  const [theme, setTheme] = useState<"midnight"|"emerald"|"purple">("midnight");

  const presets = {
    midnight: { chip: "bg-indigo-500/20 text-indigo-200", card: "bg-zinc-900/60 border-zinc-800" },
    emerald:  { chip: "bg-emerald-500/20 text-emerald-200", card: "bg-emerald-950/40 border-emerald-900/60" },
    purple:   { chip: "bg-fuchsia-500/20 text-fuchsia-200", card: "bg-fuchsia-950/40 border-fuchsia-900/60" },
  }[theme];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h1 className="text-xl font-bold">Appearance</h1>
          <div className="mt-4 flex items-center gap-2">
            {(["midnight","emerald","purple"] as const).map(t => (
              <button key={t}
                onClick={()=>setTheme(t)}
                className={`rounded-xl px-3 py-1.5 text-sm capitalize ${theme===t ? "bg-gradient-to-r from-indigo-500/80 to-fuchsia-500/80" : "border border-zinc-800"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className={`rounded-2xl border p-6 ${presets.card}`}>
          <div className="text-sm font-semibold mb-3">Live preview</div>
          <div className="grid gap-3 md:grid-cols-3">
            {[1,2,3].map(i=>(
              <div key={i} className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-3">
                <div className="h-28 rounded-lg bg-zinc-800" />
                <div className="mt-2 h-4 w-2/3 rounded bg-zinc-800" />
                <div className="mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] align-middle {presets.chip}">#tech</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold">Save theme</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
