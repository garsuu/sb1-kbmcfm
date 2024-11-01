"use client";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Building2, Bot, Users } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

// Mock data for static generation - same as in [id]/page.tsx
const CLIENTS = [
  {
    id: "1",
    name: "株式会社サンプル1",
    workflows: 3,
    teamMembers: 4,
    lastUpdated: "2日前",
  },
  {
    id: "2",
    name: "株式会社サンプル2",
    workflows: 2,
    teamMembers: 3,
    lastUpdated: "3日前",
  },
  {
    id: "3",
    name: "株式会社サンプル3",
    workflows: 4,
    teamMembers: 5,
    lastUpdated: "1日前",
  },
];

export default function ClientsPage() {
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([]);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState<string[]>([]);

  const workflows = [
    { id: "1", name: "請求書処理ワークフロー" },
    { id: "2", name: "データ抽出ワークフロー" },
    { id: "3", name: "文書分類ワークフロー" },
  ];

  const teamMembers = [
    { id: "1", name: "山田 太郎" },
    { id: "2", name: "鈴木 花子" },
    { id: "3", name: "佐藤 次郎" },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title="クライアント一覧"
        description="登録されているクライアント企業の一覧"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              新規クライアント
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>新規クライアント登録</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">クライアント名</Label>
                <Input id="name" placeholder="株式会社サンプル" />
              </div>
              <div className="space-y-2">
                <Label>AIワークフロー</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="ワークフローを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {workflows.map((workflow) => (
                      <SelectItem key={workflow.id} value={workflow.id}>
                        {workflow.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>担当チームメンバー</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="メンバーを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamMembers.map((member) => (
                      <SelectItem key={member.id} value={member.id}>
                        {member.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>登録</Button>
            </div>
          </DialogContent>
        </Dialog>
      </PageHeader>

      <div className="grid gap-6 md:grid-cols-3">
        {CLIENTS.map((client) => (
          <Link
            key={client.id}
            href={`/clients/${client.id}`}
            className="group relative rounded-lg border bg-card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-semibold">{client.name}</h3>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2">
                <Bot className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">利用中のワークフロー: {client.workflows}</p>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm">担当チーム: {client.teamMembers}名</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-muted-foreground">最終更新: {client.lastUpdated}</p>
              <p className="font-medium">アクティブ</p>
            </div>
            <div className="absolute inset-0 rounded-lg ring-2 ring-transparent ring-offset-2 group-hover:ring-primary transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}