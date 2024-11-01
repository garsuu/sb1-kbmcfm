"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  trendIcon: LucideIcon;
}

export function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  trendIcon: TrendIcon,
}: StatsCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <TrendIcon
            className={cn("h-4 w-4", {
              "text-green-500": trend === "up",
              "text-red-500": trend === "down",
            })}
          />
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h2 className="text-3xl font-bold tracking-tight">{value}</h2>
          <p
            className={cn("mt-1 text-sm", {
              "text-green-500": trend === "up",
              "text-red-500": trend === "down",
            })}
          >
            {change} 前月比
          </p>
        </div>
      </div>
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1",
          {
            "bg-green-500": trend === "up",
            "bg-red-500": trend === "down",
          }
        )}
      />
    </Card>
  );
}