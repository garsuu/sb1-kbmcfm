"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

interface ReportDetailProps {
  client: {
    id: string;
    name: string;
  };
  report: {
    id: string;
    title: string;
    date: string;
    type: string;
  };
}

export function ReportDetail({ client, report }: ReportDetailProps) {
  const handleDownload = () => {
    // Implement download logic
    console.log("Downloading report:", report.id);
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${client.name} - ${report.title}`}
        description="レポート詳細"
      >
        <Button onClick={handleDownload}>
          <Download className="mr-2 h-4 w-4" />
          ダウンロード
        </Button>
      </PageHeader>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{report.title}</h3>
            <p className="text-sm text-muted-foreground">
              生成日: {report.date}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-2">
            <h4 className="font-medium">概要</h4>
            <p className="text-sm text-muted-foreground">
              このレポートには以下の情報が含まれています：
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>処理済みドキュメント数</li>
              <li>平均処理時間</li>
              <li>エラー率と解決時間</li>
              <li>システム稼働率</li>
            </ul>
          </div>

          <div className="grid gap-2">
            <h4 className="font-medium">レポート形式</h4>
            <p className="text-sm text-muted-foreground">
              {report.type} 形式でダウンロード可能
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}