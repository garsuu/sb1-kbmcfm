import { ReportDetail } from "@/components/report-detail";

// Mock data for static generation
const CLIENTS = [
  { id: "1", name: "株式会社サンプル1" },
  { id: "2", name: "株式会社サンプル2" },
  { id: "3", name: "株式会社サンプル3" },
];

const REPORTS = [
  { id: "1", title: "月次稼働レポート", date: "2024/03/31", type: "PDF" },
  { id: "2", title: "四半期レポート", date: "2024/03/15", type: "PDF" },
  { id: "3", title: "年間サマリー", date: "2024/02/28", type: "PDF" },
];

export function generateStaticParams() {
  return CLIENTS.flatMap((client) =>
    REPORTS.map((report) => ({
      id: client.id,
      reportId: report.id,
    }))
  );
}

export default function ClientReportPage({
  params,
}: {
  params: { id: string; reportId: string };
}) {
  const client = CLIENTS.find((c) => c.id === params.id);
  const report = REPORTS.find((r) => r.id === params.reportId);

  if (!client || !report) {
    return null;
  }

  return <ReportDetail client={client} report={report} />;
}