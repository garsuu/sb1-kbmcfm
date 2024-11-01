import { WorkflowDetail } from "@/components/workflow-detail";

// Mock data for static generation
const CLIENTS = [
  { id: "1", name: "株式会社サンプル1" },
  { id: "2", name: "株式会社サンプル2" },
  { id: "3", name: "株式会社サンプル3" },
];

const WORKFLOWS = [
  {
    id: "1",
    name: "請求書処理ワークフロー",
    description: "AIによる請求書データの自動抽出と処理",
    version: "2.1",
    status: "アクティブ",
    lastRun: "1時間前",
    processedItems: 1250,
    successRate: 98.5,
    averageProcessingTime: "45秒",
  },
  {
    id: "2",
    name: "データ抽出ワークフロー",
    description: "構造化データの自動抽出プロセス",
    version: "1.5",
    status: "アクティブ",
    lastRun: "2時間前",
    processedItems: 850,
    successRate: 97.8,
    averageProcessingTime: "30秒",
  },
  {
    id: "3",
    name: "文書分類ワークフロー",
    description: "AIによる文書の自動分類と整理",
    version: "1.2",
    status: "アクティブ",
    lastRun: "3時間前",
    processedItems: 2100,
    successRate: 99.1,
    averageProcessingTime: "15秒",
  },
];

export function generateStaticParams() {
  return CLIENTS.flatMap((client) =>
    WORKFLOWS.map((workflow) => ({
      id: client.id,
      workflowId: workflow.id,
    }))
  );
}

export default function WorkflowPage({
  params,
}: {
  params: { id: string; workflowId: string };
}) {
  const workflow = WORKFLOWS.find((w) => w.id === params.workflowId);

  if (!workflow) {
    return null;
  }

  return <WorkflowDetail workflow={workflow} />;
}