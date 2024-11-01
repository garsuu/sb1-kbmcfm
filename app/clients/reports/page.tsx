"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download, Clock } from "lucide-react";

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="レポート"
        description="クライアントごとの稼働時間レポート"
      >
        <Button>
          <Download className="mr-2 h-4 w-4" />
          レポート出力
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">月次稼働レポート</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              2024年3月の稼働時間サマリー
            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-muted-foreground">生成日: 2024/03/31</p>
              <p className="font-medium">PDF</p>
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}