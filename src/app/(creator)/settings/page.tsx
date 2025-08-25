"use client";

import DashboardLayout from "../_components/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 space-y-4">
        <h1 className="text-xl font-bold">Profile</h1>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm" placeholder="you@domain.com" />
          </div>
        </div>
        <div>
          <label className="text-sm">Bio</label>
          <textarea className="mt-1 w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-sm" rows={4} placeholder="Short bio…" />
        </div>
        <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold">Save changes</button>
      </div>
    </DashboardLayout>
  );
}
