// app/_components/DashboardLayout.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileEdit,
  FilePlus2,
  FolderOpen,
  Settings,
  Palette,
  Share2,
  BarChart3,
  LogOut,
} from "lucide-react";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/write", label: "Write", icon: FilePlus2 },
  { href: "/drafts", label: "Drafts", icon: FolderOpen },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/settings/appearance", label: "Appearance", icon: Palette },
  { href: "/settings/social", label: "Social", icon: Share2 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b backdrop-blur h-14 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold tracking-tight">
          TechVerse
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/write"
            className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-3 py-1.5 text-sm font-semibold"
          >
            New post
          </Link>
          <button className="rounded-xl border  px-3 py-1.5 text-sm flex items-center gap-1">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </header>

      {/* Body: sidebar + main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 md:w-64 lg:w-72 border-r p-2 flex flex-col">
          <nav className="flex-1">
            {nav.map(({ href, label, icon: Icon }) => {
              const active =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm my-0.5
                    ${
                      active
                        ? "bg-zinc-800"
                        : "hover:bg-zinc-800/60 "
                    }`}
                >
                  <Icon className="h-4 w-4" /> {label}
                </Link>
              );
            })}
            <div className="mt-2 border-t  pt-2">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-zinc-800/60"
              >
                <BarChart3 className="h-4 w-4" /> Analytics
              </Link>
              <Link
                href="/drafts"
                className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-zinc-800/60"
              >
                <FileEdit className="h-4 w-4" /> Manage posts
              </Link>
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
