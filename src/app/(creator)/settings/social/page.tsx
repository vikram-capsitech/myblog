"use client";

import DashboardLayout from "../../_components/DashboardLayout";
import { Instagram, Linkedin, Twitter, Link2 } from "lucide-react";

const rows = [
  { platform: "Instagram", icon: <Instagram className="h-4 w-4 text-pink-300" />, status: "Connected", account: "@techverse", lastSync: "2h ago" },
  { platform: "LinkedIn",  icon: <Linkedin className="h-4 w-4 text-sky-300" />,  status: "Connected", account: "TechVerse (Page)", lastSync: "3h ago" },
  { platform: "X (Twitter)", icon: <Twitter className="h-4 w-4 text-indigo-300" />, status: "Not connected", account: "-", lastSync: "-" },
];

export default function SocialSettingsPage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <h1 className="text-xl font-bold">Social connections</h1>
        <div className="mt-4 divide-y divide-zinc-800">
          {rows.map(r => (
            <div key={r.platform} className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {r.icon}
                <div>
                  <div className="font-medium">{r.platform}</div>
                  <div className="text-xs text-zinc-400">Account: {r.account}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs ${r.status === "Connected" ? "text-emerald-300" : "text-zinc-400"}`}>{r.status}</span>
                <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm flex items-center gap-1"><Link2 className="h-4 w-4"/> {r.status === "Connected" ? "Re‑connect" : "Connect"}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
