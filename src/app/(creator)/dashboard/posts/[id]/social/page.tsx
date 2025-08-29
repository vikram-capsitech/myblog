/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DashboardLayout from "@/app/(creator)/_components/DashboardLayout";
import { MiniBar } from "@/app/(creator)/_components/MiniBar";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function PostSocialDetail() {
  // mock post+metrics
  const post = {
    id: "p1",
    title: "Edge AI: What’s Next",
    slug: "edge-ai-whats-next",
    publishedAt: "Jun 22",
    platforms: {
      ig: {
        reach: 9800,
        likes: 640,
        comments: 84,
        shares: 120,
        series: [10, 20, 16, 24, 22, 28, 30],
      },
      li: {
        impressions: 5200,
        reactions: 140,
        comments: 26,
        shares: 34,
        series: [6, 10, 8, 12, 10, 14, 16],
      },
      x: {
        impressions: 6100,
        likes: 90,
        replies: 12,
        reposts: 22,
        series: [8, 12, 10, 14, 13, 18, 19],
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">
              Post social detail
            </div>
            <h1 className="text-xl font-bold">{post.title}</h1>
            <div className="text-sm text-muted-foreground">
              Published {post.publishedAt}
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/blog/${post.slug}`}
              className="rounded-xl border border-border bg-muted px-3 py-1.5 text-sm hover:bg-muted/80"
            >
              View post
            </Link>
            <Link
              href={`/edit/${post.id}`}
              className="rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Edit
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <SocialBlock
            title="Instagram"
            icon={<Instagram className="h-4 w-4 text-secondary" />}
            data={[
              { label: "Reach", value: post.platforms.ig.reach },
              { label: "Likes", value: post.platforms.ig.likes },
              { label: "Comments", value: post.platforms.ig.comments },
              { label: "Shares", value: post.platforms.ig.shares },
            ]}
            series={post.platforms.ig.series}
          />

          <SocialBlock
            title="LinkedIn"
            icon={<Linkedin className="h-4 w-4 text-accent" />}
            data={[
              { label: "Impressions", value: post.platforms.li.impressions },
              { label: "Reactions", value: post.platforms.li.reactions },
              { label: "Comments", value: post.platforms.li.comments },
              { label: "Shares", value: post.platforms.li.shares },
            ]}
            series={post.platforms.li.series}
          />

          <SocialBlock
            title="X (Twitter)"
            icon={<Twitter className="h-4 w-4 text-primary" />}
            data={[
              { label: "Impressions", value: post.platforms.x.impressions },
              { label: "Likes", value: post.platforms.x.likes },
              { label: "Replies", value: post.platforms.x.replies },
              { label: "Reposts", value: post.platforms.x.reposts },
            ]}
            series={post.platforms.x.series}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

function SocialBlock({ title, icon, data, series }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon} {title}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {data.map((d: any) => (
          <div
            key={d.label}
            className="rounded-xl border border-border bg-muted/50 p-3"
          >
            <div className="text-xs text-muted-foreground">{d.label}</div>
            <div className="mt-1 text-lg font-semibold text-foreground">
              {d.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <MiniBar values={series} />
        <div className="mt-1 text-[11px] text-muted-foreground">
          7-day trend
        </div>
      </div>
    </div>
  );
}
