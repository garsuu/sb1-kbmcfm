"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Plus, FileStack } from "lucide-react";

export default function CustomWorkflowsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="カスタムワークフロー"
        description="クライアントごとにカスタマイズされたワークフロー"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          新規カスタマイズ
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <FileStack className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">特殊請求書処理</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              特殊フォーマット対応の請求書処理
            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-muted-foreground">クライアント: サンプル株式会社</p>
              <p className="font-medium">カスタム</p>
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}