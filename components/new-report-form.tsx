"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Save } from "lucide-react";
import { useState } from "react";

interface NewReportFormProps {
  client: {
    id: string;
    name: string;
  };
}

export function NewReportForm({ client }: NewReportFormProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      // Implement file upload logic here
      setTimeout(() => setIsUploading(false), 2000);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement form submission logic
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">レポートタイトル</Label>
          <Input id="title" placeholder="月次稼働レポート" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">レポートタイプ</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="レポートタイプを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="monthly">月次レポート</SelectItem>
              <SelectItem value="quarterly">四半期レポート</SelectItem>
              <SelectItem value="annual">年間レポート</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="period">対象期間</Label>
          <Input type="month" id="period" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">説明</Label>
          <Input
            id="description"
            placeholder="レポートの説明を入力してください"
          />
        </div>

        <div className="rounded-lg border-2 border-dashed p-8 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground mb-2">
            追加データをアップロード
          </p>
          <Input
            type="file"
            className="hidden"
            id="file-upload"
            accept=".csv,.xlsx"
            onChange={handleFileUpload}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById("file-upload")?.click()}
            disabled={isUploading}
          >
            {isUploading ? "アップロード中..." : "ファイルを選択"}
          </Button>
        </div>

        <div className="flex justify-end">
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            保存
          </Button>
        </div>
      </form>
    </Card>
  );
}