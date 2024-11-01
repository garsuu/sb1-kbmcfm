"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Client {
  id: string;
  name: string;
}

interface DocumentFormProps {
  client: Client;
}

export function DocumentForm({ client }: DocumentFormProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => setIsUploading(false), 2000);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${client.name} - 新規ドキュメント`}
        description="ドキュメントの新規作成とアップロード"
      >
        <Link href={`/clients/${client.id}/documents`}>
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            戻る
          </Button>
        </Link>
      </PageHeader>

      <Card className="p-6">
        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">タイトル</Label>
              <Input id="title" placeholder="ドキュメントのタイトル" />
            </div>

            <div>
              <Label htmlFor="description">説明</Label>
              <Textarea
                id="description"
                placeholder="ドキュメントの説明を入力"
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="category">カテゴリー</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="カテゴリーを選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual">業務マニュアル</SelectItem>
                  <SelectItem value="report">レポート</SelectItem>
                  <SelectItem value="contract">契約書</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>ファイル</Label>
              <div className="mt-2">
                <div className="rounded-lg border-2 border-dashed p-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    PDFまたはテキストファイルをドラッグ＆ドロップ
                  </p>
                  <Input
                    type="file"
                    accept=".pdf,.txt,.doc,.docx"
                    className="hidden"
                    id="file-upload"
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
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link href={`/clients/${client.id}/documents`}>
              <Button variant="outline">キャンセル</Button>
            </Link>
            <Button type="submit" disabled={isUploading}>
              保存
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}