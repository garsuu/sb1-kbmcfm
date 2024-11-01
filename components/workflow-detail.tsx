"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Play, History, Settings, BarChart } from "lucide-react";

interface Workflow {
  id: string;
  name: string;
  description: string;
  version: string;
  status: string;
  lastRun: string;
  processedItems: number;
  successRate: number;
  averageProcessingTime: string;
}

interface WorkflowDetailProps {
  workflow: Workflow;
}

export function WorkflowDetail({ workflow }: WorkflowDetailProps) {
  return (
    <div className="space-y-8">
      <PageHeader
        title={workflow.name}
        description={workflow.description}
      >
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            設定
          </Button>
          <Button>
            <Play className="mr-2 h-4 w-4" />
            実行
          </Button>
        </div>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">ステータス</p>
          </div>
          <p className="mt-2 text-2xl font-bold">{workflow.status}</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <History className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">最終実行</p>
          </div>
          <p className="mt-2 text-2xl font-bold">{workflow.lastRun}</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <BarChart className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">成功率</p>
          </div>
          <p className="mt-2 text-2xl font-bold">{workflow.successRate}%</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">処理時間</p>
          </div>
          <p className="mt-2 text-2xl font-bold">{workflow.averageProcessingTime}</p>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">概要</TabsTrigger>
          <TabsTrigger value="history">実行履歴</TabsTrigger>
          <TabsTrigger value="settings">設定</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">ワークフロー詳細</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">バージョン</p>
                  <p className="font-medium">{workflow.version}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">処理済みアイテム</p>
                  <p className="font-medium">{workflow.processedItems.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">実行履歴</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">バッチ処理 #{i}</p>
                    <p className="text-sm text-muted-foreground">
                      {i}時間前
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">100件処理</p>
                    <p className="text-sm text-green-600">成功</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">ワークフロー設定</h3>
            <div className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">自動実行</p>
                  <p className="font-medium">毎日 9:00</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">通知設定</p>
                  <p className="font-medium">エラー発生時のみ</p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}