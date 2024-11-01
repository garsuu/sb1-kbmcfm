"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="分析"
        description="プロセスのパフォーマンスと効率性の分析"
      >
        <Button>
          <Download className="mr-2 h-4 w-4" />
          レポート出力
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">処理効率</h3>
          <p className="text-sm text-muted-foreground mt-2">
            プロセス別の処理時間と効率性の分析
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">エラー分析</h3>
          <p className="text-sm text-muted-foreground mt-2">
            発生したエラーの種類と頻度の分析
          </p>
        </div>
      </div>
    </div>
  );
}