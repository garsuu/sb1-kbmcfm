import { PageHeader } from "@/components/page-header";
import { ClientTabs } from "@/components/client-tabs";
import { ClientStats } from "@/components/client-stats";
import { ClientActions } from "@/components/client-actions";

// Mock data for static generation
const CLIENTS = [
  {
    id: "1",
    name: "株式会社サンプル1",
    status: "アクティブ",
    workflows: 3,
    teamMembers: 4,
    lastUpdated: "2日前",
  },
  {
    id: "2",
    name: "株式会社サンプル2",
    status: "アクティブ",
    workflows: 2,
    teamMembers: 3,
    lastUpdated: "3日前",
  },
  {
    id: "3",
    name: "株式会社サンプル3",
    status: "アクティブ",
    workflows: 4,
    teamMembers: 5,
    lastUpdated: "1日前",
  },
];

export function generateStaticParams() {
  return CLIENTS.map((client) => ({
    id: client.id,
  }));
}

interface ClientPageProps {
  params: {
    id: string;
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const clientData = CLIENTS.find((client) => client.id === params.id) || CLIENTS[0];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title={clientData.name}
          description="クライアント詳細情報"
        />
        <ClientActions />
      </div>
      <ClientStats client={clientData} />
      <ClientTabs clientId={params.id} />
    </div>
  );
}