"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface HomeButtonProps {
  className?: string;
  label?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"; // reprend tes variants
  size?: "default" | "sm" | "lg" | "icon"; // idem pour les tailles
}

export default function HomeButton({
  className,
  label,
  variant = "default",
  size = "default",
}: HomeButtonProps) {
  return (
    <div className="w-full flex justify-center">
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn("gap-2", className)}
      >
        <Link href="/">
          <Home className="size-5" />
          {label && <span>{label}</span>}
        </Link>
      </Button>
    </div>
  );
}
