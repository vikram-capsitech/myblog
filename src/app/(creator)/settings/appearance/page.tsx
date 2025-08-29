"use client";

import DashboardLayout from "../../_components/DashboardLayout";
import { useState } from "react";

type ThemeKey = "midnight" | "emerald" | "purple";

export default function AppearancePage() {
  const [theme, setTheme] = useState<ThemeKey>("midnight");

  // Preview presets (card & chip styles inside the live preview only)
  const PRESETS: Record<
    ThemeKey,
    { chip: string; card: string; tile: string }
  > = {
    midnight: {
      // use semantic tokens so it matches your app theme
      chip: "bg-primary/15 text-primary",
      card: "bg-card border-border",
      tile: "border-border/70 bg-muted/50",
    },
    emerald: {
      // a tinted variant, still with sensible borders
      chip: "bg-emerald-500/15 text-emerald-300",
      card: "border-emerald-900/60 bg-emerald-950/40",
      tile: "border-emerald-900/50 bg-emerald-950/30",
    },
    purple: {
      chip: "bg-fuchsia-500/15 text-fuchsia-300",
      card: "border-fuchsia-900/60 bg-fuchsia-950/40",
      tile: "border-fuchsia-900/50 bg-fuchsia-950/30",
    },
  };

  const preset = PRESETS[theme];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header + theme picker */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h1 className="text-xl font-bold">Appearance</h1>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {(["midnight", "emerald", "purple"] as const).map((t) => {
              const active = theme === t;
              return (
                <button
                  key={t}
                  onClick={() => setTheme(t)}
                  className={`capitalize rounded-xl px-3 py-1.5 text-sm transition
                    ${
                      active
                        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-sm"
                        : "border border-border bg-muted hover:bg-muted/80"
                    }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live preview (uses the selected preset styles) */}
        <div className={`rounded-2xl border p-6 ${preset.card}`}>
          <div className="mb-3 text-sm font-semibold">Live preview</div>

          <div className="grid gap-3 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-xl border p-3 ${preset.tile}`}
              >
                <div className="h-28 rounded-lg bg-muted" />
                <div className="mt-2 h-4 w-2/3 rounded bg-muted" />
                <span
                  className={`mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] ${preset.chip}`}
                >
                  #tech
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Save theme
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
