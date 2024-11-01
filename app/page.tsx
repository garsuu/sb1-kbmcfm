import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6">
      <h1 className="text-4xl font-bold">BLUE BPaaSへようこそ</h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        AIを活用した業務自動化と効率的なワークフロー管理で、ビジネスプロセスを最適化します。
      </p>
      <Link href="/dashboard">
        <Button size="lg">ダッシュボードへ</Button>
      </Link>
    </div>
  );
}
