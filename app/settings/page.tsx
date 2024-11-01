"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="設定"
        description="プラットフォームの設定と環境設定"
      >
        <Button>
          <Save className="mr-2 h-4 w-4" />
          設定を保存
        </Button>
      </PageHeader>

      <div className="grid gap-6">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">一般設定</h3>
          <p className="text-sm text-muted-foreground mt-2">
            基本的なプラットフォーム設定の管理
          </p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-semibold">通知設定</h3>
          <p className="text-sm text-muted-foreground mt-2">
            メールと通知の設定管理
          </p>
        </div>
      </div>
    </div>
  );
}