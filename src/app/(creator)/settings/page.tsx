"use client";

import DashboardLayout from "../_components/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 rounded-2xl border border-border bg-card p-6">
        <h1 className="text-xl font-bold">Profile</h1>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm text-muted-foreground">Name</label>
            <input
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@domain.com"
              type="email"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-muted-foreground">Bio</label>
          <textarea
            className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            rows={4}
            placeholder="Short bio…"
          />
        </div>

        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
          Save changes
        </button>
      </div>
    </DashboardLayout>
  );
}
