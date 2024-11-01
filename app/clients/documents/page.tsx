"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, ScrollText, Upload } from "lucide-react";
import { useState } from "react";

export default function DocumentsPage() {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      // ファイルアップロード処理をここに実装
      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    }
  };

  return (
    <div className="space-y-8">
      <PageHeader
        title="ドキュメント"
        description="クライアントごとのナレッジベース"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              新規ドキュメント
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>ドキュメントのアップロード</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-lg border-2 border-dashed p-8 text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  PDFまたはテキストファイルをドラッグ＆ドロップ
                </p>
                <Input
                  type="file"
                  accept=".pdf,.txt"
                  className="hidden"
                  id="file-upload"
                  onChange={handleFileUpload}
                  multiple
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById("file-upload")?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? "アップロード中..." : "ファイルを選択"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <ScrollText className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">業務マニュアル</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              標準業務プロセスのマニュアル
            </p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-muted-foreground">更新: 3日前</p>
              <p className="font-medium">PDF</p>
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}