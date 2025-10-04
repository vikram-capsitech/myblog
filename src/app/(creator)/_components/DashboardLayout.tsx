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
import { SignOutButton } from "@clerk/nextjs";

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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b backdrop-blur h-14 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-border bg-background/80">
        <Link href="/" className="font-semibold tracking-tight">
          TechVerse
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/write"
            className="rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            New post
          </Link>
          <div className="rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80 flex items-center gap-1">
            {/* <LogOut className="h-4 w-4" /> Logout */}
            <SignOutButton />
          </div>
        </div>
      </header>

      {/* Body: sidebar + main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 md:w-64 lg:w-72 p-2 flex flex-col">
          <div className="sticky top-16 rounded-2xl border border-border bg-card p-2">
            <nav className="flex flex-col">
              {nav.map(({ href, label, icon: Icon }) => {
                const active =
                  pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`group my-0.5 flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition
                                      ${
                                        active
                                          ? "bg-primary/10 text-foreground ring-1 ring-primary/30"
                                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                      }`}
                  >
                    <Icon
                      className={`h-4 w-4 transition ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    />
                    {label}
                  </Link>
                );
              })}
              <div className="mt-2 border-t border-border/60 pt-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                >
                  <BarChart3 className="h-4 w-4" /> Analytics
                </Link>
                <Link
                  href="/drafts"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition"
                >
                  <FileEdit className="h-4 w-4" /> Manage posts
                </Link>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-2 col-span-12 md:col-span-9 lg:col-span-10 pb-8">
          <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 lg:p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
