"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-zinc-300">Questions, feedback, partnership ideas—drop us a note.</p>

        <form
          onSubmit={(e)=>{e.preventDefault(); setSent(true);}}
          className="mt-6 space-y-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
        >
          <div>
            <label className="text-sm">Email</label>
            <input className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm" required />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea rows={6} className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm" required />
          </div>
          <button className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold">
            Send message
          </button>
          {sent && <p className="text-sm text-emerald-300">Thanks! We’ll get back to you.</p>}
        </form>
      </div>
    </main>
  );
}
