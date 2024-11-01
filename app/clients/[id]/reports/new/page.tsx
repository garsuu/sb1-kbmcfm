import { PageHeader } from "@/components/page-header";
import { NewReportForm } from "@/components/new-report-form";

// Mock data for static generation
const CLIENTS = [
  { id: "1", name: "株式会社サンプル1" },
  { id: "2", name: "株式会社サンプル2" },
  { id: "3", name: "株式会社サンプル3" },
];

export function generateStaticParams() {
  return CLIENTS.map((client) => ({
    id: client.id,
  }));
}

export default function NewClientReportPage({
  params,
}: {
  params: { id: string };
}) {
  const client = CLIENTS.find((c) => c.id === params.id);

  if (!client) {
    return null;
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${client.name} - 新規レポート作成`}
        description="新しいレポートの作成"
      />
      <NewReportForm client={client} />
    </div>
  );
}