"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, FileEdit, FilePlus2, FolderOpen, Settings,
  Palette, Share2, BarChart3, LogOut
} from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/write", label: "Write", icon: FilePlus2 },
  { href: "/drafts", label: "Drafts", icon: FolderOpen },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/settings/appearance", label: "Appearance", icon: Palette },
  { href: "/settings/social", label: "Social", icon: Share2 },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-zinc-100">
      <header className="border-b border-zinc-800/60 bg-[#0B0F19]/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">TechVerse</Link>
          <div className="flex items-center gap-2">
            <Link href="/write" className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 text-sm font-semibold">New post</Link>
            <button className="rounded-xl border border-zinc-800 px-3 py-1.5 text-sm flex items-center gap-1">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <nav className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-2">
            {nav.map(({ href, label, icon: Icon }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm my-0.5
                    ${active ? "bg-zinc-800 text-white" : "hover:bg-zinc-800/60 text-zinc-300"}`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-zinc-800/70 pt-2">
              <Link href="/dashboard" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-zinc-800/60 text-zinc-300">
                <BarChart3 className="h-4 w-4" /> Analytics
              </Link>
              <Link href="/drafts" className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-zinc-800/60 text-zinc-300">
                <FileEdit className="h-4 w-4" /> Manage posts
              </Link>
            </div>
          </nav>
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10">{children}</main>
      </div>
    </div>
  );
}
