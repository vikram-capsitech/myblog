"use client";

import DashboardLayout from "../../_components/DashboardLayout";
import { Instagram, Linkedin, Twitter, Link2 } from "lucide-react";

const rows = [
  {
    platform: "Instagram",
    icon: <Instagram className="h-4 w-4 text-secondary" />,
    status: "Connected",
    account: "@techverse",
    lastSync: "2h ago",
  },
  {
    platform: "LinkedIn",
    icon: <Linkedin className="h-4 w-4 text-accent" />,
    status: "Connected",
    account: "TechVerse (Page)",
    lastSync: "3h ago",
  },
  {
    platform: "X (Twitter)",
    icon: <Twitter className="h-4 w-4 text-primary" />,
    status: "Not connected",
    account: "-",
    lastSync: "-",
  },
];

export default function SocialSettingsPage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-border bg-card p-6">
        <h1 className="text-xl font-bold">Social connections</h1>

        <div className="mt-4 divide-y divide-border">
          {rows.map((r) => (
            <div
              key={r.platform}
              className="flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-2">
                {r.icon}
                <div>
                  <div className="font-medium">{r.platform}</div>
                  <div className="text-xs text-muted-foreground">
                    Account: {r.account}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`text-xs ${
                    r.status === "Connected"
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {r.status}
                </span>

                {r.status === "Connected" ? (
                  <button className="inline-flex items-center gap-1 rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80">
                    <Link2 className="h-4 w-4" /> Re-connect
                  </button>
                ) : (
                  <button className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                    <Link2 className="h-4 w-4" /> Connect
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
