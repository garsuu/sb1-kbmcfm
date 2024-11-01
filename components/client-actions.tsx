"use client";

import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function ClientActions() {
  return (
    <Button variant="outline">
      <Settings className="mr-2 h-4 w-4" />
      設定
    </Button>
  );
}