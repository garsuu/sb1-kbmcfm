import { DocumentForm } from "@/components/document-form";

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

export default function NewDocumentPage({
  params,
}: {
  params: { id: string };
}) {
  const client = CLIENTS.find((c) => c.id === params.id);

  if (!client) {
    return null;
  }

  return <DocumentForm client={client} />;
}