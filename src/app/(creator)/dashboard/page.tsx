/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DashboardLayout from "../_components/DashboardLayout";
import { StatCard } from "../_components/StatCard";
import { MiniBar } from "../_components/MiniBar";
import Link from "next/link";
import {
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const posts = [
  {
    id: "p1",
    title: "Edge AI: What’s Next",
    status: "Published",
    date: "Jun 22",
    views: 4200,
    likes: 320,
    comments: 28,
    socials: {
      ig: { reach: 9800, likes: 640 },
      li: { impressions: 5200, reactions: 140 },
      x: { impressions: 6100, likes: 90 },
    },
  },
  {
    id: "p2",
    title: "WebGPU for ML",
    status: "Draft",
    date: "Jun 20",
    views: 0,
    likes: 0,
    comments: 0,
    socials: { ig: null, li: null, x: null },
  },
  {
    id: "p3",
    title: "Serverless for Startups",
    status: "Published",
    date: "Jun 15",
    views: 2800,
    likes: 190,
    comments: 12,
    socials: {
      ig: { reach: 5200, likes: 320 },
      li: { impressions: 4100, reactions: 110 },
      x: { impressions: 3000, likes: 70 },
    },
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total views"
            value="12,480"
            hint="+8% vs last 7 days"
          />
          <StatCard label="Reads" value="5,340" hint="+5%" />
          <StatCard label="Followers" value="1,142" hint="+21" />
          <StatCard label="Posts" value="24" />
        </div>

        {/* Recent posts */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent posts</h2>
            <Link
              href="/drafts"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              Manage all
            </Link>
          </div>
          <div className="mt-4 divide-y divide-border">
            {posts.map((p) => (
              <div key={p.id} className="py-3 flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-medium">{p.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {p.status} · {p.date}
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-foreground/80">
                  <span className="flex items-center gap-1 text-sm">
                    <Eye className="h-4 w-4" /> {p.views}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Heart className="h-4 w-4" /> {p.likes}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <MessageCircle className="h-4 w-4" /> {p.comments}
                  </span>
                </div>
                <Link
                  href={`/edit/${p.id}`}
                  className="rounded-xl border border-border px-3 py-1.5 text-sm hover:bg-muted"
                >
                  Edit
                </Link>
                <Link
                  href={`/dashboard/posts/${p.id}/social`}
                  className="rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Social
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Social performance overview */}
        <section className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Social performance (last 7 days)
            </h2>
            <Link
              href="/settings/social"
              className="text-sm font-semibold text-primary hover:text-primary/80"
            >
              Manage accounts
            </Link>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <PlatformCard
              name="Instagram"
              icon={<Instagram className="h-4 w-4 text-secondary" />}
              metrics={{
                reach: 15200,
                likes: 2140,
                comments: 180,
                shares: 240,
              }}
              bars={[12, 18, 22, 16, 28, 24, 30]}
            />
            <PlatformCard
              name="LinkedIn"
              icon={<Linkedin className="h-4 w-4 text-accent" />}
              metrics={{
                impressions: 10800,
                reactions: 520,
                comments: 90,
                shares: 70,
              }}
              bars={[8, 12, 10, 14, 16, 12, 18]}
            />
            <PlatformCard
              name="X (Twitter)"
              icon={<Twitter className="h-4 w-4 text-primary" />}
              metrics={{
                impressions: 12400,
                likes: 420,
                replies: 60,
                reposts: 110,
              }}
              bars={[10, 15, 12, 18, 20, 16, 22]}
            />
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

function PlatformCard({ name, icon, metrics, bars }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon} {name}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {Object.entries(metrics).map(([k, v]) => (
          <div
            key={k}
            className="rounded-xl border border-border bg-muted/50 p-3"
          >
            <div className="text-xs capitalize text-muted-foreground">{k}</div>
            <div className="mt-1 text-lg font-semibold text-foreground">
              {v as any}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <MiniBar values={bars} />
        <div className="mt-1 text-[11px] text-muted-foreground">
          7-day activity
        </div>
      </div>
    </div>
  );
}
