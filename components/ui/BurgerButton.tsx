"use client";

import { useEffect, useState } from "react";
import { useMenuStore } from "@/lib/stores/useMenuStore";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function BurgerButton({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  const { isOpen } = useMenuStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed top-18 right-16 z-[70] p-2 rounded-md bg-quaternary hover:bg-quaternary-dark border border-secondary text-secondary transition",
        className
      )}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
    </Button>
  );
}
