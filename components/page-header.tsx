"use client";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between pb-6", className)}>
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      {children && <div className="flex items-center gap-4">{children}</div>}
    </div>
  );
}