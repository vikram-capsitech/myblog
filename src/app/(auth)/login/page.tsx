"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setMsg("(UI demo) Logged in ✅"); }, 800);
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-zinc-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="mt-2 text-sm text-zinc-400">Welcome back to TechVerse.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-3">
              <Mail className="h-4 w-4 text-zinc-500" />
              <input id="email" type="email" required placeholder="you@domain.com" className="w-full bg-transparent py-2 text-sm focus:outline-none" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm">Password</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-3">
              <Lock className="h-4 w-4 text-zinc-500" />
              <input id="password" type="password" required placeholder="••••••••" className="w-full bg-transparent py-2 text-sm focus:outline-none" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
            {loading ? "Signing in…" : "Sign in"}
          </button>
          {msg && <p className="text-sm text-emerald-300">{msg}</p>}
        </form>

        <p className="mt-6 text-sm text-zinc-400">
          New here? <Link className="text-indigo-300 underline" href="/signup">Create an account</Link>
        </p>
      </div>
    </main>
  );
}