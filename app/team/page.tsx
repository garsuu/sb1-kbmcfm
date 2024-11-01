"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="チーム"
        description="チームメンバーと権限の管理"
      >
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          メンバー追加
        </Button>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-secondary" />
              <div>
                <h3 className="font-semibold">山田 太郎</h3>
                <p className="text-sm text-muted-foreground">管理者</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              最終ログイン: 1時間前
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}