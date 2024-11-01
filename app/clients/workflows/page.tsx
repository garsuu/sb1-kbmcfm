'use client';

import { PageHeader } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Plus, Bot } from 'lucide-react';

export default function WorkflowsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="AIワークフロー"
        description="クライアントごとのAIワークフロー一覧"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          AIワークフロー作成依頼
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">請求書処理ワークフロー</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              AIによる自動データ抽出と処理の自動化
            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-muted-foreground">最終実行: 1時間前</p>
              <p className="font-medium">v2.1</p>
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}
