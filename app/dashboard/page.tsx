"use client";

import { PageHeader } from "@/components/page-header";
import { StatsCard } from "@/components/stats-card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  FileText, 
  ArrowUpRight,
  ArrowDownRight,
  Plus
} from "lucide-react";

const stats = [
  {
    title: "アクティブテンプレート",
    value: "24",
    change: "+12%",
    trend: "up" as const,
    icon: FileText,
    trendIcon: ArrowUpRight,
  },
  {
    title: "チームメンバー",
    value: "12",
    change: "+3",
    trend: "up" as const,
    icon: Users,
    trendIcon: ArrowUpRight,
  },
  {
    title: "自動化プロセス数",
    value: "156",
    change: "+22%",
    trend: "up" as const,
    icon: BarChart3,
    trendIcon: ArrowUpRight,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="ダッシュボード"
        description="業務自動化の状況をモニタリング"
        className="pb-8"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          新規プロセス
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">最近の活動</h3>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-lg border p-4"
              >
                <div className="h-8 w-8 rounded-full bg-secondary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">プロセステンプレート更新</p>
                  <p className="text-sm text-muted-foreground">
                    請求書処理 v2.1
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">2時間前</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">クイックアクション</h3>
          <div className="mt-4 grid gap-4">
            {[
              { title: "テンプレート作成", icon: FileText },
              { title: "メンバー追加", icon: Users },
              { title: "レポート確認", icon: BarChart3 },
            ].map((action) => {
              const Icon = action.icon;
              return (
                <Button
                  key={action.title}
                  variant="outline"
                  className="justify-start"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {action.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}