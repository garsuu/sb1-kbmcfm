"use client";

import { Building2, Bot, Users, Clock } from "lucide-react";

interface ClientStatsProps {
  client: {
    status: string;
    workflows: number;
    teamMembers: number;
    lastUpdated: string;
  };
}

export function ClientStats({ client }: ClientStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-medium">ステータス</p>
        </div>
        <p className="mt-2 text-2xl font-bold">{client.status}</p>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-medium">AIワークフロー</p>
        </div>
        <p className="mt-2 text-2xl font-bold">{client.workflows}</p>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-medium">担当チーム</p>
        </div>
        <p className="mt-2 text-2xl font-bold">{client.teamMembers}名</p>
      </div>
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-medium">最終更新</p>
        </div>
        <p className="mt-2 text-2xl font-bold">{client.lastUpdated}</p>
      </div>
    </div>
  );
}