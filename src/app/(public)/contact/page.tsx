"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-muted-foreground">
          Questions, feedback, partnership ideas—drop us a note.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-6"
        >
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Message</label>
            <textarea
              rows={6}
              required
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Send message
          </button>

          {sent && (
            <p className="text-sm text-accent mt-2">
              Thanks! We’ll get back to you.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
