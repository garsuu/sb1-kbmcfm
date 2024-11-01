'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  BarChart,
  Workflow,
  Building2,
  Bell,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarItems = [
  {
    title: 'ダッシュボード',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'お知らせ',
    href: '/notifications',
    icon: Bell,
  },
  {
    title: 'クライアント',
    href: '/clients',
    icon: Building2,
  },
  {
    title: 'テンプレート',
    href: '/templates',
    icon: FileText,
  },
  {
    title: '分析',
    href: '/analytics',
    icon: BarChart,
  },
  {
    title: 'チーム',
    href: '/team',
    icon: Users,
  },
  {
    title: '設定',
    href: '/settings',
    icon: Settings,
  },
];

function NavItem({
  item,
  level = 0,
}: {
  item: (typeof sidebarItems)[0];
  level?: number;
}) {
  const pathname = usePathname();
  const Icon = item.icon;
  const isActive = pathname === item.href;

  return (
    <Link href={item.href}>
      <Button
        variant={isActive ? 'secondary' : 'ghost'}
        className={cn(
          'w-full justify-start gap-2',
          isActive && 'bg-secondary font-medium'
        )}
      >
        <Icon className="h-4 w-4" />
        {item.title}
      </Button>
    </Link>
  );
}

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card">
      <div className="flex h-14 items-center gap-2 border-b px-4">
        <Workflow className="h-6 w-6" />
        <h2 className="font-semibold">BLUE BPaaS</h2>
      </div>
      <nav className="flex-1 space-y-1.5 p-4 overflow-y-auto">
        {sidebarItems.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </nav>
    </div>
  );
}