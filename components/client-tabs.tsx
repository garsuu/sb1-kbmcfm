"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ScrollText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ClientTabsProps {
  clientId: string;
}

export function ClientTabs({ clientId }: ClientTabsProps) {
  return (
    <Tabs defaultValue="workflows" className="space-y-4">
      <TabsList>
        <TabsTrigger value="workflows" className="flex items-center gap-2">
          <Bot className="h-4 w-4" />
          AIワークフロー
        </TabsTrigger>
        <TabsTrigger value="documents" className="flex items-center gap-2">
          <ScrollText className="h-4 w-4" />
          ドキュメント
        </TabsTrigger>
        <TabsTrigger value="reports" className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          レポート
        </TabsTrigger>
      </TabsList>

      <TabsContent value="workflows" className="space-y-4">
        <div className="flex justify-end">
          <Link href={`/clients/${clientId}/workflows/new`}>
            <Button>新規ワークフロー</Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/clients/${clientId}/workflows/${i}`}
              className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">請求書処理ワークフロー</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                最終実行: 1時間前
              </p>
            </Link>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="documents" className="space-y-4">
        <div className="flex justify-end">
          <Link href={`/clients/${clientId}/documents/new`}>
            <Button>新規ドキュメント</Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/clients/${clientId}/documents/${i}`}
              className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <ScrollText className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">業務マニュアル</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                更新: 3日前
              </p>
            </Link>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="reports" className="space-y-4">
        <div className="flex justify-end">
          <Link href={`/clients/${clientId}/reports/new`}>
            <Button>レポート作成</Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Link
              key={i}
              href={`/clients/${clientId}/reports/${i}`}
              className="rounded-lg border bg-card p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-medium">月次稼働レポート</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                生成日: 2024/03/31
              </p>
            </Link>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}