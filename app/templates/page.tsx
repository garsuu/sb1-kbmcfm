"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function TemplatesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="テンプレート"
        description="業務プロセステンプレートの作成と管理"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          新規テンプレート
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">請求書処理</h3>
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              請求書データの自動抽出と処理の自動化ワークフロー
            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-muted-foreground">最終更新: 2日前</p>
              <p className="font-medium">v2.1</p>
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}