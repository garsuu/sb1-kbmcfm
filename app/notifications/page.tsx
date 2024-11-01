"use client";

import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Bot, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    clientId: "1",
    clientName: "株式会社サンプル1",
    workflow: "請求書処理ワークフロー",
    status: "完了",
    timestamp: "10分前",
    message: "100件の請求書の処理が完了しました",
  },
  {
    id: 2,
    clientId: "2",
    clientName: "株式会社サンプル2",
    workflow: "データ抽出ワークフロー",
    status: "エラー",
    timestamp: "1時間前",
    message: "データ形式の不一致が検出されました",
  },
  {
    id: 3,
    clientId: "3",
    clientName: "株式会社サンプル3",
    workflow: "文書分類ワークフロー",
    status: "進行中",
    timestamp: "2時間前",
    message: "500件の文書を処理中です (45% 完了)",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="お知らせ"
        description="AIワークフロー実行状況と通知"
      />

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className={`mt-1 rounded-full p-2 ${
                notification.status === "完了" 
                  ? "bg-green-100 text-green-600"
                  : notification.status === "エラー"
                  ? "bg-red-100 text-red-600"
                  : "bg-blue-100 text-blue-600"
              }`}>
                <Bell className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{notification.clientName}</span>
                    <Badge variant={
                      notification.status === "完了" 
                        ? "success"
                        : notification.status === "エラー"
                        ? "destructive"
                        : "default"
                    }>
                      {notification.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {notification.timestamp}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{notification.workflow}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {notification.message}
                </p>
                <div className="flex justify-end">
                  <Link href={`/clients/${notification.clientId}`}>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      詳細を確認
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}